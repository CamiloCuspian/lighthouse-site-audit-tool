#!/usr/bin/env node
/**
 * audit-worker.js
 * Proceso hijo que audita UN lote de páginas con Lighthouse y luego
 * termina. Lo lanza web/src/lib/audit-runner.js con child_process.fork().
 *
 * Por qué existe (sep-2026): auditorías largas (100+ páginas) hacían
 * crecer la memoria del proceso Node hasta "JavaScript heap out of
 * memory" y tumbaban el servidor web completo para todo el equipo — a
 * mitad de una auditoría de 122 páginas, en la página 58/59.
 *
 * Reiniciar Chrome cada 50 páginas (ver LOTE en audit-runner.js) NO
 * arreglaba esto: ese síntoma es un leak conocido de Lighthouse/CDP en
 * el proceso de Node que LLAMA a lighthouse() repetidamente, no en el
 * proceso de Chrome — así que aunque Chrome se reinicie, la memoria que
 * ya quedó retenida en el proceso Node nunca se libera, y sigue
 * creciendo auditoría tras auditoría dentro del mismo proceso de
 * `astro dev` / `node entry.mjs` que sirve toda la interfaz web.
 *
 * La única forma fiable de recuperar esa memoria es que el sistema
 * operativo se la lleve de vuelta al terminar un proceso — por eso cada
 * lote de páginas corre en su PROPIO proceso de Node (fork), que se
 * cierra al terminar el lote. Si un lote llega a agotar memoria de
 * verdad, revienta y muere ESE worker (y el padre lo detecta y sigue con
 * el siguiente lote) en vez de tumbar el servidor entero.
 */

import { launchChrome, killChrome, auditPage } from './auditor.js';

let chromeActual = null;
let cancelado = false;

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

process.on('message', async (msg) => {
  if (!msg || typeof msg !== 'object') return;

  if (msg.tipo === 'cancelar') {
    cancelado = true;
    // Cerrar Chrome de inmediato corta la página que Lighthouse esté
    // auditando en ese momento, igual que hacía antes vigilarCancelacionDurante.
    if (chromeActual) {
      try {
        await killChrome(chromeActual);
      } catch {
        /* EPERM en Windows al forzar el cierre — no bloquea */
      }
    }
    return;
  }

  if (msg.tipo === 'lote') {
    const pages = Array.isArray(msg.pages) ? msg.pages : [];
    const resultados = [];

    try {
      chromeActual = await launchChrome();

      for (let i = 0; i < pages.length; i++) {
        if (cancelado) break;

        const { url, meta } = pages[i];
        try {
          const resultado = await auditPage(chromeActual, url);
          resultados.push({ ...resultado, meta });
        } catch (err) {
          if (cancelado) break; // Chrome cerrado por cancelación, no un error real de la página
          resultados.push(resultadoVacio(url, meta, err.message));
          // Una conexión CDP rota no debe hacer fallar todas las páginas siguientes.
          await killChrome(chromeActual).catch(() => {});
          chromeActual = null;
          if (i + 1 < pages.length && !cancelado) chromeActual = await launchChrome();
        }

        try {
          process.send({ tipo: 'progreso', indice: i, resultado: resultados.at(-1) });
        } catch {
          /* el padre ya no escucha (por ejemplo, se está cerrando) — ignorar */
        }
      }
    } finally {
      if (chromeActual) {
        try {
          await killChrome(chromeActual);
        } catch {
          /* EPERM en Windows — ignorar */
        }
        chromeActual = null;
      }
    }

    try {
      await new Promise((resolve, reject) => process.send({ tipo: 'fin', resultados, cancelado }, error => error ? reject(error) : resolve()));
    } catch {
      /* nada que hacer si el padre ya no escucha */
    }
    process.exit(0);
  }
});

// Si algo revienta fuera del try/catch normal (por ejemplo, el propio
// "JavaScript heap out of memory" — ese error no es una excepción de JS
// capturable, así que esto es más bien documentación de la intención),
// avisar al padre antes de morir en vez de desaparecer en silencio.
process.on('uncaughtException', (err) => {
  try {
    process.send({ tipo: 'error-fatal', mensaje: err.message });
  } catch {
    /* ignorar */
  }
  process.exit(1);
});
