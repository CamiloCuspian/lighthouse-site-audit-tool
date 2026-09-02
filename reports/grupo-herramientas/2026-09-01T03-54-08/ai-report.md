# Auditoría: gnherramientas.com
*31/8/2026, 10:54:08 p. m. · 168 páginas auditadas · 10 links rotos*

Contexto: auditoría automática con Google Lighthouse. Cada fila representa un problema accionable con su solución recomendada. Aplica los cambios según prioridad: 🔴 errores primero, 🟡 advertencias después, 🔵 informativo.

## Links rotos

| URL rota | Estado | Encontrado en | Solución |
|---|---|---|---|
| https://gnherramientas.com/guias/cortadora-baldosa-electrica-vs-manual | 404 | https://gnherramientas.com/acabados-pisos | Crear redirección 301 hacia la URL correcta o eliminar el enlace |
| https://gnherramientas.com/guias/compresor-aire-tamano | 404 | https://gnherramientas.com/compresores-plantas | Crear redirección 301 hacia la URL correcta o eliminar el enlace |
| https://gnherramientas.com/guias/planta-electrica-watts | 404 | https://gnherramientas.com/compresores-plantas | Crear redirección 301 hacia la URL correcta o eliminar el enlace |
| https://gnherramientas.com/guias/prensa-hidraulica-toneladas | 404 | https://gnherramientas.com/equipos-especiales | Crear redirección 301 hacia la URL correcta o eliminar el enlace |
| https://gnherramientas.com/guias/nivel-laser-lineas | 404 | https://gnherramientas.com/equipos-especiales | Crear redirección 301 hacia la URL correcta o eliminar el enlace |
| https://gnherramientas.com/guias/brushless-vs-escobillas | 404 | https://gnherramientas.com/herramientas-inalambricas | Crear redirección 301 hacia la URL correcta o eliminar el enlace |
| https://gnherramientas.com/guias/vibrador-concreto-diametro | 404 | https://gnherramientas.com/maquinaria-concreto | Crear redirección 301 hacia la URL correcta o eliminar el enlace |
| https://gnherramientas.com/guias/sierra-ingletadora-vs-circular | 404 | https://gnherramientas.com/sierras-corte | Crear redirección 301 hacia la URL correcta o eliminar el enlace |
| https://gnherramientas.com/guias/como-elegir-soldador-inversor | 404 | https://gnherramientas.com/soldadura | Crear redirección 301 hacia la URL correcta o eliminar el enlace |
| https://gnherramientas.com/guias/rotomartillo-vs-percutor | 404 | https://gnherramientas.com/taladros-demolicion | Crear redirección 301 hacia la URL correcta o eliminar el enlace |

## Problemas por página

### https://gnherramientas.com
Perf: **90** | SEO: **100** | Accesib: **96** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Título muy largo (64 chars, máximo 60) | Revisar y corregir según las buenas prácticas de SEO |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 98 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (4.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Avoid an excessive DOM size (1,203 elements) | Reducir nodos DOM (objetivo <800); virtualizar listas largas |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 96 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/catalogo
Perf: **76** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 10 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/contacto
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **71**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Does not use HTTPS (1 insecure request found) | Servir todos los recursos por HTTPS; corregir mixed content |
| 🔍 Diagnóstico | Displays images with incorrect aspect ratio | Definir width y height en <img> para evitar distorsión de aspecto |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 58 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/blog
Perf: **89** | SEO: **100** | Accesib: **91** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 910 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 136 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children. | Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 186 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/politica-de-privacidad
Perf: **89** | SEO: **100** | Accesib: **96** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Displays images with incorrect aspect ratio | Definir width y height en <img> para evitar distorsión de aspecto |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 58 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/sobre-nosotros
Perf: **89** | SEO: **100** | Accesib: **95** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Displays images with incorrect aspect ratio | Definir width y height en <img> para evitar distorsión de aspecto |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 58 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/terminos-y-condiciones
Perf: **91** | SEO: **100** | Accesib: **96** | BP: **93**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 14 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔍 Diagnóstico | Displays images with incorrect aspect ratio | Definir width y height en <img> para evitar distorsión de aspecto |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 58 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/acabados-pisos
Perf: **95** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 58 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/alquiler
Perf: **93** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 34 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/compresores-plantas
Perf: **93** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 51 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/equipos-especiales
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 900 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 36 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/herramientas-inalambricas
Perf: **93** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 63 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/maquinaria-concreto
Perf: **94** | SEO: **100** | Accesib: **95** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 2,959 KiB) | Large network payloads cost users real money and are highly correlated with long load times |

