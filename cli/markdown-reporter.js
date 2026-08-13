/**
 * markdown-reporter.js
 * Genera un archivo Markdown conciso con URL, problema y solución
 * para pasar a una IA como contexto de trabajo.
 */

// Soluciones directas mapeadas al ID de cada auditoría de Lighthouse
const AUDIT_SOLUTIONS = {
  // Rendimiento
  'uses-optimized-images':            'Comprimir imágenes con TinyPNG, Squoosh o imagemin',
  'uses-webp-images':                 'Convertir imágenes a WebP/AVIF y servir con <picture>',
  'render-blocking-resources':        'Añadir defer/async al JS y cargar CSS crítico inline',
  'unused-css-rules':                 'Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente)',
  'unused-javascript':                'Code splitting y defer en JS no necesario en la carga inicial',
  'uses-text-compression':            'Habilitar GZIP o Brotli en el servidor web',
  'efficient-animated-content':       'Reemplazar GIFs por <video autoplay loop muted playsinline>',
  'offscreen-images':                 'Añadir loading="lazy" a imágenes bajo el fold',
  'uses-responsive-images':           'Servir imágenes dimensionadas con srcset y sizes',
  'largest-contentful-paint-element': 'Precargar el recurso LCP con <link rel="preload">; no aplicarle lazy-load',
  'total-blocking-time':              'Dividir tareas JS largas (>50 ms); mover lógica a web workers',
  'cumulative-layout-shift':          'Definir width y height en imágenes y embeds para reservar espacio',
  'server-response-time':             'Reducir TTFB: habilitar caché de servidor o añadir CDN',
  'uses-long-cache-ttl':              'Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint',
  'avoid-enormous-network-payloads':  'Comprimir y eliminar recursos innecesarios para reducir el peso total',
  'dom-size':                         'Reducir nodos DOM (objetivo <800); virtualizar listas largas',
  'bootup-time':                      'Minimizar y dividir bundles JS; eliminar librerías pesadas no utilizadas',
  'mainthread-work-breakdown':        'Diferir procesamiento no crítico; usar requestIdleCallback',
  'third-party-summary':              'Cargar scripts de terceros con defer o mediante Partytown',
  'uses-passive-event-listeners':     'Añadir { passive: true } a listeners de scroll y touch',
  'no-document-write':                'Eliminar llamadas a document.write()',
  'speed-index':                      'Optimizar el orden de carga del contenido visible (critical CSS)',
  // Accesibilidad
  'color-contrast':        'Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande)',
  'image-alt':             'Agregar alt descriptivo a cada <img>; alt="" en imágenes decorativas',
  'label':                 'Enlazar cada input con su <label for> o usar aria-label',
  'link-name':             'Agregar texto visible o aria-label a enlaces que solo contienen icono',
  'button-name':           'Agregar texto visible o aria-label a cada <button>',
  'html-has-lang':         'Añadir lang="es" (o el idioma correspondiente) al elemento <html>',
  'meta-viewport':         'Eliminar user-scalable=no del meta viewport',
  'heading-order':         'Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3)',
  'aria-required-attr':    'Agregar los atributos ARIA obligatorios a los roles declarados',
  'aria-valid-attr-value': 'Corregir valores inválidos en atributos aria-*',
  'tabindex':              'Eliminar tabindex > 0; usar tabindex="0" o "-1" según el caso',
  'frame-title':           'Añadir atributo title descriptivo a cada <iframe>',
  'duplicate-id-active':   'Eliminar IDs duplicados en elementos interactivos del DOM',
  // Best Practices
  'no-vulnerable-libraries': 'Actualizar librerías JS con vulnerabilidades detectadas (ver npm audit)',
  'deprecations':            'Eliminar uso de APIs web deprecadas que aparecen en consola',
  'errors-in-console':       'Corregir errores de JavaScript visibles en la consola del navegador',
  'is-on-https':             'Servir todos los recursos por HTTPS; corregir mixed content',
  'image-aspect-ratio':      'Definir width y height en <img> para evitar distorsión de aspecto',
  'geolocation-on-start':    'Solicitar geolocalización solo tras una acción explícita del usuario',
  'csp-xss':                 'Implementar Content-Security-Policy para prevenir ataques XSS',
  // SEO Lighthouse
  'meta-description':  'Agregar <meta name="description"> de 70-160 caracteres',
  'tap-targets':       'Aumentar tamaño mínimo de botones y enlaces a 48×48 px en móvil',
  'font-size':         'Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil)',
  'crawlable-anchors': 'Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos',
  'is-crawlable':      'Verificar que robots.txt y meta robots no bloqueen la indexación',
  'canonical':         'Añadir <link rel="canonical"> apuntando a la URL canónica correcta',
  'hreflang':          'Corregir atributos hreflang para que sean códigos de idioma/región válidos',
  'structured-data':   'Corregir errores en el marcado Schema.org detectados por Google',
};

function auditSolution(id) {
  return AUDIT_SOLUTIONS[id] ?? null;
}

