/**
 * audit-runner.js
 * Orquesta una auditoría completa reutilizando tal cual la lógica que ya
 * existe en cli/ (crawler, auditor, reporter, sitemap) — no se reescribe
 * nada de eso, solo se le pone una interfaz encima.
 *
 * Dos decisiones importantes, a propósito:
 *
 * 1. El bloqueo de scripts de Analytics/GTM/Meta Pixel/etc. vive en
 *    cli/auditor.js (auditPage) y NO se toca aquí — se sigue usando tal
 *    cual, así que las visitas de la auditoría se siguen sin registrar en
 *    Analytics ni Search Console.
 *
 * 2. Chrome se reinicia cada LOTE páginas en vez de una sola vez al final.
 *    Esto es puramente por fiabilidad de los números: la documentación
 *    oficial de Lighthouse dice que reutilizar una sola instancia de Chrome
 *    por encima de ~100 cargas degrada la precisión de las métricas
 *    (queda estado acumulado del navegador). No cambia nada de lo que se
 *    mide por URL — cada página sigue recibiendo su propia corrida
 *    completa de Lighthouse con su propio Core Web Vitals.
 */

import { join } from 'node:path';
import { crawlSite } from '../../../cli/crawler.js';
import { launchChrome, killChrome, auditPage, matarChromeHuerfano } from '../../../cli/auditor.js';
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

const LOTE = 50; // páginas por lote antes de reiniciar Chrome
const enCurso = new Set();

// ─────────────────────────────────────────────────────────────────────────
// Red de seguridad: nunca dejar que el proceso del servidor se caiga por
// completo por un error que nadie capturó explícitamente.
//
// Node, por defecto, TERMINA el proceso entero ante una excepción no
// capturada o una promesa rechazada sin manejar (comportamiento estándar
// desde Node 15). Esto es lo que más probablemente explica el reporte del
// usuario de "en determinado tiempo se para el servidor y finaliza, toca
// volverlo a iniciar": una auditoría de 300-500 páginas corre horas, y
// basta con que Chrome se caiga inesperadamente en UNA sola página (una
// página rara, sin memoria, un timeout profundo dentro de chrome-launcher
// o del protocolo de depuración de Chrome) para que ese error escape de
// los try/catch normales y tumbe TODO el servidor — no solo esa
// auditoría, sino la interfaz completa para todo el equipo.
//
// Con este manejador, ese mismo error se registra en la consola pero el
// servidor sigue vivo. La auditoría afectada puede quedar en un estado
// raro (por eso también existe estadoEfectivo(), que se autocorrige en el
// siguiente poll), pero ya no hace falta reiniciar todo a mano.
function instalarRedDeSeguridad() {
  if (globalThis.__lhRedDeSeguridadInstalada) return;
  globalThis.__lhRedDeSeguridadInstalada = true;

  process.on('unhandledRejection', (err) => {
    console.error('[servidor] Promesa rechazada sin capturar (el servidor sigue corriendo):', err);
  });
  process.on('uncaughtException', (err) => {
    console.error('[servidor] Excepción no capturada (el servidor sigue corriendo):', err);
  });
}
instalarRedDeSeguridad();

