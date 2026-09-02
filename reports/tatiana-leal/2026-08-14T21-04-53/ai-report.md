# Auditoría: dratatianaleal.com
*14/8/2026, 4:04:53 p. m. · 306 páginas auditadas · 8 links rotos*

Contexto: auditoría automática con Google Lighthouse. Cada fila representa un problema accionable con su solución recomendada. Aplica los cambios según prioridad: 🔴 errores primero, 🟡 advertencias después, 🔵 informativo.

## Links rotos

| URL rota | Estado | Encontrado en | Solución |
|---|---|---|---|
| https://dratatianaleal.com/ai.txt | 404 | https://dratatianaleal.com | Crear redirección 301 hacia la URL correcta o eliminar el enlace |
| https://dratatianaleal.com/en/facial-treatments/botox | 404 | https://dratatianaleal.com/en/blog/preventive-botox-before-30-guide | Crear redirección 301 hacia la URL correcta o eliminar el enlace |
| https://dratatianaleal.com/es/tratamientos-faciales/botox | 404 | https://dratatianaleal.com/es/blog/botox-preventivo-antes-30-anos | Crear redirección 301 hacia la URL correcta o eliminar el enlace |
| https://dratatianaleal.com/img/rejuvenecimiento-cuello-bogota.avif | 404 | https://dratatianaleal.com/en/facial-treatments/neck-rejuvenation | Crear redirección 301 hacia la URL correcta o eliminar el enlace |
| https://dratatianaleal.com/es/blog/cuanto-cuesta-lipolisis-laser-bogota | 404 | https://dratatianaleal.com/es/tratamientos-corporales/lipolisis | Crear redirección 301 hacia la URL correcta o eliminar el enlace |
| https://dratatianaleal.com/es/blog/lipolisis-laser-zonas-cuerpo | 404 | https://dratatianaleal.com/es/tratamientos-corporales/lipolisis | Crear redirección 301 hacia la URL correcta o eliminar el enlace |
| https://dratatianaleal.com/en/blog/laser-lipolysis-cost-bogota | 404 | https://dratatianaleal.com/en/body-treatments/lipolysis | Crear redirección 301 hacia la URL correcta o eliminar el enlace |
| https://dratatianaleal.com/en/blog/laser-lipolysis-body-zones | 404 | https://dratatianaleal.com/en/body-treatments/lipolysis | Crear redirección 301 hacia la URL correcta o eliminar el enlace |

## Problemas por página

