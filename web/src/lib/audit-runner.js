/**
 * audit-runner.js
 * Orquesta una auditoría completa reutilizando tal cual la lógica que ya
 * existe en cli/ (crawler, auditor, reporter, sitemap) — no se reescribe
 * nada de eso, solo se le pone una interfaz encima.
 *
 * Decisiones importantes, a propósito:
 *
 * 1. El bloqueo de scripts de Analytics/GTM/Meta Pixel/etc. vive en
 *    cli/auditor.js (auditPage) y NO se toca aquí — se sigue usando tal
 *    cual, así que las visitas de la auditoría se siguen sin registrar en
 *    Analytics ni Search Console.
 *
 * 2. Cada lote de LOTE páginas se audita en un PROCESO HIJO aparte
 *    (cli/audit-worker.js, vía child_process.fork), no dentro de este
 *    mismo proceso del servidor web. Antes (hasta sep-2026) el loop de
 *    Lighthouse corría aquí mismo, reutilizando Chrome pero dentro del
 *    proceso de `astro dev`/`node entry.mjs` — y auditorías de 100+
 *    páginas terminaban tumbando el servidor entero con "JavaScript heap
 *    out of memory" (visto en una auditoría real que murió en la página
 *    58/122). Reiniciar Chrome cada LOTE páginas ya se hacía por
 *    fiabilidad de las métricas (ver punto 3) pero NO arreglaba el
 *    crash: el leak de memoria es del proceso de Node que llama a
 *    lighthouse() repetidamente (bug conocido de Lighthouse/CDP), no del
 *    proceso de Chrome — así que aunque Chrome se reinicie, la memoria ya
 *    retenida en el proceso de Node nunca se liberaba, y auditoría tras
 *    auditoría se iba acumulando en el mismo proceso que sirve la
 *    interfaz a todo el equipo. La única forma fiable de recuperar esa
 *    memoria es que el sistema operativo se la lleve al terminar un
 *    proceso — de ahí el fork por lote. Efecto adicional: si un lote
 *    agota memoria de verdad, revienta y muere SOLO ese proceso hijo (el
 *    padre lo detecta en 'exit' y sigue con el siguiente lote marcando
 *    esas páginas como fallidas), en vez de tumbar el servidor completo
 *    para todos.
 *
 * 3. Dentro de cada lote se reutiliza una sola instancia de Chrome (la
 *    lanza el propio worker). Esto es puramente por fiabilidad de los
 *    números: la documentación oficial de Lighthouse dice que reutilizar
 *    una sola instancia de Chrome por encima de ~100 cargas degrada la
 *    precisión de las métricas (queda estado acumulado del navegador).
 *    No cambia nada de lo que se mide por URL — cada página sigue
 *    recibiendo su propia corrida completa de Lighthouse con su propio
 *    Core Web Vitals.
 */

import { join } from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';
import { PROJECT_ROOT } from '../../../cli/paths.js';
import { fork } from 'node:child_process';
import { crawlSite } from '../../../cli/crawler.js';
import { generateReport } from '../../../cli/reporter.js';
import { generateSitemap } from '../../../cli/sitemap.js';
import {
  leerMeta,
  appendHistorial,
  writeEstado,
  leerEstado,
  pedirCancelacion,
  hayCancelacionPedida,
  limpiarCancelacion,
} from './projects.js';

const AUDIT_WORKER_PATH = join(PROJECT_ROOT, 'cli/audit-worker.js');

const LOTE = 50; // páginas por lote — cada lote corre en su propio proceso hijo (ver comentario arriba)
const enCurso = globalThis.__lhEnCurso ??= new Set();

const ultimaActividad = globalThis.__lhUltimaActividad ??= new Map();

/** Envuelve writeEstado(slug, ...) marcando también la señal de vida. */
async function marcarProgreso(slug, estado) {
  ultimaActividad.set(slug, Date.now());
  return writeEstado(slug, estado);
}

const SIN_ACTIVIDAD_MAX_MS = 8 * 60 * 1000; // 8 min sin ninguna escritura de progreso = zombi

