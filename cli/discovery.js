import { Buffer } from 'node:buffer';
import fetch from 'node-fetch';
import { setTimeout as sleep } from 'node:timers/promises';
import { gunzipSync } from 'node:zlib';

export function decodeEntities(text) {
  return text.replace(/&(?:amp|quot|apos|lt|gt|#\d+|#x[\da-f]+);/gi, (entity) => {
    const named = { '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>' };
    if (named[entity.toLowerCase()]) return named[entity.toLowerCase()];
    const value = entity.slice(2, -1);
    const code = value[0].toLowerCase() === 'x' ? parseInt(value.slice(1), 16) : Number(value);
    return code <= 0x10ffff ? String.fromCodePoint(code) : entity;
  });
}

export function normalizeUrl(value, base) {
  const url = new URL(decodeEntities(value), base);
  if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Solo se admiten URLs HTTP(S).');
  url.hash = '';
  // Los parámetros funcionales y las barras finales pueden identificar páginas distintas.
  for (const key of [...url.searchParams.keys()]) {
    if (/^(utm_.+|gclid|fbclid)$/i.test(key)) url.searchParams.delete(key);
  }
  return url.href;
}

export function createRequester({ extraHeaders = {}, delayMs = 500, retries = 3, timeoutMs = 15000, maxRetryWaitMs = 60000 } = {}, onStep) {
  let nextRequest = 0;
  const wait = async (ms) => {
    const end = Date.now() + ms;
    do {
      await onStep?.();
      if (end > Date.now()) await sleep(Math.min(250, end - Date.now()));
    } while (Date.now() < end);
  };
  return async (url) => {
    for (let attempt = 0; ; attempt++) {
      await wait(Math.max(0, nextRequest - Date.now()));
      let result;
      try {
        const res = await fetch(url, {
          headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LighthouseAuditBot/1.0; +bot)', ...extraHeaders },
          signal: AbortSignal.timeout(timeoutMs), size: 20 * 1024 * 1024,
        });
        const buffer = Buffer.from(await res.arrayBuffer());
        const text = (buffer[0] === 0x1f && buffer[1] === 0x8b ? gunzipSync(buffer, { maxOutputLength: 20 * 1024 * 1024 }) : buffer).toString('utf8');
        result = { ok: res.ok, status: res.status, url: res.url, headers: res.headers, text, attempts: attempt + 1 };
      } catch (error) {
        result = { ok: false, status: 'NetworkError', url, error: error.message, attempts: attempt + 1 };
      }
      nextRequest = Date.now() + delayMs;
      const transient = result.status === 'NetworkError' || [429, 500, 502, 503, 504].includes(result.status);
      if (!transient || attempt >= retries) return result;
      const retryAfter = result.headers?.get('retry-after');
      const retryMs = retryAfter == null ? 0 : /^\d+$/.test(retryAfter) ? Number(retryAfter) * 1000 : Math.max(0, Date.parse(retryAfter) - Date.now()) || 0;
      // Si el servidor pide esperar más que el presupuesto, se informa como pendiente.
      if (retryMs > maxRetryWaitMs) return result;
      await wait(Math.max(retryMs, Math.min(maxRetryWaitMs, 1000 * 2 ** attempt)));
    }
  };
}

export async function discoverSitemaps(origin, request, onStep, warnings) {
  const robots = await request(new URL('/robots.txt', origin).href);
  const queue = [new URL('/sitemap.xml', origin).href];
  if (robots.ok) for (const match of robots.text.matchAll(/^\s*Sitemap:\s*(\S+)/gim)) queue.push(match[1]);
  const seen = new Set();
  const pages = new Set();
  for (let i = 0; i < queue.length; i++) {
    await onStep?.();
    let url;
    try { url = normalizeUrl(queue[i], origin); } catch { continue; }
    if (new URL(url).origin !== origin || seen.has(url)) continue;
    if (seen.size >= 200) { warnings.push({ url, reason: 'Límite de 200 sitemaps alcanzado' }); break; }
    seen.add(url);
    const response = await request(url);
    if (!response.ok) {
      if (response.status !== 404) warnings.push({ url, status: response.status, reason: 'No se pudo leer el sitemap' });
      continue;
    }
    const isIndex = /<(?:\w+:)?sitemapindex\b/i.test(response.text);
    const entry = isIndex ? 'sitemap' : 'url';
    const pattern = new RegExp(`<(?:\\w+:)?${entry}\\b[^>]*>([\\s\\S]*?)<\\/(?:\\w+:)?${entry}\\s*>`, 'gi');
    for (const match of response.text.matchAll(pattern)) {
      const loc = /<(?:\w+:)?loc\b[^>]*>\s*(?:<!\[CDATA\[([\s\S]*?)\]\]>|([^<]*))\s*<\/(?:\w+:)?loc\s*>/i.exec(match[1]);
      if (!loc) continue;
      try {
        const target = normalizeUrl((loc[1] ?? loc[2]).trim(), response.url);
        if (new URL(target).origin !== origin) continue;
        if (isIndex) queue.push(target); else pages.add(target);
      } catch { /* Una entrada inválida no descarta el resto. */ }
    }
  }
  return [...pages];
}