### https://gnherramientas.com/sierras-corte
Perf: **88** | SEO: **100** | Accesib: **95** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 4,147 KiB) | Large network payloads cost users real money and are highly correlated with long load times |

### https://gnherramientas.com/soldadura
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 58 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/taladros-demolicion
Perf: **93** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Largest Contentful Paint image was lazily loaded | Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 27 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/canguro-compactador-tanque
Perf: **82** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 35 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 33 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/canguro-compactador
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/canguro-gx120
Perf: **87** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 20 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/canguro-gx160
Perf: **89** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 32 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 37 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/compresor-24l
Perf: **88** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 27 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 40 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/compresor-50l
Perf: **82** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 33 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 50 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/compresor-9l
Perf: **89** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 40 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 66 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/cortabaldosas-100cm-iman
Perf: **87** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 11 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/cortabaldosas-120cm-professional
Perf: **89** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (43 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 11 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 10 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/cortabaldosas-75cm-multipuntos
Perf: **89** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 15 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/cortador-plasma-cut-60
Perf: **90** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 32 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 44 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/cortador-plasma-cut-80-20mm
Perf: **87** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 32 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 33 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/cortador-plasma-cut-80-25mm
Perf: **86** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 37 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 34 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/cortadora-ceramica-100cm
Perf: **92** | SEO: **100** | Accesib: **90** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 4,018 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/cortadora-industrial-120cm
Perf: **88** | SEO: **100** | Accesib: **90** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 4,016 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/cortadora-industrial-laser
Perf: **64** | SEO: **100** | Accesib: **90** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image (Est savings of 910 ms) | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Serve images in next-gen formats (Est savings of 1,328 KiB) | Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (5 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://gnherramientas.com/productos/cortadora-piedra-1500w
Perf: **51** | SEO: **100** | Accesib: **90** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (42 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image (Est savings of 910 ms) | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (3.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (5 resources found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://gnherramientas.com/productos/cortasetos-inalambrico-36v
Perf: **91** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/equipo-soldadura-2-funciones
Perf: **91** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 25 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/equipo-soldadura-3-funciones-mini
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 28 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/equipo-soldadura-3-funciones
Perf: **89** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 32 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/equipo-soldadura-inversor-220
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 33 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/equipo-soldadura-inversor-250
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/equipo-soldadura-inversor-250a
Perf: **93** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/equipo-soldadura-inversor-mma
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/hidrolavadora-gasolina-2800psi
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 47 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/hidrolavadora-gasolina-3300psi
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 29 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/lijadora-orbital
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/lijadora-roto-orbital
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (30 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 36 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/llave-impacto-34-20v-10c
Perf: **88** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/llave-impacto-34-20v-15c
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/llave-impacto-34-verde
Perf: **91** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/llave-impacto-900w
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (32 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 33 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/llave-impacto-brushless
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 24 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/martillo-demoledor-14j
Perf: **99** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 750 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 24 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/martillo-demoledor-6-25j
Perf: **88** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 23 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/martillo-demolicion-55j
Perf: **91** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 22 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/martillo-demolicion-62j
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 26 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/mezcladora-1500w
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 11 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 24 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/motosierra-inalambrica-36v
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 24 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/nivel-laser-12-lineas
Perf: **86** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 9 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/nivel-laser-2-lineas
Perf: **88** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 33 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/nivel-laser-360
Perf: **86** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 16 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 34 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/pistola-307m-silenciador
Perf: **91** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 23 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 44 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/pistola-fijacion-307
Perf: **87** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 11 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 9 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 37 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/planta-electrica-10kw
Perf: **68** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 45 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/planta-electrica-4kw
Perf: **89** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 38 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/planta-electrica-7-5kw
Perf: **57** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 930 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (9.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 38 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/prensa-hidraulica-12t
Perf: **89** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 27 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/prensa-hidraulica-20t
Perf: **87** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 27 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/prensa-hidraulica-30t
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 11 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 34 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/pulidora-7-110v
Perf: **91** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (26 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 21 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/pulidora-7-1200w
Perf: **58** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (20 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 10 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (3.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 21 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/pulidora-angular-4-1250w
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (40 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/pulidora-angular-4-840w
Perf: **88** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 29 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/pulidora-angular-5-1200w
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (39 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/pulidora-angular-5-azul
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (33 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 36 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/pulidora-angular-9-2100w
Perf: **77** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (36 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (3.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 37 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/pulidora-angular-9-2300w
Perf: **80** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (31 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (3.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 29 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/pulidora-angular-9-2400w
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (31 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 21 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/pulidora-angular-9-2500w
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (51 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 21 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/pulidora-angular-9-amarilla
Perf: **77** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (52 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (3.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 21 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/ruteadora-1200w
Perf: **91** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 28 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/ruteadora-710w
Perf: **89** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 21 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/sierra-caladora-750w
Perf: **80** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (3.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 14 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/sierra-circular-1800w
Perf: **67** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (28 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 11 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔧 Rendimiento | Properly size images (Est savings of 28 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 14 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/sierra-circular-1900w
Perf: **84** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (28 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 31 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 25 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/sierra-circular-6-inalambrica
Perf: **80** | SEO: **100** | Accesib: **95** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (32 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (3.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 4,106 KiB) | Large network payloads cost users real money and are highly correlated with long load times |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 729 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://gnherramientas.com/productos/sierra-circular-7-electrica
Perf: **80** | SEO: **100** | Accesib: **95** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (42 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (3.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 4,106 KiB) | Large network payloads cost users real money and are highly correlated with long load times |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 729 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://gnherramientas.com/productos/sierra-circular-7-inalambrica
Perf: **68** | SEO: **100** | Accesib: **90** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (32 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 43 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |

### https://gnherramientas.com/productos/sierra-circular-8-amarilla
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (42 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 4,106 KiB) | Large network payloads cost users real money and are highly correlated with long load times |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 729 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://gnherramientas.com/productos/sierra-circular-8-laser
Perf: **90** | SEO: **100** | Accesib: **90** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (42 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 37 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |

### https://gnherramientas.com/productos/sierra-inglete-10-telescopica
Perf: **58** | SEO: **100** | Accesib: **90** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (49 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 34 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (3.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |

### https://gnherramientas.com/productos/sierra-inglete-10
Perf: **58** | SEO: **100** | Accesib: **90** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (37 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 18 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (3.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |

### https://gnherramientas.com/productos/sierra-inglete-12-telescopica
Perf: **89** | SEO: **100** | Accesib: **95** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (49 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 4,106 KiB) | Large network payloads cost users real money and are highly correlated with long load times |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 729 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://gnherramientas.com/productos/sierra-ingleteadora-10-255
Perf: **58** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 44 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (3.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 29 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/sierra-ingleteadora-10-2552
Perf: **86** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 26 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 29 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/sierra-ingleteadora-12-ms305
Perf: **64** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 76 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (4.0 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 29 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/sierra-mesa-10-base
Perf: **79** | SEO: **100** | Accesib: **95** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (24 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (3.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 4,119 KiB) | Large network payloads cost users real money and are highly correlated with long load times |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 730 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://gnherramientas.com/productos/sierra-mesa-10
Perf: **55** | SEO: **100** | Accesib: **90** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 15 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (3.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |

### https://gnherramientas.com/productos/soldador-200-celulosico
Perf: **91** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/soldador-200
Perf: **82** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (3.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/soldador-250-lcd
Perf: **89** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 34 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/soldador-250-rojo-amarillo
Perf: **68** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/soldador-260-celulosico
Perf: **93** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 750 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 32 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/soldador-300-lcd
Perf: **79** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 29 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/soldador-300
Perf: **82** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 870 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 36 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/soldador-mig-1-kilo
Perf: **70** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/soldador-mig-15-kilos-300
Perf: **69** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 22 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/soldador-mig-15-kilos
Perf: **69** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/soldador-mig-5-kilos-regulador
Perf: **61** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 22 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/soldador-mig-5-kilos
Perf: **69** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 22 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/soldador-mini-250
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 910 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 11 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 36 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/soldador-mini-lcd-200
Perf: **72** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 920 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 32 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (3.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 47 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/soldador-tig-250
Perf: **67** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 33 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 32 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-36v-amarillo
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 54 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-arbol-1200w
Perf: **89** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (43 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 22 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-arbol-450w
Perf: **80** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-arbol-550w
Perf: **79** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 11 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-arbol-560w
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (39 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 29 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-arbol-700w
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 24 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-arbol-750w
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (36 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 24 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-banco-250w
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (37 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 22 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-brushless-21v
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 38 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-demoledor-1100w
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-demoledor-minero
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 29 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-demoledor-wt
Perf: **89** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 28 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-percutor-1200w
Perf: **91** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-percutor-18v
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 44 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-percutor-24v-base
Perf: **91** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-percutor-24v-plug
Perf: **85** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 41 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-percutor-700w
Perf: **76** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 11 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (3.8 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 22 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-percutor-900w
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 22 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-percutor-sds-max
Perf: **77** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 22 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-picador-35b
Perf: **81** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 34 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-picador-40m
Perf: **88** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Reduce unused CSS (Est savings of 11 KiB) | Eliminar CSS no utilizado (PurgeCSS o herramienta equivalente) |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 32 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-rotomartillo-32mm
Perf: **81** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 37 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/taladro-rotomartillo-hr26
Perf: **78** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/tijeras-podar-inalambricas
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.1 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 49 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/tronzadora-14-amarilla
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (30 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 4,024 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 4,103 KiB) | Large network payloads cost users real money and are highly correlated with long load times |

### https://gnherramientas.com/productos/tronzadora-16
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **75**

| Categoría | Problema | Solución |
|---|---|---|
| 🟡 SEO | Meta description corta (41 chars, mínimo 70) | Agregar/ajustar <meta name="description"> a 70-160 caracteres |
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Uses third-party cookies (1 cookie found) | Third-party cookies may be blocked in some contexts |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Issues were logged in the `Issues` panel in Chrome Devtools | Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems |
| 🔍 Diagnóstico | Serve static assets with an efficient cache policy (1 resource found) | Configurar Cache-Control: max-age largo en recursos estáticos con fingerprint |
| 🔍 Diagnóstico | Avoid enormous network payloads (Total size was 4,102 KiB) | Large network payloads cost users real money and are highly correlated with long load times |
| 🔍 Diagnóstico | Use efficient cache lifetimes (Est savings of 730 KiB) | A long cache lifetime can speed up repeat visits to your page |

### https://gnherramientas.com/productos/vibrador-baldosa-digital
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/vibrador-baldosa-inalambrico
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 23 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/vibrador-concreto-cabinado
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/vibrador-concreto-gasolina-manguera
Perf: **91** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 32 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/vibrador-concreto-gasolina
Perf: **91** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 31 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/vibrador-motor-concreto-manguera
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 33 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/vibrador-motor-concreto
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 32 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/vibrador-pulidora-concreto
Perf: **79** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 29 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/vibrador-taladro-concreto
Perf: **87** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 5 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 24 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/alquiler-bruter
Perf: **86** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 11 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 39 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/alquiler-canguro
Perf: **83** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 38 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/alquiler-cortadora-concreto
Perf: **84** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 10 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 23 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/alquiler-demoledor
Perf: **81** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Properly size images (Est savings of 37 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 59 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/alquiler-hidrolavadora
Perf: **80** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 760 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 14 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/alquiler-planta-electrica-1000-bombillos
Perf: **81** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 19 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/alquiler-pulidora
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 14 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/alquiler-rana
Perf: **91** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 26 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/alquiler-rodillo-doble
Perf: **73** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 6 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (2 layout shifts found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 22 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/alquiler-rotomartillo
Perf: **87** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.3 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 34 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/alquiler-torre-iluminacion
Perf: **81** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.6 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 20 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/productos/alquiler-vibrocompactador-3t
Perf: **85** | SEO: **100** | Accesib: **90** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔧 Rendimiento | Properly size images (Est savings of 16 KiB) | Servir imágenes dimensionadas con srcset y sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | `[aria-*]` attributes do not match their roles | Each ARIA `role` supports a specific subset of `aria-*` attributes |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 45 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/blog/rotomartillo-vs-percutor
Perf: **81** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 910 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.7 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 10 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/blog/como-elegir-soldador-inversor
Perf: **92** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 19 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/blog/compresor-aire-tamano
Perf: **79** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (3.5 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 21 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/blog/vibrador-concreto-diametro
Perf: **89** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 840 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 44 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/blog/brushless-vs-escobillas
Perf: **90** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 21 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/blog/sierra-ingletadora-vs-circular
Perf: **73** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 890 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.9 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 16 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/blog/planta-electrica-watts
Perf: **91** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 880 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (2.2 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Avoid large layout shifts (1 layout shift found) | These are the largest layout shifts observed on the page |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 35 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/blog/cortadora-baldosa-electrica-vs-manual
Perf: **93** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 30 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/blog/prensa-hidraulica-toneladas
Perf: **93** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 850 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 24 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |

### https://gnherramientas.com/blog/nivel-laser-lineas
Perf: **75** | SEO: **100** | Accesib: **95** | BP: **96**

| Categoría | Problema | Solución |
|---|---|---|
| 🔧 Rendimiento | Avoid multiple page redirects (Est savings of 860 ms) | Redirects introduce additional delays before the page can be loaded |
| 🔧 Rendimiento | Preload Largest Contentful Paint image | If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP |
| 🔧 Rendimiento | Minify CSS (Est savings of 4 KiB) | Minifying CSS files can reduce network payload sizes |
| 🔍 Diagnóstico | Serves images with low resolution | Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity |
| 🔍 Diagnóstico | Minimize main-thread work (3.4 s) | Diferir procesamiento no crítico; usar requestIdleCallback |
| 🔍 Diagnóstico | Uses ARIA roles on incompatible elements | Many HTML elements can only be assigned certain ARIA roles |
| 🔍 Diagnóstico | Background and foreground colors do not have a sufficient contrast ratio. | Ajustar colores al ratio mínimo 4.5:1 (texto normal) o 3:1 (texto grande) |
| 🔍 Diagnóstico | Heading elements are not in a sequentially-descending order | Usar encabezados en orden jerárquico sin saltar niveles (H1→H2→H3) |
| 🔍 Diagnóstico | Elements with visible text labels do not have matching accessible names. | Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users |
| 🔍 Diagnóstico | Improve image delivery (Est savings of 22 KiB) | Reducing the download time of images can improve the perceived load time of the page and LCP |