/**
 * Vigilante en segundo plano: cada 30s revisa si alguna auditoría que
 * `enCurso` cree que sigue viva lleva demasiado tiempo sin dar señales de
 * vida reales, y si es así, la da por muerta — libera `enCurso`, intenta
 * matar cualquier Chrome huérfano asociado, y dejar estado.json en
 * "error" para que la interfaz ofrezca reintentar en vez de quedarse
 * pegada mostrando progreso que ya no existe.
 */
function iniciarVigilante() {
  if (globalThis.__lhVigilanteInstalado) return;
  globalThis.__lhVigilanteInstalado = true;

  setInterval(() => {
    const ahora = Date.now();
    for (const slug of enCurso) {
      const ultima = ultimaActividad.get(slug) ?? ahora;
      if (ahora - ultima <= SIN_ACTIVIDAD_MAX_MS) continue;

      console.log(
        `[vigilante] "${slug}": sin señales de vida hace más de ${Math.round(
          SIN_ACTIVIDAD_MAX_MS / 60000
        )} min — probablemente un error interno la interrumpió sin que nadie la limpiara. Solicitando cancelación.`
      );
      // Mantener el bloqueo hasta que el trabajo confirme su cierre.
      ultimaActividad.set(slug, ahora);
      pedirCancelacion(slug).catch(err => console.error('[vigilante]', err));
    }
  }, 30000).unref();
}
iniciarVigilante();

/** Señal interna para cortar una auditoría en curso de forma limpia. */
class AuditoriaCancelada extends Error {}

export function auditoriaEnCurso(slug) {
  return enCurso.has(slug);
}

/**
 * Lee estado.json pero corrige un caso concreto: si dice "crawleando" o
 * "auditando" pero NINGÚN proceso de este servidor tiene realmente esa
 * auditoría corriendo (`enCurso`), es un estado fantasma — casi siempre
 * porque el servidor de desarrollo se reinició (Ctrl+C) a mitad de una
 * auditoría, y el proceso viejo murió sin llegar a escribir su estado
 * final ("listo"/"error"/"cancelado"). Sin esta corrección, la interfaz
 * se queda mostrando "auditando…" para siempre, y "Cancelar auditoría" no
 * tiene ninguna auditoría real con la que hablar — el clic no hace nada
 * porque, literalmente, no hay nada corriendo que cancelar.
 *
 * Se usa tanto para responder /api/estado (así la interfaz se autocorrige
 * sola en el siguiente poll) como dentro de cancelarAuditoria.
 */
export async function estadoEfectivo(slug) {
  const estado = await leerEstado(slug);
  if ((estado.estado === 'crawleando' || estado.estado === 'auditando') && !enCurso.has(slug)) {
    console.log(
      `[auditoria] "${slug}": estado.json dice "${estado.estado}" pero no hay ninguna auditoría corriendo en este proceso — seguramente el servidor se reinició a mitad de la auditoría anterior. Corrigiendo a "interrumpido".`
    );
    const corregido = {
      estado: 'interrumpido',
      mensaje:
        'Esta auditoría se quedó a medias (probablemente el servidor se reinició o se cerró mientras corría). Dale clic a "Auditar ahora" para lanzarla de nuevo.',
      actualizado: new Date().toISOString(),
    };
    await writeEstado(slug, corregido);
    await limpiarCancelacion(slug).catch(() => {});
    return corregido;
  }
  return estado;
}

/**
 * Pide cancelar una auditoría en curso: escribe la señal en disco (ver
 * pedirCancelacion en projects.js — a propósito NO es una variable en
 * memoria, para que funcione sin importar qué instancia del módulo la
 * escribió o la está leyendo). Se detiene en el próximo punto de control
 * (entre páginas del crawl o entre páginas de Lighthouse), nunca a la
 * fuerza a mitad de una carga de Lighthouse, para no dejar Chrome en un
 * estado raro ni corromper el reporte parcial.
 * Devuelve false si, en realidad, esa auditoría no está corriendo ahora
 * mismo (nada que cancelar) — incluyendo el caso de un estado fantasma
 * (ver estadoEfectivo), que de paso corrige.
 */
