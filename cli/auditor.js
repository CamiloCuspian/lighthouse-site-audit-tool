/**
 * auditor.js
 * Corre Lighthouse en URLs usando una instancia de Chrome.
 * Lanzar/matar Chrome repetidamente en Windows genera EPERM — esto lo evita
 * (se reutiliza la misma instancia entre páginas, ver audit-runner.js).
 *
 * IMPORTANTE (corregido ago-2026): antes `chromeInstance` era una variable
 * global de este módulo, compartida por TODO el proceso. Eso era seguro
 * para el CLI (una sola auditoría a la vez), pero la interfaz web puede
 * recibir dos auditorías de proyectos distintos corriendo al mismo tiempo
 * (dos personas del equipo, o un mismo usuario auditando dos clientes) —
 * y la segunda auditoría que llamaba a launchChrome() pisaba la variable
 * global, dejando a la primera auditoría apuntando a un Chrome que ya no
 * existía. Eso causaba exactamente los síntomas reportados: la auditoría
 * se queda pegada en "Iniciando/Auditando" sin avanzar, cancelarla no
 * hace nada (mata el Chrome equivocado), y quedan procesos de Chrome
 * huérfanos consumiendo CPU/RAM (de ahí la lentitud general del equipo).
 * Ahora cada auditoría recibe y pasa su propia instancia de Chrome
 * explícitamente — nada se comparte entre auditorías concurrentes.
 */

import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

// Marca única en la línea de comandos de todo Chrome que lanza esta
// herramienta (vía el user-agent). Sirve para distinguir un Chrome
// huérfano de ESTA herramienta de cualquier otro Chrome del usuario.
const HUELLA = 'LighthouseAuditBot';

/** Lanza una instancia de Chrome nueva. Llamar antes de los audits. */
export async function launchChrome() {
  const chrome = await chromeLauncher.launch({
    chromeFlags: [
      '--headless',
      '--no-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-extensions',
      '--disable-background-networking',
      // UA de bot para que analíticas server-side no registren la visita
      // (y para poder identificar este Chrome específico más abajo)
      `--user-agent=Mozilla/5.0 (compatible; ${HUELLA}/1.0; +bot)`,
    ],
  });
  return chrome;
}

/** Cierra una instancia de Chrome. Recibe la instancia devuelta por launchChrome(). */
export async function killChrome(chrome) {
  if (chrome) {
    await chrome.kill();
  }
}

/**
 * Best-effort: mata cualquier Chrome headless huérfano de esta
 * herramienta que haya quedado vivo de una corrida anterior que el
 * servidor perdió de vista (por ejemplo, un reinicio a mitad de una
 * auditoría, o el bug de la instancia global descrito arriba en
 * versiones previas). Se identifica por la huella única en su
 * user-agent, así que nunca toca una ventana normal de Chrome del
 * usuario. Si falla o no hay nada que matar, no pasa nada — nunca lanza.
 */
export async function matarChromeHuerfano() {
  try {
    if (process.platform === 'win32') {
      await execAsync(
        `powershell -NoProfile -NonInteractive -Command "Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -like '*${HUELLA}*' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }"`,
        { timeout: 8000 }
      );
    } else {
      await execAsync(`pkill -f "${HUELLA}"`, { timeout: 8000 });
    }
  } catch {
    /* sin permisos, comando no disponible, o nada que matar: se ignora */
  }
}

/** Audita una URL usando la instancia de Chrome dada. */
export async function auditPage(chrome, url, extraHeaders = {}) {
  if (!chrome) throw new Error('Chrome no está lanzado. Llama launchChrome() primero.');

  const options = {
    logLevel: 'error',
    output: 'json',
    port: chrome.port,
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