// Última vez que cada auditoría en curso dio señales de vida reales (cada
// escritura de progreso a estado.json). Si el error de arriba ocurre
// FUERA de la cadena de promesas que audita normalmente (por ejemplo, un
// evento tardío del proceso de Chrome que ya no está siendo esperado por
// ningún `await`), el `try/finally` de iniciarAuditoria() nunca llega a
// correr: el proceso sigue vivo gracias a la red de seguridad, pero esa
// auditoría puntual queda fantasma — "auditando" en disco y en `enCurso`
// para siempre, sin que nada la esté avanzando de verdad.
const ultimaActividad = new Map();

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
        )} min — probablemente un error interno la interrumpió sin que nadie la limpiara. Marcando como error.`
      );
      enCurso.delete(slug);
      ultimaActividad.delete(slug);
      matarChromeHuerfano().catch(() => {});
      writeEstado(slug, {
        estado: 'error',
        mensaje:
          'La auditoría se interrumpió por un error interno inesperado y dejó de avanzar. Dale clic en "Auditar ahora" para reintentar.',
        actualizado: new Date().toISOString(),
      }).catch(() => {});
      limpiarCancelacion(slug).catch(() => {});
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
    // Best-effort: si el servidor se reinició a mitad de la auditoría, el
    // Chrome headless que esa corrida había lanzado puede seguir vivo de
    // fondo (huérfano, sin nada que lo controle) — lo intentamos matar
    // aquí para no dejarlo consumiendo CPU/RAM indefinidamente.
    matarChromeHuerfano().catch(() => {});
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

const CANCELADO = Symbol('cancelado');

/**
 * Vigila en segundo plano (cada 800ms) si pidieron cancelar, mientras una
 * página de Lighthouse está corriendo. A propósito NO espera a que esa
 * página termine sola: el chequeo normal (verificarCancelacion) solo
 * corre ENTRE páginas, y una sola página de Lighthouse puede tardar
 * fácilmente 30-90+ segundos (más aún con throttling simulado), así que
 * cancelar podía sentirse "roto" aunque técnicamente funcionara — solo
 * que tardaba lo que le faltara a la página actual. Con esto, apenas se
 * detecta la señal se cierra Chrome de inmediato (aborta la conexión que
 * Lighthouse tiene abierta con el navegador), en vez de esperar.
 */
function vigilarCancelacionDurante(slug) {
  let detenido = false;
  let temporizador = null;

  const promesa = new Promise((resolve) => {
    const revisar = async () => {
      if (detenido) return;
      if (await hayCancelacionPedida(slug)) {
        detenido = true;
        resolve(CANCELADO);
        return;
      }
      if (!detenido) temporizador = setTimeout(revisar, 800);
    };
    temporizador = setTimeout(revisar, 800);
  });

  return {
    promesa,
    detener() {
      detenido = true;
      if (temporizador) clearTimeout(temporizador);
    },
  };
}

export async function iniciarAuditoria(slug, { maxPaginas = 500 } = {}) {
  if (enCurso.has(slug)) return;
  enCurso.add(slug);
  // Por si quedó una señal de una cancelación anterior que no se limpió
  // (por ejemplo, si la auditoría terminó en error antes de llegar a
  // revisarla) — si no se limpia, esta auditoría nueva se cancelaría sola
  // en el primer punto de control.
  await limpiarCancelacion(slug);

  try {
    const meta = await leerMeta(slug);
    const siteUrl = meta.dominio.endsWith('/') ? meta.dominio.slice(0, -1) : meta.dominio;

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
    const { pages, brokenLinks } = await crawlSite(
      siteUrl,
      maxPaginas,
      (encontradas, url) => {
        marcarProgreso(slug, {
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
      () => verificarCancelacion(slug) // crawlSite hace `await onStep?.()`
    );

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

    let chrome = await launchChrome();
    const auditResults = [];

    try {
      for (let i = 0; i < pages.length; i++) {
        // Punto de control entre páginas: nunca corta a media auditoría de
        // Lighthouse, solo antes de arrancar la siguiente página.
        await verificarCancelacion(slug);

        if (i > 0 && i % LOTE === 0) {
          try {
            await killChrome(chrome);
          } catch {
            /* EPERM en Windows al limpiar el perfil temporal — no bloquea, se ignora */
          }
          chrome = await launchChrome();
        }

        const { url, meta: pageMeta } = pages[i];
        const inicio = Date.now();
        console.log(`[auditoria] "${slug}": página ${i + 1}/${pages.length} — empieza Lighthouse en ${url}`);

        const vigilante = vigilarCancelacionDurante(slug);
        const promesaAudit = auditPage(chrome, url);
        // Si perdemos la carrera de abajo (nos cancelan) y por eso matamos
        // Chrome, esta promesa va a terminar rechazando sola más tarde
        // (Lighthouse pierde la conexión) — este catch vacío evita que
        // Node se queje de un "unhandled rejection" por una promesa que
        // decidimos dejar de esperar a propósito.
        promesaAudit.catch(() => {});

        try {
          const resultado = await Promise.race([promesaAudit, vigilante.promesa]);
          vigilante.detener();

          if (resultado === CANCELADO) {
            console.log(
              `[cancelar] "${slug}": señal detectada mientras Lighthouse auditaba ${url} (llevaba ${Math.round((Date.now() - inicio) / 1000)}s) — cerrando Chrome para cortar de inmediato en vez de esperar a que esa página termine.`
            );
            try {
              await killChrome(chrome);
            } catch {
              /* EPERM esperado en Windows al forzar el cierre — no bloquea */
            }
            await limpiarCancelacion(slug);
            throw new AuditoriaCancelada();
          }

          console.log(`[auditoria] "${slug}": página ${i + 1}/${pages.length} terminada en ${Math.round((Date.now() - inicio) / 1000)}s.`);
          auditResults.push({ ...resultado, meta: pageMeta });
        } catch (err) {
          vigilante.detener();
          if (err instanceof AuditoriaCancelada) throw err;

          // auditPage() puede rechazar porque Chrome se cerró a la fuerza
          // (por nuestra propia cancelación, justo cuando perdimos la
          // carrera de arriba por un pelo) o por un error real de esa
          // página. Si de verdad hay una cancelación pedida, es lo
          // primero — no lo tratamos como "página con error".
          if (await hayCancelacionPedida(slug)) {
            await limpiarCancelacion(slug);
            console.log(`[cancelar] "${slug}": Chrome se cerró por la cancelación mientras auditaba ${url}.`);
            throw new AuditoriaCancelada();
          }

          console.log(`[auditoria] "${slug}": página ${i + 1}/${pages.length} falló tras ${Math.round((Date.now() - inicio) / 1000)}s — ${err.message}`);
          auditResults.push({
            url,
            meta: pageMeta,
            scores: { performance: 0, accessibility: 0, bestPractices: 0, seo: 0 },
            metrics: {},
            opportunities: [],
            diagnostics: [],
            error: err.message,
          });
        }

        await marcarProgreso(slug, {
          estado: 'auditando',
          paginasHechas: i + 1,
          paginasTotal: pages.length,
          urlActual: url,
          mensaje: `Auditando con Lighthouse (${i + 1}/${pages.length})…`,
          actualizado: new Date().toISOString(),
        });
      }
    } finally {
      try {
        await killChrome(chrome);
      } catch {
        /* EPERM en Windows — ignorar */
      }
    }

    // Último punto de control: si cancelaron mientras se auditaba la
    // ÚLTIMA página, el loop de arriba ya no vuelve a pasar por su propio
    // chequeo (no hay siguiente iteración) y seguiría de largo generando
    // el reporte como si nada. Este chequeo extra evita ese caso.
    await verificarCancelacion(slug);

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const carpetaRelativa = `${slug}/${timestamp}`;
    const outputDir = join(process.cwd(), '..', 'reports', carpetaRelativa);

    generateSitemap(pages, outputDir);
    generateReport(auditResults, brokenLinks, outputDir, new URL(siteUrl).hostname);

    const promedios = calcularPromedios(auditResults);
    const problemasSEO = auditResults.reduce((n, r) => n + (r.meta?.issues?.length ?? 0), 0);

    await appendHistorial(slug, {
      fecha: new Date().toISOString(),
      paginasAuditadas: auditResults.length,
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
      mensaje: 'Auditoría completada.',
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
  const n = results.length || 1;
  const suma = (clave) => results.reduce((s, r) => s + (r.scores?.[clave] ?? 0), 0);
  return {
    performance: Math.round(suma('performance') / n),
    accessibility: Math.round(suma('accessibility') / n),
    bestPractices: Math.round(suma('bestPractices') / n),
    seo: Math.round(suma('seo') / n),
  };
}
