/**
 * auditor.js
 * Corre Lighthouse en URLs usando una sola instancia de Chrome.
 * Lanzar/matar Chrome repetidamente en Windows genera EPERM — esto lo evita.
 */

import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

let chromeInstance = null;

/** Lanza Chrome una sola vez. Llamar antes de los audits. */
export async function launchChrome() {
  chromeInstance = await chromeLauncher.launch({
    chromeFlags: [
      '--headless',
      '--no-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-extensions',
      '--disable-background-networking',
      // UA de bot para que analíticas server-side no registren la visita
      '--user-agent=Mozilla/5.0 (compatible; LighthouseAuditBot/1.0; +bot)',
    ],
  });
  return chromeInstance;
}

/** Cierra Chrome al terminar todos los audits. */
export async function killChrome() {
  if (chromeInstance) {
    await chromeInstance.kill();
    chromeInstance = null;
  }
}

/** Audita una URL usando el Chrome ya lanzado. */
export async function auditPage(url, extraHeaders = {}) {
  if (!chromeInstance) throw new Error('Chrome no está lanzado. Llama launchChrome() primero.');

  const options = {
    logLevel: 'error',
    output: 'json',
    port: chromeInstance.port,
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    extraHeaders,
    // Bloquea scripts de analítica/tracking para que no registren visitas falsas
    blockedUrlPatterns: [
      '*google-analytics.com*',
      '*analytics.google.com*',
      '*googletagmanager.com*',
      '*doubleclick.net*',
      '*googlesyndication.com*',
      '*facebook.com/tr*',
      '*connect.facebook.net*',
      '*fbevents.js*',
      '*hotjar.com*',
      '*clarity.ms*',
      '*bing.com/bat.js*',
      '*snap.licdn.com*',
      '*static.ads-twitter.com*',
      '*sc-static.net/scevent*',
      '*cdn.segment.com*',
      '*cdn.amplitude.com*',
      '*cdn.mxpnl.com*',
    ],
  };

  const runnerResult = await lighthouse(url, options);
  const report = runnerResult.lhr;

  return {
    url,
    fetchTime: report.fetchTime,
    scores: {
      performance: Math.round((report.categories.performance?.score ?? 0) * 100),
      accessibility: Math.round((report.categories.accessibility?.score ?? 0) * 100),
      bestPractices: Math.round((report.categories['best-practices']?.score ?? 0) * 100),
      seo: Math.round((report.categories.seo?.score ?? 0) * 100),
    },
    metrics: {
      fcp: report.audits['first-contentful-paint']?.displayValue ?? 'N/A',
      lcp: report.audits['largest-contentful-paint']?.displayValue ?? 'N/A',
      tbt: report.audits['total-blocking-time']?.displayValue ?? 'N/A',
      cls: report.audits['cumulative-layout-shift']?.displayValue ?? 'N/A',
      si: report.audits['speed-index']?.displayValue ?? 'N/A',
      tti: report.audits['interactive']?.displayValue ?? 'N/A',
    },
    opportunities: Object.values(report.audits)
      .filter((a) => a.details?.type === 'opportunity' && a.score !== null && a.score < 0.9)
      .map((a) => ({
        id: a.id,
        title: a.title,
        description: a.description ?? '',
        score: Math.round((a.score ?? 0) * 100),
        displayValue: a.displayValue ?? '',
        headings: a.details?.headings ?? [],
        items: (a.details?.items ?? []).slice(0, 20),
      }))
      .sort((a, b) => a.score - b.score)
      .slice(0, 10),
    diagnostics: Object.values(report.audits)
      .filter((a) => a.details?.type === 'table' && a.score !== null && a.score < 0.9)
      .map((a) => ({
        id: a.id,
        title: a.title,
        description: a.description ?? '',
        score: Math.round((a.score ?? 0) * 100),
        displayValue: a.displayValue ?? '',
        headings: a.details?.headings ?? [],
        items: (a.details?.items ?? []).slice(0, 20),
      }))
      .sort((a, b) => a.score - b.score)
      .slice(0, 10),
  };
}
