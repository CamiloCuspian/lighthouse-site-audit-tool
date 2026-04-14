/**
 * reporter.js
 * Genera un reporte HTML estático completo:
 *  - Resumen de promedios
 *  - Tabla de meta tags SEO con alertas
 *  - Sección de links rotos
 *  - Audits Lighthouse con detalles expandibles
 *  - Botón exportar CSV
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

// ── HELPERS ──────────────────────────────────────────────────────────────────

function escHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function scoreColor(score) {
  if (score >= 90) return '#0cce6b';
  if (score >= 50) return '#ffa400';
  return '#ff4e42';
}

function scoreLabel(score) {
  if (score >= 90) return 'Bueno';
  if (score >= 50) return 'Mejorable';
  return 'Crítico';
}

function scoreRing(score, label) {
  const color = scoreColor(score);
  const dash  = Math.round(score * 1.76);
  return `
    <div class="score-ring">
      <svg viewBox="0 0 64 64" width="56" height="56">
        <circle cx="32" cy="32" r="28" fill="none" stroke="#e8e8e8" stroke-width="6"/>
        <circle cx="32" cy="32" r="28" fill="none" stroke="${color}" stroke-width="6"
          stroke-dasharray="${dash} 176" stroke-linecap="round" transform="rotate(-90 32 32)"/>
        <text x="32" y="37" text-anchor="middle" font-size="15" font-weight="bold" fill="${color}">${score}</text>
      </svg>
      <span class="ring-label">${label}</span>
    </div>`;
}

function formatCell(value) {
  if (value === null || value === undefined) return '—';
  if (typeof value === 'object') {
    if (value.type === 'url' || value.type === 'link') {
      const text  = value.text || value.url || '';
      const url   = value.url  || value.text || '';
      const short = text.length > 55 ? '…' + text.slice(-50) : text;
      return url ? `<a href="${escHtml(url)}" target="_blank">${escHtml(short)}</a>` : escHtml(short);
    }
    if (value.type === 'bytes')     return formatBytes(value.value);
    if (value.type === 'ms' || value.type === 'timespanMs')
      return value.value >= 1000 ? (value.value/1000).toFixed(1)+' s' : Math.round(value.value)+' ms';
    if (value.type === 'node')
      return `<code class="node-snippet">${escHtml((value.snippet||value.nodeLabel||'').slice(0,80))}</code>`;
    if (value.type === 'source-location') {
      const u = value.url || ''; const line = value.line != null ? `:${value.line}` : '';
      return `<a href="${escHtml(u)}" target="_blank">${escHtml(u.split('/').pop()+line)}</a>`;
    }
    if (value.value !== undefined) return escHtml(String(value.value));
    return escHtml(JSON.stringify(value).slice(0, 60));
  }
  if (typeof value === 'number') return escHtml(String(value));
  const s = String(value);
  if (s.startsWith('http://') || s.startsWith('https://')) {
    const short = s.length > 55 ? '…' + s.slice(-50) : s;
    return `<a href="${escHtml(s)}" target="_blank">${escHtml(short)}</a>`;
  }
  return escHtml(s.slice(0, 120));
}

function formatBytes(bytes) {
  if (!bytes) return '0 B';
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes/1024).toFixed(1) + ' KiB';
  return (bytes/1048576).toFixed(2) + ' MiB';
}

// ── SECCIONES HTML ────────────────────────────────────────────────────────────

function auditDetailBlock(audit) {
  const color    = scoreColor(audit.score);
  const headings = (audit.headings || []).filter(h => h.label || h.key);
  const hasTable = headings.length > 0 && audit.items?.length > 0;

  return `
  <details class="audit-detail">
    <summary class="audit-summary">
      <span class="audit-icon" style="background:${color}">${audit.score}</span>
      <span class="audit-title">${escHtml(audit.title)}</span>
      ${audit.displayValue ? `<span class="audit-savings">${escHtml(audit.displayValue)}</span>` : ''}
      <span class="chevron">▶</span>
    </summary>
    <div class="audit-body">
      ${audit.description ? `<p class="audit-desc">${escHtml(audit.description)}</p>` : ''}
      ${hasTable ? `
      <div class="table-wrap">
        <table class="detail-table">
          <thead><tr>${headings.map(h => `<th>${escHtml(h.label||h.key||'')}</th>`).join('')}</tr></thead>
          <tbody>
            ${audit.items.map(item =>
              `<tr>${headings.map(h => `<td>${formatCell(item[h.key])}</td>`).join('')}</tr>`
            ).join('')}
          </tbody>
        </table>
      </div>` : ''}
    </div>
  </details>`;
}

function metaTagsTable(results) {
  const issueCount = results.reduce((n, r) => n + (r.meta?.issues?.length ?? 0), 0);

  return `
  <section class="report-section" id="meta-tags">
    <h2 class="section-heading">🏷️ Meta Tags SEO
      ${issueCount > 0 ? `<span class="badge-warn">${issueCount} problemas</span>` : '<span class="badge-ok">Todo OK</span>'}
    </h2>
    <div class="table-wrap">
      <table class="meta-table">
        <thead>
          <tr>
            <th>URL</th>
            <th>Title <span class="th-hint">(30–60 chars)</span></th>
            <th>Description <span class="th-hint">(70–160 chars)</span></th>
            <th>H1</th>
            <th>Canonical</th>
            <th>Palabras</th>
            <th>Alertas</th>
          </tr>
        </thead>
        <tbody>
          ${results.map(r => {
            const m = r.meta || {};
            const issues = m.issues || [];
            const errors   = issues.filter(i => i.type === 'error');
            const warnings = issues.filter(i => i.type === 'warning');
            const infos    = issues.filter(i => i.type === 'info');

            const rowClass = errors.length > 0 ? 'row-error' : warnings.length > 0 ? 'row-warn' : '';
            const titleLen = m.title ? ` <span class="char-count ${m.title.length > 60 || m.title.length < 30 ? 'count-bad' : 'count-ok'}">${m.title.length}</span>` : '';
            const descLen  = m.description ? ` <span class="char-count ${m.description.length > 160 || m.description.length < 70 ? 'count-bad' : 'count-ok'}">${m.description.length}</span>` : '';

            return `
            <tr class="${rowClass}">
              <td class="url-cell"><a href="${escHtml(r.url)}" target="_blank">${escHtml(r.url.replace(/^https?:\/\/[^/]+/, '') || '/')}</a></td>
              <td>${m.title ? escHtml(m.title.slice(0, 55)) + (m.title.length > 55 ? '…' : '') + titleLen : '<span class="empty-val">—</span>'}</td>
              <td>${m.description ? escHtml(m.description.slice(0, 60)) + (m.description.length > 60 ? '…' : '') + descLen : '<span class="empty-val">—</span>'}</td>
              <td>${m.h1 ? escHtml(m.h1.slice(0, 50)) : '<span class="empty-val">—</span>'}</td>
              <td class="canonical-cell">${m.canonical ? `<span title="${escHtml(m.canonical)}">${escHtml(m.canonical.replace(/^https?:\/\/[^/]+/, '').slice(0,30) || '/')}</span>` : '<span class="empty-val">—</span>'}</td>
              <td class="num-cell">${m.wordCount ?? '—'}</td>
              <td class="issues-cell">
                ${errors.map(i   => `<span class="issue-tag tag-error" title="${escHtml(i.msg)}">✗ ${escHtml(i.msg.slice(0,35))}</span>`).join('')}
                ${warnings.map(i => `<span class="issue-tag tag-warn"  title="${escHtml(i.msg)}">⚠ ${escHtml(i.msg.slice(0,35))}</span>`).join('')}
                ${infos.map(i    => `<span class="issue-tag tag-info"  title="${escHtml(i.msg)}">ℹ ${escHtml(i.msg.slice(0,35))}</span>`).join('')}
                ${issues.length === 0 ? '<span class="issue-tag tag-ok">✓ OK</span>' : ''}
              </td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  </section>`;
}

function brokenLinksSection(brokenLinks) {
  if (brokenLinks.length === 0) return `
  <section class="report-section">
    <h2 class="section-heading">💀 Links Rotos <span class="badge-ok">Ninguno ✓</span></h2>
  </section>`;

  return `
  <section class="report-section" id="broken-links">
    <h2 class="section-heading">💀 Links Rotos <span class="badge-error">${brokenLinks.length} encontrados</span></h2>
    <div class="table-wrap">
      <table class="detail-table">
        <thead>
          <tr><th>URL rota</th><th>Código</th><th>Encontrado en</th></tr>
        </thead>
        <tbody>
          ${brokenLinks.map(b => `
          <tr>
            <td><a href="${escHtml(b.url)}" target="_blank">${escHtml(b.url)}</a></td>
            <td><span class="status-badge ${b.status >= 500 ? 'badge-error' : 'badge-warn'}">${escHtml(String(b.status))}</span></td>
            <td><a href="${escHtml(b.foundOn)}" target="_blank">${escHtml(b.foundOn)}</a></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </section>`;
}

function pageCard(result, index) {
  const { url, scores, metrics, opportunities, diagnostics } = result;
  const avgScore    = Math.round((scores.performance + scores.accessibility + scores.bestPractices + scores.seo) / 4);
  const statusColor = scoreColor(avgScore);

  return `
  <div class="page-card" id="page-${index}">
    <div class="card-header" style="border-left: 5px solid ${statusColor}">
      <div class="card-url">
        <span class="page-num">#${index + 1}</span>
        <a href="${escHtml(url)}" target="_blank" rel="noopener">${escHtml(url)}</a>
      </div>
      <span class="avg-badge" style="background:${statusColor}">${scoreLabel(avgScore)} · ${avgScore}</span>
    </div>

    <div class="scores-row">
      ${scoreRing(scores.performance, 'Performance')}
      ${scoreRing(scores.accessibility, 'Accesibilidad')}
      ${scoreRing(scores.bestPractices, 'Best Practices')}
      ${scoreRing(scores.seo, 'SEO')}
    </div>

    <div class="metrics-grid">
      <div class="metric"><span class="metric-name">FCP</span><span class="metric-val">${metrics.fcp}</span></div>
      <div class="metric"><span class="metric-name">LCP</span><span class="metric-val">${metrics.lcp}</span></div>
      <div class="metric"><span class="metric-name">TBT</span><span class="metric-val">${metrics.tbt}</span></div>
      <div class="metric"><span class="metric-name">CLS</span><span class="metric-val">${metrics.cls}</span></div>
      <div class="metric"><span class="metric-name">Speed Index</span><span class="metric-val">${metrics.si}</span></div>
      <div class="metric"><span class="metric-name">TTI</span><span class="metric-val">${metrics.tti}</span></div>
    </div>

    ${opportunities.length > 0 ? `
    <div class="audit-section">
      <div class="section-label">🔧 Oportunidades de mejora</div>
      ${opportunities.map(o => auditDetailBlock(o)).join('')}
    </div>` : ''}

    ${diagnostics.length > 0 ? `
    <div class="audit-section">
      <div class="section-label">🔍 Diagnósticos</div>
      ${diagnostics.map(d => auditDetailBlock(d)).join('')}
    </div>` : ''}
  </div>`;
}

// ── CSV DATA (inyectado en el HTML para descarga sin servidor) ────────────────

function buildCsvData(results, brokenLinks) {
  const rows = [
    ['URL','Performance','Accesibilidad','Best Practices','SEO','Promedio',
     'FCP','LCP','TBT','CLS','Title','Title Largo','Description','Desc Largo','H1','Canonical','Palabras','Problemas SEO']
  ];

  for (const r of results) {
    const m   = r.meta || {};
    const avg = Math.round((r.scores.performance+r.scores.accessibility+r.scores.bestPractices+r.scores.seo)/4);
    rows.push([
      r.url,
      r.scores.performance, r.scores.accessibility, r.scores.bestPractices, r.scores.seo, avg,
      r.metrics.fcp, r.metrics.lcp, r.metrics.tbt, r.metrics.cls,
      m.title || '', m.title?.length || 0,
      m.description || '', m.description?.length || 0,
      m.h1 || '', m.canonical || '', m.wordCount || 0,
      (m.issues || []).map(i => i.msg).join(' | '),
    ]);
  }

  const brokenRows = [[], ['=== LINKS ROTOS ==='], ['URL','Estado HTTP','Encontrado en']];
  for (const b of brokenLinks) brokenRows.push([b.url, b.status, b.foundOn]);

  return [...rows, ...brokenRows]
    .map(row => row.map(cell => `"${String(cell ?? '').replace(/"/g, '""')}"`).join(','))
    .join('\n');
}

// ── EXPORT PRINCIPAL ──────────────────────────────────────────────────────────

export function generateReport(results, brokenLinks, outputDir, siteName, siteUrl) {
  mkdirSync(outputDir, { recursive: true });

  const date    = new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' });
  const total   = results.length;
  const avgPerf = Math.round(results.reduce((s,r) => s+r.scores.performance, 0) / total);
  const avgAcc  = Math.round(results.reduce((s,r) => s+r.scores.accessibility, 0) / total);
  const avgBP   = Math.round(results.reduce((s,r) => s+r.scores.bestPractices, 0) / total);
  const avgSEO  = Math.round(results.reduce((s,r) => s+r.scores.seo, 0) / total);

  const csvData    = buildCsvData(results, brokenLinks);
  const csvEscaped = csvData.replace(/\\/g, '\\\\').replace(/`/g, '\\`');

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Lighthouse Report — ${escHtml(siteName)}</title>
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f5f7fa;color:#1a1a2e}

    /* NAV */
    .topnav{position:sticky;top:0;z-index:100;background:#1a1a2e;display:flex;gap:0;overflow-x:auto}
    .topnav a{color:rgba(255,255,255,.7);font-size:.75rem;padding:.6rem 1rem;text-decoration:none;white-space:nowrap;border-bottom:2px solid transparent}
    .topnav a:hover{color:white;border-bottom-color:#3b82f6}

    /* HEADER */
    header{background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);color:white;padding:1.8rem 2.5rem}
    header h1{font-size:1.5rem;font-weight:700;margin-bottom:.2rem}
    header p{font-size:.85rem;opacity:.7}
    .header-actions{margin-top:1rem}
    .btn-csv{background:#3b82f6;color:white;border:none;padding:.45rem 1.1rem;border-radius:6px;font-size:.8rem;font-weight:600;cursor:pointer}
    .btn-csv:hover{background:#2563eb}

    /* SUMMARY */
    .summary{display:flex;gap:1rem;padding:1.2rem 2.5rem;background:white;border-bottom:1px solid #e2e8f0;flex-wrap:wrap;align-items:center}
    .summary-title{font-size:.78rem;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-right:auto}
    .score-ring{display:flex;flex-direction:column;align-items:center;gap:3px}
    .ring-label{font-size:.62rem;color:#64748b;text-align:center}

    /* SECTIONS */
    .report-section{margin:1.5rem 2.5rem;background:white;border-radius:12px;box-shadow:0 1px 4px rgba(0,0,0,.07);overflow:hidden}
    .section-heading{font-size:1rem;font-weight:700;padding:1rem 1.25rem;background:#fafbfc;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;gap:.6rem}

    /* BADGES */
    .badge-ok   {font-size:.7rem;font-weight:700;background:#dcfce7;color:#166534;padding:2px 8px;border-radius:20px}
    .badge-warn {font-size:.7rem;font-weight:700;background:#fef3c7;color:#92400e;padding:2px 8px;border-radius:20px}
    .badge-error{font-size:.7rem;font-weight:700;background:#fee2e2;color:#991b1b;padding:2px 8px;border-radius:20px}

    /* CARDS */
    .cards-section{padding:1.5rem 2.5rem;display:flex;flex-direction:column;gap:1.25rem}
    .page-card{background:white;border-radius:12px;box-shadow:0 1px 4px rgba(0,0,0,.08);overflow:hidden}
    .card-header{display:flex;align-items:center;justify-content:space-between;padding:.9rem 1.25rem;background:#fafbfc;gap:1rem;flex-wrap:wrap}
    .card-url{display:flex;align-items:center;gap:.5rem;min-width:0}
    .page-num{background:#e2e8f0;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:700;flex-shrink:0}
    .card-url a{font-size:.82rem;color:#3b82f6;text-decoration:none;word-break:break-all}
    .card-url a:hover{text-decoration:underline}
    .avg-badge{font-size:.72rem;font-weight:700;color:white;padding:3px 10px;border-radius:20px;white-space:nowrap}

    /* SCORES */
    .scores-row{display:flex;gap:.5rem;padding:.9rem 1.25rem;border-bottom:1px solid #f1f5f9;flex-wrap:wrap}

    /* METRICS */
    .metrics-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));border-bottom:1px solid #f1f5f9}
    .metric{padding:.65rem 1rem;border-right:1px solid #f1f5f9}
    .metric:last-child{border-right:none}
    .metric-name{display:block;font-size:.62rem;color:#94a3b8;text-transform:uppercase;letter-spacing:.05em}
    .metric-val{display:block;font-size:.9rem;font-weight:600;color:#1e293b}

    /* AUDIT DETAILS */
    .audit-section{padding:.6rem 1.25rem .9rem;border-top:1px solid #f1f5f9}
    .section-label{font-size:.72rem;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.4rem}
    .audit-detail{border:1px solid #e2e8f0;border-radius:8px;margin-bottom:.35rem;overflow:hidden}
    .audit-summary{display:flex;align-items:center;gap:.5rem;padding:.5rem .75rem;cursor:pointer;list-style:none;background:#fafbfc;user-select:none}
    .audit-summary::-webkit-details-marker{display:none}
    .audit-summary:hover{background:#f1f5f9}
    .audit-icon{font-size:.65rem;font-weight:700;color:white;border-radius:4px;padding:2px 5px;flex-shrink:0}
    .audit-title{font-size:.8rem;color:#1e293b;flex:1}
    .audit-savings{font-size:.72rem;color:#64748b;white-space:nowrap;margin-left:auto}
    .chevron{font-size:.6rem;color:#94a3b8;transition:transform .2s;flex-shrink:0}
    details[open] .chevron{transform:rotate(90deg)}
    .audit-body{padding:.65rem 1rem;background:white;border-top:1px solid #f1f5f9}
    .audit-desc{font-size:.75rem;color:#64748b;margin-bottom:.5rem;line-height:1.5}

    /* TABLES */
    .table-wrap{overflow-x:auto}
    .detail-table,.meta-table{width:100%;border-collapse:collapse;font-size:.76rem}
    .detail-table th,.meta-table th{background:#f8fafc;color:#64748b;font-weight:600;padding:.4rem .6rem;text-align:left;border-bottom:2px solid #e2e8f0;white-space:nowrap}
    .detail-table td,.meta-table td{padding:.35rem .6rem;border-bottom:1px solid #f1f5f9;color:#334155}
    .detail-table tr:hover td,.meta-table tr:hover td{background:#f8fafc}
    .detail-table a,.meta-table a{color:#3b82f6;text-decoration:none}
    .detail-table a:hover,.meta-table a:hover{text-decoration:underline}
    .meta-table .url-cell{max-width:180px;word-break:break-all}
    .meta-table .issues-cell{min-width:160px}
    .meta-table .num-cell{text-align:right;white-space:nowrap}
    .meta-table .canonical-cell{max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    .th-hint{font-weight:400;opacity:.7;font-size:.65rem}
    .row-error td{background:#fff5f5}
    .row-warn  td{background:#fffbeb}
    .char-count{font-size:.65rem;font-weight:700;border-radius:3px;padding:1px 4px;margin-left:3px}
    .count-ok{background:#dcfce7;color:#166534}
    .count-bad{background:#fee2e2;color:#991b1b}
    .empty-val{color:#cbd5e1}
    .issue-tag{display:inline-block;font-size:.65rem;font-weight:600;border-radius:4px;padding:1px 5px;margin:1px 2px 1px 0;white-space:nowrap}
    .tag-error{background:#fee2e2;color:#991b1b}
    .tag-warn {background:#fef3c7;color:#92400e}
    .tag-info {background:#dbeafe;color:#1e40af}
    .tag-ok   {background:#dcfce7;color:#166534}
    .status-badge{display:inline-block;font-size:.7rem;font-weight:700;padding:2px 6px;border-radius:4px}
    code.node-snippet{font-family:monospace;font-size:.7rem;background:#f1f5f9;padding:1px 4px;border-radius:3px;color:#7c3aed}

    /* FOOTER */
    footer{text-align:center;padding:2rem;font-size:.72rem;color:#94a3b8}

    @media(max-width:600px){
      header,.summary,.cards-section,.report-section{margin-left:.5rem;margin-right:.5rem;padding-left:1rem;padding-right:1rem}
      .scores-row{justify-content:space-around}
    }
  </style>
</head>
<body>

<nav class="topnav">
  <a href="#summary">📊 Resumen</a>
  <a href="#meta-tags">🏷️ Meta Tags</a>
  <a href="#broken-links">💀 Links Rotos</a>
  <a href="#audits">🔦 Audits</a>
</nav>

<header>
  <h1>🔦 Lighthouse Reporter</h1>
  <p>${escHtml(siteName)} · ${total} página${total!==1?'s':''} auditada${total!==1?'s':''} · ${date}</p>
  <div class="header-actions">
    <button class="btn-csv" onclick="downloadCSV()">⬇ Exportar CSV</button>
  </div>
</header>

<div class="summary" id="summary">
  <span class="summary-title">Promedios del sitio</span>
  ${scoreRing(avgPerf, 'Performance')}
  ${scoreRing(avgAcc,  'Accesibilidad')}
  ${scoreRing(avgBP,   'Best Practices')}
  ${scoreRing(avgSEO,  'SEO')}
  ${brokenLinks.length > 0
    ? `<span class="badge-error" style="margin-left:auto">💀 ${brokenLinks.length} link${brokenLinks.length!==1?'s':''} roto${brokenLinks.length!==1?'s':''}</span>`
    : `<span class="badge-ok" style="margin-left:auto">💀 Sin links rotos</span>`}
</div>

${metaTagsTable(results)}
${brokenLinksSection(brokenLinks)}

<div id="audits">
  <div style="padding:1rem 2.5rem 0"><h2 style="font-size:1rem;font-weight:700;color:#1e293b">🔦 Audits por página</h2></div>
  <div class="cards-section">
    ${results.map((r, i) => pageCard(r, i)).join('\n')}
  </div>
</div>

<footer>Generado con Lighthouse Reporter v0.2.0 · ${date}</footer>

<script>
const CSV_DATA = \`${csvEscaped}\`;

function downloadCSV() {
  const blob = new Blob([CSV_DATA], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'lighthouse-report-${escHtml(siteName)}.csv';
  a.click();
  URL.revokeObjectURL(url);
}
</script>
</body>
</html>`;

  const outFile = join(outputDir, 'index.html');
  writeFileSync(outFile, html, 'utf-8');

  const jsonFile = join(outputDir, 'results.json');
  writeFileSync(jsonFile, JSON.stringify({ site: siteName, date, results, brokenLinks }, null, 2), 'utf-8');

  return outFile;
}
