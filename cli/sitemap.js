/**
 * sitemap.js
 * Genera un sitemap.xml estándar a partir de las URLs encontradas por el crawler.
 * Listo para subir a Google Search Console.
 */

import { writeFileSync } from 'fs';
import { join } from 'path';

export function generateSitemap(pages, outputDir) {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  const urls = pages
    .map(
      ({ url }) => `
  <url>
    <loc>${escXml(url)}</loc>
    <lastmod>${today}</lastmod>
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