export async function cancelarAuditoria(slug) {
  const estado = await estadoEfectivo(slug);
  if (estado.estado !== 'crawleando' && estado.estado !== 'auditando') {
    console.log(`[cancelar] "${slug}": no hay auditoría en curso (estado actual: "${estado.estado}"). No se hace nada.`);
    return false;
  }
  await pedirCancelacion(slug);
  console.log(`[cancelar] "${slug}": señal de cancelación escrita en disco. Se aplicará en el próximo punto de control.`);
  return true;
}

async function verificarCancelacion(slug) {
  if (await hayCancelacionPedida(slug)) {
    console.log(`[cancelar] "${slug}": señal de cancelación detectada, deteniendo la auditoría.`);
    await limpiarCancelacion(slug);
    throw new AuditoriaCancelada();
  }
}

function resultadoVacio(url, meta, mensajeError) {
  return {
    url,
    meta,
    scores: { performance: 0, accessibility: 0, bestPractices: 0, seo: 0 },
    metrics: {},
    opportunities: [],
    diagnostics: [],
    error: mensajeError,
  };
}

/**
 * Audita un lote de páginas en un proceso hijo (cli/audit-worker.js) y
 * resuelve cuando ese lote termina, se cancela, o el worker muere
 * inesperadamente (por ejemplo, por quedarse sin memoria).
 *
 * Nunca rechaza: un worker que revienta es un lote fallido, no un error
 * que deba tumbar toda la auditoría — sus páginas quedan marcadas con
 * error y la auditoría sigue con el siguiente lote.
 */
export function ejecutarLoteEnWorker(slug, lotePages, offsetGlobal, totalPaginas, workerPath = AUDIT_WORKER_PATH) {
  return new Promise((resolve) => {
    const child = fork(workerPath, [], { stdio: ['ignore', 'inherit', 'inherit', 'ipc'], execArgv: [] });

    const parciales = new Map();
    let ultimoMensaje = Date.now();
    let terminado = false;
    let vigilanciaTimer = null;
    let cancelacionEnviada = false;
    let progresoPendiente = Promise.resolve();

    const terminar = (resultado) => {
      if (terminado) return;
      terminado = true;
      if (vigilanciaTimer) clearInterval(vigilanciaTimer);
      progresoPendiente.finally(() => resolve(resultado));
    };

    child.on('message', (msg) => {
      if (!msg || typeof msg !== 'object') return;

      ultimoMensaje = Date.now();
      if (msg.tipo === 'progreso') {
        if (msg.resultado) parciales.set(msg.indice, msg.resultado);
        const i = offsetGlobal + msg.indice;
        progresoPendiente = progresoPendiente.then(() => marcarProgreso(slug, {
          estado: 'auditando',
          paginasHechas: i + 1,
          paginasTotal: totalPaginas,
          urlActual: lotePages[msg.indice]?.url ?? '',
          mensaje: `Auditando con Lighthouse (${i + 1}/${totalPaginas})…`,
          actualizado: new Date().toISOString(),
        })).catch(() => {
          /* si falla una escritura de progreso no se detiene la auditoría por eso */
        });
      } else if (msg.tipo === 'fin') {
        terminar({ resultados: msg.resultados ?? [], cancelado: !!msg.cancelado });
      } else if (msg.tipo === 'error-fatal') {
        console.error(`[auditoria] "${slug}": el proceso de auditoría avisó un error fatal antes de morir — ${msg.mensaje}`);
      }
    });

    child.on('error', (error) => {
      terminar({ resultados: lotePages.map(({ url, meta }, index) => parciales.get(index) ?? resultadoVacio(url, meta, error.message)), cancelado: cancelacionEnviada });
    });

    child.on('exit', (code) => {
      if (terminado) return;
      // El worker murió sin llegar a mandar "fin" — probablemente se
      // quedó sin memoria a media auditoría de este lote (exactamente el
      // caso que este diseño existe para contener). Se marcan como
      // fallidas solo las páginas de ESTE lote y la auditoría general
      // continúa con el siguiente lote, en vez de tumbar todo el
      // servidor como pasaba antes.
      console.error(
        `[auditoria] "${slug}": el proceso de auditoría terminó inesperadamente (código ${code}) — probablemente sin memoria. Se marcan sus páginas como fallidas y se continúa con el siguiente lote.`
      );

      terminar({
        resultados: lotePages.map(({ url, meta }, index) =>
          parciales.get(index) ?? resultadoVacio(
            url,
            meta,
            `El proceso de auditoría se interrumpió inesperadamente (código ${code}), probablemente por falta de memoria.`
          )
        ),
        cancelado: cancelacionEnviada,
      });
    });

    // Mientras el lote corre, vigila si pidieron cancelar la auditoría.
    // Antes esto se revisaba entre cada página dentro del mismo proceso;
    // ahora el punto de control vive aquí y la señal se reenvía al
    // worker, que cierra su Chrome de inmediato (corta la página que
    // esté auditando en ese momento, en vez de esperar a que termine).
    vigilanciaTimer = setInterval(async () => {
      if (terminado || cancelacionEnviada) return;
      if (Date.now() - ultimoMensaje > 4 * 60 * 1000) { child.kill(); return; }
      if (await hayCancelacionPedida(slug)) {
        cancelacionEnviada = true;
        try {
          child.send({ tipo: 'cancelar' }, () => {});
        } catch {
          /* el canal ya se cerró — el 'exit' handler de abajo se encarga */
        }
        // Red de seguridad: si el worker no confirma "fin" en 5s tras
        // pedirle cancelar, se fuerza su cierre.
        setTimeout(() => {
          if (!terminado) child.kill();
        }, 5000);
      }
    }, 800);

    child.send({ tipo: 'lote', pages: lotePages.map(({ url, meta }) => ({ url, meta })) }, () => {});
  });
}

