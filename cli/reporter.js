/**
 * reporter.js
 * Genera un reporte HTML estático completo:
 *  - Resumen de promedios
 *  - Tabla de meta tags SEO con alertas
 *  - Sección de links rotos
 *  - Audits Lighthouse con detalles expandibles
 *  - Botón exportar CSV
 */

import { writeFileSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

// ── HELPERS ──────────────────────────────────────────────────────────────────

function escHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
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

function scoreRing(score, label, isComparison = false) {
  const absScore = Math.abs(score);
  const color = isComparison ? (score > 0 ? '#10b981' : '#ef4444') : scoreColor(absScore);
  const dash = Math.round(absScore * 1.76);
  const sign = isComparison && score !== 0 ? (score > 0 ? '+' : '') : '';
  const displayScore = isComparison ? score : absScore;
  return `
    <div class="score-ring">
      <svg viewBox="0 0 64 64" width="56" height="56">
        <circle cx="32" cy="32" r="28" fill="none" stroke="#e8e8e8" stroke-width="6"/>
        <circle cx="32" cy="32" r="28" fill="none" stroke="${color}" stroke-width="6"
          stroke-dasharray="${dash} 176" stroke-linecap="round" transform="rotate(-90 32 32)"/>
        <text x="32" y="37" text-anchor="middle" font-size="15" font-weight="bold" fill="${color}">${sign}${displayScore}</text>
      </svg>
      <span class="ring-label">${label}</span>
    </div>`;
}

function formatCell(value) {
  if (value === null || value === undefined) return '—';
  if (typeof value === 'object') {
    if (value.type === 'url' || value.type === 'link') {
      const text = value.text || value.url || '';
      const url = value.url || value.text || '';
      const short = text.length > 55 ? '…' + text.slice(-50) : text;
      return url
        ? `<a href="${escHtml(url)}" target="_blank">${escHtml(short)}</a>`
        : escHtml(short);
    }
    if (value.type === 'bytes') return formatBytes(value.value);
    if (value.type === 'ms' || value.type === 'timespanMs')
      return value.value >= 1000
        ? (value.value / 1000).toFixed(1) + ' s'
        : Math.round(value.value) + ' ms';
    if (value.type === 'node')
      return `<code class="node-snippet">${escHtml((value.snippet || value.nodeLabel || '').slice(0, 80))}</code>`;
    if (value.type === 'source-location') {
      const u = value.url || '';
      const line = value.line != null ? `:${value.line}` : '';
      return `<a href="${escHtml(u)}" target="_blank">${escHtml(u.split('/').pop() + line)}</a>`;
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
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KiB';
  return (bytes / 1048576).toFixed(2) + ' MiB';
}

// ── SECCIONES HTML ────────────────────────────────────────────────────────────

function auditDetailBlock(audit) {
  const color = scoreColor(audit.score);
  const headings = (audit.headings || []).filter((h) => h.label || h.key);
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
      ${
        hasTable
          ? `
      <div class="table-wrap">
        <table class="detail-table">
          <thead><tr>${headings.map((h) => `<th>${escHtml(h.label || h.key || '')}</th>`).join('')}</tr></thead>
          <tbody>
            ${audit.items
              .map(
                (item) =>
                  `<tr>${headings.map((h) => `<td>${formatCell(item[h.key])}</td>`).join('')}</tr>`
              )
              .join('')}
          </tbody>
        </table>
      </div>`
          : ''
      }
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
          ${results
            .map((r) => {
              const m = r.meta || {};
              const issues = m.issues || [];
              const errors = issues.filter((i) => i.type === 'error');
              const warnings = issues.filter((i) => i.type === 'warning');
              const infos = issues.filter((i) => i.type === 'info');

              const rowClass =
                errors.length > 0 ? 'row-error' : warnings.length > 0 ? 'row-warn' : '';
              const titleLen = m.title
                ? ` <span class="char-count ${m.title.length > 60 || m.title.length < 30 ? 'count-bad' : 'count-ok'}">${m.title.length}</span>`
                : '';
              const descLen = m.description
                ? ` <span class="char-count ${m.description.length > 160 || m.description.length < 70 ? 'count-bad' : 'count-ok'}">${m.description.length}</span>`
                : '';

              return `
            <tr class="${rowClass}">
              <td class="url-cell"><a href="${escHtml(r.url)}" target="_blank">${escHtml(r.url.replace(/^https?:\/\/[^/]+/, '') || '/')}</a></td>
              <td>${m.title ? escHtml(m.title.slice(0, 55)) + (m.title.length > 55 ? '…' : '') + titleLen : '<span class="empty-val">—</span>'}</td>
              <td>${m.description ? escHtml(m.description.slice(0, 60)) + (m.description.length > 60 ? '…' : '') + descLen : '<span class="empty-val">—</span>'}</td>
              <td>${m.h1 ? escHtml(m.h1.slice(0, 50)) : '<span class="empty-val">—</span>'}</td>
              <td class="canonical-cell">${m.canonical ? `<span title="${escHtml(m.canonical)}">${escHtml(m.canonical.replace(/^https?:\/\/[^/]+/, '').slice(0, 30) || '/')}</span>` : '<span class="empty-val">—</span>'}</td>
              <td class="num-cell">${m.wordCount ?? '—'}</td>
              <td class="issues-cell">
                ${errors.map((i) => `<span class="issue-tag tag-error" title="${escHtml(i.msg)}">✗ ${escHtml(i.msg.slice(0, 35))}</span>`).join('')}
                ${warnings.map((i) => `<span class="issue-tag tag-warn"  title="${escHtml(i.msg)}">⚠ ${escHtml(i.msg.slice(0, 35))}</span>`).join('')}
                ${infos.map((i) => `<span class="issue-tag tag-info"  title="${escHtml(i.msg)}">ℹ ${escHtml(i.msg.slice(0, 35))}</span>`).join('')}
                ${issues.length === 0 ? '<span class="issue-tag tag-ok">✓ OK</span>' : ''}
              </td>
            </tr>`;
            })
            .join('')}
        </tbody>
      </table>
    </div>
  </section>`;
}

function brokenLinksSection(brokenLinks) {
  if (brokenLinks.length === 0)
    return `
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
          ${brokenLinks
            .map(
              (b) => `
          <tr>
            <td><a href="${escHtml(b.url)}" target="_blank">${escHtml(b.url)}</a></td>
            <td><span class="status-badge ${b.status >= 500 ? 'badge-error' : 'badge-warn'}">${escHtml(String(b.status))}</span></td>
            <td><a href="${escHtml(b.foundOn)}" target="_blank">${escHtml(b.foundOn)}</a></td>
          </tr>`
            )
            .join('')}
        </tbody>
      </table>
    </div>
  </section>`;
}

function pageCard(result, index) {
  const { url, scores, metrics, opportunities, diagnostics } = result;
  const avgScore = Math.round(
    (scores.performance + scores.accessibility + scores.bestPractices + scores.seo) / 4
  );
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

    ${
      opportunities.length > 0
        ? `
    <div class="audit-section">
      <div class="section-label">🔧 Oportunidades de mejora</div>
      ${opportunities.map((o) => auditDetailBlock(o)).join('')}
    </div>`
        : ''
    }

    ${
      diagnostics.length > 0
        ? `
    <div class="audit-section">
      <div class="section-label">🔍 Diagnósticos</div>
      ${diagnostics.map((d) => auditDetailBlock(d)).join('')}
    </div>`
        : ''
    }
  </div>`;
}

// ── ANALYTICS FILTER SECTION ─────────────────────────────────────────────────

function analyticsFilterSection() {
  return `
<section class="report-section" id="analytics-config">
  <h2 class="section-heading">🛡️ Configuración de filtros Analytics</h2>
  <div style="padding:1.2rem 1.5rem">
    <p style="font-size:.84rem;color:#475569;margin-bottom:1rem;">
      Esta auditoría usó el User-Agent <code style="background:#f1f5f9;padding:2px 6px;border-radius:4px;font-size:.8rem;">LighthouseAuditBot/1.0</code>.
      Para excluir estas visitas de tus reportes de analítica, crea los siguientes filtros:
    </p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1rem;">
      <div style="border:1px solid #e2e8f0;border-radius:10px;padding:1rem;">
        <h3 style="font-size:.85rem;font-weight:700;color:#1e293b;margin-bottom:.5rem;">Google Analytics 4 (GA4)</h3>
        <ol style="font-size:.78rem;color:#475569;margin-left:1.1rem;line-height:1.8;">
          <li>Admin → Propiedad → <strong>Filtros de datos</strong></li>
          <li>Crear filtro → Tipo: <strong>Excluir</strong></li>
          <li>Campo: Dispositivo → <strong>Agente de usuario</strong></li>
          <li>Condición: contiene <code style="background:#f1f5f9;padding:1px 4px;border-radius:3px;">LighthouseAuditBot</code></li>
        </ol>
      </div>
      <div style="border:1px solid #e2e8f0;border-radius:10px;padding:1rem;">
        <h3 style="font-size:.85rem;font-weight:700;color:#1e293b;margin-bottom:.5rem;">Universal Analytics (UA)</h3>
        <ol style="font-size:.78rem;color:#475569;margin-left:1.1rem;line-height:1.8;">
          <li>Admin → Vista → <strong>Filtros</strong> → + Agregar filtro</li>
          <li>Tipo: Personalizado → <strong>Excluir</strong></li>
          <li>Campo: <strong>Agente de usuario</strong></li>
          <li>Patrón: <code style="background:#f1f5f9;padding:1px 4px;border-radius:3px;">LighthouseAuditBot</code></li>
        </ol>
      </div>
      <div style="border:1px solid #e2e8f0;border-radius:10px;padding:1rem;">
        <h3 style="font-size:.85rem;font-weight:700;color:#1e293b;margin-bottom:.5rem;">Cloudflare</h3>
        <p style="font-size:.78rem;color:#475569;line-height:1.6;">
          Firewall → Reglas → crear regla con:<br>
          <em>User Agent contiene "LighthouseAuditBot" → Omitir</em>
        </p>
      </div>
      <div style="border:1px solid #e2e8f0;border-radius:10px;padding:1rem;">
        <h3 style="font-size:.85rem;font-weight:700;color:#1e293b;margin-bottom:.5rem;">Otras plataformas</h3>
        <p style="font-size:.78rem;color:#475569;line-height:1.6;">
          Hotjar, Clarity, Matomo, Plausible y similares:<br>
          busca en <strong>Configuración → Exclusiones</strong> y agrega:<br>
          <code style="background:#f1f5f9;padding:1px 4px;border-radius:3px;">LighthouseAuditBot</code>
        </p>
      </div>
    </div>
  </div>
</section>`;
}

// ── CSV DATA (inyectado en el HTML para descarga sin servidor) ────────────────

function buildCsvData(results, brokenLinks) {
  const rows = [
    [
      'URL',
      'Performance',
      'Accesibilidad',
      'Best Practices',
      'SEO',
      'Promedio',
      'FCP',
      'LCP',
      'TBT',
      'CLS',
      'Title',
      'Title Largo',
      'Description',
      'Desc Largo',
      'H1',
      'Canonical',
      'Palabras',
      'Problemas SEO',
    ],
  ];

  for (const r of results) {
    const m = r.meta || {};
    const avg = Math.round(
      (r.scores.performance + r.scores.accessibility + r.scores.bestPractices + r.scores.seo) / 4
    );
    rows.push([
      r.url,
      r.scores.performance,
      r.scores.accessibility,
      r.scores.bestPractices,
      r.scores.seo,
      avg,
      r.metrics.fcp,
      r.metrics.lcp,
      r.metrics.tbt,
      r.metrics.cls,
      m.title || '',
      m.title?.length || 0,
      m.description || '',
      m.description?.length || 0,
      m.h1 || '',
      m.canonical || '',
      m.wordCount || 0,
      (m.issues || []).map((i) => i.msg).join(' | '),
    ]);
  }

  const brokenRows = [[], ['=== LINKS ROTOS ==='], ['URL', 'Estado HTTP', 'Encontrado en']];
  for (const b of brokenLinks) brokenRows.push([b.url, b.status, b.foundOn]);

  return [...rows, ...brokenRows]
    .map((row) => row.map((cell) => `"${String(cell ?? '').replace(/"/g, '""')}"`).join(','))
    .join('\n');
}

// ── INFORME PARA CLIENTE (generado en Node.js) ────────────────────────────────

function buildClientReportHtml(results, brokenLinks, siteName, date) {
  const total = results.length;

  function avg(key) {
    return Math.round(results.reduce((s, r) => s + r.scores[key], 0) / total);
  }
  const avgP = avg('performance');
  const avgS = avg('seo');
  const avgA = avg('accessibility');
  const avgB = avg('bestPractices');
  const overall = Math.round((avgP + avgS + avgA + avgB) / 4);

  function e(str) {
    return String(str ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function sem(score) {
    if (score >= 90) return { color: '#16a34a', bg: '#f0fdf4', border: '#86efac', emoji: '🟢', label: 'Bien' };
    if (score >= 50) return { color: '#d97706', bg: '#fffbeb', border: '#fcd34d', emoji: '🟡', label: 'Mejorable' };
    return { color: '#dc2626', bg: '#fff5f5', border: '#fca5a5', emoji: '🔴', label: 'Crítico' };
  }

  function bar(score) {
    const s = sem(score);
    return `<div style="display:inline-flex;align-items:center;gap:.4rem;">
      <div style="width:90px;height:8px;background:#e2e8f0;border-radius:4px;overflow:hidden;">
        <div style="width:${score}%;height:100%;background:${s.color};border-radius:4px;"></div>
      </div>
      <span style="font-size:.8rem;font-weight:700;color:${s.color};">${score}</span>
    </div>`;
  }

  function scoreSpan(score) {
    const s = sem(score);
    return `<span style="font-size:.78rem;font-weight:700;color:${s.color};">${score}</span>`;
  }

  const ov = sem(overall);

  const critical  = results.filter(r => Math.min(r.scores.performance, r.scores.seo, r.scores.accessibility, r.scores.bestPractices) < 50);
  const attention = results.filter(r => !critical.includes(r) && Math.min(r.scores.performance, r.scores.seo, r.scores.accessibility, r.scores.bestPractices) < 90);
  const good      = results.filter(r => !critical.includes(r) && !attention.includes(r));

  const topOpps = results
    .flatMap(r => (r.opportunities || []).map(o => ({ ...o, page: r.url })))
    .sort((a, b) => a.score - b.score)
    .slice(0, 5);

  const seoIssueMap = {};
  results.forEach(r => {
    (r.meta?.issues || []).forEach(issue => {
      const key = issue.msg;
      if (!seoIssueMap[key]) seoIssueMap[key] = { msg: issue.msg, type: issue.type, count: 0 };
      seoIssueMap[key].count++;
    });
  });
  const seoIssues = Object.values(seoIssueMap).sort((a, b) => {
    const order = { error: 0, warning: 1, info: 2 };
    return (order[a.type] ?? 3) - (order[b.type] ?? 3);
  });

  let h = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Informe del sitio — ${e(siteName)}</title>
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f8fafc;color:#1e293b;padding:1.5rem}
    .container{max-width:860px;margin:0 auto}
    h1{font-size:1.5rem;font-weight:800;margin-bottom:.2rem}
    h2{font-size:1rem;font-weight:700;margin-bottom:.6rem}
    section{background:white;border-radius:14px;padding:1.5rem;margin-bottom:1.5rem;box-shadow:0 1px 4px rgba(0,0,0,.07)}
    .pillar-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:1rem;margin-top:.75rem}
    .pillar{border-radius:10px;padding:1rem;border:1px solid}
    @media print{body{background:white}section{box-shadow:none;border:1px solid #e2e8f0}}
    @media(max-width:600px){.pillar-grid{grid-template-columns:1fr 1fr}}
  </style>
</head>
<body>
<div class="container">`;

  // CABECERA
  h += `<section style="background:linear-gradient(135deg,#1a1a2e,#16213e);color:white;">
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.75rem;">
      <div>
        <h1 style="color:white;">Informe de estado del sitio web</h1>
        <p style="font-size:.82rem;opacity:.75;margin-top:.2rem;">${e(siteName)} &nbsp;·&nbsp; ${e(date)}</p>
      </div>
      <div style="text-align:center;background:${ov.bg};border-radius:12px;padding:.75rem 1.25rem;border:2px solid ${ov.border};">
        <div style="font-size:2.2rem;font-weight:800;color:${ov.color};">${overall}</div>
        <div style="font-size:.72rem;font-weight:700;color:${ov.color};">${ov.label}</div>
        <div style="font-size:.65rem;color:#94a3b8;margin-top:.15rem;">Promedio general</div>
      </div>
    </div>
    ${overall >= 90
      ? `<p style="margin-top:1rem;font-size:.84rem;font-weight:600;color:#86efac;">El sitio está en muy buen estado. Hay pequeños ajustes que lo pueden llevar al siguiente nivel.</p>`
      : overall >= 50
      ? `<p style="margin-top:1rem;font-size:.84rem;font-weight:600;color:#fcd34d;">El sitio funciona bien en varios aspectos, pero hay oportunidades de mejora que vale la pena atender.</p>`
      : `<p style="margin-top:1rem;font-size:.84rem;font-weight:600;color:#fca5a5;">Encontramos varios puntos críticos que conviene resolver pronto para mejorar la experiencia de los visitantes y el posicionamiento en Google.</p>`
    }
  </section>`;

  // 4 PILARES
  h += `<section>
    <h2>Los cuatro pilares de un sitio saludable</h2>
    <p style="font-size:.84rem;color:#475569;margin-bottom:.75rem;">Estos son los cuatro aspectos que Google y otras herramientas evalúan en cada página.</p>
    <div class="pillar-grid">`;

  const pillars = [
    { key: 'performance', score: avgP, label: 'Velocidad de carga',
      desc: 'Qué tan rápido carga el sitio para los visitantes. Un sitio lento pierde usuarios antes de que vean el contenido.' },
    { key: 'seo', score: avgS, label: 'Visibilidad en Google',
      desc: 'Qué tan bien está configurado el sitio para aparecer en los resultados de búsqueda de Google.' },
    { key: 'accessibility', score: avgA, label: 'Accesibilidad',
      desc: 'Qué tan fácil es usar el sitio para todas las personas, incluyendo quienes usan lectores de pantalla.' },
    { key: 'bestPractices', score: avgB, label: 'Buenas prácticas',
      desc: 'Si el sitio sigue los estándares técnicos modernos de seguridad y funcionamiento.' },
  ];

  pillars.forEach(p => {
    const s = sem(p.score);
    h += `<div class="pillar" style="background:${s.bg};border-color:${s.border};">
      <div style="font-size:.65rem;font-weight:700;color:${s.color};text-transform:uppercase;letter-spacing:.06em;margin-bottom:.3rem;">${s.emoji} ${s.label.toUpperCase()}</div>
      <div style="font-size:1.9rem;font-weight:800;color:${s.color};line-height:1;">${p.score}</div>
      <div style="font-size:.7rem;font-weight:600;color:${s.color};margin-bottom:.5rem;">${s.label}</div>
      <p style="font-size:.72rem;color:#475569;line-height:1.5;">${p.desc}</p>
      ${bar(p.score)}
    </div>`;
  });
  h += `</div></section>`;

  // PÁGINAS CRÍTICAS
  if (critical.length > 0) {
    h += `<section style="border:1px solid #fca5a5;">
      <h2 style="color:#dc2626;">🚨 Páginas que necesitan atención urgente</h2>
      <p style="font-size:.84rem;color:#475569;margin-bottom:.75rem;">Estas páginas tienen al menos un indicador por debajo de 50, lo que puede afectar directamente la experiencia de los visitantes y el posicionamiento en Google.</p>`;
    critical.forEach(r => {
      const path = r.url.replace(/^https?:\/\/[^/]+/, '') || '/';
      h += `<div style="border:1px solid #fca5a5;border-radius:8px;padding:.75rem;margin-bottom:.5rem;display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;">
        <a href="${e(r.url)}" target="_blank" style="font-size:.82rem;color:#3b82f6;text-decoration:none;flex:1;min-width:180px;">${e(path)}</a>
        <div style="display:flex;gap:.5rem;flex-wrap:wrap;">
          <span style="font-size:.72rem;">Velocidad: ${scoreSpan(r.scores.performance)}</span>
          <span style="font-size:.72rem;">SEO: ${scoreSpan(r.scores.seo)}</span>
          <span style="font-size:.72rem;">Accesib.: ${scoreSpan(r.scores.accessibility)}</span>
          <span style="font-size:.72rem;">Seguridad: ${scoreSpan(r.scores.bestPractices)}</span>
        </div>
      </div>`;
    });
    h += `</section>`;
  }

  // ENLACES ROTOS
  if (brokenLinks.length > 0) {
    h += `<section style="border:1px solid #fca5a5;">
      <h2 style="color:#dc2626;">💀 Enlaces rotos (${brokenLinks.length})</h2>
      <p style="font-size:.84rem;color:#475569;margin-bottom:.75rem;">Un enlace roto es como una puerta que no abre. Google los detecta y los penaliza. Aquí están los que encontramos:</p>
      <div style="overflow-x:auto;"><table style="width:100%;font-size:.77rem;border-collapse:collapse;">
        <thead><tr style="background:#fef2f2;">
          <th style="padding:.4rem .65rem;text-align:left;border-bottom:2px solid #fca5a5;color:#991b1b;">URL rota</th>
          <th style="padding:.4rem .65rem;text-align:center;border-bottom:2px solid #fca5a5;color:#991b1b;white-space:nowrap;">Estado</th>
          <th style="padding:.4rem .65rem;text-align:left;border-bottom:2px solid #fca5a5;color:#991b1b;">Encontrado en</th>
        </tr></thead>
        <tbody>`;
    brokenLinks.forEach(b => {
      h += `<tr style="border-bottom:1px solid #fee2e2;">
        <td style="padding:.38rem .65rem;color:#64748b;word-break:break-all;">${e(b.url)}</td>
        <td style="padding:.38rem .65rem;text-align:center;font-weight:700;color:#dc2626;">${e(String(b.status))}</td>
        <td style="padding:.38rem .65rem;color:#64748b;word-break:break-all;">${e(b.foundOn || '')}</td>
      </tr>`;
    });
    h += `</tbody></table></div></section>`;
  }

  // AJUSTES SEO
  if (seoIssues.length > 0) {
    h += `<section>
      <h2>Ajustes de contenido pendientes</h2>
      <p style="font-size:.87rem;color:#475569;margin-bottom:.9rem;">Estos son detalles del contenido o la estructura de las páginas que, si se corrigen, ayudan a que Google entienda mejor de qué trata cada página y las posicione más arriba en los resultados de búsqueda.</p>`;
    seoIssues.forEach(issue => {
      const c = issue.type === 'error'   ? { bg:'#fee2e2', color:'#991b1b', label:'Urgente'     } :
                issue.type === 'warning' ? { bg:'#fef3c7', color:'#92400e', label:'Mejorar'      } :
                                           { bg:'#dbeafe', color:'#1e40af', label:'Información'  };
      h += `<div style="display:flex;align-items:flex-start;gap:.7rem;padding:.55rem 0;border-bottom:1px solid #f1f5f9;">
        <span style="background:${c.bg};color:${c.color};font-size:.67rem;font-weight:700;padding:2px 7px;border-radius:20px;white-space:nowrap;flex-shrink:0;margin-top:2px;">${c.label}</span>
        <div><p style="font-size:.85rem;color:#1e293b;margin-bottom:.1rem;">${e(issue.msg)}</p>
        <p style="font-size:.74rem;color:#94a3b8;margin:0;">Presente en ${issue.count} página${issue.count !== 1 ? 's' : ''}</p></div>
      </div>`;
    });
    h += `</section>`;
  }

  // PROXIMOS PASOS
  h += `<section style="background:#f0fdf4;border:1px solid #bbf7d0;">
    <h2 style="color:#14532d;">¿Qué hacemos ahora?</h2>
    <p style="font-size:.87rem;color:#166534;margin-bottom:1rem;">Basándonos en lo que encontramos, estas son las acciones más importantes, ordenadas de mayor a menor impacto:</p>
    <ol style="margin:0 0 0 1.25rem;color:#334155;">`;
  if (brokenLinks.length > 0)
    h += `<li style="margin-bottom:.65rem;font-size:.88rem;"><strong>Corregir los ${brokenLinks.length} enlace${brokenLinks.length !== 1 ? 's' : ''} roto${brokenLinks.length !== 1 ? 's' : ''}.</strong> Es lo más rápido de resolver y tiene impacto inmediato tanto en la experiencia de los usuarios como en el SEO.</li>`;
  if (critical.some(r => r.scores.performance < 50))
    h += `<li style="margin-bottom:.65rem;font-size:.88rem;"><strong>Mejorar la velocidad de carga</strong> de las páginas marcadas como críticas. El paso más efectivo suele ser comprimir las imágenes y reducir el código JavaScript que no se está usando.</li>`;
  if (seoIssues.some(i => i.type === 'error'))
    h += `<li style="margin-bottom:.65rem;font-size:.88rem;"><strong>Completar los títulos, descripciones y encabezados</strong> que faltan. Son los textos que Google lee para saber de qué trata cada página.</li>`;
  if (topOpps.length > 0)
    h += `<li style="margin-bottom:.65rem;font-size:.88rem;"><strong>Aplicar las optimizaciones de rendimiento identificadas.</strong> Las principales son: ${topOpps.slice(0, 3).map(o => e(o.title) + (o.displayValue ? ` (${e(o.displayValue)})` : '')).join(', ')}.</li>`;
  if (avgS < 90)
    h += `<li style="margin-bottom:.65rem;font-size:.88rem;"><strong>Revisar el SEO de todas las páginas</strong> para asegurarnos de que cada una tenga su título, descripción y encabezado principal completos.</li>`;
  h += `<li style="margin-bottom:.65rem;font-size:.88rem;"><strong>Repetir esta auditoría en 30 días</strong> para medir el avance y detectar nuevas oportunidades de mejora.</li>`;
  h += `</ol></section>`;

  // RESUMEN DE PÁGINAS
  h += `<section>
    <h2>Resumen de las páginas revisadas</h2>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;margin-bottom:1rem;">
      <div style="background:#fff5f5;border:1px solid #fca5a5;border-radius:10px;padding:1rem;text-align:center;"><div style="font-size:1.9rem;font-weight:800;color:#dc2626;">${critical.length}</div><div style="font-size:.75rem;color:#991b1b;font-weight:600;margin-top:.15rem;">Críticas</div></div>
      <div style="background:#fffbeb;border:1px solid #fcd34d;border-radius:10px;padding:1rem;text-align:center;"><div style="font-size:1.9rem;font-weight:800;color:#d97706;">${attention.length}</div><div style="font-size:.75rem;color:#92400e;font-weight:600;margin-top:.15rem;">Con observaciones</div></div>
      <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:10px;padding:1rem;text-align:center;"><div style="font-size:1.9rem;font-weight:800;color:#16a34a;">${good.length}</div><div style="font-size:.75rem;color:#166534;font-weight:600;margin-top:.15rem;">En buen estado</div></div>
    </div>
    <details style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
      <summary style="padding:.7rem 1rem;background:#f8fafc;font-size:.82rem;font-weight:700;color:#475569;cursor:pointer;">Ver todas las páginas (${total})</summary>
      <div style="overflow-x:auto;"><table style="font-size:.77rem;width:100%;border-collapse:collapse;">
        <thead><tr style="background:#f8fafc;">
          <th style="padding:.4rem .65rem;text-align:left;border-bottom:2px solid #e2e8f0;color:#64748b;">Página</th>
          <th style="padding:.4rem .65rem;text-align:center;border-bottom:2px solid #e2e8f0;color:#64748b;">Velocidad</th>
          <th style="padding:.4rem .65rem;text-align:center;border-bottom:2px solid #e2e8f0;color:#64748b;">SEO</th>
          <th style="padding:.4rem .65rem;text-align:center;border-bottom:2px solid #e2e8f0;color:#64748b;">Accesib.</th>
          <th style="padding:.4rem .65rem;text-align:center;border-bottom:2px solid #e2e8f0;color:#64748b;">Seguridad</th>
        </tr></thead>
        <tbody>`;
  results.forEach(r => {
    const rowBg = critical.includes(r) ? 'background:#fff5f5;' : attention.includes(r) ? 'background:#fffcf0;' : '';
    const path  = r.url.replace(/^https?:\/\/[^/]+/, '') || '/';
    h += `<tr style="border-bottom:1px solid #f1f5f9;${rowBg}">
      <td style="padding:.38rem .65rem;word-break:break-all;max-width:280px;"><a href="${e(r.url)}" target="_blank" style="color:#3b82f6;text-decoration:none;">${e(path)}</a></td>
      <td style="padding:.38rem .65rem;text-align:center;">${scoreSpan(r.scores.performance)}</td>
      <td style="padding:.38rem .65rem;text-align:center;">${scoreSpan(r.scores.seo)}</td>
      <td style="padding:.38rem .65rem;text-align:center;">${scoreSpan(r.scores.accessibility)}</td>
      <td style="padding:.38rem .65rem;text-align:center;">${scoreSpan(r.scores.bestPractices)}</td>
    </tr>`;
  });
  h += `</tbody></table></div></details>
  </section>`;

  // FOOTER
  h += `<div style="text-align:center;padding:1.2rem;color:#94a3b8;font-size:.74rem;">
    <p style="margin-bottom:.2rem;">Informe generado con <strong>Lighthouse Reporter</strong> &nbsp;&middot;&nbsp; ${e(date)}</p>
    <p>Los puntajes son generados por Google Lighthouse, la herramienta oficial de Google para auditar sitios web.</p>
  </div>`;

  h += `</div></body></html>`;
  return h;
}

// ── EXPORT PRINCIPAL ──────────────────────────────────────────────────────────

export function generateReport(results, brokenLinks, outputDir, siteName, prevResults = null) {
  mkdirSync(outputDir, { recursive: true });

  const date = new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' });
  const total = results.length;
  const avgPerf = Math.round(results.reduce((s, r) => s + r.scores.performance, 0) / total);
  const avgAcc = Math.round(results.reduce((s, r) => s + r.scores.accessibility, 0) / total);
  const avgBP = Math.round(results.reduce((s, r) => s + r.scores.bestPractices, 0) / total);
  const avgSEO = Math.round(results.reduce((s, r) => s + r.scores.seo, 0) / total);

  // Historial de reportes
  let previousReports = [];
  try {
    const historyDir = join(outputDir, 'history');
    mkdirSync(historyDir, { recursive: true });
    previousReports = readdirSync(historyDir)
      .filter((f) => f.endsWith('.json'))
      .map((f) => f.replace('.json', ''))
      .sort()
      .reverse();
  } catch {
    /* ignore */
  }

  let comparison = null;
  if (prevResults && prevResults.results) {
    const prevTotal = prevResults.results.length;
    const prevAvgPerf = Math.round(
      prevResults.results.reduce((s, r) => s + r.scores.performance, 0) / prevTotal
    );
    const prevAvgAcc = Math.round(
      prevResults.results.reduce((s, r) => s + r.scores.accessibility, 0) / prevTotal
    );
    const prevAvgBP = Math.round(
      prevResults.results.reduce((s, r) => s + r.scores.bestPractices, 0) / prevTotal
    );
    const prevAvgSEO = Math.round(
      prevResults.results.reduce((s, r) => s + r.scores.seo, 0) / prevTotal
    );
    comparison = {
      performance: avgPerf - prevAvgPerf,
      accessibility: avgAcc - prevAvgAcc,
      bestPractices: avgBP - prevAvgBP,
      seo: avgSEO - prevAvgSEO,
    };
  }

  const csvData = buildCsvData(results, brokenLinks);
  const csvJson = JSON.stringify(csvData).replace(/</g, '\\u003c').replace(/>/g, '\\u003e');

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
    .btn-report{background:#10b981;color:white;padding:.45rem 1.1rem;border-radius:6px;font-size:.8rem;font-weight:600;margin-left:.5rem}
    .btn-report:hover{background:#059669}

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
  <a href="#analytics-config">🛡️ Filtros Analytics</a>
  <a href="#meta-tags">🏷️ Meta Tags</a>
  <a href="#broken-links">💀 Links Rotos</a>
  <a href="#audits">🔦 Audits</a>
</nav>

<header>
  <h1>🔦 Lighthouse Reporter</h1>
  <p>${escHtml(siteName)} · ${total} página${total !== 1 ? 's' : ''} auditada${total !== 1 ? 's' : ''} · ${date}</p>
  <div class="header-actions">
    <button class="btn-csv" onclick="downloadCSV()">⬇ Exportar CSV</button>
    <a class="btn-report" href="./client-report.html" target="_blank" style="text-decoration:none;display:inline-block;line-height:1.5;">📄 Reporte para Cliente</a>
  </div>
</header>

<div class="summary" id="summary">
  ${
    previousReports.length > 1
      ? `
  <div style="margin-bottom:1rem;text-align:center">
    <button onclick="toggleComparison()" id="compareBtn" style="background:#3b82f6;color:white;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-size:14px">Ver comparación histórica</button>
    <div id="comparisonSelector" style="display:none;margin-top:.5rem">
      <select id="prevReportSelect" onchange="loadComparison(this.value)" style="padding:4px;border:1px solid #d1d5db;border-radius:4px">
        <option value="">Seleccionar reporte anterior</option>
        ${previousReports
          .slice(1)
          .map((r) => `<option value="${r}">${r.replace('T', ' ')}</option>`)
          .join('')}
      </select>
    </div>
  </div>
  `
      : ''
  }
  <span class="summary-title">Promedios del sitio</span>
   ${scoreRing(avgPerf, 'Performance')}
   ${scoreRing(avgAcc, 'Accesibilidad')}
   ${scoreRing(avgBP, 'Best Practices')}
   ${scoreRing(avgSEO, 'SEO')}
   ${
     comparison
       ? `
   <span class="summary-title" style="margin-top:1rem">Comparación vs reporte anterior</span>
   ${comparison.performance !== 0 ? scoreRing(comparison.performance, 'Performance', true) : ''}
   ${comparison.accessibility !== 0 ? scoreRing(comparison.accessibility, 'Accesibilidad', true) : ''}
   ${comparison.bestPractices !== 0 ? scoreRing(comparison.bestPractices, 'Best Practices', true) : ''}
   ${comparison.seo !== 0 ? scoreRing(comparison.seo, 'SEO', true) : ''}
   `
       : ''
   }
  ${
    brokenLinks.length > 0
      ? `<span class="badge-error" style="margin-left:auto">💀 ${brokenLinks.length} link${brokenLinks.length !== 1 ? 's' : ''} roto${brokenLinks.length !== 1 ? 's' : ''}</span>`
      : `<span class="badge-ok" style="margin-left:auto">💀 Sin links rotos</span>`
  }
</div>

${analyticsFilterSection()}
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
const CSV_DATA = ${csvJson};

function downloadCSV() {
  const blob = new Blob([CSV_DATA], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'lighthouse-report-${escHtml(siteName)}.csv';
  a.click();
  URL.revokeObjectURL(url);
}

let currentData = null;
let comparisonData = null;

// Cargar datos actuales
fetch('./results.json').then(r => r.json()).then(d => currentData = d);

function toggleComparison() {
  const sel = document.getElementById('comparisonSelector');
  sel.style.display = sel.style.display === 'none' ? 'block' : 'none';
}

async function loadComparison(timestamp) {
  if (!timestamp) {
    const compDiv = document.getElementById('comparisonSection');
    if (compDiv) compDiv.remove();
    return;
  }
  try {
    const response = await fetch('./history/' + timestamp + '.json');
    comparisonData = await response.json();
    updateComparison(timestamp);
  } catch (err) {
    alert('Error cargando reporte: ' + err.message);
  }
}

function updateComparison(timestamp) {
  if (!comparisonData) return;

  const prevTotal = comparisonData.results.length;
  const prevAvgPerf = Math.round(comparisonData.results.reduce((s,r) => s+r.scores.performance, 0) / prevTotal);
  const prevAvgAcc = Math.round(comparisonData.results.reduce((s,r) => s+r.scores.accessibility, 0) / prevTotal);
  const prevAvgBP = Math.round(comparisonData.results.reduce((s,r) => s+r.scores.bestPractices, 0) / prevTotal);
  const prevAvgSEO = Math.round(comparisonData.results.reduce((s,r) => s+r.scores.seo, 0) / prevTotal);

  const currTotal = currentData.results.length;
  const avgPerf = Math.round(currentData.results.reduce((s,r) => s+r.scores.performance, 0) / currTotal);
  const avgAcc = Math.round(currentData.results.reduce((s,r) => s+r.scores.accessibility, 0) / currTotal);
  const avgBP = Math.round(currentData.results.reduce((s,r) => s+r.scores.bestPractices, 0) / currTotal);
  const avgSEO = Math.round(currentData.results.reduce((s,r) => s+r.scores.seo, 0) / currTotal);

  const comparison = {
    performance: avgPerf - prevAvgPerf,
    accessibility: avgAcc - prevAvgAcc,
    bestPractices: avgBP - prevAvgBP,
    seo: avgSEO - prevAvgSEO
  };

  const summary = document.getElementById('summary');
  let compDiv = document.getElementById('comparisonSection');
  if (!compDiv) {
    compDiv = document.createElement('div');
    compDiv.id = 'comparisonSection';
    summary.appendChild(compDiv);
  }

  compDiv.innerHTML = '<span class="summary-title">Comparación vs ' + timestamp.replace('T', ' ') + '</span>' +
    (comparison.performance !== 0 ? scoreRing(comparison.performance, 'Performance', true) : '') +
    (comparison.accessibility !== 0 ? scoreRing(comparison.accessibility, 'Accesibilidad', true) : '') +
    (comparison.bestPractices !== 0 ? scoreRing(comparison.bestPractices, 'Best Practices', true) : '') +
    (comparison.seo !== 0 ? scoreRing(comparison.seo, 'SEO', true) : '');
}

function scoreRing(score, label, isComparison = false) {
  const absScore = Math.abs(score);
  const color = isComparison ? (score > 0 ? '#10b981' : '#ef4444') : scoreColor(absScore);
  const dash = Math.round(absScore * 1.76);
  const sign = isComparison && score !== 0 ? (score > 0 ? '+' : '') : '';
  const displayScore = isComparison ? score : absScore;
  return '<div class="score-ring"><svg viewBox="0 0 64 64" width="56" height="56"><circle cx="32" cy="32" r="28" fill="none" stroke="#e8e8e8" stroke-width="6"/><circle cx="32" cy="32" r="28" fill="none" stroke="' + color + '" stroke-width="6" stroke-dasharray="' + dash + ' 176" stroke-linecap="round" transform="rotate(-90 32 32)"/><text x="32" y="37" text-anchor="middle" font-size="15" font-weight="bold" fill="' + color + '">' + sign + displayScore + '</text></svg><span class="ring-label">' + label + '</span></div>';
}

function scoreColor(score) {
  if (score >= 90) return '#10b981';
  if (score >= 50) return '#f59e0b';
  return '#ef4444';
}
</script>
</body>
</html>`;

  const outFile = join(outputDir, 'index.html');
  writeFileSync(outFile, html, 'utf-8');

  const clientReportFile = join(outputDir, 'client-report.html');
  writeFileSync(clientReportFile, buildClientReportHtml(results, brokenLinks, siteName, date), 'utf-8');

  const jsonFile = join(outputDir, 'results.json');
  writeFileSync(
    jsonFile,
    JSON.stringify({ site: siteName, date, results, brokenLinks }, null, 2),
    'utf-8'
  );

  // Guardar en historial
  const timestamp = date.replace(/:/g, '-').replace(/ /g, 'T').slice(0, 19);
  const historyFile = join(outputDir, 'history', `${timestamp}.json`);
  writeFileSync(
    historyFile,
    JSON.stringify({ site: siteName, date, results, brokenLinks }, null, 2),
    'utf-8'
  );
  previousReports.unshift(timestamp);

  return outFile;
}
