# Auditoría: dratatianaleal.com
*26/8/2026, 10:38:33 a. m. · 308 páginas auditadas · 2 links rotos*

Contexto: auditoría automática con Google Lighthouse. Cada fila representa un problema accionable con su solución recomendada. Aplica los cambios según prioridad: 🔴 errores primero, 🟡 advertencias después, 🔵 informativo.

## Links rotos

| URL rota | Estado | Encontrado en | Solución |
|---|---|---|---|
| https://dratatianaleal.com/en/facial-treatments/botox | 404 | https://dratatianaleal.com/en/blog/what-age-start-botox-preventive-guide | Crear redirección 301 hacia la URL correcta o eliminar el enlace |
| https://dratatianaleal.com/es/tratamientos-faciales/botox | 404 | https://dratatianaleal.com/es/blog/a-que-edad-empezar-botox-preventivo | Crear redirección 301 hacia la URL correcta o eliminar el enlace |

## Problemas por página

### https://dratatianaleal.com
Perf: **64** | SEO: **100** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Properly size images (Est savings of 61 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 121 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/aesthetic-center
Perf: **79** | SEO: **100** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 21 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/aviso-privacidad
Perf: **87** | SEO: **69** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Robots: noindex, nofollow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Page is blocked from indexing | Verificar que robots.txt y meta robots no bloqueen la indexación |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 5 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/aviso-videovigilancia
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Robots: noindex, nofollow | Revisar meta robots; eliminar noindex si la página debe indexarse |

### https://dratatianaleal.com/en/body-treatments
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/centro-estetico
Perf: **96** | SEO: **100** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 21 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/contact
Perf: **88** | SEO: **100** | Accesib: **92** | BP: **79**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔧 Rendimiento | Use HTTP/2 (11 requests not served via HTTP/2) | HTTP/2 offers many benefits over HTTP/1.1, including binary headers and multiplexing |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (7 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | `<frame>` or `<iframe>` elements do not have a title | Añadir atributo title descriptivo a cada <iframe> |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Font display (Est savings of 90 ms) | Consider setting [font-display](https://developer.chrome.com/blog/font-display) to swap or optional to ensure text is consistently visible |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 5 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (13 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/contacto
Perf: **59** | SEO: **0** | Accesib: **0** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔍 Diagnóstico | Minimize main-thread work (5.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (2 failure reasons) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (2 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 16 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 4,552 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/data-processing-policy
Perf: **0** | SEO: **69** | Accesib: **95** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (21 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, nofollow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Page is blocked from indexing | Verificar que robots.txt y meta robots no bloqueen la indexación |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/doctora-tatiana-leal
Perf: **0** | SEO: **100** | Accesib: **95** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/dr-tatiana-leal
Perf: **0** | SEO: **100** | Accesib: **95** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/facial-treatments
Perf: **79** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 64 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Properly size images (Est savings of 1,245 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/faqs
Perf: **85** | SEO: **100** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 6 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 59 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/hilos-tensores-landing
Perf: **0** | SEO: **100** | Accesib: **87** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | ARIA input fields do not have accessible names | When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers |
| 🔍 Diagnóstico | `[role]`s do not have all required `[aria-*]` attributes | Agregar los atributos ARIA obligatorios a los roles declarados |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog
Perf: **0** | SEO: **100** | Accesib: **95** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog
Perf: **86** | SEO: **92** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 74 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Links do not have descriptive text (80 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 86 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en
Perf: **25** | SEO: **100** | Accesib: **95** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔍 Diagnóstico | Minimize main-thread work (16.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Font display (Est savings of 80 ms) | Consider setting [font-display](https://developer.chrome.com/blog/font-display) to swap or optional to ensure text is consistently visible |
| 🔍 Diagnóstico | Some third-party resources can be lazy loaded with a facade (1 facade alternative available) | Some third-party embeds can be lazy loaded |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 4,279 KiB) | Large network payloads cost users real money and are highly correlated with long load times |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 50 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 562 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/informacion-paciente
Perf: **0** | SEO: **100** | Accesib: **95** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/legal
Perf: **96** | SEO: **69** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Robots: noindex, nofollow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Page is blocked from indexing | Verificar que robots.txt y meta robots no bloqueen la indexación |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 5 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/legal
Perf: **0** | SEO: **69** | Accesib: **95** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (16 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, nofollow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Page is blocked from indexing | Verificar que robots.txt y meta robots no bloqueen la indexación |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid an excessive DOM size (1,038 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |

### https://dratatianaleal.com/es/opiniones
Perf: **0** | SEO: **100** | Accesib: **95** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/patient-info
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 5 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/politica-tratamiento-datos
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Robots: noindex, nofollow | Revisar meta robots; eliminar noindex si la página debe indexarse |

### https://dratatianaleal.com/es/preguntas-frecuentes
Perf: **93** | SEO: **100** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔍 Diagnóstico | Avoid large layout shifts (5 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/privacy-notice
Perf: **97** | SEO: **69** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Robots: noindex, nofollow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Page is blocked from indexing | Verificar que robots.txt y meta robots no bloqueen la indexación |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 5 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/reviews
Perf: **84** | SEO: **100** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (5 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 5 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/scizer-reduccion-grasa-landing
Perf: **0** | SEO: **100** | Accesib: **95** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/technologies
Perf: **0** | SEO: **100** | Accesib: **95** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tecnologias
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/tratamientos-corporales
Perf: **91** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 48 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Properly size images (Est savings of 181 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 28 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-faciales
Perf: **86** | SEO: **100** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Defer offscreen images (Est savings of 64 KiB) | Añadir loading="lazy" a imágenes bajo el fold |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 305 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 186 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/video-surveillance-notice
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (68 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, nofollow | Revisar meta robots; eliminar noindex si la página debe indexarse |

### https://dratatianaleal.com/en/blog/common-mistakes-bad-aesthetic-results-prevention
Perf: **98** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 6 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 14 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/errores-comunes-pacientes-malos-resultados-estetica
Perf: **87** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 6 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 14 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/blog/preventive-collagen-biostimulation-young-patients
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/blog/bioestimulacion-colageno-preventiva-edad
Perf: **98** | SEO: **100** | Accesib: **88** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/prejuvenation-preventive-aesthetic-medicine-bogota
Perf: **89** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 25 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 49 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/prejuvenation-medicina-estetica-preventiva-bogota
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/blog/preventive-botox-before-30-guide
Perf: **98** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 22 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 44 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/botox-preventivo-antes-30-anos
Perf: **86** | SEO: **100** | Accesib: **88** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 15 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/what-age-start-botox-preventive-guide
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/blog/a-que-edad-empezar-botox-preventivo
Perf: **96** | SEO: **100** | Accesib: **88** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 12 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/hyaluronic-acid-side-effects-face-risks
Perf: **82** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 12 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 27 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/efectos-secundarios-acido-hialuronico-facial
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/blog/hyaluronic-acid-vs-sculptra-which-to-choose
Perf: **97** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 9 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 28 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/acido-hialuronico-vs-sculptra-cual-elegir
Perf: **82** | SEO: **100** | Accesib: **88** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 9 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/hyaluronic-acid-price-colombia-bogota-2026
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/blog/acido-hialuronico-precio-colombia-2026
Perf: **98** | SEO: **100** | Accesib: **88** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 9 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/how-long-does-hyaluronic-acid-last-face
Perf: **88** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 17 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 37 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/cuanto-dura-acido-hialuronico-facial
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/blog/hyaluronic-acid-facial-zones-where-applied
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/we-no-longer-offer-laser-lipolysis-we-recommend-scizer
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/acido-hialuronico-zonas-del-rostro
Perf: **89** | SEO: **100** | Accesib: **88** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 8 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/ya-no-ofrecemos-lipolisis-laser-recomendamos-scizer
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/blog/facial-radiofrequency-home-vs-clinic
Perf: **99** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 17 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 36 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/radiofrecuencia-facial-casa-vs-clinica
Perf: **84** | SEO: **100** | Accesib: **88** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 11 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/facial-radiofrequency-results-timeline
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/blog/resultados-radiofrecuencia-facial-timeline
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/blog/who-is-candidate-facial-radiofrequency
Perf: **97** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (15 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 980 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 19 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 39 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/quien-es-candidata-radiofrecuencia-facial
Perf: **79** | SEO: **100** | Accesib: **88** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 12 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 24 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/facial-radiofrequency-price-colombia-2026
Perf: **81** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 18 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (5 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/radiofrecuencia-facial-precio-colombia-2026
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/sculptor-vs-ems-electrostimulation-differences
Perf: **77** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (4.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 24 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/sculptor-vs-electroestimulacion-ems
Perf: **78** | SEO: **100** | Accesib: **88** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/how-many-sculptor-sessions-do-i-need
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/sculptor-cuantas-sesiones-necesito
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/sculptor-body-results-timeline-sessions
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/sculptor-resultados-reales-timeline
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/body-sculptor-vs-gym-what-makes-it-different
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/blog/sculptor-vs-gimnasio-que-lo-diferencia
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/facial-radiofrequency-what-is-how-it-works
Perf: **0** | SEO: **100** | Accesib: **89** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/radiofrecuencia-facial-que-es-como-funciona
Perf: **0** | SEO: **100** | Accesib: **89** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/botulinum-toxin-brands-clinical-criteria
Perf: **87** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 22 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 49 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/toxinas-botulinicas-marcas-criterio-medico
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/blog/what-is-hifu-facial-how-it-works
Perf: **95** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 18 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 32 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/que-es-hifu-facial-como-funciona
Perf: **87** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 18 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 32 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/blog/sculptra-for-men
Perf: **83** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 165 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 409 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/sculptra-para-hombres
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/hifu-facial-vs-facial-radiofrequency
Perf: **0** | SEO: **100** | Accesib: **89** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/hifu-facial-vs-radiofrecuencia-facial
Perf: **79** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 20 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (4 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 104 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/blog/what-is-hyaluronic-acid-facial-fillers
Perf: **0** | SEO: **100** | Accesib: **89** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/que-es-acido-hialuronico-facial
Perf: **0** | SEO: **100** | Accesib: **89** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/sculptra-side-effects-contraindications
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/sculptra-efectos-secundarios-contraindicaciones
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/radiesse-price-colombia
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/cuanto-cuesta-radiesse-colombia
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/aftercare-thread-lifts
Perf: **86** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 27 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 34 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/blog/foxy-eyes-thread-lifts-bogota
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/blog/cuidados-despues-hilos-tensores
Perf: **99** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 27 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 34 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/foxy-eyes-hilos-tensores-bogota
Perf: **94** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 86 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/butt-lift-cost-colombia-vs-usa-vs-mexico-2026
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/blog/colombian-butt-lift-vs-brazilian-bbl-guide
Perf: **99** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 18 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 29 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/blog/how-hifu-butt-lift-works-complete-guide
Perf: **99** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 27 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 34 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/blog/non-surgical-bbl-risks-safety-guide-2026
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/blog/bbl-sin-cirugia-riesgos-seguridad
Perf: **96** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 17 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/como-funciona-levantamiento-gluteos-hifu
Perf: **91** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 27 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 34 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/guia-bbl-colombiano-vs-brasileno
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/blog/precio-aumento-gluteos-colombia-vs-usa-mexico
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/aged-hands-rejuvenation-without-surgery
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/neck-flaccidity-treatments
Perf: **88** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 112 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 157 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/radiesse-vs-thread-lifts-neck
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/flacidez-cuello-tratamientos
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/radiesse-vs-hilos-tensores-cuello
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/rejuvenecimiento-manos-sin-cirugia
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/real-dangers-risks-thread-lift
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/thread-lift-face-prices-facial-zones
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/hilos-tensores-cara-precios-zonas-faciales
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/peligros-riesgos-reales-hilos-tensores
Perf: **86** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 133 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 192 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/botulinum-toxin-bruxism-bogota
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/blog/toxina-bruxismo-bogota
Perf: **94** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 126 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 184 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/sculptra-vs-radiesse-gluteos
Perf: **92** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 97 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 137 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/sculptra-vs-radiesse-gluteos
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/blog/sculptra-vs-bbl-gluteos
Perf: **95** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 77 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 117 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/sculptra-vs-bbl-gluteos
Perf: **98** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 77 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 117 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/how-long-does-botulinum-toxin-last
Perf: **75** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 145 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 529 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 6 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/cuanto-dura-toxina-botulinica
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/botox-hyperhidrosis-bogota
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/botox-hiperhidrosis-bogota
Perf: **92** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 900 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 158 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 217 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/types-thread-lifts-pdo-pcl-plla
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/blog/tipos-hilos-tensores-pdo-pcl-plla
Perf: **95** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 82 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 101 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/thread-lift-vs-other-facial-treatments
Perf: **83** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 180 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Avoid an excessive DOM size (823 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 224 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/hilos-tensores-vs-otros-tratamientos
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/blog/thread-lift-vs-botox
Perf: **90** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 118 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 145 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/hilos-tensores-vs-botox
Perf: **94** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 118 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 145 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/thread-lift-neck-double-chin
Perf: **80** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 18 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 6 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 239 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/hilos-tensores-cuello-papada
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/thread-lift-eyes-eyelids
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/hilos-tensores-ojos-parpados
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/blog/thread-lift-disadvantages-bad-results
Perf: **91** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 16 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 24 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/hilos-tensores-desventajas-malos-resultados
Perf: **100** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 16 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 24 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/expression-lines-mouth-lips-treatment
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/blog/lineas-expresion-boca-labios-tratamiento
Perf: **99** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 197 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 294 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/blog/expression-lines-forehead-effective-treatment
Perf: **93** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 205 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 371 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/lineas-expresion-frente-tratamiento-efectivo
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/blog/expression-lines-eyes-crows-feet-treatment
Perf: **86** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 146 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 238 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/lineas-expresion-ojos-patas-de-gallo-tratamiento
Perf: **86** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 146 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 238 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/do-creams-for-expression-lines-work
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/blog/cremas-para-lineas-de-expresion-funcionan
Perf: **86** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 115 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 138 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/expression-lines-what-are-they-and-how-to-eliminate-them
Perf: **81** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 221 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 336 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/lineas-de-expresion-que-son-y-como-eliminarlas
Perf: **78** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 221 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 6 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 555 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/blog/sun-protection-complete-guide-dr-tatiana-leal
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/entrevista-canal-rcn-dra-tatiana-leal
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/scizer-results-before-after
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/scizer-resultados-antes-despues
Perf: **98** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 910 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 141 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 216 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/scizer-vs-cryolipolysis
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/blog/scizer-vs-criolipolisis
Perf: **89** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 125 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 179 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/what-is-scizer-how-it-works
Perf: **91** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 15 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 23 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/que-es-scizer
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/blog/sculptra-vs-radiesse
Perf: **81** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 900 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 232 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 332 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/sculptra-vs-radiesse
Perf: **81** | SEO: **100** | Accesib: **88** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/sculptra-price-colombia
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Reduce initial server response time (Root document took 880 ms) | Reducir TTFB: habilitar caché de servidor o añadir CDN |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/sculptra-precios-colombia-2025
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/sculptra-before-after
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/sculptra-antes-despues
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/blog/sculptra-uses
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/blog/para-que-sirve-sculptra
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/blog/sculptra-reviews
Perf: **91** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 980 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 142 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 271 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/opiniones-sculptra
Perf: **83** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 142 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 271 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/sculptra-decision-smart-investment
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/blog/sculptra-inversion-inteligente
Perf: **93** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 162 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 309 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/sculptra-evolution
Perf: **65** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 910 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 427 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 682 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/sculptra-evolucion-mensual
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/blog/which-are-magic-threads-pdo
Perf: **96** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 50 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 65 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/que-son-hilos-magicos
Perf: **76** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 50 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (4.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 65 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/is-possible-tattoo-removal
Perf: **83** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 40 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 69 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/se-puede-borrar-un-tatuaje
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/blog/ultraskin-vs-dermazoom
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/blog/ultraskin-vs-dermazoom
Perf: **94** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 63 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 78 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/dr-tatiana-leal-in-colombian-alo-magazine
Perf: **80** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (11 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 77 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 96 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/doctora-tatiana-leal-en-revista-alo-colombia
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/blog/magazine-15-minutes-enterview-dr-tatiana-leal
Perf: **99** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 75 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 94 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/revista-15-minutos-entrevista-doctora-tatiana-leal
Perf: **85** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 75 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 94 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/blog/prices-facial-treatments-colombia
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/blog/remove-dark-spots
Perf: **99** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 19 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/blog/deep-facial-cleansing
Perf: **86** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 54 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/precios-tratamientos-faciales-colombia
Perf: **84** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 11 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/eliminar-manchas-oscuras
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/blog/limpieza-facial-profunda
Perf: **86** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 54 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/blog/how-much-does-laser-tattoo-removal-cost
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/blog/cuanto-cuesta-borrar-tatuajes
Perf: **96** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 8 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 14 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/blog/when-to-use-thread-lifting
Perf: **82** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 27 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 34 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/cuando-escoger-hilos-tensores
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/blog/liposuccion-vs-lipolisis
Perf: **95** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 10 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/liposuccion-vs-lipolisis
Perf: **83** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔍 Diagnóstico | Minimize main-thread work (3.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 10 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/blog/platelet-rich-plasma
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/blog/plasma-rico-plaquetas
Perf: **96** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 21 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/blog/what-did-lindsay-lohan-do-to-her-face
Perf: **86** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 41 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/que-tratamiento-se-hizo-lindsay-lohan
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/blog/lip-filler-techniques
Perf: **94** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 43 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 52 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/blog/tecnicas-rellenos-labios
Perf: **82** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 43 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 52 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/blog/laser-lipolysis-risks
Perf: **86** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 10 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 33 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/riesgos-lipolisis-laser
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-faciales/acido-hialuronico
Perf: **0** | SEO: **100** | Accesib: **92** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-faciales/biorevitalizacion
Perf: **0** | SEO: **100** | Accesib: **92** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |

### https://dratatianaleal.com/es/tratamientos-faciales/caida-del-cabello
Perf: **78** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 81 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-bogota/dysport
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/tratamientos-faciales/eliminar-manchas
Perf: **88** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 900 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 10,257 KiB) | Large network payloads cost users real money and are highly correlated with long load times |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 192 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-faciales/hifu-facial-dermazoom
Perf: **80** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 950 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 19 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-faciales/hilos-tensores
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/tratamientos-faciales/lifting
Perf: **96** | SEO: **100** | Accesib: **92** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 920 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 66 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-faciales/limpieza-facial
Perf: **0** | SEO: **100** | Accesib: **89** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 6,938 KiB) | Large network payloads cost users real money and are highly correlated with long load times |

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-bogota/neuronox
Perf: **0** | SEO: **100** | Accesib: **91** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-faciales/ojeras
Perf: **0** | SEO: **100** | Accesib: **89** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-faciales/peeling-quimico
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/tratamientos-faciales/plasma
Perf: **92** | SEO: **100** | Accesib: **92** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-faciales/radiesse-cuello
Perf: **68** | SEO: **100** | Accesib: **93** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 340 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-faciales/radiofrecuencia-facial
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/tratamientos-faciales/rejuve-face
Perf: **96** | SEO: **100** | Accesib: **92** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 39 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-faciales/rejuvenecimiento-cuello
Perf: **80** | SEO: **100** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 108 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 233 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-faciales/rejuvenecimiento-laser
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/tratamientos-faciales/relleno-labios-bogota
Perf: **0** | SEO: **100** | Accesib: **89** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-faciales/sculptra
Perf: **0** | SEO: **100** | Accesib: **90** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid an excessive DOM size (863 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-bogota/boca
Perf: **63** | SEO: **100** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-bogota
Perf: **0** | SEO: **100** | Accesib: **92** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-bogota/entrecejo
Perf: **0** | SEO: **100** | Accesib: **92** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-bogota/frente
Perf: **0** | SEO: **100** | Accesib: **92** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-bogota/ojos
Perf: **72** | SEO: **100** | Accesib: **92** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 414 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-faciales/vitamina-c-facial
Perf: **74** | SEO: **100** | Accesib: **92** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 570 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/biorevitalization
Perf: **0** | SEO: **100** | Accesib: **92** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/facial-treatments/botulinum-toxin-bogota/between-the-eyebrows
Perf: **67** | SEO: **100** | Accesib: **92** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 250 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/facial-treatments/botulinum-toxin-bogota
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/facial-treatments/botulinum-toxin-bogota/eyes
Perf: **94** | SEO: **100** | Accesib: **92** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (14 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,000 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 414 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/botulinum-toxin-bogota/forehead
Perf: **72** | SEO: **100** | Accesib: **92** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 202 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/facial-treatments/botulinum-toxin-bogota/mouth
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/facial-treatments/chemical-peeling
Perf: **85** | SEO: **100** | Accesib: **92** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 51 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/dark-circles-under-eye
Perf: **80** | SEO: **100** | Accesib: **89** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 46 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/deep-facial-cleansing
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/facial-treatments/botulinum-toxin-bogota/dysport
Perf: **92** | SEO: **100** | Accesib: **91** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 139 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/facial-radiofrequency
Perf: **81** | SEO: **100** | Accesib: **92** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (3.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 56 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/hair-loss
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/facial-treatments/hifu-facial-dermazoom
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/facial-treatments/hyaluronic-acid
Perf: **94** | SEO: **100** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,050 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 50 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/laser-rejuvenation
Perf: **85** | SEO: **100** | Accesib: **92** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 13 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 42 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/lifting
Perf: **78** | SEO: **100** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 175 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/lip-enhancement
Perf: **0** | SEO: **100** | Accesib: **89** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/facial-treatments/neck-rejuvenation
Perf: **0** | SEO: **100** | Accesib: **92** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/facial-treatments/botulinum-toxin-bogota/neuronox
Perf: **67** | SEO: **100** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 920 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 280 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/facial-treatments/plasma
Perf: **71** | SEO: **100** | Accesib: **92** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,030 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 674 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/facial-treatments/radiesse-neck
Perf: **0** | SEO: **100** | Accesib: **93** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Reduce initial server response time (Root document took 810 ms) | Reducir TTFB: habilitar caché de servidor o añadir CDN |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/facial-treatments/rejuve-face
Perf: **0** | SEO: **100** | Accesib: **92** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Reduce initial server response time (Root document took 990 ms) | Reducir TTFB: habilitar caché de servidor o añadir CDN |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/facial-treatments/remove-dark-spots
Perf: **0** | SEO: **100** | Accesib: **89** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 10,137 KiB) | Large network payloads cost users real money and are highly correlated with long load times |

### https://dratatianaleal.com/en/facial-treatments/sculptra-collagen-stimulator
Perf: **0** | SEO: **100** | Accesib: **90** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/facial-treatments/tensor-threads
Perf: **0** | SEO: **100** | Accesib: **90** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/facial-treatments/vitamin-c-facial
Perf: **0** | SEO: **100** | Accesib: **92** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-corporales/aclaramiento-genital
Perf: **78** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 17 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-corporales/celulitis
Perf: **78** | SEO: **100** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 950 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 3,419 KiB) | Large network payloads cost users real money and are highly correlated with long load times |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 259 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-corporales/depilacion-laser
Perf: **0** | SEO: **100** | Accesib: **92** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-corporales/eliminacion-tatuajes
Perf: **0** | SEO: **100** | Accesib: **86** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 7,942 KiB) | Large network payloads cost users real money and are highly correlated with long load times |
| 🔍 Diagnóstico | Avoid an excessive DOM size (959 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |

### https://dratatianaleal.com/es/tratamientos-corporales/escleroterapia-venas-varices
Perf: **0** | SEO: **100** | Accesib: **85** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Reduce initial server response time (Root document took 830 ms) | Reducir TTFB: habilitar caché de servidor o añadir CDN |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-corporales/gluteos
Perf: **0** | SEO: **100** | Accesib: **92** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-corporales/hifem-sculptor
Perf: **0** | SEO: **100** | Accesib: **85** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 20,446 KiB) | Large network payloads cost users real money and are highly correlated with long load times |

### https://dratatianaleal.com/es/tratamientos-corporales/moldeamiento
Perf: **0** | SEO: **100** | Accesib: **92** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-corporales/radiesse-manos
Perf: **0** | SEO: **100** | Accesib: **93** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-corporales/radiofrecuencia
Perf: **79** | SEO: **100** | Accesib: **92** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 56 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-corporales/sculptra-gluteos
Perf: **66** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (4.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Avoid an excessive DOM size (831 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-corporales/sueroterapia-detox
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/body-treatments/body-shaping
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/body-treatments/cellulite
Perf: **96** | SEO: **100** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,040 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 3,450 KiB) | Large network payloads cost users real money and are highly correlated with long load times |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 28 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/body-treatments/detox-therapy
Perf: **82** | SEO: **100** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 33 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/body-treatments/genital-lightening
Perf: **82** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 179 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/body-treatments/hifem-sculptor
Perf: **0** | SEO: **100** | Accesib: **85** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 12,471 KiB) | Large network payloads cost users real money and are highly correlated with long load times |

### https://dratatianaleal.com/en/body-treatments/laser-hair-removal
Perf: **0** | SEO: **100** | Accesib: **92** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/body-treatments/non-surgical-bbl-colombia
Perf: **0** | SEO: **100** | Accesib: **92** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/body-treatments/radiesse-hands
Perf: **0** | SEO: **100** | Accesib: **93** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/body-treatments/radiofrequency
Perf: **0** | SEO: **100** | Accesib: **92** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/body-treatments/sclerotherapy-varicose-veins
Perf: **77** | SEO: **100** | Accesib: **85** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/body-treatments/sculptra-for-buttocks
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/body-treatments/tattoo-removal
Perf: **93** | SEO: **100** | Accesib: **86** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Avoid an excessive DOM size (962 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 42 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tecnologia/analisis-facial-janus
Perf: **79** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 25 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tecnologia/contour-shape
Perf: **78** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tecnologia/inbody
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tecnologia/maximus
Perf: **74** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 970 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 32 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (4.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tecnologia/scizer/scizer-precio-bogota
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/tecnologia/scizer
Perf: **66** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,090 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 129 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tecnologia/sculptor
Perf: **81** | SEO: **100** | Accesib: **91** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 930 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tecnologia/thork
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 3,425 KiB) | Large network payloads cost users real money and are highly correlated with long load times |

### https://dratatianaleal.com/en/technology/contour-shape
Perf: **77** | SEO: **100** | Accesib: **85** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/technology/facial-analysis-janus
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/technology/inbody
Perf: **87** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 910 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 4 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 19 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/technology/maximus
Perf: **78** | SEO: **100** | Accesib: **88** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (4.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/technology/scizer/scizer-price-bogota
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/technology/scizer
Perf: **72** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,090 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 127 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/technology/sculptor
Perf: **76** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,010 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (4.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 49 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/technology/thork
Perf: **78** | SEO: **100** | Accesib: **91** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 22 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (4.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 66 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es
Perf: **0** | SEO: **100** | Accesib: **95** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/body-treatments/buttocks
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/tecnologia/dermazoom
Perf: **93** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,000 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 19 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/tratamientos-faciales/dysport-colombia
Perf: **76** | SEO: **100** | Accesib: **91** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (4.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 139 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-intimos
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/technology/dermazoom
Perf: **98** | SEO: **100** | Accesib: **88** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/en/facial-treatments/dysport-colombia
Perf: **76** | SEO: **100** | Accesib: **91** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 139 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/intimate-treatments
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-boca
Perf: **76** | SEO: **100** | Accesib: **92** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 950 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 530 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-frente
Perf: **70** | SEO: **100** | Accesib: **92** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 910 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 108 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-faciales/toxina-botulinica-ojos
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/en/scizer-price-bogota
Perf: **98** | SEO: **100** | Accesib: **89** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 5 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/scizer-precio-bogota
Perf: **71** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 129 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/es/tratamientos-faciales/tratamiento-neuronox
Perf: **0** | SEO: **0** | Accesib: **0** | BP: **0**

*Scores por debajo de 90 sin oportunidades específicas registradas.*

### https://dratatianaleal.com/centro-estetico
Perf: **93** | SEO: **100** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 21 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/facial-treatments/thread-lifting
Perf: **80** | SEO: **100** | Accesib: **90** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 23 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 19 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/en/body-treatments/lipolysis
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/es/tratamientos-corporales/lipolisis
Perf: **0** | SEO: **100** | Accesib: **88** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements use prohibited ARIA attributes | Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/tratamientos-faciales/acido-hialuronico
Perf: **0** | SEO: **100** | Accesib: **92** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/tratamientos
Perf: **0** | SEO: **100** | Accesib: **95** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/blog/cremas-para-lineas-de-expresion-funcionan
Perf: **82** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 115 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://dratatianaleal.com/tratamientos-faciales/toxina-botulinica-bogota
Perf: **0** | SEO: **100** | Accesib: **92** | BP: **0**

| Categoría | Problema | Solución |
|---|---|---|
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://dratatianaleal.com/en/body-treatments/radiofrecuency
Perf: **81** | SEO: **100** | Accesib: **92** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 56 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://dratatianaleal.com/es/blog/que-es-scizer-como-funciona
Perf: **84** | SEO: **100** | Accesib: **88** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 15 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Links do not have a discernible name | Agregar texto visible o aria-label a enlaces que solo contienen icono |
| 🔍 Diagnóstico | Page prevented back/forward cache restoration (1 failure reason) | Many navigations are performed by going back to a previous page, or forwards again |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 4 KiB) | A long cache lifetime can speed up repeat visits to your page |