// Deduce la solución para los problemas detectados por el crawler
function seoIssueSolution(msg) {
  const m = msg.toLowerCase();
  if (m.includes('title') && (m.includes('sin') || m.includes('corto') || m.includes('largo')))
    return 'Ajustar <title> a entre 30 y 60 caracteres';
  if (m.includes('description') && (m.includes('sin') || m.includes('corta') || m.includes('larga') || m.includes('falta')))
    return 'Agregar/ajustar <meta name="description"> a 70-160 caracteres';
  if (m.includes('h1'))
    return 'Añadir exactamente un <h1> con la keyword principal de la página';
  if (m.includes('noindex') || m.includes('no-index'))
    return 'Revisar meta robots; eliminar noindex si la página debe indexarse';
  if (m.includes('canonical'))
    return 'Corregir <link rel="canonical"> para que apunte a esta misma URL';
  if (m.includes('palabra') || m.includes('contenido') || m.includes('escaso'))
    return 'Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO';
  return 'Revisar y corregir según las buenas prácticas de SEO';
}

function brokenLinkSolution(status) {
  if (status === 404) return 'Crear redirección 301 hacia la URL correcta o eliminar el enlace';
  if (status >= 500) return 'Corregir el error del servidor; revisar logs';
  if (String(status).toLowerCase().includes('timeout')) return 'Verificar tiempo de respuesta del servidor';
  return 'Verificar disponibilidad del recurso y actualizar el enlace';
}

export function buildMarkdownReport(results, brokenLinks, siteName, date) {
  const lines = [];

  lines.push(`# Auditoría: ${siteName}`);
  lines.push(`*${date} · ${results.length} páginas auditadas · ${brokenLinks.length} links rotos*`);
  lines.push('');
  lines.push('Contexto: auditoría automática con Google Lighthouse. Cada fila representa un problema accionable con su solución recomendada. Aplica los cambios según prioridad: 🔴 errores primero, 🟡 advertencias después, 🔵 informativo.');
  lines.push('');

  // ── LINKS ROTOS ──────────────────────────────────────────────────────────────
  if (brokenLinks.length > 0) {
    lines.push('## Links rotos');
    lines.push('');
    lines.push('| URL rota | Estado | Encontrado en | Solución |');
    lines.push('|---|---|---|---|');
    for (const b of brokenLinks) {
      lines.push(`| ${b.url} | ${b.status} | ${b.foundOn} | ${brokenLinkSolution(b.status)} |`);
    }
    lines.push('');
  }

  // ── PROBLEMAS POR PÁGINA ─────────────────────────────────────────────────────
  const pagesWithIssues = results.filter((r) => {
    const hasLowScore =
      r.scores.performance < 90 ||
      r.scores.accessibility < 90 ||
      r.scores.bestPractices < 90 ||
      r.scores.seo < 90;
    const hasMetaIssues = (r.meta?.issues?.length ?? 0) > 0;
    const hasOpps = (r.opportunities?.length ?? 0) > 0;
    const hasDiags = (r.diagnostics?.length ?? 0) > 0;
    return hasLowScore || hasMetaIssues || hasOpps || hasDiags;
  });

  if (pagesWithIssues.length === 0) {
    lines.push('## Páginas');
    lines.push('');
    lines.push('Sin problemas detectados. Todos los puntajes están en 90 o más.');
    return lines.join('\n');
  }

  lines.push('## Problemas por página');
  lines.push('');

  for (const r of pagesWithIssues) {
    const path = r.url.replace(/^https?:\/\/[^/]+/, '') || '/';

    lines.push(`### ${r.url}`);
    lines.push(
      `Perf: **${r.scores.performance}** | SEO: **${r.scores.seo}** | Accesib: **${r.scores.accessibility}** | BP: **${r.scores.bestPractices}**`
    );
    lines.push('');

    const rows = [];

    // Problemas SEO detectados por el crawler
    for (const issue of r.meta?.issues ?? []) {
      const sev = issue.type === 'error' ? '🔴' : issue.type === 'warning' ? '🟡' : '🔵';
      rows.push([`${sev} SEO`, issue.msg, seoIssueSolution(issue.msg)]);
    }

    // Oportunidades de rendimiento de Lighthouse
    for (const opp of r.opportunities ?? []) {
      if (opp.score >= 90) continue;
      const solution =
        auditSolution(opp.id) ??
        (opp.description ? opp.description.split('. ')[0] : null) ??
        'Ver detalles en el reporte HTML';
      const savings = opp.displayValue ? ` (${opp.displayValue})` : '';
      rows.push(['🔧 Rendimiento', opp.title + savings, solution]);
    }

    // Diagnósticos (accesibilidad, best practices, SEO de Lighthouse)
    for (const diag of r.diagnostics ?? []) {
      if (diag.score >= 90) continue;
      const solution =
        auditSolution(diag.id) ??
        (diag.description ? diag.description.split('. ')[0] : null) ??
        'Ver detalles en el reporte HTML';
      const detail = diag.displayValue ? ` (${diag.displayValue})` : '';
      rows.push(['🔍 Diagnóstico', diag.title + detail, solution]);
    }

    if (rows.length > 0) {
      lines.push('| Categoría | Problema | Solución |');
      lines.push('|---|---|---|');
      for (const row of rows) {
        // Escapar pipes dentro de las celdas para no romper la tabla Markdown
        lines.push(`| ${row.map((c) => c.replace(/\|/g, '\\|')).join(' | ')} |`);
      }
    } else {
      lines.push('*Scores por debajo de 90 sin oportunidades específicas registradas.*');
    }

    lines.push('');
  }

  return lines.join('\n');
}
