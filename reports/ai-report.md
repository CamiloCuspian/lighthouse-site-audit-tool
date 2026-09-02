# Auditoría: 127.0.0.1
*6/8/2026, 2:12:27 p. m. · 309 páginas auditadas · 1 links rotos*

Contexto: auditoría automática con Google Lighthouse. Cada fila representa un problema accionable con su solución recomendada. Aplica los cambios según prioridad: 🔴 errores primero, 🟡 advertencias después, 🔵 informativo.

## Links rotos

| URL rota | Estado | Encontrado en | Solución |
|---|---|---|---|
| http://127.0.0.1:4000/blog/content-approval-workflow | 404 | http://127.0.0.1:4000/blog/brand-consistency-guide | Crear redirección 301 hacia la URL correcta o eliminar el enlace |

## Problemas por página

### http://127.0.0.1:4000
Perf: **67** | SEO: **92** | Accesib: **97** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 600 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 149 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 17 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 230 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers (Est savings of 5 KiB) | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Displays images with incorrect aspect ratio | Definir width y height en <img> para evitar distorsión de aspecto |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 920 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (43 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 146 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### http://127.0.0.1:4000/microsite-builder
Perf: **64** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 630 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 300 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 122 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Enable text compression (Est savings of 111 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 280 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 534 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Image elements have `[alt]` attributes that are redundant text. | Informative elements should aim for short, descriptive alternative text |
| 🔍 Diagnóstico | Skip links are not focusable. | Including a skip link can help users skip to the main content to save time |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (58.14% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,322 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 316 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,560 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/platform-key-features
Perf: **60** | SEO: **92** | Accesib: **95** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 135 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Enable text compression (Est savings of 103 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 307 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 534 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 0 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 604 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Skip links are not focusable. | Including a skip link can help users skip to the main content to save time |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (30.6% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (6 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,456 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 837 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,600 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/platform-site-editor
Perf: **58** | SEO: **92** | Accesib: **95** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 148 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Enable text compression (Est savings of 104 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 280 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 534 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 0 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Skip links are not focusable. | Including a skip link can help users skip to the main content to save time |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (33.03% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (6 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,367 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 738 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/platform-security-features
Perf: **64** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 650 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 680 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 121 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Enable text compression (Est savings of 102 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 261 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 534 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Skip links are not focusable. | Including a skip link can help users skip to the main content to save time |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (34.5% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,362 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 756 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,800 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/platform-data-analytics
Perf: **64** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 290 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 122 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Enable text compression (Est savings of 102 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 1,303 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 534 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Skip links are not focusable. | Including a skip link can help users skip to the main content to save time |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (38.03% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2,397 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 1,800 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,560 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/platform-integrations
Perf: **67** | SEO: **92** | Accesib: **94** | BP: **89**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 630 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 800 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 148 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Enable text compression (Est savings of 102 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 534 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Displays images with incorrect aspect ratio | Definir width y height en <img> para evitar distorsión de aspecto |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Skip links are not focusable. | Including a skip link can help users skip to the main content to save time |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (32.12% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,028 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,760 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/platform-support-services
Perf: **63** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 630 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 500 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 101 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Enable text compression (Est savings of 101 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 782 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 534 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Skip links are not focusable. | Including a skip link can help users skip to the main content to save time |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (34.06% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,963 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 1,362 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,760 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/learning
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 15 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 126 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 0 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (48.12% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (4 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 658 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 71 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,950 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |

### http://127.0.0.1:4000/marketing
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 15 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 127 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 0 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (46.08% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (4 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 679 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 94 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,950 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |

### http://127.0.0.1:4000/recruiting
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 15 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 127 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 0 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (48.63% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (4 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 642 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 56 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,950 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |

### http://127.0.0.1:4000/sales
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 15 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 129 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 0 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (53.76% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (4 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 607 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,960 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/campaign-microsite
Perf: **61** | SEO: **92** | Accesib: **91** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 15 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 141 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Enable text compression (Est savings of 128 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 0 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements with `role="dialog"` or `role="alertdialog"` do not have accessible names. | ARIA dialog elements without accessible names may prevent screen readers users from discerning the purpose of these elements |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<frame>` or `<iframe>` elements do not have a title | Añadir atributo title descriptivo a cada <iframe> |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (10 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 568 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 27 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,300 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/creative-agencies
Perf: **67** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 750 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 18 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 148 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 6 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (57.12% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (10 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 716 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 113 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,870 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/recruitment-agencies
Perf: **67** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 440 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 18 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 150 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (59.08% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (10 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 694 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 118 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/lead-generation
Perf: **68** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 740 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 17 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 148 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (54.58% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (10 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 665 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 99 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,860 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/sales-enablement
Perf: **68** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 440 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 18 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 151 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (56.18% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (10 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 611 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/customer-success
Perf: **66** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (9 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 630 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 17 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 150 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (55.59% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (10 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 702 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 103 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/account-based-marketing
Perf: **67** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 560 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 17 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 150 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (54.54% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (10 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 622 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 59 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,820 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/content-marketing
Perf: **66** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 134 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 590 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 18 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 150 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (59.22% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (10 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 836 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 193 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/contest-microsite
Perf: **68** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 790 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 147 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 17 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (50.7% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (10 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 596 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,910 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (26 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/product-microsite
Perf: **67** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 640 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 18 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 150 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (51.11% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (10 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 646 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 76 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,910 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/inspiration
Perf: **67** | SEO: **92** | Accesib: **96** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 420 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 133 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Avoid an excessive DOM size (965 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 875 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,540 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/academy
Perf: **61** | SEO: **92** | Accesib: **96** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 900 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 106 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 3 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (29.95% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 758 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |

### http://127.0.0.1:4000/blog
Perf: **71** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,430 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 120 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 105 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (23.76% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (3 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 667 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 164 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (15 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/case-studies
Perf: **69** | SEO: **92** | Accesib: **93** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 600 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 17 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 135 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links rely on color to be distinguishable. | Low-contrast text is difficult or impossible for many users to read |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (35.36% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (7 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 593 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,870 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/faq
Perf: **72** | SEO: **92** | Accesib: **97** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 420 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 130 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 425 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,540 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (11 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/reviews
Perf: **69** | SEO: **92** | Accesib: **96** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 630 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 790 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 12 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 120 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 543 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,760 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (35 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/whitepapers
Perf: **64** | SEO: **92** | Accesib: **96** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 630 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 95 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (39.61% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 667 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,750 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/design-services
Perf: **70** | SEO: **92** | Accesib: **95** | BP: **89**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (46 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 440 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 12 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 110 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 189 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (44.48% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 762 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,560 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/about
Perf: **71** | SEO: **92** | Accesib: **96** | BP: **89**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 940 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 92 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (34.32% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 566 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,760 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/request-demo
Perf: **73** | SEO: **92** | Accesib: **97** | BP: **89**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (13 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 720 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 9 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 94 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (24.38% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 488 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,530 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (32 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/blog/brand-consistency-guide
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,820 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 518 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/franchise-microsite-guide
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,760 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 523 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,830 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/digital-sales-room-examples
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,970 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 522 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/no-code-microsite-builder-guide
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,380 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 138 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 525 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/comparisons
Perf: **74** | SEO: **92** | Accesib: **97** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 870 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 104 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 279 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (48.72% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (9 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,363 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,530 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (20 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/events
Perf: **70** | SEO: **92** | Accesib: **97** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,040 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 121 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 64 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (28.83% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 596 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,860 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/esg
Perf: **69** | SEO: **92** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (14 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 100 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 300 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 0 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 84 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Efficiently encode images (Est savings of 72 KiB) | Comprimir imágenes con TinyPNG, Squoosh o imagemin |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Skip links are not focusable. | Including a skip link can help users skip to the main content to save time |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (3 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 940 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,480 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (20 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/legal-privacy
Perf: **73** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (14 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 760 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 9 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 108 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers (Est savings of 5 KiB) | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 456 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,570 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (11 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/security
Perf: **76** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 920 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 9 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 88 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 43 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers (Est savings of 5 KiB) | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 456 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,730 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (11 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 20 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### http://127.0.0.1:4000/terms
Perf: **73** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (14 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 780 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 108 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 43 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Minify CSS (Est savings of 9 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 456 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,600 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (11 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/use-cases
Perf: **67** | SEO: **92** | Accesib: **97** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 730 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 15 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 127 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 41 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 71 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (37.86% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 990 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,840 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (26 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/blog/what-is-a-digital-sales-room
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,530 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 146 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 552 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/sales/rfp-response-guide
Perf: **69** | SEO: **85** | Accesib: **96** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 14 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 52 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 127 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 0 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 615 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 88 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/sales/proposal-templates
Perf: **68** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 14 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 241 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 130 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 0 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 781 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (21 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/sales/rfp-templates
Perf: **68** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 30 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 14 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 129 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 241 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 789 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (21 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/sales/one-pager-templates
Perf: **68** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 14 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 52 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 130 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 0 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 672 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (17 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/sales/business-proposal-examples
Perf: **67** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 30 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 14 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 575 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 132 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,208 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (17 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/sales/proposal-presentation-guide
Perf: **67** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 40 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 14 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 131 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 241 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 883 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,910 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (22 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/blog/microsite-vs-website-whats-the-difference
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,540 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 140 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 534 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/what-is-an-abm-campaign
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,380 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 156 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 527 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/inspiration/onboarding-portal-examples
Perf: **68** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 30 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 14 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 128 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 241 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 41 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 829 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/inspiration/campaign-microsite-examples
Perf: **69** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 40 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 14 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 52 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 128 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 602 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (17 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/blog/microsite-vs-landing-page
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,820 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 135 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 524 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,880 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/inspiration/sales-microsite-examples
Perf: **66** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 14 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 241 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 131 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 0 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,046 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (27 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/inspiration/rfp-microsite-examples
Perf: **68** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 30 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 14 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 52 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 126 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 692 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (18 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/inspiration/abm-landing-page-examples
Perf: **68** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 14 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 241 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 127 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 0 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 797 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,710 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 61 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### http://127.0.0.1:4000/academy/introduction-zoomforth-dashboard
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 95 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (54.76% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/academy/introduction-sites-templates-dashboard
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 94 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (53.94% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,810 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/academy/introduction-themes-sites
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (64 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 93 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (39.65% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/academy/introduction-zoomforth-media-library
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 94 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (51.44% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/academy/duplicating-site-creating-site-from-template
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,220 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 94 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (48.97% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,670 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/academy/add-navigation-zoomforth-sites
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **79**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 96 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/academy/add-sections-content-zoomforth-sites
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 94 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (46.41% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,810 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/academy/sections-how-to-use
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 94 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (51.62% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,650 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/academy/grid-sections-depth
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 93 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (45.78% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,650 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/academy/using-tile-section-animations
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 93 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (41.29% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/academy/adding-images-tiles-with-captions-descriptions
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 94 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (46.75% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |

### http://127.0.0.1:4000/academy/using-text-tiles-adding-links
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 94 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 532 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (56.78% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |

### http://127.0.0.1:4000/academy/how-order-tiles-on-mobile
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 94 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (46.92% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/academy/adding-and-editing-forms
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 95 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (59.37% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/academy/publish-sites-and-enable
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 94 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (46.97% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,650 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/academy/how-secure-zoomforth-sites
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,210 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 94 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (52.25% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,810 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/academy/create-links-for-microsites
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 93 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (37.41% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/academy/managing-zoomforth-sites
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,210 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 94 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (50% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,660 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/academy/introduction-zoomforth-microsite-analytics
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 95 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (55.39% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/academy/introduction-css-classes
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 94 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (50.07% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/academy/style-guide
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **79**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,050 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 99 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/academy/image-tiles
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **79**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,050 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 100 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/academy/text-tiles
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **79**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 97 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/academy/spacing-alignment
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **79**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 95 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,650 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/academy/tagging-filtering
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **79**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 93 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,650 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/academy/designing-mobile
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **79**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,050 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 100 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/academy/custom-embeds
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **79**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 94 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,650 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/academy/accessibility
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **79**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,050 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 103 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/academy/design-best-practices
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **79**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (15 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 95 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,650 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/academy/collaboration-tool-overview
Perf: **61** | SEO: **92** | Accesib: **97** | BP: **79**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (21 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,200 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 97 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 523 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Uses third-party cookies (3 cookies found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (5 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,000 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,800 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/blog/content-marketing
Perf: **64** | SEO: **92** | Accesib: **96** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Contenido escaso (~193 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,740 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 94 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 115 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 62 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (21.38% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 668 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/account-based-marketing-strategy-guide
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,480 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 149 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 536 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/digital-proposals
Perf: **65** | SEO: **92** | Accesib: **96** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,590 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 69 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 130 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 97 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (30.59% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 827 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,910 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/digital-transformation
Perf: **65** | SEO: **92** | Accesib: **96** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,750 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Enable text compression (Est savings of 122 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 56 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (29.53% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 774 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 241 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,910 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/employee-engagement
Perf: **60** | SEO: **92** | Accesib: **96** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Contenido escaso (~264 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,890 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 352 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Efficiently encode images (Est savings of 246 KiB) | Comprimir imágenes con TinyPNG, Squoosh o imagemin |
| 🔧 Rendimiento | Enable text compression (Est savings of 118 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 320 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (25.46% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,227 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 3,060 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/landing-page
Perf: **60** | SEO: **92** | Accesib: **96** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,840 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 330 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Efficiently encode images (Est savings of 225 KiB) | Comprimir imágenes con TinyPNG, Squoosh o imagemin |
| 🔧 Rendimiento | Enable text compression (Est savings of 124 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 426 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (26.49% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,528 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 3,000 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/marketing
Perf: **64** | SEO: **92** | Accesib: **96** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,740 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 62 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 124 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 42 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (28.85% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 682 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,910 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/what-is-a-microsite
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,820 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 151 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 531 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,880 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/rfp-responses
Perf: **64** | SEO: **92** | Accesib: **96** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Contenido escaso (~236 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,670 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 100 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 116 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 99 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (24.99% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 747 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,830 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/sales
Perf: **60** | SEO: **92** | Accesib: **96** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,740 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 72 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 172 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 68 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Avoid an excessive DOM size (1,247 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (40.93% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 784 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,910 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/how-to-make-an-online-proposal-with-a-microsite
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,630 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 530 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/how-to-make-your-website-more-accessible
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,780 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 133 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 530 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/winning-more-business-with-microsite-data-analytics
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,630 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 133 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 529 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/zoomforth-top-sales-enablement-company
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (61 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,940 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 128 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (37.75% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 543 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/client-onboarding-tool
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,370 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 524 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/recruitment-microsite-guide
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,820 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 138 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 522 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/client-onboarding-portal
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,380 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 524 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/campaign-microsite-guide
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 527 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/best-buyer-enablement-tools
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,480 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 140 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 12 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 573 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/client-kickoff-meeting-guide
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,380 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 530 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/best-microsite-builders
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,380 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 523 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/onboarding-email-templates
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,670 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 138 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 519 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/page2
Perf: **70** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,590 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 121 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 128 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (24.13% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 703 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 194 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 3,050 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (15 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/blog/page3
Perf: **69** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,250 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 121 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 268 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers (Est savings of 5 KiB) | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (24.23% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (3 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 918 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,710 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (15 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/blog/page4
Perf: **70** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,400 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 121 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 174 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers (Est savings of 5 KiB) | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (24.18% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (3 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 771 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,860 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (15 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 254 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### http://127.0.0.1:4000/blog/page5
Perf: **69** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,370 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 121 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 1,637 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (24.15% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (3 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2,433 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,840 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (15 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/blog/page6
Perf: **72** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,360 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 121 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (24.28% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (3 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 584 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,830 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (15 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/blog/page7
Perf: **72** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,430 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 121 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (24.18% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (3 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 584 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 59 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (15 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/blog/page8
Perf: **69** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,430 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 121 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 272 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (24.41% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (3 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 893 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 367 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (15 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/blog/page9
Perf: **72** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,440 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 121 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (23.95% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (3 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 577 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 56 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (15 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/blog/page10
Perf: **67** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,440 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 121 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 549 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (24.06% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (3 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,385 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 840 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (15 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/blog/page11
Perf: **67** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,440 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 121 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 673 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (23.97% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (3 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,578 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 1,035 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (15 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/blog/page12
Perf: **72** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,440 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 121 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (23.82% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (3 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 570 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 49 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,910 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (15 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/blog/page13
Perf: **70** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,360 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 121 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 220 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (24.16% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (3 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 844 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 317 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,820 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (15 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/blog/page14
Perf: **66** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,430 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 121 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 2,432 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (24.18% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (3 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 3,207 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 2,675 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (15 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/blog/page15
Perf: **71** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,430 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 121 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (24.65% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (3 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 634 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 104 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (15 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/blog/page16
Perf: **72** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Contenido escaso (~291 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,440 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 116 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (21.22% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (3 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 554 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,910 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (13 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 48 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### http://127.0.0.1:4000/case-studies/salesloft
Perf: **71** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 720 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 97 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 189 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 657 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,530 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (15 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 99 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### http://127.0.0.1:4000/case-studies/big-four
Perf: **71** | SEO: **92** | Accesib: **97** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 740 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 97 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 189 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (56.38% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 684 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,550 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (18 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/case-studies/agoria-solar-team
Perf: **70** | SEO: **92** | Accesib: **97** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 930 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 97 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 189 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (50.92% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 798 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,750 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (18 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/case-studies/braze
Perf: **71** | SEO: **92** | Accesib: **97** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 930 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 97 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 189 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (48.66% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 708 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,750 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (18 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/case-studies/the-orientation-company
Perf: **70** | SEO: **92** | Accesib: **97** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,080 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 96 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 197 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 9 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers (Est savings of 5 KiB) | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (53.54% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 762 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (16 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/case-studies/global-consulting-firm
Perf: **68** | SEO: **92** | Accesib: **97** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image (Est savings of 620 ms) | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 930 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 189 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 96 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (47.31% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 706 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 114 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,740 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (16 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/blog/zoomforth-recognised-as-high-performer-in-g2-winter-2023-report
Perf: **68** | SEO: **85** | Accesib: **92** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 115 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,980 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 129 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (49.24% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 697 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 57 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### http://127.0.0.1:4000/digital-sales-proposals-guide
Perf: **67** | SEO: **92** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 14 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 261 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 149 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 0 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 764 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,910 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (24 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/digital-client-experiences
Perf: **66** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 14 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 261 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 161 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 0 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 919 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (22 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid an excessive DOM size (1,067 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |

### http://127.0.0.1:4000/content-experience-platform-guide
Perf: **67** | SEO: **92** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 14 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 261 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 153 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 0 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 772 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,700 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/sales-content-experiences
Perf: **67** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 14 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 261 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 0 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 41 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 853 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 101 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/evaluate-content-experience-platform
Perf: **68** | SEO: **92** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 70 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 14 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 535 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 132 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,020 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,640 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (14 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/about/wendie-michie
Perf: **74** | SEO: **92** | Accesib: **95** | BP: **89**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 920 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 99 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Skip links are not focusable. | Including a skip link can help users skip to the main content to save time |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (48.01% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 486 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,740 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (15 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/blog/content-platform-evaluation-checklist
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,530 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 141 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 531 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/alt-text-best-practices-microsite-accessibility
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 536 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/how-to-create-a-content-experience-that-targets-and-converts
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,340 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 138 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 532 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/interactive-proposal-examples
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,290 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 531 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/best-microsite-builder-has-these-essential-features
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,790 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 138 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 522 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/how-to-create-a-microsite
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,930 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 527 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,840 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/comparisons/canva-for-presentations
Perf: **69** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 630 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,670 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 112 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 189 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 33 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 743 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,580 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (35 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |

### http://127.0.0.1:4000/comparisons/genially-alternatives
Perf: **69** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,580 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 113 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 46 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 199 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 189 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Reduce the impact of third-party code (Third-party code blocked the main thread for 490 ms) | Cargar scripts de terceros con defer o mediante Partytown |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 761 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 185 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,500 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/comparisons/prezi-vs-zoomforth
Perf: **69** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 630 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,700 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 112 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 41 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 199 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 189 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Reduce the impact of third-party code (Third-party code blocked the main thread for 510 ms) | Cargar scripts de terceros con defer o mediante Partytown |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 762 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 187 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/comparison-ceros
Perf: **69** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,600 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 114 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 49 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 199 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 189 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 752 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 171 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,510 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Reduce the impact of third-party code (Third-party code blocked the main thread for 400 ms) | Cargar scripts de terceros con defer o mediante Partytown |

### http://127.0.0.1:4000/comparison-foleon
Perf: **70** | SEO: **92** | Accesib: **97** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 630 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,430 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 104 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 189 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 45 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (53.27% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 736 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 164 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,490 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |

### http://127.0.0.1:4000/comparison-tiled
Perf: **70** | SEO: **92** | Accesib: **97** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,450 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 104 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 53 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 189 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (59.24% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 749 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 176 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,510 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/comparison-turtl
Perf: **69** | SEO: **92** | Accesib: **97** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,580 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 103 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 50 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 189 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers (Est savings of 5 KiB) | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (53.58% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 747 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 173 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,640 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/comparison-qwilr
Perf: **69** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 630 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,590 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 11 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 112 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 39 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 199 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 189 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Reduce the impact of third-party code (Third-party code blocked the main thread for 470 ms) | Cargar scripts de terceros con defer o mediante Partytown |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 730 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 156 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,500 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/sales-enablement-tools
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,430 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 144 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 12 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 573 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,790 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/what-is-buyer-enablement
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,610 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 138 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 531 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,830 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/pandadoc-alternatives
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,300 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 520 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,810 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/highspot-alternatives
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,440 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 141 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 541 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,810 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/highspot-seismic-alternatives
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,530 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 140 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 520 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/dock-alternatives
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,370 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 520 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/getaccept-alternatives
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,480 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 141 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 539 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,840 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/what-is-a-client-portal
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 141 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 539 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/client-portal-software
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,320 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 535 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,830 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/how-to-respond-to-an-rfp
Perf: **71** | SEO: **85** | Accesib: **89** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,920 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 140 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Form elements do not have associated labels | Enlazar cada input con su <label for> o usar aria-label |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 563 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/how-to-influence-a-potential-customer-that-you-never-met
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,680 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 534 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/abm/abm-landing-pages-guide
Perf: **68** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 14 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 52 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 132 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 0 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 687 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 138 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,690 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (21 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/abm/abm-tools-comparison
Perf: **66** | SEO: **92** | Accesib: **97** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 40 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 14 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 764 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 140 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 6 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,294 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (21 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### http://127.0.0.1:4000/blog/benefits-of-account-based-marketing
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,310 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 528 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/interactive-content-examples
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,530 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 140 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 24 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 631 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 131 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/microsite-examples-by-use-case
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,980 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 138 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 537 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/landing-page-vs-website-whats-the-difference
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,930 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 140 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 530 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,840 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/abm-personalization
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,790 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 538 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,860 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/how-to-write-a-business-proposal
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,480 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 521 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/proposal-presentation-template
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,820 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 544 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/competitive-intelligence-proposals
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 135 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 530 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/personalized-proposals-win-rates
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,790 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 135 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 526 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/microsites-for-pursuits-and-proposals
Perf: **66** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 344 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,630 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 138 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 261 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 910 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 72 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/sales-proposal-design-tips
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (13 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,670 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 524 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/does-your-sales-content-strategy-need-a-digital-transformation
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 140 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 535 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/creating-an-effective-design-brief-for-a-digital-sales-proposal
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 141 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 534 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/setting-up-a-team-to-manage-your-content-experience-workflow
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,980 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 541 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/five-ux-rules-for-designing-beautiful-digital-sales-proposals
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,670 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 551 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 53 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/7-things-to-look-for-in-an-interactive-content-platform
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,680 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 527 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/make-a-content-experience-effective
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,670 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 560 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/growing-a-true-brand-with-digital-sales-proposals
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,790 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 133 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 526 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/taking-your-sales-presentations-online-design-dos-and-donts
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,680 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 12 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 558 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/how-to-create-a-killer-sales-deck-with-your-team
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,670 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 134 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 525 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/dont-become-a-statistic-how-to-safely-share-sales-proposals
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,630 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 134 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 531 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,840 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/powerpoint-alternatives-for-a-modern-sales-solution
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,620 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 135 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 550 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,830 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/digital-proposals-change-the-way-you-pitch-clients
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,630 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 543 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/how-to-win-more-rfps-using-multi-media-microsites
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,610 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 529 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,820 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/international-womens-day-2021
Perf: **73** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,130 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 129 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 529 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/creating-microsites-the-21-point-qa-checklist
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (3 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,820 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 141 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 528 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,880 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/preparing-a-business-transformation-strategy
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,620 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 523 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,840 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/building-a-business-case-to-purchase-a-content-experience-platform
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,670 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 135 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 524 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/employee-onboarding-process-benefits
Perf: **67** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 133 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 45 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 745 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 245 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/key-drivers-employee-engagement
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,780 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 131 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 530 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,840 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/onboarding-new-employees-dont-forget-the-checklist
Perf: **65** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 228 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,800 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 133 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,058 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 301 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/keep-your-teams-head-in-the-game
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 132 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 539 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/employee-engagement-measurements-track-and-define-success
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 134 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 536 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/10-employee-engagement-ideas-to-help-your-team-gel
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,780 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 133 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 43 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 730 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 229 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/the-essential-new-employee-onboarding-guide
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,920 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 143 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 539 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,830 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/3-things-to-look-for-in-landing-page-hosting
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,970 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers (Est savings of 5 KiB) | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 565 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 3,040 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/best-b2b-landing-pages
Perf: **68** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 586 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 3,040 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/how-to-create-a-proper-landing-page-for-lead-generation
Perf: **68** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 577 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/creating-a-landing-page-for-your-event-here-is-what-you-need
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 630 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,850 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 534 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,920 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/ppc-landing-page-templates-to-get-the-most-of-your-ad-spend
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (3 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 140 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 524 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/landing-page-monitoring-best-practices-to-boost-your-conversions
Perf: **68** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,770 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 43 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 731 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 231 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/landing-page-anatomy-breaking-down-a-successful-lead-generator
Perf: **67** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,920 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 52 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 778 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 278 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/use-these-5-app-landing-page-templates-for-inspiration
Perf: **68** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 140 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 12 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 571 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 71 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/try-these-conversion-friendly-agency-landing-page-templates
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (21 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,820 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 141 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 525 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/building-a-software-landing-page
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,780 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 535 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/a-landing-page-checklist-to-make-sure-you-have-covered-all-your-bases
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (3 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,780 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 525 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,840 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/building-a-landing-page-mockup-a-step-by-step-guide
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,780 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 138 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 520 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/marketing-trends-2026-innovations
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,680 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 524 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/marketing-crisis-response-campaign-failed
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,610 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 135 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 524 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,820 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/build-marketing-personal-brand
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,780 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 135 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 537 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,840 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/digital-transformation-change-management
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,670 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 530 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/marketing-transformation-90-day-playbook
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,670 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 523 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/data-storytelling-marketing-metrics
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (16 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,780 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 134 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 532 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/presenting-c-suite-get-budget-approved
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,680 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 525 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/marketing-cost-center-to-revenue-driver
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,630 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 530 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,840 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/cmo-survival-guide-budget-cuts
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,680 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 135 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 524 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/marketing-budget-anxiety-prove-value
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (64 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 135 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 524 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/account-based-marketing-plan-template
Perf: **68** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 132 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 52 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 777 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 277 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/abm-vs-lead-gen-vs-demand-gen
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,790 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 133 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 521 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/b2b-content-personalization
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,780 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 528 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,840 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/heres-why-you-should-send-a-microsite-with-every-rfp-response
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 133 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 544 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/10-b2b-sales-tips-to-win-more-rfps
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 133 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 529 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/how-to-compete-with-your-competition-and-win-your-bid-proposal
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,780 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 135 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 530 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/how-to-win-a-contract-bid
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,680 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 539 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/what-is-a-content-hub
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 526 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/client-onboarding-checklist-download
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,980 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 129 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (49.33% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 522 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/sales-deck-examples
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,620 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 528 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,840 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/how-to-write-an-executive-summary-for-a-proposal
Perf: **71** | SEO: **85** | Accesib: **89** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,630 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 138 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Form elements do not have associated labels | Enlazar cada input con su <label for> o usar aria-label |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 524 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/client-onboarding-checklist
Perf: **72** | SEO: **85** | Accesib: **89** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,770 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Form elements do not have associated labels | Enlazar cada input con su <label for> o usar aria-label |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 522 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/b2b-buyer-journey
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,370 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 566 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/how-to-follow-up-on-a-proposal
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,680 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 523 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/case-study-template
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,370 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 526 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,880 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/rfp-response-template
Perf: **69** | SEO: **85** | Accesib: **89** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Form elements do not have associated labels | Enlazar cada input con su <label for> o usar aria-label |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 520 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/proposify-alternatives
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,480 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 140 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 539 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,840 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/how-to-write-a-sales-proposal
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,530 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 140 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 525 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/future-of-b2b-sales-2026
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,680 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 135 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 544 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/client-onboarding-best-practices
Perf: **71** | SEO: **85** | Accesib: **89** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,820 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 140 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Form elements do not have associated labels | Enlazar cada input con su <label for> o usar aria-label |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 547 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,880 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/rescue-deal-about-to-close-competitor
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (35 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 134 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 530 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/client-onboarding-strategy-guide
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,380 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 151 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 528 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/sales-enablement-strategy-guide
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 145 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 524 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/vendor-lock-in-risks-escape-plan
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (62 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,680 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 135 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 528 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/ideal-customer-profile-guide
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,970 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 142 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 534 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/software-implementation-success-rate
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 135 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 523 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/software-selection-mistakes-avoid-buyers-remorse
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (46 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 135 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 528 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/psychology-of-losing-deals
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,630 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 135 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 516 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,840 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/sales-quota-stress-solutions
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (63 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 134 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 529 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/microsites-presales-how-convey-value-and-drive-wins
Perf: **68** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 237 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,670 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 91 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 816 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 305 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/microsites-prospecting-how-increase-engagement-with-prospects
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,780 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 531 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/enterprise-lead-generation-trends
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 131 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 524 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/how-to-shorten-a-sales-cycle-and-close-the-deal
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 516 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/how-to-send-a-cold-email-to-a-potential-client
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 135 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 529 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/4-proven-tactics-to-increase-sales-productivity-and-drive-results
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 132 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 529 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/sales-enablement-vs-sales-operations
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 132 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 535 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/5-must-have-sales-enablement-solutions-for-the-modern-business
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 132 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 524 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/sales-enablement-best-practices
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 132 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 526 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/emotional-intelligence-in-sales-why-and-how-empathy-sells
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 520 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/marketing-and-sales-enablement-whats-the-difference
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,530 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 142 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 518 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/sales-enablement-content-strategy
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 135 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 13 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 560 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/sales-enablement-technology-stack
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 132 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 524 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/6-sales-operations-best-practices-for-optimal-sales-enablement
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,820 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 53 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 783 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 283 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/the-sales-enablement-process-from-start-to-finish
Perf: **68** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 138 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 59 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 812 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 311 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/10-best-sales-tools
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 20 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 611 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 111 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/how-to-send-a-quote-to-a-client-and-get-it-accepted
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,370 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 519 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/sales-enablement-beginners-guide
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (10 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 133 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 534 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/your-guide-to-every-stage-of-the-b2b-sales-cycle
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 138 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 544 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/everything-you-need-to-know-about-marketing-in-a-recession
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 138 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 524 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/6-sales-closing-tips-and-the-technology-you-need-to-use-them
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 518 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/the-10-sales-enablement-metrics-you-should-be-tracking
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (7 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,980 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 139 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 532 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/5-sales-enablement-strategies-to-boost-your-kpis
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (59 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,820 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 138 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 520 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/use-zoomforth-to-build-your-pricing-proposals
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 530 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/business-proposal-ideas-you-can-easily-share-with-your-clients
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,820 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 524 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/building-a-simple-sales-proposal-as-a-microsite
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,770 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 521 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,830 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/sales-proposal-examples
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,680 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 138 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 526 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/best-sales-software
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,820 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 528 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/what-is-sales-enablement
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,530 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 148 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 523 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/adding-images-to-your-microsites
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,680 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 134 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 531 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/zoomforth-joins-pwc-malaysias-marketplace
Perf: **67** | SEO: **85** | Accesib: **92** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,990 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 128 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (51.37% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 978 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/redesign-a-microsite-template
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (3 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,780 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 531 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/major-principles-of-microsite-design
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 530 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/zoomforth-translation-feature
Perf: **66** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (9 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,940 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 128 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 9,744 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 10,486 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 9,974 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/zoomforth-stakeholder-collaboration-tool
Perf: **64** | SEO: **85** | Accesib: **92** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (9 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,980 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 128 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 3,251 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (53.95% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 3,845 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 3,341 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### http://127.0.0.1:4000/blog/zoomforth-ai-text-generator
Perf: **66** | SEO: **85** | Accesib: **92** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (9 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,970 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 127 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 1,033 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (53.41% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 1,671 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 1,167 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### http://127.0.0.1:4000/blog/microsite-seo-guide
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,980 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 140 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 527 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/product-launch-microsite
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,790 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 530 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/event-microsite-guide
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,830 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 138 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 522 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/how-to-add-favicon-microsite
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,380 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 134 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (57.25% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 520 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/border-styles-design-tips-microsites
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,380 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 134 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (59.37% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 540 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/customize-text-colors-microsite
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,380 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 134 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (57.01% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 525 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/css-classes-for-microsite-design
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,380 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 134 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 533 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/employer-branding-strategy
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,820 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 532 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/candidate-experience
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,840 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 136 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 527 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/account-based-marketing-metrics
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (30 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,380 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 532 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/account-based-marketing-examples
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,930 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 145 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 544 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/marketing-manager-to-leader-skills
Perf: **72** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,680 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 135 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 525 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,890 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/sales-team-burnout-recovery
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,620 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 133 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 539 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,840 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/introducing-zoomforth-design-agency
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,970 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 128 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 119 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (57.56% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 643 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 150 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### http://127.0.0.1:4000/blog/zoomforth-enhances-content-creation-with-new-collaboration-tool
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (9 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,990 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 128 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (46.26% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 564 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 39 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### http://127.0.0.1:4000/blog/does-microsite-hosting-differ-from-regular-web-hosting
Perf: **71** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,770 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 132 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 553 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 53 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |

### http://127.0.0.1:4000/blog/7-microsite-best-practices-to-make-yours-more-effective
Perf: **69** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,820 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 565 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,880 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/the-6-strategic-business-benefits-of-a-microsite
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,780 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 528 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/shortlisted-for-2021-saas-awards
Perf: **68** | SEO: **85** | Accesib: **92** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 2,130 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 126 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Properly size images (Est savings of 9,771 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (43.33% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 10,631 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/blog/5-ways-microsites-are-transforming-business-communication
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,680 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Enable text compression (Est savings of 134 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 571 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,900 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### http://127.0.0.1:4000/blog/using-microsites-for-account-based-marketing
Perf: **70** | SEO: **85** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 620 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,640 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 16 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Enable text compression (Est savings of 137 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 13 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Links are not crawlable | Usar href válidos en todos los <a>; evitar href="#" o JavaScript vacíos |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 535 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Legacy JavaScript (Est savings of 5 KiB) | Polyfills and transforms enable older browsers to use new JavaScript features |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,850 ms) | Requests are blocking the page's initial render, which may delay LCP |

### http://127.0.0.1:4000/contact
Perf: **74** | SEO: **61** | Accesib: **96** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (31 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex,follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~169 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 610 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 930 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 9 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 11 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Enable text compression (Est savings of 81 KiB) | Habilitar GZIP o Brotli en el servidor web |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 40 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Document doesn't use legible font sizes (17.53% legible text) | Asegurar tamaño de fuente mínimo de 16 px en el texto del cuerpo (móvil) |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Page is blocked from indexing | Verificar que robots.txt y meta robots no bloqueen la indexación |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (4 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 459 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 2,590 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (12 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid `document.write()` | Eliminar llamadas a document.write() |
