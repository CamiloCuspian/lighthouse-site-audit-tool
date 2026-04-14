#!/usr/bin/env node
/**
 * index.js — CLI principal de Lighthouse Reporter
 *
 * Uso:
 *   node cli/index.js --site https://tusitio.com
 *   node cli/index.js --site https://tusitio.com --max 20 --out ./mis-reportes
 */

import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { resolve } from 'path';

import { crawlSite }                    from './crawler.js';
import { launchChrome, killChrome, auditPage } from './auditor.js';
import { generateReport }               from './reporter.js';
import { generateSitemap }              from './sitemap.js';

const program = new Command();

program
  .name('lighthouse-reporter')
  .description('Audita todas las páginas de un sitio con Lighthouse y genera un reporte HTML estático.')
  .version('0.2.0')
  .requiredOption('-s, --site <url>', 'URL del sitio a auditar (ej: https://tusitio.com)')
  .option('-m, --max <number>',  'Máximo de páginas a auditar', '30')
  .option('-o, --out <path>',    'Carpeta de salida para el reporte', './reports')
  .parse(process.argv);

const opts = program.opts();

async function main() {
  const siteUrl   = opts.site.endsWith('/') ? opts.site.slice(0, -1) : opts.site;
  const maxPages  = parseInt(opts.max, 10);
  const outputDir = resolve(opts.out);

  console.log(chalk.bold.blue('\n🔦 Lighthouse Reporter v0.2.0\n'));
  console.log(chalk.gray(`  Sitio    : ${siteUrl}`));
  console.log(chalk.gray(`  Máx pags : ${maxPages}`));
  console.log(chalk.gray(`  Salida   : ${outputDir}\n`));

  // 1. Crawlear el sitio → obtener páginas + meta tags + links rotos
  let pages, brokenLinks;
  try {
    ({ pages, brokenLinks } = await crawlSite(siteUrl, maxPages));
  } catch (err) {
    console.error(chalk.red(`\n✗ Error al crawlear el sitio: ${err.message}`));
    process.exit(1);
  }

  if (pages.length === 0) {
    console.error(chalk.red('\n✗ No se encontraron páginas. Verifica que la URL sea correcta y accesible.'));
    process.exit(1);
  }

  // Mostrar resumen de links rotos
  if (brokenLinks.length > 0) {
    console.log(chalk.red(`  ⚠ ${brokenLinks.length} link(s) roto(s) encontrado(s)\n`));
  }

  // 2. Lanzar Chrome una sola vez
  console.log(chalk.gray('  Iniciando Chrome...\n'));
  try {
    await launchChrome();
  } catch (err) {
    console.error(chalk.red(`\n✗ No se pudo lanzar Chrome: ${err.message}`));
    console.error(chalk.yellow('  Asegúrate de tener Google Chrome instalado.'));
    process.exit(1);
  }

  // 3. Auditar cada página con Lighthouse
  const auditResults = [];
  const auditErrors  = [];

  try {
    for (let i = 0; i < pages.length; i++) {
      const { url, meta } = pages[i];
      const spinner = ora(`[${i + 1}/${pages.length}] Auditando ${url}`).start();

      try {
        const result = await auditPage(url);
        // Combinar resultado de Lighthouse con meta tags del crawler
        auditResults.push({ ...result, meta });

        const avg = Math.round(
          (result.scores.performance + result.scores.accessibility +
           result.scores.bestPractices + result.scores.seo) / 4
        );
        spinner.succeed(
          chalk.green(`[${i + 1}/${pages.length}]`) +
          ` ${url} ` +
          chalk.bold(`(avg: ${avg})`)
        );
      } catch (err) {
        spinner.fail(chalk.red(`[${i + 1}/${pages.length}] Error en ${url}: ${err.message}`));
        auditErrors.push({ url, error: err.message });
      }
    }
  } finally {
    try { await killChrome(); } catch { /* EPERM Windows — ignorar */ }
  }

  if (auditResults.length === 0) {
    console.error(chalk.red('\n✗ Ninguna página se auditó con éxito. Revisa que Chrome esté instalado.'));
    process.exit(1);
  }

  // 4. Generar sitemap.xml
  console.log(chalk.blue('\n🗺  Generando sitemap.xml...'));
  const sitemapPath = generateSitemap(pages, outputDir);
  console.log(chalk.gray(`     → ${sitemapPath}`));

  // 5. Generar reporte HTML
  console.log(chalk.blue('\n📊 Generando reporte HTML...'));
  const siteName   = new URL(siteUrl).hostname;
  const reportPath = generateReport(auditResults, brokenLinks, outputDir, siteName, siteUrl);
  console.log(chalk.gray(`     → ${reportPath}`));

  // 6. Resumen final
  const avgPerf = Math.round(auditResults.reduce((s, r) => s + r.scores.performance, 0) / auditResults.length);
  const avgSEO  = Math.round(auditResults.reduce((s, r) => s + r.scores.seo, 0) / auditResults.length);
  const avgAcc  = Math.round(auditResults.reduce((s, r) => s + r.scores.accessibility, 0) / auditResults.length);

  const seoIssues = auditResults.reduce((n, r) => n + (r.meta?.issues?.length ?? 0), 0);

  console.log(chalk.bold.green('\n✔ ¡Todo listo!\n'));
  console.log(chalk.white(`  📄 Reporte  : ${reportPath}`));
  console.log(chalk.white(`  🗺  Sitemap  : ${sitemapPath}`));
  console.log('');
  console.log(chalk.bold('  Promedios:'));
  console.log(`    Performance  : ${colorScore(avgPerf)}`);
  console.log(`    SEO          : ${colorScore(avgSEO)}`);
  console.log(`    Accesibilidad: ${colorScore(avgAcc)}`);
  console.log('');

  if (brokenLinks.length > 0)
    console.log(chalk.red(`  💀 Links rotos    : ${brokenLinks.length}`));
  if (seoIssues > 0)
    console.log(chalk.yellow(`  ⚠  Problemas SEO : ${seoIssues} en ${auditResults.length} páginas`));
  if (auditErrors.length > 0)
    console.log(chalk.yellow(`  ✗  Audits fallidos: ${auditErrors.length}`));

  console.log('');
}

function colorScore(s) {
  if (s >= 90) return chalk.bold.green(s);
  if (s >= 50) return chalk.bold.yellow(s);
  return chalk.bold.red(s);
}

main().catch(err => {
  console.error(chalk.red('\n✗ Error inesperado:'), err);
  process.exit(1);
});
