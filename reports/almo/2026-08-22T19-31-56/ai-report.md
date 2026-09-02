# Auditoría: www.almoclinic.com
*22/8/2026, 2:31:56 p. m. · 357 páginas auditadas · 2 links rotos*

Contexto: auditoría automática con Google Lighthouse. Cada fila representa un problema accionable con su solución recomendada. Aplica los cambios según prioridad: 🔴 errores primero, 🟡 advertencias después, 🔵 informativo.

## Links rotos

| URL rota | Estado | Encontrado en | Solución |
|---|---|---|---|
| https://www.almoclinic.com/img/favicon/apple-touch-icon-60x60.png | 404 | https://www.almoclinic.com | Crear redirección 301 hacia la URL correcta o eliminar el enlace |
| https://www.almoclinic.com/humans.txt | 404 | https://www.almoclinic.com | Crear redirección 301 hacia la URL correcta o eliminar el enlace |

## Problemas por página

### https://www.almoclinic.com
Perf: **79** | SEO: **92** | Accesib: **99** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 74 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Image elements have `[alt]` attributes that are redundant text. | Informative elements should aim for short, descriptive alternative text |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 240 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/about-us
Perf: **88** | SEO: **100** | Accesib: **100** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 980 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 2 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 13 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 78 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/area-profesional
Perf: **79** | SEO: **100** | Accesib: **98** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 54 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 102 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/blog
Perf: **80** | SEO: **92** | Accesib: **96** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (161 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 11 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 208 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Avoid an excessive DOM size (998 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (77 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,000 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 371 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/blog
Perf: **79** | SEO: **100** | Accesib: **96** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (62 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 11 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 205 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Avoid an excessive DOM size (1,102 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 980 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 363 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/contact
Perf: **83** | SEO: **100** | Accesib: **98** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 46 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 56 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/contacto
Perf: **91** | SEO: **100** | Accesib: **98** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 38 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 14 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 21 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/descargos-legales
Perf: **84** | SEO: **100** | Accesib: **100** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 25 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 2 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 9 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/frequently-asked-questions
Perf: **81** | SEO: **100** | Accesib: **98** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 47 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en
Perf: **77** | SEO: **92** | Accesib: **99** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 135 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Image elements have `[alt]` attributes that are redundant text. | Informative elements should aim for short, descriptive alternative text |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 282 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/legal-disclaimers
Perf: **83** | SEO: **100** | Accesib: **100** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 25 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 9 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/medical-responsibility
Perf: **84** | SEO: **100** | Accesib: **98** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 112 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 203 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/medical-tourism
Perf: **77** | SEO: **100** | Accesib: **98** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (189 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 930 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 131 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Image elements have `[alt]` attributes that are redundant text. | Informative elements should aim for short, descriptive alternative text |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 182 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/nosotros
Perf: **81** | SEO: **100** | Accesib: **100** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 13 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 78 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/politica-privacidad
Perf: **98** | SEO: **100** | Accesib: **98** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (69 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 26 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 9 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/politica-tratamiento-datos
Perf: **85** | SEO: **100** | Accesib: **100** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 26 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 9 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/preguntas-frecuentes
Perf: **81** | SEO: **100** | Accesib: **98** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 47 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/privacy-policy
Perf: **99** | SEO: **100** | Accesib: **98** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 25 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 9 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/professional-team
Perf: **84** | SEO: **100** | Accesib: **98** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (69 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (161 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Reduce initial server response time (Root document took 730 ms) | Reducir TTFB: habilitar caché de servidor o añadir CDN |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 40 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 54 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 99 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/responsabilidad-medica
Perf: **78** | SEO: **100** | Accesib: **98** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 112 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 203 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/terminos-condiciones
Perf: **85** | SEO: **100** | Accesib: **100** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (71 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 25 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 9 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/terms-conditions
Perf: **81** | SEO: **100** | Accesib: **100** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 25 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 9 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/turismo-medico
Perf: **84** | SEO: **100** | Accesib: **98** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 131 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Image elements have `[alt]` attributes that are redundant text. | Informative elements should aim for short, descriptive alternative text |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 188 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica
Perf: **87** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 39 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/abdominoplastia-bogota
Perf: **87** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 18 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Minimize main-thread work (3.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/cirugia-plastica/abdominoplastia-bogota/precios
Perf: **89** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (176 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/cirugia-plastica/abdominoplastia-bogota/recuperacion
Perf: **86** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (69 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 37 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/cirugia-plastica/blefaroplastia-bogota
Perf: **86** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 18 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 124 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 256 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/cirugia-plastica/blefaroplastia-bogota/precios
Perf: **87** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 124 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 256 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/cirugia-plastica/blefaroplastia-bogota/recuperacion
Perf: **83** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 35 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/cirugia-postbariatrica-bogota
Perf: **82** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/cirugia-postbariatrica-bogota/precios
Perf: **83** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (187 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/cirugia-plastica/cirugia-postbariatrica-bogota/recuperacion
Perf: **82** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (171 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 18 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/explantacion-mamaria-bogota
Perf: **93** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/cirugia-plastica/explantacion-mamaria-bogota/precios
Perf: **93** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/explantacion-mamaria-bogota/recuperacion
Perf: **93** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 37 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 2 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 17 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/ginecomastia-bogota
Perf: **91** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 30 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 39 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/gluteoplastia-bbl-bogota
Perf: **92** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (62 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 31 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 17 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/gluteoplastia-bbl-bogota/precios
Perf: **81** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 960 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 36 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/gluteoplastia-bbl-bogota/recuperacion
Perf: **91** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 910 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 37 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 2 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/gluteoplastia-bbl-bogota/seguridad
Perf: **83** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 37 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 2 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/lifting-facial-bogota
Perf: **81** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 30 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 22 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/lifting-facial-bogota/precios
Perf: **83** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 32 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 22 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/cirugia-plastica/lipoescultura-bogota
Perf: **91** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 920 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 30 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 28 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/lipoescultura-bogota/lipo-360
Perf: **82** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (165 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/cirugia-plastica/lipoescultura-bogota/precios
Perf: **79** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,020 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/lipoescultura-bogota/recuperacion
Perf: **87** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (75 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (171 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 970 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 37 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 2 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/mamoplastia-aumento-bogota
Perf: **83** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/mamoplastia-aumento-bogota/precios
Perf: **83** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (163 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/mamoplastia-aumento-bogota/recuperacion
Perf: **90** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/mommy-makeover-bogota
Perf: **83** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,030 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 30 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/mommy-makeover-bogota/precios
Perf: **83** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/mommy-makeover-bogota/recuperacion
Perf: **93** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (71 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/mommy-makeover-bogota/resultados
Perf: **83** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (61 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/otoplastia-bogota
Perf: **81** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 21 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 82 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/otoplastia-bogota/precios
Perf: **86** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 263 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/cirugia-plastica/pexia-mamaria-bogota
Perf: **83** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 31 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Minimize main-thread work (2.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/cirugia-plastica/pexia-mamaria-bogota/precios
Perf: **83** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (164 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/pexia-mamaria-bogota/recuperacion
Perf: **91** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/reduccion-mamaria-bogota
Perf: **84** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/reduccion-mamaria-bogota/precios
Perf: **83** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 36 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/reduccion-mamaria-bogota/recuperacion
Perf: **85** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/rinoplastia-bogota
Perf: **89** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 18 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 93 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/rinoplastia-bogota/precios
Perf: **83** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 93 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/cirugia-plastica/rinoplastia-bogota/recuperacion
Perf: **80** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (169 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 41 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 114 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/cirugia-plastica/rinoplastia-bogota/ultrasonico
Perf: **79** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (170 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 44 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 126 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/dermatologia
Perf: **84** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 18 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 59 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/dermatologia/acne
Perf: **82** | SEO: **100** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 20 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/dermatologia/acne/cicatrices-tratamiento-bogota
Perf: **81** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 32 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 83 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/dermatologia/hiperhidrosis
Perf: **78** | SEO: **100** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 85 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/dermatologia/hiperhidrosis/axilar-bogota
Perf: **80** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 92 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/dermatologia/melasma
Perf: **82** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (71 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 33 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/dermatologia/rosacea
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (166 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica
Perf: **79** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 57 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 247 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/corporal
Perf: **78** | SEO: **100** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 38 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 60 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/corporal/bodytite-bogota/abdomen
Perf: **90** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 47 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/corporal/bodytite-bogota/brazos
Perf: **83** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (68 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 35 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 27 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/corporal/bodytite-bogota
Perf: **80** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 30 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 40 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 111 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/corporal/bodytite-bogota/precios
Perf: **86** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (180 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 32 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 2 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 86 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/corporal/bodytite-bogota/que-es
Perf: **80** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 95 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 197 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/medicina-estetica/corporal/bodytite-bogota/recuperacion
Perf: **82** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 40 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 2 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 111 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/corporal/bodytite-bogota/resultados
Perf: **88** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (62 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (168 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 900 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 32 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 84 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/medicina-estetica/corporal/lifting-brazos-bogota
Perf: **82** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 26 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 65 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/medicina-estetica/corporal/morpheus8-body-bogota
Perf: **81** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 46 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/corporal/tratamiento-estrias-bogota
Perf: **90** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 15 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 32 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/medicina-estetica/facial
Perf: **82** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 15 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/facial/facetite-bogota
Perf: **81** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (170 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 28 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/facial/facetite-bogota/papada
Perf: **81** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 34 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 28 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 90 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/facial/flacidez-facial-bogota
Perf: **83** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/medicina-estetica/facial/juvelook-colombia
Perf: **79** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 29 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 53 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 157 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/facial/juvelook-colombia/precios
Perf: **81** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (62 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 53 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 157 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/medicina-estetica/facial/juvelook-colombia/que-es
Perf: **80** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 37 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 154 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/facial/juvelook-colombia/resultados
Perf: **79** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 37 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 53 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 2 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 157 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/facial/laser-co2-fraccionado-bogota
Perf: **80** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 27 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 28 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 69 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/facial/laser-co2-fraccionado-bogota/precios
Perf: **80** | SEO: **100** | Accesib: **84** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (71 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 39 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 101 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/facial/laser-co2-fraccionado-bogota/que-es
Perf: **79** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 12 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 69 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 200 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/facial/liftera-bogota
Perf: **81** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 28 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 36 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 92 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/facial/liftera-bogota/precios
Perf: **81** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 42 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 110 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/facial/morpheus8-bogota
Perf: **81** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 17 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 32 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/facial/morpheus8-bogota/combinaciones
Perf: **86** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 52 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 155 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/facial/morpheus8-bogota/opiniones
Perf: **87** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (62 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,020 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preconnect to required origins (Est savings of 260 ms) | Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 98 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 215 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/facial/morpheus8-bogota/precios
Perf: **79** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 58 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 174 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/facial/morpheus8-bogota/resultados
Perf: **82** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 18 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/facial/morpheus8-bogota/rostro
Perf: **80** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 18 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 45 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 128 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/medicina-estetica/facial/tratamiento-papada-bogota
Perf: **85** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (69 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 29 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/spa-bogota
Perf: **80** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 54 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 145 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/tratamientos-sin-cirugia
Perf: **80** | SEO: **100** | Accesib: **96** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid an excessive DOM size (976 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 34 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/tricologia
Perf: **81** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 39 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 85 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/tricologia/mesoterapia-capilar
Perf: **83** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 32 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/tricologia/prp-capilar
Perf: **82** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (163 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 40 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/tricologia/trasplante-capilar-dhi
Perf: **90** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (77 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (173 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 36 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 60 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 103 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/tricologia/trasplante-capilar-fue
Perf: **81** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (165 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 29 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 52 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/tricologia/trasplante-de-barba
Perf: **85** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 33 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/tricologia/trasplante-de-cejas
Perf: **82** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 39 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine
Perf: **78** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 22 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 189 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/body
Perf: **81** | SEO: **92** | Accesib: **93** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 38 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 2 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (2 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 60 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/body/arm-lift-bogota
Perf: **83** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (61 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (178 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 26 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 65 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/body/bodytite-bogota
Perf: **80** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 40 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 111 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/body/bodytite-bogota/pricing
Perf: **80** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 39 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 98 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/body/bodytite-bogota/recovery
Perf: **88** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (61 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 37 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 40 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 111 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/body/bodytite-bogota/results
Perf: **89** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 32 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 84 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/body/bodytite-bogota/what-is
Perf: **85** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 95 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 253 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/body/morpheus8-body-bogota
Perf: **80** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 16 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 46 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/body/stretch-marks-treatment-bogota
Perf: **86** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 105 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 223 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/facial
Perf: **91** | SEO: **92** | Accesib: **93** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (7 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 15 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/facial/double-chin-treatment-bogota
Perf: **81** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (165 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 29 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/facial/facetite-bogota
Perf: **81** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 28 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/facial/facial-sagging-bogota
Perf: **89** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (61 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 81 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/facial/fractional-co2-laser-bogota
Perf: **81** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 28 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 69 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/facial/fractional-co2-laser-bogota/pricing
Perf: **80** | SEO: **100** | Accesib: **84** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (170 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 39 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 101 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/facial/fractional-co2-laser-bogota/what-is
Perf: **89** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description corta (60 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 16 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 123 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 344 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/facial/juvelook-colombia
Perf: **85** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 53 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 157 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/facial/juvelook-colombia/pricing
Perf: **80** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 38 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 53 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 157 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/facial/liftera-bogota
Perf: **81** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 36 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 92 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/facial/liftera-bogota/pricing
Perf: **80** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 42 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 110 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/facial/morpheus8-bogota
Perf: **82** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 34 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 32 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/facial/morpheus8-bogota/combinations
Perf: **79** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 52 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 155 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/facial/morpheus8-bogota/facial
Perf: **80** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (76 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 18 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 45 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 128 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/facial/morpheus8-bogota/pricing
Perf: **79** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 58 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 174 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/facial/morpheus8-bogota/results
Perf: **85** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 16 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/aesthetic-medicine/facial/morpheus8-bogota/reviews
Perf: **80** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (61 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 17 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 98 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 215 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/dermatology
Perf: **82** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 18 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 59 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/dermatology/acne
Perf: **82** | SEO: **100** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 20 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/dermatology/acne/scars-treatment-bogota
Perf: **90** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 32 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 83 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/dermatology/hyperhidrosis
Perf: **77** | SEO: **100** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 85 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/dermatology/hyperhidrosis/axillary-bogota
Perf: **80** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (180 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 92 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/dermatology/melasma
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 30 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/dermatology/rosacea
Perf: **81** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 2 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/medical-spa
Perf: **80** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 18 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 54 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 145 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery
Perf: **81** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (178 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 39 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/abdominoplasty-bogota
Perf: **87** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,120 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 40 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/abdominoplasty-bogota/pricing
Perf: **83** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/abdominoplasty-bogota/recovery
Perf: **82** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (69 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (163 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/bbl-gluteoplasty-bogota
Perf: **91** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (164 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/bbl-gluteoplasty-bogota/pricing
Perf: **83** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/bbl-gluteoplasty-bogota/recovery
Perf: **83** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (168 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/bbl-gluteoplasty-bogota/safety
Perf: **91** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (76 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (175 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/blepharoplasty-bogota
Perf: **86** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (165 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 124 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 256 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/blepharoplasty-bogota/pricing
Perf: **89** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (171 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 35 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 124 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 256 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/plastic-surgery/blepharoplasty-bogota/recovery
Perf: **84** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/breast-augmentation-bogota
Perf: **83** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/breast-augmentation-bogota/pricing
Perf: **83** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (77 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 37 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/breast-augmentation-bogota/recovery
Perf: **83** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (71 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 37 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/breast-explant-bogota
Perf: **90** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 40 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/breast-explant-bogota/pricing
Perf: **83** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/breast-explant-bogota/recovery
Perf: **84** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/breast-reduction-bogota
Perf: **91** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (77 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (175 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/breast-reduction-bogota/pricing
Perf: **83** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (75 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/breast-reduction-bogota/recovery
Perf: **82** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/facelift-bogota
Perf: **89** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 22 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/facelift-bogota/pricing
Perf: **82** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 22 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/gynecomastia-bogota
Perf: **85** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 39 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/liposculpture-bogota
Perf: **90** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (175 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/liposculpture-bogota/pricing
Perf: **82** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/liposculpture-bogota/recovery
Perf: **92** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (166 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/mastopexy-bogota
Perf: **91** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/mastopexy-bogota/pricing
Perf: **87** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/plastic-surgery/mastopexy-bogota/recovery
Perf: **82** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/mommy-makeover-bogota
Perf: **83** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/mommy-makeover-bogota/pricing
Perf: **83** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/mommy-makeover-bogota/recovery
Perf: **83** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 36 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/mommy-makeover-bogota/results
Perf: **83** | SEO: **100** | Accesib: **88** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/otoplasty-bogota
Perf: **75** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 236 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 441 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/otoplasty-bogota/pricing
Perf: **81** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 21 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 82 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/post-bariatric-surgery-bogota
Perf: **83** | SEO: **100** | Accesib: **90** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/post-bariatric-surgery-bogota/pricing
Perf: **82** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/post-bariatric-surgery-bogota/recovery
Perf: **84** | SEO: **100** | Accesib: **86** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (163 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/rhinoplasty-bogota
Perf: **83** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 35 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 93 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/rhinoplasty-bogota/pricing
Perf: **89** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 19 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 93 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/plastic-surgery/rhinoplasty-bogota/recovery
Perf: **80** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 41 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 114 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/plastic-surgery/rhinoplasty-bogota/ultrasonic
Perf: **85** | SEO: **100** | Accesib: **87** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (171 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 44 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Touch targets do not have sufficient size or spacing. | Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 126 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/without-surgery
Perf: **81** | SEO: **100** | Accesib: **96** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 10 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid an excessive DOM size (932 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 34 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/trichology
Perf: **84** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (183 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 21 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 39 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 85 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/trichology/beard-transplant
Perf: **90** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (69 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 33 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/trichology/eyebrow-transplant
Perf: **83** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (78 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 36 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 39 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/trichology/hair-mesotherapy
Perf: **90** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (164 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 32 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/trichology/hair-prp
Perf: **82** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (171 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 40 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/trichology/hair-transplant-dhi
Perf: **83** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 60 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 103 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/en/trichology/hair-transplant-fue
Perf: **85** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 29 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 52 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/cirugia-plastica-colombia-guia-seguridad
Perf: **80** | SEO: **100** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 13 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,130 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/rinoplastia-colombia-guia-pacientes-internacionales
Perf: **97** | SEO: **100** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,040 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 131 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 175 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/rosacea-tratamientos-medicos-evidencia
Perf: **78** | SEO: **100** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (169 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 46 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,120 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 125 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/blog/el-melasma-tiene-cura-dermatologia
Perf: **80** | SEO: **100** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (168 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 30 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 2 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,130 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 73 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/blog/melasma-embarazo-manchas-hormonales
Perf: **74** | SEO: **100** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 41 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 40 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 105 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/rosacea-causas-factores-desencadenantes
Perf: **75** | SEO: **100** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 84 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,110 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/que-es-el-melasma-tipos-causas
Perf: **75** | SEO: **100** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 41 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 110 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/que-es-la-rosacea-tipos-sintomas
Perf: **87** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (174 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 39 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 102 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/mesoterapia-capilar-guia
Perf: **75** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (75 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (165 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 33 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 81 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,090 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/prp-capilar-guia
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (71 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (166 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 15 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 28 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/trasplante-capilar-fue-guia
Perf: **76** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (175 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 29 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 65 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,100 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/alopecia-femenina
Perf: **82** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (170 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 10 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 14 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,130 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 27 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/blog/tipos-de-alopecia
Perf: **82** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (169 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 13 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 22 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,090 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/crisis-cirugias-clandestinas-bogota
Perf: **78** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (61 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (190 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 25 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/caida-del-cabello-causas-tratamiento
Perf: **91** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 19 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 40 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/biopolimeros-riesgos-retiro
Perf: **88** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 37 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 49 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 106 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/recuperacion-de-la-rinoplastia
Perf: **77** | SEO: **100** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 33 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 83 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/juvelook-vs-juvelook-volume-diferencias
Perf: **76** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (170 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 30 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 66 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,100 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/es/blog/ginecomastia-causas-tratamiento
Perf: **84** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 40 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 128 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 260 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/fibrosis-despues-de-lipoescultura
Perf: **78** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 21 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 44 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,100 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/juvelook-cicatrices-acne-atroficas
Perf: **74** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (78 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 10 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 43 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 116 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/riesgos-de-la-rinoplastia
Perf: **87** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 30 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 72 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/lipolisis-laser-vs-liposuccion
Perf: **78** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 16 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 32 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/que-es-pdlla-bioestimulador
Perf: **99** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (172 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 35 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 84 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 211 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/blog/rinoplastia-primaria-y-secundaria-diferencias
Perf: **76** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 32 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 77 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,100 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/recuperacion-otoplastia-cuidados-postoperatorios
Perf: **75** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 84 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,100 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/juvelook-vs-harmonyca
Perf: **99** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (164 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 18 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 2 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 25 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/otoplastia-sin-cirugia-alternativas
Perf: **73** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 60 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 173 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/rinoplastia-para-hombres-resultados-naturales
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 38 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 35 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 90 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/otoplastia-ninos-adultos-edad-ideal
Perf: **73** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 60 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 174 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,100 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/juvelook-vs-profhilo
Perf: **81** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (62 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (168 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 39 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 22 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 29 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,120 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/rinoplastia-o-septoplastia-diferencias
Perf: **75** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 33 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 80 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,110 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/que-es-la-otoplastia
Perf: **98** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (172 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 69 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 189 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/juvelook-vs-rejuran
Perf: **97** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 27 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 37 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/blefaroplastia-hombres-colombia
Perf: **76** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (163 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 33 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 83 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,120 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/rinoplastia-o-rinomodelacion-cual-elegir
Perf: **99** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 35 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 88 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/juvelook-vs-botox-patas-de-gallo
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (163 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 30 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 41 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/blefaroplastia-laser-vs-tradicional
Perf: **74** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 56 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 158 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/para-que-sirve-la-rinoplastia
Perf: **98** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (175 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 33 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 80 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/senales-necesitas-cirugia-parpados
Perf: **73** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 44 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 119 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,100 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/juvelook-patas-de-gallo-parpados-ojeras
Perf: **75** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 74 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/que-es-la-blefaroplastia
Perf: **73** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 66 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 191 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,120 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/como-se-hace-una-rinoplastia
Perf: **87** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 42 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 113 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/juvelook-vs-sculptra
Perf: **76** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (62 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 58 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 79 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,110 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/que-es-juvelook-bioestimulador-hibrido
Perf: **99** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 73 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 204 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/lifting-facial-vs-no-quirurgicos
Perf: **73** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 64 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 142 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,080 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/bodytite-abdomen-bogota
Perf: **74** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 30 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 118 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,100 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/mommy-makeover-riesgos
Perf: **98** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 39 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 81 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/mitos-realidad-sindrome-asia-bogota
Perf: **88** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 38 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 51 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 109 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/bodytite-brazos-bogota
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 106 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 302 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/mommy-makeover-vs-procedimientos-individuales-bogota
Perf: **76** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 52 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 109 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,090 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/preparacion-mastopexia-bogota
Perf: **96** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,060 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 37 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 94 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/explantacion-vs-recambio-implantes-bogota
Perf: **74** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 36 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 91 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/candidatas-mommy-makeover
Perf: **97** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 24 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 51 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/bodytite-papada-cuello-bogota
Perf: **74** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (75 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 40 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 97 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,100 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/que-es-mommy-makeover
Perf: **75** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 29 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 69 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,080 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/tratamientos-esteticos-bogota-turismo-medico
Perf: **94** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 84 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 205 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/blog/mamoplastia-aumento-colombia-guia
Perf: **78** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (174 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 26 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 59 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,110 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/lipoescultura-vs-abdominoplastia
Perf: **87** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (62 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (169 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 67 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 145 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/gluteoplastia-vs-implantes-gluteos
Perf: **87** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (170 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 80 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 188 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/gluteoplastia-bbl-colombia-guia-2026
Perf: **79** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 22 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 46 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,110 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/cirugia-postbariatrica-colombia
Perf: **74** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (176 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 65 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 2 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 146 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,090 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/bbl-seguro-colombia
Perf: **89** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (163 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 90 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 199 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/bodytite-vs-liposuccion
Perf: **97** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 56 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 145 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/morpheus8-vs-hifu-bogota
Perf: **73** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 52 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 127 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,070 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/causas-papada-bogota
Perf: **86** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 41 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 2 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 102 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/morpheus8-vs-thermage-bogota
Perf: **83** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (69 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 15 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,080 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 28 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/blog/causas-hiperhidrosis-axilar
Perf: **87** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (61 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 27 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 58 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/laser-co2-vs-morpheus8-cicatrices-acne
Perf: **86** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 17 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 33 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/blog/liftera-vs-ultherapy
Perf: **80** | SEO: **100** | Accesib: **91** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (69 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 13 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | `[aria-hidden="true"]` elements contain focusable descendents | Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 24 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,070 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/es/blog/resultados-testimonios-liftera-bogota
Perf: **80** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (69 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 10 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 64 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/liftera-hifu-sin-dolor-colombia
Perf: **86** | SEO: **100** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 48 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/liftera-vs-ultraformer
Perf: **78** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 13 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 32 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/efectos-secundarios-liftera
Perf: **96** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (62 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 22 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |

### https://www.almoclinic.com/es/blog/abdominaplastia-heridas-abiertas
Perf: **76** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 16 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 42 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,220 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/auge-de-explantacion-mamaria
Perf: **80** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,230 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/blog/medicina-estetica-etica-bogota
Perf: **81** | SEO: **100** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 10 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 12 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,070 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 26 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/blog/primeras-arrugas-30-dermatologos
Perf: **84** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (161 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 18 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/es/blog/complicaciones-botox-bogota
Perf: **69** | SEO: **100** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (61 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 10 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 41 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 108 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,180 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/es/blog/clinicas-esteticas-seguras-bogota
Perf: **78** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (179 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 10 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 13 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,180 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/en/blog/plastic-surgery-colombia-safe-verified-guide
Perf: **80** | SEO: **92** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 13 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,030 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/rhinoplasty-colombia-cost-international-patients
Perf: **69** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (78 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 131 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 175 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,080 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/rosacea-treatments-evidence-based
Perf: **97** | SEO: **92** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 10 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 46 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 125 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/does-melasma-have-a-cure-2026
Perf: **73** | SEO: **92** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (62 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (163 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 33 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 81 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,070 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/melasma-pregnancy-hormonal-spots
Perf: **73** | SEO: **92** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 40 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 105 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/en/blog/rosacea-causes-triggers
Perf: **75** | SEO: **92** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 84 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,100 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/what-is-melasma-types-causes
Perf: **74** | SEO: **92** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 41 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 110 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,070 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/what-is-rosacea-types-symptoms
Perf: **73** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 830 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 39 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 102 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,070 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/is-hair-transplant-safe-in-colombia
Perf: **78** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (175 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 13 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,060 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/hair-transplant-cost-colombia-vs-usa
Perf: **81** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,100 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/en/blog/hair-mesotherapy-guide
Perf: **74** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 33 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 81 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,090 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/best-med-spa-bogota-international-patients
Perf: **73** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 54 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 97 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/prp-hair-treatment-guide
Perf: **92** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 25 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 55 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/fue-hair-transplant-bogota-guide
Perf: **90** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (171 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 29 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 65 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/female-hair-loss
Perf: **91** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (71 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 14 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 27 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/types-of-alopecia
Perf: **81** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 20 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,090 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/en/blog/hair-loss-causes-treatment
Perf: **98** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (172 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 10 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 13 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 23 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/biopolymer-removal
Perf: **99** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 27 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 2 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 61 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/rhinoplasty-recovery
Perf: **90** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 33 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 83 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/en/blog/juvelook-vs-juvelook-volume-differences
Perf: **76** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (164 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 30 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 66 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,090 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |

### https://www.almoclinic.com/en/blog/how-to-get-rid-of-gynecomastia
Perf: **72** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 93 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 185 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,080 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/fibrosis-after-lipo
Perf: **87** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,020 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preconnect to required origins (Est savings of 330 ms) | Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 40 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 21 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 44 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/en/blog/juvelook-acne-scars-treatment
Perf: **73** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 63 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 165 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,080 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/rhinoplasty-risks
Perf: **77** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 30 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 72 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 960 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/laser-lipo-vs-liposuction
Perf: **90** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 48 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 126 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/what-is-pdlla-biostimulator
Perf: **73** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (172 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 22 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 48 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 122 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/primary-and-secondary-rhinoplasty
Perf: **75** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (62 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 32 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 77 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 950 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/juvelook-vs-harmonyca
Perf: **82** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 18 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,110 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/en/blog/rhinoplasty-for-men
Perf: **78** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (59 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 35 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 90 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 990 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/juvelook-vs-profhilo
Perf: **81** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (168 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 22 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 29 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,110 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/rhinoplasty-or-septoplasty
Perf: **89** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (61 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description corta (32 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 38 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 33 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 80 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/juvelook-vs-rejuran
Perf: **80** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 27 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 37 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,110 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/blepharoplasty-for-men-colombia
Perf: **76** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (164 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 33 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 83 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,120 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/rhinoplasty-or-non-surgical-rhinoplasty
Perf: **98** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 35 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 88 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/juvelook-vs-botox-crows-feet
Perf: **77** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description corta (26 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 30 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 41 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,080 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/laser-vs-traditional-blepharoplasty
Perf: **74** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 56 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 158 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,080 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/what-rhinoplasty-is-for
Perf: **98** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 33 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 80 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/signs-you-need-eyelid-surgery
Perf: **83** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 68 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 186 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/juvelook-crows-feet-eyelids-dark-circles
Perf: **75** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (75 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description corta (17 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 2 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 74 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,080 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/what-is-blepharoplasty
Perf: **77** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 110 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 326 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/how-rhinoplasty-is-done
Perf: **78** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (171 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 42 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 113 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 960 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/juvelook-vs-sculptra
Perf: **75** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 58 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 79 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,090 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/what-is-juvelook-hybrid-bio-stimulator
Perf: **98** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 73 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 204 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/facelift-vs-non-surgical-treatments
Perf: **87** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 64 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 142 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/en/blog/mommy-makeover-risks-safety
Perf: **76** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 39 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 81 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,070 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/asia-syndrome-myths-facts-bogota
Perf: **98** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 65 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 144 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/bodytite-arms-bogota
Perf: **87** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 88 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 244 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/mommy-makeover-vs-individual-procedures
Perf: **76** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 10 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 19 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 38 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,040 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/mastopexy-preparation-bogota
Perf: **84** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 72 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 169 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/explant-vs-implant-replacement-bogota
Perf: **71** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 36 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 91 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,010 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/ideal-mommy-makeover-candidates
Perf: **99** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (71 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 42 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 88 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/bodytite-double-chin-neck-bogota
Perf: **86** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (77 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 40 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 97 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/en/blog/what-is-mommy-makeover
Perf: **91** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 114 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 258 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/aesthetic-treatments-bogota-medical-tourism
Perf: **74** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (173 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 10 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 42 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 112 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,000 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/breast-augmentation-colombia-guide
Perf: **98** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (173 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 26 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 59 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/liposculpture-vs-abdominoplasty
Perf: **98** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 30 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 71 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/bbl-vs-butt-implants
Perf: **98** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (71 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (161 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 72 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 169 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/gluteoplasty-bbl-colombia-guide-2026
Perf: **99** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 10 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 22 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 46 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/post-bariatric-surgery-colombia
Perf: **98** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 37 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 29 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 67 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/safe-bbl-colombia
Perf: **74** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (78 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (170 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 28 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 63 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,040 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/bodytite-vs-traditional-liposuction
Perf: **88** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 24 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 51 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/en/blog/morpheus8-vs-hifu-bogota
Perf: **67** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 79 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/en/blog/causes-of-double-chin-bogota
Perf: **79** | SEO: **92** | Accesib: **94** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 41 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 102 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,080 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/morpheus8-vs-thermage-bogota
Perf: **90** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 19 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 39 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/causes-of-axillary-hyperhidrosis
Perf: **74** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 27 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 58 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,050 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/laser-co2-vs-morpheus8-acne-scars
Perf: **77** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 10 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 17 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 33 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,050 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/liftera-vs-ultherapy
Perf: **81** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 10 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 13 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 24 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,020 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/liftera-results-bogota
Perf: **81** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 38 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 64 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,080 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/no-pain-liftera-hifu-colombia
Perf: **83** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 20 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 14 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/en/blog/liftera-vs-ultraformer
Perf: **79** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 37 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 13 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 32 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/en/blog/liftera-side-effects
Perf: **81** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 24 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 22 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,080 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/en/blog/why-abdominoplasty-wounds-open
Perf: **85** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 1,090 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preconnect to required origins (Est savings of 320 ms) | Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 37 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 16 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 42 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/breast-explantation-personal-courageous-decision
Perf: **97** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 10 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://www.almoclinic.com/en/blog/ethical-aesthetic-medicine-bogota
Perf: **84** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 990 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 41 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 12 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 2 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/en/blog/early-wrinkles-30s-dermatologists
Perf: **81** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (68 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description corta (66 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 10 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,080 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/en/blog/botox-complications-bogota
Perf: **79** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 23 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 19 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://www.almoclinic.com/en/blog/safe-aesthetic-clinics-bogota
Perf: **79** | SEO: **92** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (74 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 27 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 10 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 7 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (6 links found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 25 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests (Est savings of 1,170 ms) | Requests are blocking the page's initial render, which may delay LCP |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://www.almoclinic.com/es
Perf: **76** | SEO: **92** | Accesib: **99** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 950 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 26 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 31 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 2 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 74 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Image elements have `[alt]` attributes that are redundant text. | Informative elements should aim for short, descriptive alternative text |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Links do not have descriptive text (1 link found) | Descriptive link text helps search engines understand your content |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 2 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 240 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Render blocking requests | Requests are blocking the page's initial render, which may delay LCP |
