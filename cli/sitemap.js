/**
 * sitemap.js
 * Genera un sitemap.xml estándar a partir de las URLs encontradas por el crawler.
 * Listo para subir a Google Search Console.
 */

import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

export function generateSitemap(pages, outputDir) {

  const urls = pages.filter(({ url, meta }) => {
    if (/noindex/i.test(meta?.robots ?? '')) return false;
    if (!meta?.canonical) return true;
    try { return new URL(meta.canonical, url).href === new URL(url).href; } catch { return false; }
  })
    .map(
      ({ url }) => `
  <url>
    <loc>${escXml(url)}</loc>
    <changefreq>monthly</changefreq>
    <priority>${url.split('/').length <= 4 ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  const outFile = join(outputDir, 'sitemap.xml');
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outFile, xml, 'utf-8');
  return outFile;
}

function escXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
