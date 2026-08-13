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
import { launchChrome, killChrome, auditPage } from '../../../cli/auditor.js';
import { generateReport } from '../../../cli/reporter.js';
import { generateSitemap } from '../../../cli/sitemap.js';
import { leerMeta, appendHistorial, writeEstado } from './projects.js';

const LOTE = 50; // páginas por lote antes de reiniciar Chrome
const enCurso = new Set();

export function auditoriaEnCurso(slug) {
  return enCurso.has(slug);
}

export async function iniciarAuditoria(slug, { maxPaginas = 500 } = {}) {
  if (enCurso.has(slug)) return;
  enCurso.add(slug);

  try {
    const meta = await leerMeta(slug);
    const siteUrl = meta.dominio.endsWith('/') ? meta.dominio.slice(0, -1) : meta.dominio;

    await writeEstado(slug, {
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
    const { pages, brokenLinks } = await crawlSite(siteUrl, maxPaginas, (encontradas, url) => {
      writeEstado(slug, {
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
    });

    if (pages.length === 0) {
      await writeEstado(slug, {
        estado: 'error',
        mensaje: 'No se encontraron páginas. Verifica que el dominio sea correcto y accesible.',
        actualizado: new Date().toISOString(),
      });
      return;
    }

    await writeEstado(slug, {
      estado: 'auditando',
      paginasHechas: 0,
      paginasTotal: pages.length,
      urlActual: pages[0].url,
      mensaje: `Auditando con Lighthouse (0/${pages.length})…`,
      actualizado: new Date().toISOString(),
    });

    await launchChrome();
    const auditResults = [];

    try {
      for (let i = 0; i < pages.length; i++) {
        if (i > 0 && i % LOTE === 0) {
          try {
            await killChrome();
          } catch {
            /* EPERM en Windows al limpiar el perfil temporal — no bloquea, se ignora */
          }
          await launchChrome();
        }

        const { url, meta: pageMeta } = pages[i];

        try {
          const result = await auditPage(url);
          auditResults.push({ ...result, meta: pageMeta });
        } catch (err) {
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

        await writeEstado(slug, {
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
        await killChrome();
      } catch {
        /* EPERM en Windows — ignorar */
      }
    }

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
    await writeEstado(slug, {
      estado: 'error',
      mensaje: err.message,
      actualizado: new Date().toISOString(),
    });
  } finally {
    enCurso.delete(slug);
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
