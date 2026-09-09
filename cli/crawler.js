/**
 * crawler.js
 * Descubre todas las páginas de un sitio, extrae meta tags SEO
 * y detecta links rotos (404, 500, timeouts).
 */

import { createRequester, discoverSitemaps, normalizeUrl, decodeEntities } from './discovery.js';
import chalk from 'chalk';

// ── REGEX HELPERS ────────────────────────────────────────────────────────────

function extractLinks(html) {
  const links = [];
  const regex = /<a\b[^>]*\bhref\s*=\s*(?:"([^"#][^"]*)"|'([^'#][^']*)'|([^\s>"']+))/gi;
  let match;
  while ((match = regex.exec(html)) !== null) links.push(decodeEntities(match[1] ?? match[2] ?? match[3]));
  return links;
}

function getMeta(html, name) {
  const r = new RegExp(
    `<meta[^>]+(?:name|property)=["']${name}["'][^>]+content=["']([^"']*)["']` +
      `|<meta[^>]+content=["']([^"']*)["'][^>]+(?:name|property)=["']${name}["']`,
    'i'
  );
  const m = r.exec(html);
  return m && (m[1] || m[2]) ? (m[1] || m[2]).trim() : '';
}

function getTitle(html) {
  const m = /<title[^>]*>([^<]*)<\/title>/i.exec(html);
  return m ? m[1].trim() : '';
}

function getH1(html) {
  const m = /<h1[^>]*>([\s\S]*?)<\/h1>/i.exec(html);
  if (!m) return '';
  return m[1].replace(/<[^>]+>/g, '').trim(); // quitar tags internos
}

function getH2s(html) {
  const results = [];
  const r = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
  let m;
  while ((m = r.exec(html)) !== null) {
    const text = m[1].replace(/<[^>]+>/g, '').trim();
    if (text) results.push(text);
  }
  return results.slice(0, 8);
}

function getCanonical(html) {
  const m =
    /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i.exec(html) ||
    /<link[^>]+href=["']([^"']*)["'][^>]+rel=["']canonical["']/i.exec(html);
  return m ? m[1].trim() : '';
}

function getRobots(html) {
  return getMeta(html, 'robots');
}

function estimateWordCount(html) {
  // Quitar scripts, styles y tags HTML
  const clean = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return clean.split(' ').filter((w) => w.length > 1).length;
}

// ── CRAWL PRINCIPAL ──────────────────────────────────────────────────────────

export async function crawlSite(baseUrl, maxPages = 500, onProgress, onStep, options = {}) {
  if (maxPages !== Infinity && (!Number.isSafeInteger(maxPages) || maxPages < 1)) {
    throw new Error('El máximo de páginas debe ser un entero positivo.');
  }
  const start = normalizeUrl(baseUrl);
  const request = createRequester(options, onStep);
  const first = await request(start);
  const origin = new URL(first.ok ? first.url : start).origin;
  const queue = [];
  const queued = new Set();
  const visited = new Set();
  const pages = [], brokenLinks = [], crawlErrors = [], skipped = [], warnings = [];
  const enqueue = (value, foundOn, base = origin) => {
    try {
      const url = normalizeUrl(value, base);
      if (new URL(url).origin !== origin || queued.has(url)) return;
      queued.add(url);
      queue.push({ url, foundOn });
    } catch { /* Enlace no HTTP o inválido. */ }
  };
  enqueue(first.ok ? first.url : start, null);
  const sitemapUrls = await discoverSitemaps(origin, request, onStep, warnings);
  for (const url of sitemapUrls) enqueue(url, 'sitemap');
  let cursor = 0;
  while (cursor < queue.length && pages.length < maxPages) {
    await onStep?.();
    const { url, foundOn } = queue[cursor++];
    if (visited.has(url)) continue;
    visited.add(url);
    const response = cursor === 1 ? first : await request(url);
    if (!response.ok) {
      const item = { url, foundOn, status: response.status, attempts: response.attempts, error: response.error };
      if ([404, 410].includes(response.status)) brokenLinks.push(item);
      else crawlErrors.push(item);
      continue;
    }
    const cleanUrl = normalizeUrl(response.url);
    if (new URL(cleanUrl).origin !== origin) {
      skipped.push({ url, reason: 'Redirección fuera del sitio', target: cleanUrl });
      continue;
    }
    if (cleanUrl !== url && visited.has(cleanUrl)) continue;
    visited.add(cleanUrl);
    if (!/text\/html|application\/xhtml\+xml/i.test(response.headers.get('content-type') || '')) {
      skipped.push({ url, reason: 'Recurso no HTML' });
      continue;
    }
    const html = response.text;
    const meta = {
      title: getTitle(html), description: getMeta(html, 'description'),
      ogTitle: getMeta(html, 'og:title'), ogDescription: getMeta(html, 'og:description'),
      h1: getH1(html), h2s: getH2s(html), canonical: getCanonical(html),
      robots: getRobots(html), wordCount: estimateWordCount(html),
    };
    meta.issues = detectSeoIssues(meta, cleanUrl);
    pages.push({ url: cleanUrl, meta });
    await onProgress?.(pages.length, cleanUrl);
    let documentBase = cleanUrl;
    const baseTag = /<base\b[^>]*href\s*=\s*["']([^"']+)["']/i.exec(html);
    if (baseTag) try { documentBase = new URL(decodeEntities(baseTag[1]), cleanUrl).href; } catch { /* inválido */ }
    for (const href of extractLinks(html)) enqueue(href, cleanUrl, documentBase);
  }
  const pending = queue.slice(cursor).filter(({ url }) => !visited.has(url));
  const coverage = {
    discovered: queued.size, htmlPages: pages.length, pending: pending.length,
    limitReached: pending.length > 0, sitemapUrls: sitemapUrls.length,
    complete: pending.length === 0 && crawlErrors.length === 0 && warnings.length === 0,
    scope: 'HTML y sitemaps del origen final; no ejecuta JavaScript ni garantiza páginas huérfanas.',
  };
  console.log(chalk.cyan('Páginas HTML: ' + pages.length + ' | Rotas: ' + brokenLinks.length + ' | Sin verificar: ' + crawlErrors.length + ' | Pendientes: ' + pending.length));
  return { pages, brokenLinks, crawlErrors, skipped, warnings, pending, coverage };
}

// ── DETECTOR DE PROBLEMAS SEO ────────────────────────────────────────────────

function detectSeoIssues(meta, url) {
  const issues = [];

  if (!meta.title) issues.push({ type: 'error', msg: 'Sin título (<title> vacío o ausente)' });
  else if (meta.title.length < 30)
    issues.push({
      type: 'warning',
      msg: `Título muy corto (${meta.title.length} chars, mínimo 30)`,
    });
  else if (meta.title.length > 60)
    issues.push({
      type: 'warning',
      msg: `Título muy largo (${meta.title.length} chars, máximo 60)`,
    });

  if (!meta.description) issues.push({ type: 'error', msg: 'Sin meta description' });
  else if (meta.description.length < 70)
    issues.push({
      type: 'warning',
      msg: `Meta description corta (${meta.description.length} chars, mínimo 70)`,
    });
  else if (meta.description.length > 160)
    issues.push({
      type: 'warning',
      msg: `Meta description muy larga (${meta.description.length} chars, máximo 160)`,
    });

  if (!meta.h1) issues.push({ type: 'error', msg: 'Sin H1' });

  if (meta.canonical && (() => { try { return normalizeUrl(meta.canonical, url) !== normalizeUrl(url); } catch { return true; } })())
    issues.push({ type: 'info', msg: `Canonical apunta a URL diferente: ${meta.canonical}` });

  if (meta.robots && (meta.robots.includes('noindex') || meta.robots.includes('nofollow')))
    issues.push({ type: 'warning', msg: `Robots: ${meta.robots}` });

  if (meta.wordCount < 300)
    issues.push({
      type: 'warning',
      msg: `Contenido escaso (~${meta.wordCount} palabras, recomendado 300+)`,
    });

  return issues;
}
