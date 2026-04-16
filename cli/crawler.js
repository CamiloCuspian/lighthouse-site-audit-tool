/**
 * crawler.js
 * Descubre todas las páginas de un sitio, extrae meta tags SEO
 * y detecta links rotos (404, 500, timeouts).
 */

import fetch from 'node-fetch';

// ── REGEX HELPERS ────────────────────────────────────────────────────────────

function extractLinks(html) {
  const links = [];
  const regex = /href=["']([^"'#][^"']*?)["']/gi;
  let match;
  while ((match = regex.exec(html)) !== null) links.push(match[1]);
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

export async function crawlSite(baseUrl, maxPages = 50) {
  const visited = new Set();
  const queue = [{ url: baseUrl, foundOn: null }];
  const pages = []; // { url, meta }
  const brokenLinks = []; // { url, status, foundOn }

  const origin = new URL(baseUrl).origin;

  console.log(`\n🔍 Crawleando ${baseUrl} (máximo ${maxPages} páginas)...\n`);

  while (queue.length > 0 && pages.length < maxPages) {
    const { url: rawUrl, foundOn } = queue.shift();
    const cleanUrl = rawUrl.split('?')[0].split('#')[0].replace(/\/$/, '') || baseUrl;

    if (visited.has(cleanUrl)) continue;
    visited.add(cleanUrl);

    let res;
    try {
      res = await fetch(cleanUrl, {
        headers: { 'User-Agent': 'LighthouseReporter/0.1 (audit bot)' },
        signal: AbortSignal.timeout(10000),
        redirect: 'follow',
      });
    } catch {
      // Timeout u otro error de red → link roto
      if (foundOn) {
        brokenLinks.push({ url: cleanUrl, status: 'Timeout/Error', foundOn });
        console.log(`  💀 [roto] ${cleanUrl} ← ${foundOn}`);
      }
      continue;
    }

    // Link roto (solo registrar si alguien lo enlaza internamente)
    if (!res.ok) {
      if (foundOn) {
        brokenLinks.push({ url: cleanUrl, status: res.status, foundOn });
        console.log(`  💀 [${res.status}] ${cleanUrl} ← ${foundOn}`);
      }
      continue;
    }

    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('text/html')) continue;

    const html = await res.text();

    // ── Extraer meta tags SEO ──────────────────────────────────────────────
    const meta = {
      title: getTitle(html),
      description: getMeta(html, 'description'),
      ogTitle: getMeta(html, 'og:title'),
      ogDescription: getMeta(html, 'og:description'),
      h1: getH1(html),
      h2s: getH2s(html),
      canonical: getCanonical(html),
      robots: getRobots(html),
      wordCount: estimateWordCount(html),
    };

    // Alertas SEO automáticas
    meta.issues = detectSeoIssues(meta, cleanUrl);

    pages.push({ url: cleanUrl, meta });
    console.log(`  ✓ [${pages.length}] ${cleanUrl}`);

    // ── Descubrir más links ────────────────────────────────────────────────
    const hrefs = extractLinks(html);
    for (const href of hrefs) {
      if (
        !href ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:')
      )
        continue;

      try {
        const absolute = new URL(href, cleanUrl).href;
        const linkParsed = new URL(absolute);

        if (linkParsed.origin !== origin) continue;
        if (!['http:', 'https:'].includes(linkParsed.protocol)) continue;

        const normalized = absolute.split('?')[0].split('#')[0].replace(/\/$/, '');
        if (!visited.has(normalized) && !queue.find((q) => q.url === normalized)) {
          queue.push({ url: normalized, foundOn: cleanUrl });
        }
      } catch {
        /* href inválido */
      }
    }
  }

  console.log(`\n📋 Total páginas: ${pages.length} | Links rotos: ${brokenLinks.length}\n`);
  return { pages, brokenLinks };
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

  if (meta.canonical && meta.canonical !== url && !meta.canonical.endsWith('/'))
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
