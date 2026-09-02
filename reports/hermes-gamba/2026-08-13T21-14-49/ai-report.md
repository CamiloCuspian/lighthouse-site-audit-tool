# Auditoría: hermesgamba.com
*13/8/2026, 4:14:49 p. m. · 160 páginas auditadas · 0 links rotos*

Contexto: auditoría automática con Google Lighthouse. Cada fila representa un problema accionable con su solución recomendada. Aplica los cambios según prioridad: 🔴 errores primero, 🟡 advertencias después, 🔵 informativo.

## Problemas por página

### https://hermesgamba.com
Perf: **75** | SEO: **100** | Accesib: **96** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 448 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 603 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 540 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (19 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://hermesgamba.com/cirugias/mamoplastia/aumento-de-senos-con-grasa
Perf: **99** | SEO: **100** | Accesib: **96** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (10.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (12 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 13,838 KiB) | Large network payloads cost users real money and are highly correlated with long load times |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 247 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 46 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/gluteoplastia/bbl-vs-implantes
Perf: **72** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 263 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 184 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog
Perf: **77** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 26 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (10 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 290 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 119 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/contacto
Perf: **58** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 86 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 241 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 129 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://hermesgamba.com/cirugias/bichectomia/hombres-bogota
Perf: **85** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (61 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 39 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (3.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Avoid an excessive DOM size (1,363 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 163 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 112 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/lipoescultura/hombres-bogota
Perf: **94** | SEO: **100** | Accesib: **93** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 39 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 44 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (3.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Links rely on color to be distinguishable. | Low-contrast text is difficult or impossible for many users to read |
| 🔍 Diagnóstico | Avoid an excessive DOM size (1,215 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 135 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 64 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/abdominoplastia/hombres-bogota
Perf: **81** | SEO: **100** | Accesib: **93** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Links rely on color to be distinguishable. | Low-contrast text is difficult or impossible for many users to read |
| 🔍 Diagnóstico | Avoid an excessive DOM size (840 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 161 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 97 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/mamoplastia/implantes-motiva
Perf: **97** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 106 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 52 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/clinicas-donde-opero/bogota
Perf: **79** | SEO: **100** | Accesib: **93** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 152 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<frame>` or `<iframe>` elements do not have a title | Añadir atributo title descriptivo a cada <iframe> |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 256 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 197 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (10 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 3,900 KiB) | Large network payloads cost users real money and are highly correlated with long load times |

### https://hermesgamba.com/clinicas-donde-opero/bucaramanga
Perf: **59** | SEO: **100** | Accesib: **93** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 38 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<frame>` or `<iframe>` elements do not have a title | Añadir atributo title descriptivo a cada <iframe> |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (7 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 122 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 46 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/clinicas-donde-opero/tunja
Perf: **59** | SEO: **100** | Accesib: **93** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 38 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<frame>` or `<iframe>` elements do not have a title | Añadir atributo title descriptivo a cada <iframe> |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 134 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 67 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (7 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://hermesgamba.com/clinicas-donde-opero
Perf: **67** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 65 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 268 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 137 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/mamoplastia/bogota
Perf: **97** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 69 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 194 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 148 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://hermesgamba.com/cirugias/mamoplastia/explantacion
Perf: **97** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 45 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 146 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 100 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/mamoplastia/bucaramanga
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 69 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 148 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 66 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/mamoplastia/tunja
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 66 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 192 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 146 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/mamoplastia
Perf: **98** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 169 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 106 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/braquioplastia/bogota
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 37 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 85 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 53 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/braquioplastia/bucaramanga
Perf: **95** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 44 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 11 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 91 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 58 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/braquioplastia/tunja
Perf: **74** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 37 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (7 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 72 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 42 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/braquioplastia
Perf: **94** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 59 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 118 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 78 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/rinoplastia/bogota
Perf: **98** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 780 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 41 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 159 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 105 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/rinoplastia/bucaramanga
Perf: **95** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 164 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 95 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/rinoplastia/tunja
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 64 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 166 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 98 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/rinoplastia
Perf: **73** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 141 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 81 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/bichectomia/bogota
Perf: **82** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 37 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 119 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 57 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/bichectomia/bucaramanga
Perf: **82** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 223 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 138 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/bichectomia/tunja
Perf: **98** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 200 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 113 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/bichectomia
Perf: **93** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 200 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 113 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/lifting-facial/bogota
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 790 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 94 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/lifting-facial/bucaramanga
Perf: **97** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 94 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/lifting-facial/tunja
Perf: **99** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 94 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/lifting-facial
Perf: **97** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 94 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/gluteoplastia/bogota
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 130 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 82 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://hermesgamba.com/cirugias/gluteoplastia/bucaramanga
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 780 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 175 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 78 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://hermesgamba.com/cirugias/gluteoplastia/tunja
Perf: **95** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 195 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 107 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/gluteoplastia
Perf: **90** | SEO: **100** | Accesib: **96** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 810 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 43 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers (Est savings of 0 KiB) | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (18 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 841 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 98 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/lipoescultura/marcacion-abdominal
Perf: **94** | SEO: **100** | Accesib: **96** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 810 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (14 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 12,550 KiB) | Large network payloads cost users real money and are highly correlated with long load times |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 449 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 39 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/lipoescultura/bogota
Perf: **88** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 124 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 61 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://hermesgamba.com/cirugias/lipoescultura/bucaramanga
Perf: **97** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 136 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 70 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/lipoescultura/tunja
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 189 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 127 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/lipoescultura
Perf: **94** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 190 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 107 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://hermesgamba.com/cirugias/ginecomastia/bucaramanga
Perf: **97** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 98 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (7 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 140 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 85 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/ginecomastia/tunja
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 98 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (7 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 140 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 85 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/ginecomastia
Perf: **73** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 98 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (7 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 140 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 85 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/abdominoplastia/bogota
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 49 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 175 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 117 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/abdominoplastia/bucaramanga
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 115 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/abdominoplastia/tunja
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 148 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 74 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/abdominoplastia
Perf: **95** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (161 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 185 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 96 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/mommy-makeover/bogota
Perf: **98** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 780 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 11 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 47 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 212 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 157 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://hermesgamba.com/cirugias/mommy-makeover/bucaramanga
Perf: **97** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 42 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 163 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 115 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/mommy-makeover/tunja
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 42 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers (Est savings of 0 KiB) | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 163 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 115 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/mommy-makeover/recuperacion
Perf: **73** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 175 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 101 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/mommy-makeover
Perf: **73** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 59 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 148 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 76 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/vaginoplastia/bogota
Perf: **94** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 81 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/vaginoplastia/bucaramanga
Perf: **97** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 81 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/vaginoplastia/tunja
Perf: **97** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 81 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/vaginoplastia
Perf: **99** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers (Est savings of 0 KiB) | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 81 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/otoplastia/bogota
Perf: **82** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 63 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 132 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 94 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/otoplastia/bucaramanga
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 780 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 46 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 68 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 138 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 101 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/otoplastia/tunja
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 54 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 11 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 114 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 78 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/otoplastia
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 88 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 173 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 133 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://hermesgamba.com/cirugias/blefaroplastia/bucaramanga
Perf: **97** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 167 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 110 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/blefaroplastia/tunja
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 810 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 167 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 110 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/blefaroplastia
Perf: **93** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 167 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 93 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias
Perf: **75** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 137 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 336 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 195 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (11 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://hermesgamba.com/cirugias/gluteoplastia/masculina-bogota
Perf: **94** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 39 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (3.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Avoid an excessive DOM size (1,275 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 196 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 97 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/mamoplastia/mastopexia
Perf: **83** | SEO: **100** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 86 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 38 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/lipoescultura/papada-precio
Perf: **71** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 39 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Minify JavaScript (Est savings of 3 KiB) | Minifying JavaScript files can reduce payload sizes and script parse time |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Minimize main-thread work (4.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Reduce JavaScript execution time (1.4 s) | Minimizar y dividir bundles JS; eliminar librerías pesadas no utilizadas |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid an excessive DOM size (1,256 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 147 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 72 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/bichectomia/precio-colombia
Perf: **99** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Avoid an excessive DOM size (943 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 138 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 69 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/gluteoplastia/precio-colombia
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 38 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (3.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Avoid an excessive DOM size (1,168 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 169 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 76 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/abdominoplastia/precio-colombia
Perf: **97** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 201 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 106 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/mommy-makeover/precio-colombia
Perf: **99** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 186 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 125 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/abdominoplastia/recuperacion-15-dias
Perf: **98** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 159 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 74 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/gluteoplastia/recuperacion-bogota
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 39 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (3.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Avoid an excessive DOM size (1,373 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 159 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 89 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/cirugias/mamoplastia/reduccion-mamaria
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 117 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 65 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/sobre-mi
Perf: **66** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 51 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 120 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 77 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/botox-o-lifting-facial
Perf: **80** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (7 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 119 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 52 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/acido-hialuronico-o-rinoplastia
Perf: **80** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (7 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 197 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 98 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/botox-precio-colombia
Perf: **79** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 790 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 47 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (7 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 146 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 88 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/otoplastia-sin-cirugia-mal-hecha
Perf: **77** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 50 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 136 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 57 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/cicatriz-braquioplastia-evolucion
Perf: **74** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 780 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 35 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 87 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 41 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/cuanto-dura-grasa-inyectada-gluteos-bbl
Perf: **83** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (199 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 780 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 58 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 170 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 125 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/braquioplastia-lifting-brazos-colombia
Perf: **92** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 84 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 39 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/lipomarcacion-precio-colombia
Perf: **92** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 82 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 41 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/otoplastia-colombia-precio
Perf: **89** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 780 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 61 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (7 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 164 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 78 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/ginecomastia-cirugia-o-no
Perf: **98** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 810 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 46 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 145 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 70 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/bichectomia-resultados-candidatos
Perf: **81** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 100 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 53 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/blefaroplastia-precio-colombia
Perf: **87** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 63 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 119 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 88 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/lifting-facial-se-ve-artificial-deep-plane
Perf: **94** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (14 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 780 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 43 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (7 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 121 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 67 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/labioplastia-y-vaginoplastia-diferencia
Perf: **92** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 37 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (7 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 102 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 55 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/blefaroplastia-tipos-cuando-operarse
Perf: **92** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 141 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 94 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/rinoplastia-precio-colombia
Perf: **91** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (176 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 103 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 37 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/rinoplastia-tipos-tecnicas
Perf: **88** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 70 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 36 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/karol-g-cirugia-plastica
Perf: **89** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 51 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 140 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 54 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/recuperacion-abdominoplastia
Perf: **79** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 43 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 108 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 70 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/lipoabdominoplastia
Perf: **82** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 55 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 193 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 120 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/levantamiento-de-senos-sin-implantes
Perf: **83** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 62 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 243 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 177 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/antes-despues-aumento-de-senos
Perf: **86** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 780 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 43 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 120 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 59 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/que-es-la-mamoplastia
Perf: **95** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (66 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 800 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 44 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers (Est savings of 0 KiB) | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 121 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 63 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://hermesgamba.com/blog/implantes-mamarios-microchip-q-inside
Perf: **99** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 42 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 126 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 57 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/implantes-mamarios-hombres-ginecomastia
Perf: **96** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 46 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (5 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 137 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 64 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/cirugia-senos-tubulares
Perf: **99** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 44 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 120 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 62 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/cuanto-duran-los-implantes-mamarios
Perf: **90** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 53 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 148 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 69 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/historia-implantes-mamarios
Perf: **79** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (5 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 76 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/tipos-de-implantes-mamarios
Perf: **89** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Avoid an excessive DOM size (1,354 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (5 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 73 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/mastopexia-vs-aumento-de-senos
Perf: **79** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (5 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 69 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 36 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/que-cc-de-implantes-necesito
Perf: **88** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (5 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 73 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/implantes-motiva-caracteristicas
Perf: **79** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 42 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 107 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 71 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/aumento-de-senos-sin-cirugia
Perf: **80** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (5 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 75 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 42 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/reduccion-mamaria-guia-completa
Perf: **91** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 35 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (5 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 88 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/mamoplastia-embarazo-lactancia
Perf: **99** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (5 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 76 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 44 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/tecnicas-incision-mamoplastia
Perf: **78** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 60 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 167 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 125 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/seguridad-implantes-mamarios-riesgos
Perf: **76** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (5 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 71 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/postoperatorio-mamoplastia-de-aumento
Perf: **99** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 55 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (5 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 109 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 41 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/mommy-makeover-colombia
Perf: **80** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 60 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 139 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 65 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/marcacion-abdominal-guia-completa
Perf: **75** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 36 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 83 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 43 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/vale-la-pena-mommy-makeover
Perf: **89** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 58 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 151 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 109 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/embarazo-despues-mommy-makeover
Perf: **89** | SEO: **100** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 790 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 51 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 131 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 91 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/no-eres-egoista-mommy-makeover
Perf: **84** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 47 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 114 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 75 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/abdominoplastia/tipos-abdominoplastia
Perf: **76** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 62 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 159 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 116 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/cicatriz-abdominoplastia-como-minimizarla
Perf: **91** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 64 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 163 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 121 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/abdominoplastia/abdominoplastia-vs-liposuccion
Perf: **79** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (5 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 123 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 51 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/como-elegir-cirujano-gluteoplastia
Perf: **69** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (5 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 100 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 53 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/guia-gluteoplastia-colombia
Perf: **91** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<td>` elements in a large `<table>` do not have table headers. | Screen readers have features to make navigating tables easier |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (5 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 95 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 64 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/liposuccion-vaser-vs-tradicional
Perf: **78** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 48 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 119 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 80 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/signos-alarma-despues-liposuccion
Perf: **86** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (5 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 122 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 82 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/lipoescultura-brazos-y-espalda
Perf: **80** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 810 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 57 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (5 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 110 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 74 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/blog/mamoplastia-en-colombia
Perf: **92** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 81 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Image elements do not have explicit `width` and `height` | Set an explicit width and height on image elements to reduce layout shifts and improve CLS |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (6 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 138 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 104 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/abdominoplastia
Perf: **97** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (166 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 185 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 96 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/lipoescultura
Perf: **98** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (164 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 46 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 190 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 107 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/gluteoplastia
Perf: **97** | SEO: **100** | Accesib: **96** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (164 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 43 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (3.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (16 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 11,658 KiB) | Large network payloads cost users real money and are highly correlated with long load times |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 3,138 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 98 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/mamoplastia
Perf: **99** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 169 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 106 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/rinoplastia
Perf: **99** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 141 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 81 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/bichectomia
Perf: **97** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (162 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 200 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 113 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/legal
Perf: **85** | SEO: **69** | Accesib: **96** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (47 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, nofollow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Page is blocked from indexing | Verificar que robots.txt y meta robots no bloqueen la indexación |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (4 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 58 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/mamoplastia/implantes-motiva
Perf: **98** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (62 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (178 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 106 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 52 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/mommy-makeover
Perf: **98** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (165 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 59 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 148 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 87 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/mamoplastia/aumento-de-senos-con-grasa
Perf: **99** | SEO: **100** | Accesib: **96** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (72 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (188 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 46 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Browser errors were logged to the console | Corregir errores de JavaScript visibles en la consola del navegador |
| 🔍 Diagnóstico | Minimize main-thread work (8.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (12 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 15,461 KiB) | Large network payloads cost users real money and are highly correlated with long load times |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 247 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 46 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/mamoplastia/mastopexia
Perf: **99** | SEO: **100** | Accesib: **95** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (172 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 32 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 86 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 38 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/mamoplastia/reduccion-mamaria
Perf: **99** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (179 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 32 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 117 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 44 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/lipoescultura/hombres-bogota
Perf: **98** | SEO: **100** | Accesib: **93** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (62 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (178 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 44 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 39 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Links rely on color to be distinguishable. | Low-contrast text is difficult or impossible for many users to read |
| 🔍 Diagnóstico | Avoid an excessive DOM size (1,215 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 135 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 64 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/lipoescultura/papada-precio
Perf: **95** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (61 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (177 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 21 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (4.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Avoid an excessive DOM size (1,256 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 147 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 72 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/abdominoplastia/precio-colombia
Perf: **85** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (65 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (181 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 46 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 201 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 106 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/mommy-makeover/precio-colombia
Perf: **99** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (180 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 186 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 125 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/body-contouring
Perf: **72** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (169 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~100 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 137 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 336 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 180 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (11 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://hermesgamba.com/lipoescultura/liposuccion-precio-colombia
Perf: **99** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (164 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 190 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 117 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/mommy-makeover/recuperacion
Perf: **98** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (61 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (177 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 175 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 101 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/abdominoplastia/recuperacion-15-dias
Perf: **98** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (70 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (186 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 159 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 74 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/abdominoplastia/hombres-bogota
Perf: **97** | SEO: **100** | Accesib: **93** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (180 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 790 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Links rely on color to be distinguishable. | Low-contrast text is difficult or impossible for many users to read |
| 🔍 Diagnóstico | Avoid an excessive DOM size (840 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 161 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 72 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://hermesgamba.com/abdominoplastia/bucaramanga
Perf: **73** | SEO: **100** | Accesib: **93** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (182 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 780 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 38 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Avoid large layout shifts (4 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<frame>` or `<iframe>` elements do not have a title | Añadir atributo title descriptivo a cada <iframe> |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 122 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 46 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (7 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://hermesgamba.com/lipoescultura/liposuccion-hombres-bogota
Perf: **95** | SEO: **100** | Accesib: **93** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (62 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (178 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 39 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 44 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (3.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Links rely on color to be distinguishable. | Low-contrast text is difficult or impossible for many users to read |
| 🔍 Diagnóstico | Avoid an excessive DOM size (1,215 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 135 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 64 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://hermesgamba.com/gluteoplastia/bbl-vs-implantes
Perf: **94** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (180 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 60 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 263 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 158 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://hermesgamba.com/gluteoplastia/masculina-bogota
Perf: **95** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (180 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 39 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (3.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Avoid an excessive DOM size (1,275 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 196 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 97 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/gluteoplastia/recuperacion-bogota
Perf: **90** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (67 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (183 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 39 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (3.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Avoid an excessive DOM size (1,373 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 159 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 89 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (8 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://hermesgamba.com/cirugia-facial
Perf: **73** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description muy larga (169 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~100 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 137 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 336 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 195 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (11 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://hermesgamba.com/gluteoplastia/precio-colombia
Perf: **98** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (63 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (179 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused JavaScript (Est savings of 38 KiB) | Code splitting y defer en JS no necesario en la carga inicial |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Minimize main-thread work (3.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Avoid an excessive DOM size (1,177 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (9 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 169 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 76 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/gluteoplastia/como-elegir-cirujano-gluteoplastia
Perf: **91** | SEO: **100** | Accesib: **96** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (73 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (189 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (5 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 101 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://hermesgamba.com/lipoescultura/bucaramanga
Perf: **75** | SEO: **100** | Accesib: **93** | BP: **100**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (66 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🟡 SEO | Meta description muy larga (182 chars, máximo 160) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🟡 SEO | Robots: noindex, follow | Revisar meta robots; eliminar noindex si la página debe indexarse |
| 🟡 SEO | Contenido escaso (~97 palabras, recomendado 300+) | Ampliar el contenido a más de 300 palabras para mejorar relevancia SEO |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 770 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 3 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 38 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Avoid serving legacy JavaScript to modern browsers | Polyfills and transforms enable legacy browsers to use new JavaScript features |
| 🔍 Diagnóstico | Avoid large layout shifts (3 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | `<frame>` or `<iframe>` elements do not have a title | Añadir atributo title descriptivo a cada <iframe> |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (7 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 122 KiB) | A long cache lifetime can speed up repeat visits to your page |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 46 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