export async function iniciarAuditoria(slug, { maxPaginas = 500 } = {}) {
  if (enCurso.has(slug)) return;
  enCurso.add(slug);
  // Por si quedó una señal de una cancelación anterior que no se limpió
  // (por ejemplo, si la auditoría terminó en error antes de llegar a
  // revisarla) — si no se limpia, esta auditoría nueva se cancelaría sola
  // en el primer punto de control.
  try {
    await limpiarCancelacion(slug);
    const meta = await leerMeta(slug);
    const siteUrl = meta.dominio;

    await marcarProgreso(slug, {
      estado: 'crawleando',
      paginasHechas: 0,
      paginasTotal: 0,
      paginasEncontradas: 0,
      urlActual: siteUrl,
      mensaje: 'Descubriendo páginas del sitio…',
      actualizado: new Date().toISOString(),
    });

    // Durante el crawl (antes de que arranque Lighthouse) también se
    // reporta progreso — si no, la pantalla se queda con el mismo mensaje
    // estático varios minutos en sitios grandes y parece congelada.
    //
    // El punto de control de cancelación va en onStep (4º argumento), NO
    // en onProgress: onProgress solo se llama cuando el crawler encuentra
    // una página HTML válida, así que en un sitio con muchos links rotos,
    // redirects o URLs ya visitadas entre una página válida y la
    // siguiente, cancelar podía tardar mucho en surtir efecto (o no
    // notarse nunca si el crawl terminaba antes). onStep se llama en CADA
    // vuelta del loop del crawler, sin excepción.
    const discovery = await crawlSite(
      siteUrl,
      maxPaginas,
      (encontradas, url) => {
        return marcarProgreso(slug, {
          estado: 'crawleando',
          paginasHechas: 0,
          paginasTotal: 0,
          paginasEncontradas: encontradas,
          urlActual: url,
          mensaje: `Descubriendo páginas del sitio… (${encontradas} encontradas hasta ahora)`,
          actualizado: new Date().toISOString(),
        }).catch(() => {
          /* si falla una escritura de progreso no se detiene el crawl por eso */
        });
      },
      async () => { ultimaActividad.set(slug, Date.now()); await verificarCancelacion(slug); }
    );

    const { pages, brokenLinks } = discovery;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const carpetaRelativa = slug + '/' + timestamp;
    const outputDir = join(PROJECT_ROOT, 'reports', carpetaRelativa);
    await mkdir(outputDir, { recursive: true });
    await writeFile(join(outputDir, 'discovery.json'), JSON.stringify(discovery, null, 2));
    if (pages.length === 0) {
      await writeEstado(slug, {
        estado: 'error',
        mensaje: 'No se encontraron páginas. Verifica que el dominio sea correcto y accesible.',
        actualizado: new Date().toISOString(),
      });
      return;
    }

    await marcarProgreso(slug, {
      estado: 'auditando',
      paginasHechas: 0,
      paginasTotal: pages.length,
      urlActual: pages[0].url,
      mensaje: `Auditando con Lighthouse (0/${pages.length})…`,
      actualizado: new Date().toISOString(),
    });

    const auditResults = [];

    for (let inicioLote = 0; inicioLote < pages.length; inicioLote += LOTE) {
      // Punto de control entre lotes: nunca corta a media auditoría de
      // Lighthouse (eso lo maneja ejecutarLoteEnWorker mientras el lote
      // corre), solo antes de arrancar el siguiente lote.
      await verificarCancelacion(slug);

      const lotePages = pages.slice(inicioLote, inicioLote + LOTE);
      console.log(
        `[auditoria] "${slug}": lote ${Math.floor(inicioLote / LOTE) + 1} — páginas ${inicioLote + 1} a ${inicioLote + lotePages.length} de ${pages.length}`
      );

      const { resultados, cancelado } = await ejecutarLoteEnWorker(slug, lotePages, inicioLote, pages.length);
      auditResults.push(...resultados);
      await writeFile(join(outputDir, 'audit-progress.json'), JSON.stringify(auditResults, null, 2));

      if (cancelado) {
        await limpiarCancelacion(slug);
        throw new AuditoriaCancelada();
      }
    }

    // Último punto de control: si cancelaron justo al terminar el último
    // lote (carrera entre el "fin" del worker y la señal de cancelación),
    // este chequeo extra evita generar el reporte como si nada.
    await verificarCancelacion(slug);


    generateSitemap(pages, outputDir);
    generateReport(auditResults, brokenLinks, outputDir, new URL(siteUrl).hostname, null, discovery);

    const promedios = calcularPromedios(auditResults);
    const problemasSEO = auditResults.reduce((n, r) => n + (r.meta?.issues?.length ?? 0), 0);

    await appendHistorial(slug, {
      fecha: new Date().toISOString(),
      paginasAuditadas: auditResults.filter(r => !r.error).length,
      paginasFallidas: auditResults.filter(r => r.error).length,
      cobertura: discovery.coverage,
      promedios,
      linksRotos: brokenLinks.length,
      problemasSEO,
      carpetaReporte: carpetaRelativa,
    });

    await writeEstado(slug, {
      estado: 'listo',
      paginasHechas: pages.length,
      paginasTotal: pages.length,
      urlActual: '',
      mensaje: 'Auditoría finalizada: ' + auditResults.filter(r => !r.error).length + ' mediciones válidas; ' + auditResults.filter(r => r.error).length + ' fallidas; ' + discovery.crawlErrors.length + ' URLs sin verificar; ' + discovery.pending.length + ' pendientes por límite.',
      actualizado: new Date().toISOString(),
    });
  } catch (err) {
    if (err instanceof AuditoriaCancelada) {
      console.log(`[auditoria] "${slug}": cancelada por el usuario.`);
      await writeEstado(slug, {
        estado: 'cancelado',
        mensaje: 'Auditoría cancelada por el usuario.',
        actualizado: new Date().toISOString(),
      });
    } else {
      console.error(`[auditoria] "${slug}": error —`, err);
      await writeEstado(slug, {
        estado: 'error',
        mensaje: err.message,
        actualizado: new Date().toISOString(),
      });
    }
  } finally {
    enCurso.delete(slug);
    ultimaActividad.delete(slug);
    await limpiarCancelacion(slug).catch(() => {
      /* si no había flag que limpiar, no pasa nada */
    });
  }
}

function calcularPromedios(results) {
  results = results.filter(r => !r.error);
  const n = results.length || 1;
  const suma = (clave) => results.reduce((s, r) => s + (r.scores?.[clave] ?? 0), 0);
  return {
    performance: Math.round(suma('performance') / n),
    accessibility: Math.round(suma('accessibility') / n),
    bestPractices: Math.round(suma('bestPractices') / n),
    seo: Math.round(suma('seo') / n),
  };
}