### https://dratatianaleal.com
Perf: **63** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (167 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Properly size images (Est savings of 61 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 121 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/aesthetic-center
Perf: **96** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (61 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 21 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/aviso-privacidad
Perf: **97** | SEO: **69** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Robots: noindex, nofollow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Page is blocked from indexing | Verificar que robots.txt y meta robots no bloqueen la indexación |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 5 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/aviso-videovigilancia
Perf: **95** | SEO: **69** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Robots: noindex, nofollow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Page is blocked from indexing | Verificar que robots.txt y meta robots no bloqueen la indexación |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 5 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/body-treatments
Perf: **93** | SEO: **100** | Accesib: **89** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 48 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Properly size images (Est savings of 187 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/centro-estetico
Perf: **91** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Reduce initial server response time (Root document took 710 ms) | Reducir TTFB: habilitar caché de servidor o añadir CDN |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 990 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔍 Diagnóstico | Minimize main-thread work (3.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 21 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/contact
Perf: **88** | SEO: **100** | Accesib: **86** | BP: **79**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 930 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Use HTTP/2 (11 requests not served via HTTP/2) | HTTP/2 offers many benefits over HTTP/1.1, including binary headers and multiplexing |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (7 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<frame>` or `<iframe>` elements do not have a title | Añadir atributo title descriptivo a cada <iframe> |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Font display (Est savings of 40 ms) | Consider setting [font-display](https://developer.chrome.com/blog/font-display) to swap or optional to ensure text is consistently visible |

### https://dratatianaleal.com/es/contacto
Perf: **87** | SEO: **100** | Accesib: **86** | BP: **79**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Use HTTP/2 (13 requests not served via HTTP/2) | HTTP/2 offers many benefits over HTTP/1.1, including binary headers and multiplexing |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (5 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<frame>` or `<iframe>` elements do not have a title | Añadir atributo title descriptivo a cada <iframe> |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Modern HTTP (Est savings of 100 ms) | HTTP/2 and HTTP/3 offer many benefits over HTTP/1.1, such as multiplexing |

### https://dratatianaleal.com/en/data-processing-policy
Perf: **97** | SEO: **69** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (168 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, nofollow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (5 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Page is blocked from indexing | Verificar que robots.txt y meta robots no bloqueen la indexación |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 5 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/doctora-tatiana-leal
Perf: **91** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔧 Rendimiento | Properly size images (Est savings of 306 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 383 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/dr-tatiana-leal
Perf: **90** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 900 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔧 Rendimiento | Properly size images (Est savings of 306 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 383 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments
Perf: **80** | SEO: **100** | Accesib: **89** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 64 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Properly size images (Est savings of 1,245 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (4 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/faqs
Perf: **83** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (4 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 5 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/hilos-tensores-landing
Perf: **86** | SEO: **100** | Accesib: **87** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Eliminate render-blocking resources (Est savings of 1,530 ms) | Añadir defer/async al JS y cargar CSS crítico inline |
| 🔧 Rendimiento | Minify CSS (Est savings of 2 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | ARIA input fields do not have accessible names | When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers |
| 🔍 Diagnóstico | `[role]`s do not have all required `[aria-*]` attributes | Agregar los atributos ARIA obligatorios a los roles declarados |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,530 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 84 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog
Perf: **79** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 920 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 80 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (5 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 96 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog
Perf: **83** | SEO: **92** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 74 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (5 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Links do not have descriptive text (79 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 86 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en
Perf: **68** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 61 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 121 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/informacion-paciente
Perf: **94** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 5 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/legal
Perf: **93** | SEO: **69** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (61 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, nofollow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Page is blocked from indexing | Verificar que robots.txt y meta robots no bloqueen la indexación |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 5 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/legal
Perf: **93** | SEO: **69** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (16 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, nofollow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Avoid an excessive DOM size (1,038 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Page is blocked from indexing | Verificar que robots.txt y meta robots no bloqueen la indexación |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/opiniones
Perf: **95** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 5 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/patient-info
Perf: **92** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (4 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 5 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/politica-tratamiento-datos
Perf: **93** | SEO: **69** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Robots: noindex, nofollow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (4 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Page is blocked from indexing | Verificar que robots.txt y meta robots no bloqueen la indexación |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 5 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/preguntas-frecuentes
Perf: **96** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (79 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔍 Diagnóstico | Avoid large layout shifts (5 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/privacy-notice
Perf: **95** | SEO: **69** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Robots: noindex, nofollow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Page is blocked from indexing | Verificar que robots.txt y meta robots no bloqueen la indexación |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 5 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/reviews
Perf: **95** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 5 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/scizer-reduccion-grasa-landing
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (169 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 2 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 146 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/technologies
Perf: **96** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 910 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 261 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 296 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tecnologias
Perf: **96** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 261 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 246 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-corporales
Perf: **87** | SEO: **100** | Accesib: **89** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 181 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-faciales
Perf: **95** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 64 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Properly size images (Est savings of 305 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 186 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/video-surveillance-notice
Perf: **97** | SEO: **69** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (68 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, nofollow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Page is blocked from indexing | Verificar que robots.txt y meta robots no bloqueen la indexación |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 5 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/blog/common-mistakes-bad-aesthetic-results-prevention
Perf: **92** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (75 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 6 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/errores-comunes-pacientes-malos-resultados-estetica
Perf: **97** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (186 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Reduce initial server response time (Root document took 830 ms) | Reducir TTFB: habilitar caché de servidor o añadir CDN |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 940 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 6 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/preventive-collagen-biostimulation-young-patients
Perf: **96** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Reduce initial server response time (Root document took 880 ms) | Reducir TTFB: habilitar caché de servidor o añadir CDN |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 910 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 10 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/bioestimulacion-colageno-preventiva-edad
Perf: **92** | SEO: **100** | Accesib: **84** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (84 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/prejuvenation-preventive-aesthetic-medicine-bogota
Perf: **98** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 25 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/prejuvenation-medicina-estetica-preventiva-bogota
Perf: **95** | SEO: **100** | Accesib: **84** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (178 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 900 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 18 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/preventive-botox-before-30-guide
Perf: **98** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 22 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/botox-preventivo-antes-30-anos
Perf: **97** | SEO: **100** | Accesib: **84** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (76 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 15 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/what-age-start-botox-preventive-guide
Perf: **83** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 19 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 40 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/a-que-edad-empezar-botox-preventivo
Perf: **96** | SEO: **100** | Accesib: **84** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (69 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (164 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 12 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/hyaluronic-acid-side-effects-face-risks
Perf: **91** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (61 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 12 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/efectos-secundarios-acido-hialuronico-facial
Perf: **97** | SEO: **100** | Accesib: **84** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (80 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/hyaluronic-acid-vs-sculptra-which-to-choose
Perf: **99** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 9 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/acido-hialuronico-vs-sculptra-cual-elegir
Perf: **97** | SEO: **100** | Accesib: **85** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 9 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/hyaluronic-acid-price-colombia-bogota-2026
Perf: **98** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 17 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/acido-hialuronico-precio-colombia-2026
Perf: **87** | SEO: **100** | Accesib: **84** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (164 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 9 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |

### https://dratatianaleal.com/en/blog/how-long-does-hyaluronic-acid-last-face
Perf: **98** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (77 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 17 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/cuanto-dura-acido-hialuronico-facial
Perf: **90** | SEO: **100** | Accesib: **84** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (75 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 9 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |

### https://dratatianaleal.com/en/blog/hyaluronic-acid-facial-zones-where-applied
Perf: **98** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (84 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 990 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 15 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/acido-hialuronico-zonas-del-rostro
Perf: **98** | SEO: **100** | Accesib: **84** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 8 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/facial-radiofrequency-home-vs-clinic
Perf: **88** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (79 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 17 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 36 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/radiofrecuencia-facial-casa-vs-clinica
Perf: **98** | SEO: **100** | Accesib: **85** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (81 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (175 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 11 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/facial-radiofrequency-results-timeline
Perf: **94** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 21 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (5 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/resultados-radiofrecuencia-facial-timeline
Perf: **95** | SEO: **100** | Accesib: **84** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (76 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (165 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 13 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/who-is-candidate-facial-radiofrequency
Perf: **97** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (77 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (167 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 19 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/quien-es-candidata-radiofrecuencia-facial
Perf: **88** | SEO: **100** | Accesib: **84** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (76 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (175 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 12 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |

### https://dratatianaleal.com/en/blog/facial-radiofrequency-price-colombia-2026
Perf: **91** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 18 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/radiofrecuencia-facial-precio-colombia-2026
Perf: **96** | SEO: **100** | Accesib: **84** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 12 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (4 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |

### https://dratatianaleal.com/en/blog/sculptor-vs-ems-electrostimulation-differences
Perf: **97** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (78 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (175 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/sculptor-vs-electroestimulacion-ems
Perf: **98** | SEO: **100** | Accesib: **85** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (81 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (168 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/how-many-sculptor-sessions-do-i-need
Perf: **97** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (75 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/sculptor-cuantas-sesiones-necesito
Perf: **90** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (75 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/sculptor-body-results-timeline-sessions
Perf: **97** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (69 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 900 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 9 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/sculptor-resultados-reales-timeline
Perf: **90** | SEO: **100** | Accesib: **84** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (85 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 4 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |

### https://dratatianaleal.com/en/blog/body-sculptor-vs-gym-what-makes-it-different
Perf: **98** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 15 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/sculptor-vs-gimnasio-que-lo-diferencia
Perf: **94** | SEO: **100** | Accesib: **84** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (75 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 6 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (4 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |

### https://dratatianaleal.com/en/blog/facial-radiofrequency-what-is-how-it-works
Perf: **95** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (196 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 23 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 40 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/radiofrecuencia-facial-que-es-como-funciona
Perf: **92** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 23 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 40 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/botulinum-toxin-brands-clinical-criteria
Perf: **99** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (177 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 22 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/toxinas-botulinicas-marcas-criterio-medico
Perf: **98** | SEO: **100** | Accesib: **84** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (71 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (191 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 10 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/what-is-hifu-facial-how-it-works
Perf: **93** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 18 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 32 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/que-es-hifu-facial-como-funciona
Perf: **99** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (71 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (177 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 18 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 32 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/blog/sculptra-for-men
Perf: **84** | SEO: **100** | Accesib: **84** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 165 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |

### https://dratatianaleal.com/es/blog/sculptra-para-hombres
Perf: **97** | SEO: **100** | Accesib: **84** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 165 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/hifu-facial-vs-facial-radiofrequency
Perf: **97** | SEO: **100** | Accesib: **86** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (192 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 26 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 41 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/hifu-facial-vs-radiofrecuencia-facial
Perf: **96** | SEO: **100** | Accesib: **86** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (177 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 26 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 41 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/blog/what-is-hyaluronic-acid-facial-fillers
Perf: **93** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (76 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 21 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 39 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/que-es-acido-hialuronico-facial
Perf: **98** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (85 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (198 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 21 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 39 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/blog/sculptra-side-effects-contraindications
Perf: **79** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (75 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 132 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 231 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/sculptra-efectos-secundarios-contraindicaciones
Perf: **97** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (80 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (166 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 132 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/radiesse-price-colombia
Perf: **96** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 24 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/cuanto-cuesta-radiesse-colombia
Perf: **96** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 24 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 239 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/aftercare-thread-lifts
Perf: **95** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 27 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 34 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/foxy-eyes-thread-lifts-bogota
Perf: **94** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (165 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 52 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 90 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/cuidados-despues-hilos-tensores
Perf: **96** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (71 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (161 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 27 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/foxy-eyes-hilos-tensores-bogota
Perf: **98** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (170 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 86 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/butt-lift-cost-colombia-vs-usa-vs-mexico-2026
Perf: **98** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (176 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 11 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/colombian-butt-lift-vs-brazilian-bbl-guide
Perf: **98** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (183 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 18 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/how-hifu-butt-lift-works-complete-guide
Perf: **99** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 27 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 34 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/blog/non-surgical-bbl-risks-safety-guide-2026
Perf: **97** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (183 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/bbl-sin-cirugia-riesgos-seguridad
Perf: **97** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (189 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/como-funciona-levantamiento-gluteos-hifu
Perf: **97** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (88 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 27 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/guia-bbl-colombiano-vs-brasileno
Perf: **99** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (75 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (211 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 18 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/precio-aumento-gluteos-colombia-vs-usa-mexico
Perf: **99** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (79 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (175 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 11 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/aged-hands-rejuvenation-without-surgery
Perf: **87** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (87 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (164 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 133 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 220 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/neck-flaccidity-treatments
Perf: **79** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (71 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (168 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 112 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 157 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/radiesse-vs-thread-lifts-neck
Perf: **90** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (167 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 135 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 219 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/flacidez-cuello-tratamientos
Perf: **97** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (83 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (168 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 940 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 112 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 157 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/radiesse-vs-hilos-tensores-cuello
Perf: **93** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (71 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (171 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,030 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 135 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 219 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/rejuvenecimiento-manos-sin-cirugia
Perf: **96** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (93 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (172 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 133 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 220 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/real-dangers-risks-thread-lift
Perf: **90** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 133 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 192 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/thread-lift-face-prices-facial-zones
Perf: **93** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (61 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 206 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 318 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/hilos-tensores-cara-precios-zonas-faciales
Perf: **85** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 206 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 318 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/peligros-riesgos-reales-hilos-tensores
Perf: **94** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (61 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 133 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 192 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/botulinum-toxin-bruxism-bogota
Perf: **91** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 126 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 184 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/toxina-bruxismo-bogota
Perf: **85** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (165 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 126 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 184 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/sculptra-vs-radiesse-gluteos
Perf: **94** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 97 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 137 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/sculptra-vs-radiesse-gluteos
Perf: **90** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 97 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 137 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/sculptra-vs-bbl-gluteos
Perf: **94** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 77 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 117 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/sculptra-vs-bbl-gluteos
Perf: **91** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 77 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 117 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/how-long-does-botulinum-toxin-last
Perf: **84** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (168 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 910 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 191 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 324 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/cuanto-dura-toxina-botulinica
Perf: **86** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 191 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 324 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/botox-hyperhidrosis-bogota
Perf: **88** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (69 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (187 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 158 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 217 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/botox-hiperhidrosis-bogota
Perf: **83** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (189 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 158 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 217 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/types-thread-lifts-pdo-pcl-plla
Perf: **94** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (75 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 82 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 101 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/tipos-hilos-tensores-pdo-pcl-plla
Perf: **96** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 82 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 101 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/thread-lift-vs-other-facial-treatments
Perf: **82** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (82 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Reduce initial server response time (Root document took 880 ms) | Reducir TTFB: habilitar caché de servidor o añadir CDN |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,100 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 180 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 224 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/hilos-tensores-vs-otros-tratamientos
Perf: **84** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (78 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Reduce initial server response time (Root document took 1,270 ms) | Reducir TTFB: habilitar caché de servidor o añadir CDN |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 960 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 180 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 224 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/thread-lift-vs-botox
Perf: **92** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 118 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 145 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/hilos-tensores-vs-botox
Perf: **89** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 118 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 145 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/thread-lift-neck-double-chin
Perf: **94** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 18 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/hilos-tensores-cuello-papada
Perf: **86** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 18 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/thread-lift-eyes-eyelids
Perf: **96** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 21 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/hilos-tensores-ojos-parpados
Perf: **87** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (166 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 21 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/thread-lift-disadvantages-bad-results
Perf: **96** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (161 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 16 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/hilos-tensores-desventajas-malos-resultados
Perf: **97** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (166 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 16 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/expression-lines-mouth-lips-treatment
Perf: **94** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,020 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 197 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 294 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/lineas-expresion-boca-labios-tratamiento
Perf: **99** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (188 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 197 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/expression-lines-forehead-effective-treatment
Perf: **94** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 205 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 371 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/lineas-expresion-frente-tratamiento-efectivo
Perf: **95** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (69 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (175 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 205 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 371 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/expression-lines-eyes-crows-feet-treatment
Perf: **96** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 191 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 358 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/lineas-expresion-ojos-patas-de-gallo-tratamiento
Perf: **90** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (175 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 146 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 238 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/do-creams-for-expression-lines-work
Perf: **92** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 115 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 138 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/cremas-para-lineas-de-expresion-funcionan
Perf: **96** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (176 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 115 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/expression-lines-what-are-they-and-how-to-eliminate-them
Perf: **97** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 221 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/lineas-de-expresion-que-son-y-como-eliminarlas
Perf: **98** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 221 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/sun-protection-complete-guide-dr-tatiana-leal
Perf: **96** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (62 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (164 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 59 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 73 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/entrevista-canal-rcn-dra-tatiana-leal
Perf: **90** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (69 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (189 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 59 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (3.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 73 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/scizer-results-before-after
Perf: **94** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (169 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 149 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 233 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/scizer-resultados-antes-despues
Perf: **89** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (79 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (175 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 141 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 216 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/scizer-vs-cryolipolysis
Perf: **98** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (76 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (190 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 125 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/scizer-vs-criolipolisis
Perf: **95** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (76 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (173 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 125 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 179 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/what-is-scizer-how-it-works
Perf: **96** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (79 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 15 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/que-es-scizer
Perf: **93** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (81 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (187 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Reduce initial server response time (Root document took 710 ms) | Reducir TTFB: habilitar caché de servidor o añadir CDN |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 15 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 23 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/sculptra-vs-radiesse
Perf: **93** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (69 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (166 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 232 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 332 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/sculptra-vs-radiesse
Perf: **87** | SEO: **100** | Accesib: **85** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (176 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (5 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |

### https://dratatianaleal.com/en/blog/sculptra-price-colombia
Perf: **88** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (61 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 169 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 267 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/sculptra-precios-colombia-2025
Perf: **85** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (71 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (166 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 169 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 267 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/sculptra-before-after
Perf: **84** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 990 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 135 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 288 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/sculptra-antes-despues
Perf: **86** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 135 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 288 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/sculptra-uses
Perf: **91** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 193 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 285 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/para-que-sirve-sculptra
Perf: **86** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (61 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (170 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 193 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 285 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/sculptra-reviews
Perf: **91** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 142 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 271 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/opiniones-sculptra
Perf: **95** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (71 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 142 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 271 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/sculptra-decision-smart-investment
Perf: **88** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (77 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 162 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 309 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/sculptra-inversion-inteligente
Perf: **95** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (76 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 162 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 309 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/sculptra-evolution
Perf: **78** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (76 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (181 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 427 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 682 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/sculptra-evolucion-mensual
Perf: **78** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (77 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (168 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 970 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 427 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 682 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/which-are-magic-threads-pdo
Perf: **96** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 50 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 65 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/que-son-hilos-magicos
Perf: **91** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 50 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 65 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/is-possible-tattoo-removal
Perf: **94** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 40 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/se-puede-borrar-un-tatuaje
Perf: **97** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (75 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (213 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 40 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/ultraskin-vs-dermazoom
Perf: **93** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 63 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 78 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/ultraskin-vs-dermazoom
Perf: **94** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (161 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 63 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 78 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/dr-tatiana-leal-in-colombian-alo-magazine
Perf: **94** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description corta (11 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 77 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/doctora-tatiana-leal-en-revista-alo-colombia
Perf: **94** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (249 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 77 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 96 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/magazine-15-minutes-enterview-dr-tatiana-leal
Perf: **96** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 900 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 75 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/revista-15-minutos-entrevista-doctora-tatiana-leal
Perf: **98** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (84 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (200 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 75 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/prices-facial-treatments-colombia
Perf: **95** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 920 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 11 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/remove-dark-spots
Perf: **97** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 19 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/deep-facial-cleansing
Perf: **81** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,120 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 54 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/precios-tratamientos-faciales-colombia
Perf: **97** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 11 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/eliminar-manchas-oscuras
Perf: **98** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 24 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/limpieza-facial-profunda
Perf: **95** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (62 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 54 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/how-much-does-laser-tattoo-removal-cost
Perf: **95** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 8 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/cuanto-cuesta-borrar-tatuajes
Perf: **96** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (171 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 8 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/when-to-use-thread-lifting
Perf: **95** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 27 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/cuando-escoger-hilos-tensores
Perf: **89** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 27 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 34 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/liposuccion-vs-lipolisis
Perf: **97** | SEO: **92** | Accesib: **80** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (62 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (180 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 10 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Image elements do not have `[alt]` attributes | Agregar alt descriptivo a cada <img>; alt="" en imágenes decorativas |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### https://dratatianaleal.com/es/blog/liposuccion-vs-lipolisis
Perf: **97** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (61 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (181 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/platelet-rich-plasma
Perf: **97** | SEO: **92** | Accesib: **80** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (75 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 10 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Image elements do not have `[alt]` attributes | Agregar alt descriptivo a cada <img>; alt="" en imágenes decorativas |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### https://dratatianaleal.com/es/blog/plasma-rico-plaquetas
Perf: **98** | SEO: **92** | Accesib: **80** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (78 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (204 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 10 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Image elements do not have `[alt]` attributes | Agregar alt descriptivo a cada <img>; alt="" en imágenes decorativas |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### https://dratatianaleal.com/en/blog/what-did-lindsay-lohan-do-to-her-face
Perf: **87** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (82 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/que-tratamiento-se-hizo-lindsay-lohan
Perf: **82** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (91 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (161 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/lip-filler-techniques
Perf: **93** | SEO: **100** | Accesib: **84** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (62 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (4 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/tecnicas-rellenos-labios
Perf: **85** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (161 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/laser-lipolysis-risks
Perf: **90** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 10 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/riesgos-lipolisis-laser
Perf: **88** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (87 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (163 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 10 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-faciales/acido-hialuronico
Perf: **90** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (69 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (180 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 50 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-faciales/biorevitalizacion
Perf: **96** | SEO: **100** | Accesib: **86** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 46 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-faciales/caida-del-cabello
Perf: **89** | SEO: **100** | Accesib: **83** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-bogota/dysport
Perf: **93** | SEO: **100** | Accesib: **85** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-faciales/eliminar-manchas
Perf: **92** | SEO: **100** | Accesib: **83** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 980 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 9,987 KiB) | Large network payloads cost users real money and are highly correlated with long load times |

### https://dratatianaleal.com/es/tratamientos-faciales/hifu-facial-dermazoom
Perf: **93** | SEO: **100** | Accesib: **82** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (170 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 910 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-faciales/hilos-tensores
Perf: **93** | SEO: **100** | Accesib: **83** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 23 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-faciales/lifting
Perf: **89** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (99 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (212 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 66 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-faciales/limpieza-facial
Perf: **84** | SEO: **100** | Accesib: **83** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 920 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 101 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-bogota/neuronox
Perf: **73** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 900 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 171 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-faciales/ojeras
Perf: **90** | SEO: **100** | Accesib: **83** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 990 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-faciales/peeling-quimico
Perf: **83** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 51 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-faciales/plasma
Perf: **93** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-faciales/radiesse-cuello
Perf: **82** | SEO: **100** | Accesib: **86** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 960 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 338 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-faciales/radiofrecuencia-facial
Perf: **91** | SEO: **100** | Accesib: **86** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (76 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (172 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 56 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-faciales/rejuve-face
Perf: **90** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 39 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-faciales/rejuvenecimiento-cuello
Perf: **94** | SEO: **100** | Accesib: **86** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (77 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (197 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 108 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-faciales/rejuvenecimiento-laser
Perf: **96** | SEO: **100** | Accesib: **86** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 13 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 42 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-faciales/relleno-labios-bogota
Perf: **88** | SEO: **100** | Accesib: **83** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-faciales/sculptra
Perf: **75** | SEO: **100** | Accesib: **83** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (199 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Avoid an excessive DOM size (876 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-bogota/boca
Perf: **86** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 910 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 528 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-bogota
Perf: **88** | SEO: **100** | Accesib: **86** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 900 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 289 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-bogota/entrecejo
Perf: **75** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 950 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 122 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-bogota/frente
Perf: **83** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 107 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-bogota/ojos
Perf: **96** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 414 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-faciales/vitamina-c-facial
Perf: **87** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 58 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/biorevitalization
Perf: **91** | SEO: **100** | Accesib: **86** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 46 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/botulinum-toxin-bogota/between-the-eyebrows
Perf: **80** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 252 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/botulinum-toxin-bogota
Perf: **92** | SEO: **100** | Accesib: **86** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 15 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/facial-treatments/botulinum-toxin-bogota/eyes
Perf: **78** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (14 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 414 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/facial-treatments/botulinum-toxin-bogota/forehead
Perf: **78** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 900 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 204 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/facial-treatments/botulinum-toxin-bogota/mouth
Perf: **77** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 524 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/facial-treatments/chemical-peeling
Perf: **87** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 51 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/dark-circles-under-eye
Perf: **96** | SEO: **100** | Accesib: **83** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/facial-treatments/deep-facial-cleansing
Perf: **88** | SEO: **100** | Accesib: **82** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 7,124 KiB) | Large network payloads cost users real money and are highly correlated with long load times |

### https://dratatianaleal.com/en/facial-treatments/botulinum-toxin-bogota/dysport
Perf: **82** | SEO: **100** | Accesib: **85** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 139 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/facial-radiofrequency
Perf: **92** | SEO: **100** | Accesib: **86** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (78 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (183 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 56 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/hair-loss
Perf: **94** | SEO: **100** | Accesib: **83** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/facial-treatments/hifu-facial-dermazoom
Perf: **86** | SEO: **100** | Accesib: **82** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (86 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (179 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 910 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |

### https://dratatianaleal.com/en/facial-treatments/hyaluronic-acid
Perf: **88** | SEO: **100** | Accesib: **85** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (71 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (181 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/facial-treatments/laser-rejuvenation
Perf: **89** | SEO: **100** | Accesib: **86** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 13 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 42 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/lifting
Perf: **89** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 66 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/lip-enhancement
Perf: **94** | SEO: **100** | Accesib: **83** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/facial-treatments/neck-rejuvenation
Perf: **90** | SEO: **100** | Accesib: **86** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (177 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/facial-treatments/botulinum-toxin-bogota/neuronox
Perf: **75** | SEO: **100** | Accesib: **86** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 213 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/facial-treatments/plasma
Perf: **83** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/radiesse-neck
Perf: **81** | SEO: **100** | Accesib: **86** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 341 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/facial-treatments/rejuve-face
Perf: **92** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 39 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/remove-dark-spots
Perf: **89** | SEO: **100** | Accesib: **83** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 9,907 KiB) | Large network payloads cost users real money and are highly correlated with long load times |

### https://dratatianaleal.com/en/facial-treatments/sculptra-collagen-stimulator
Perf: **82** | SEO: **100** | Accesib: **83** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 265 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/facial-treatments/tensor-threads
Perf: **86** | SEO: **100** | Accesib: **83** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 23 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/facial-treatments/vitamin-c-facial
Perf: **93** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 58 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-corporales/aclaramiento-genital
Perf: **83** | SEO: **100** | Accesib: **81** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-corporales/celulitis
Perf: **94** | SEO: **100** | Accesib: **86** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 900 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 3,347 KiB) | Large network payloads cost users real money and are highly correlated with long load times |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-corporales/depilacion-laser
Perf: **92** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 29 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-corporales/eliminacion-tatuajes
Perf: **84** | SEO: **100** | Accesib: **82** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 960 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Avoid an excessive DOM size (934 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |

### https://dratatianaleal.com/es/tratamientos-corporales/escleroterapia-venas-varices
Perf: **88** | SEO: **100** | Accesib: **81** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 910 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-corporales/gluteos
Perf: **89** | SEO: **100** | Accesib: **86** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-corporales/hifem-sculptor
Perf: **84** | SEO: **100** | Accesib: **81** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,050 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 58 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-corporales/lipolisis
Perf: **93** | SEO: **100** | Accesib: **82** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Avoid an excessive DOM size (833 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |

### https://dratatianaleal.com/es/tratamientos-corporales/moldeamiento
Perf: **86** | SEO: **100** | Accesib: **86** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (93 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 970 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 19 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-corporales/radiesse-manos
Perf: **78** | SEO: **100** | Accesib: **86** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 900 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 155 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-corporales/radiofrecuencia
Perf: **90** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (78 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (173 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 56 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-corporales/sculptra-gluteos
Perf: **73** | SEO: **100** | Accesib: **82** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Avoid an excessive DOM size (845 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |

### https://dratatianaleal.com/es/tratamientos-corporales/sueroterapia-detox
Perf: **94** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 33 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/body-treatments/body-shaping
Perf: **94** | SEO: **100** | Accesib: **86** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (161 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/body-treatments/cellulite
Perf: **91** | SEO: **100** | Accesib: **86** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 3,387 KiB) | Large network payloads cost users real money and are highly correlated with long load times |

### https://dratatianaleal.com/en/body-treatments/detox-therapy
Perf: **92** | SEO: **100** | Accesib: **85** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/body-treatments/genital-lightening
Perf: **87** | SEO: **100** | Accesib: **81** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/body-treatments/hifem-sculptor
Perf: **84** | SEO: **100** | Accesib: **81** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 900 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |

### https://dratatianaleal.com/en/body-treatments/laser-hair-removal
Perf: **97** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 29 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/body-treatments/lipolysis
Perf: **85** | SEO: **100** | Accesib: **82** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (62 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |

### https://dratatianaleal.com/en/body-treatments/non-surgical-bbl-colombia
Perf: **94** | SEO: **100** | Accesib: **86** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔴 SEO | Sin H1 | Añadir exactamente un <h1> con la keyword principal de la página |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/body-treatments/radiesse-hands
Perf: **90** | SEO: **100** | Accesib: **86** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/body-treatments/radiofrequency
Perf: **94** | SEO: **100** | Accesib: **85** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (76 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (173 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/body-treatments/sclerotherapy-varicose-veins
Perf: **87** | SEO: **100** | Accesib: **81** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |

### https://dratatianaleal.com/en/body-treatments/sculptra-for-buttocks
Perf: **93** | SEO: **100** | Accesib: **82** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |

### https://dratatianaleal.com/en/body-treatments/tattoo-removal
Perf: **85** | SEO: **100** | Accesib: **82** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Avoid an excessive DOM size (938 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |

### https://dratatianaleal.com/es/tecnologia/analisis-facial-janus
Perf: **89** | SEO: **100** | Accesib: **81** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (177 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tecnologia/contour-shape
Perf: **91** | SEO: **100** | Accesib: **81** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tecnologia/inbody
Perf: **87** | SEO: **100** | Accesib: **81** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (169 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 4 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tecnologia/maximus
Perf: **88** | SEO: **100** | Accesib: **81** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 990 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 32 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tecnologia/scizer/scizer-precio-bogota
Perf: **90** | SEO: **100** | Accesib: **82** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tecnologia/scizer
Perf: **83** | SEO: **100** | Accesib: **81** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (69 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (181 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 127 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tecnologia/sculptor
Perf: **95** | SEO: **100** | Accesib: **81** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (215 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 49 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tecnologia/thork
Perf: **95** | SEO: **100** | Accesib: **81** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (71 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (173 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/technology/contour-shape
Perf: **87** | SEO: **100** | Accesib: **81** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (163 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/technology/facial-analysis-janus
Perf: **90** | SEO: **100** | Accesib: **81** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (170 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/technology/inbody
Perf: **86** | SEO: **100** | Accesib: **81** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 4 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/technology/maximus
Perf: **90** | SEO: **100** | Accesib: **81** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (167 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |

### https://dratatianaleal.com/en/technology/scizer/scizer-price-bogota
Perf: **97** | SEO: **100** | Accesib: **82** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/technology/scizer
Perf: **78** | SEO: **100** | Accesib: **81** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 125 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/technology/sculptor
Perf: **89** | SEO: **100** | Accesib: **81** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (76 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (172 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 920 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (3.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/technology/thork
Perf: **98** | SEO: **100** | Accesib: **81** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (78 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (172 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |

### https://dratatianaleal.com/es
Perf: **68** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (167 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 61 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 121 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/body-treatments/buttocks
Perf: **81** | SEO: **100** | Accesib: **86** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔴 SEO | Sin H1 | Añadir exactamente un <h1> con la keyword principal de la página |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tecnologia/dermazoom
Perf: **89** | SEO: **100** | Accesib: **82** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (170 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-faciales/dysport-colombia
Perf: **78** | SEO: **100** | Accesib: **85** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-intimos
Perf: **91** | SEO: **100** | Accesib: **89** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 48 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Properly size images (Est savings of 181 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/technology/dermazoom
Perf: **84** | SEO: **100** | Accesib: **82** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (86 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (179 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |

### https://dratatianaleal.com/en/facial-treatments/dysport-colombia
Perf: **71** | SEO: **100** | Accesib: **85** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (4.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/intimate-treatments
Perf: **78** | SEO: **100** | Accesib: **89** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 187 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-boca
Perf: **80** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 528 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-frente
Perf: **83** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 107 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-ojos
Perf: **80** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 414 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/scizer-price-bogota
Perf: **94** | SEO: **100** | Accesib: **82** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/scizer-precio-bogota
Perf: **81** | SEO: **100** | Accesib: **81** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (69 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (181 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 127 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-faciales/tratamiento-neuronox
Perf: **63** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 171 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/centro-estetico
Perf: **87** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔍 Diagnóstico | Minimize main-thread work (3.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 21 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/thread-lifting
Perf: **88** | SEO: **100** | Accesib: **83** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 23 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/tratamientos-faciales/acido-hialuronico
Perf: **80** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (69 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (180 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,100 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 50 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/tratamientos
Perf: **90** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 64 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Properly size images (Est savings of 305 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 186 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/blog/cremas-para-lineas-de-expresion-funcionan
Perf: **97** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (176 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 115 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/tratamientos-faciales/toxina-botulinica-bogota
Perf: **77** | SEO: **100** | Accesib: **86** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 900 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 289 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/body-treatments/radiofrecuency
Perf: **90** | SEO: **100** | Accesib: **85** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (76 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (173 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/que-es-scizer-como-funciona
Perf: **93** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (81 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (187 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 15 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements. | Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
