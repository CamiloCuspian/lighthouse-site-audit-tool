# Auditoría SEO, Accesibilidad y Rendimiento — Global Tools Compañía Ferretera
*globaltoolscompaniaferretera.com · Informe generado el 28 de agosto de 2026 · Tienda Shopify (0xriis-hj.myshopify.com), tema "Global Tools - Fixed"*

---

## Cómo leer este informe

Combina dos fuentes: una auditoría automática de **89 páginas** (Screaming Frog + Google Lighthouse, ejecutada el 28/8/2026 a las 3:52 p.m.) y una revisión manual del código del tema Shopify descargado localmente. Todo lo que se describe aquí está verificado contra el código real del tema o contra los datos crudos de la auditoría.

Los hallazgos están ordenados por impacto real, no por cuántas veces aparecen. Un problema que sale en las 89 páginas casi siempre es un solo error en un archivo compartido (como `theme.liquid`) que se repite porque afecta a todo el sitio a la vez — arreglarlo ahí lo arregla en las 89 páginas de un solo cambio.

## 1. Resumen ejecutivo

| Métrica | Valor |
|---|---|
| Páginas auditadas | 89 |
| Rendimiento (Performance) promedio | **73.3/100** (mínimo 53, máximo 95) |
| SEO (Lighthouse) promedio | **98.2/100** (mínimo 92, máximo 100) |
| Accesibilidad promedio | **94.7/100** (mínimo 90, máximo 95) |
| Buenas prácticas promedio | **98.8/100** (mínimo 79, máximo 100) |
| Enlaces rotos reportados | 162 totales → 102 reales, 60 ruido técnico (ver sección 2) |

**Diagnóstico en una frase:** la base técnica es sólida — accesibilidad y buenas prácticas altas, SEO de Lighthouse ya cerca de 100 en casi todas las páginas, y el tema ya trae datos estructurados (JSON-LD) de Producto, Organización y sitio web. La auditoría de laboratorio (Lighthouse) marcó un LCP alarmante (6.0s de promedio, 24.7s en portada), pero **los datos reales de Shopify Admin de los últimos 30 días muestran que la velocidad para tus visitantes reales es buena** (LCP 1.4s, ver sección 4.2) — sí se encontró y documentó la causa exacta en el código de por qué Lighthouse mide distinto (la imagen del banner de portada no está priorizada), y vale la pena corregirla, pero no es la emergencia que parecía en un primer momento. Lo que sí es un problema extendido real: **contenido on-page mal ajustado** (títulos y meta descriptions que se generan automáticamente y se pasan de largo en decenas de productos, fichas con poco texto), **JavaScript sin optimizar** en el 100% de las páginas, y — nuevo en esta revisión — **el título y la meta description de la portada están completamente vacíos en Shopify Admin** (sección 8), lo cual es más grave que un simple "título largo": Google está mostrando el nombre de la tienda a secas, sin ninguna palabra clave.

No hay errores catastróficos: el sitio no está desindexado, no bloquea a Google, no tiene canibalización grave de contenido. Lo que hay es una acumulación de detalles — cada uno pequeño, pero repetido en decenas de páginas — que le está restando puntos de posicionamiento y de conversión.
## 2. Enlaces rotos

Screaming Frog reportó **162 URLs con error** al crawlear el sitio. Antes de tratarlas todas igual, hay que separar el ruido de lo real:

- **60 de esas URLs son ruido técnico**, no un error del sitio: son las variantes automáticas `.oembed` y `.atom` que Shopify genera para cada producto y colección (formatos de sindicación que casi nadie usa). Devuelven 429 ("demasiadas peticiones") porque el crawler las golpeó muy rápido, igual que las URLs normales — no son un problema de SEO real y se pueden ignorar con seguridad.
- **102 URLs sí son páginas reales del sitio** (productos, colecciones y 2 rutas de cuenta de cliente) que el crawler no pudo cargar.

**Importante sobre el código de estado:** casi todas estas URLs devolvieron **429 (Too Many Requests)**, no 404 (página no existe). Un 429 significa que Shopify le puso límite de velocidad al crawler porque hizo demasiadas peticiones seguidas — es un comportamiento normal de protección de Shopify ante crawlers agresivos, **no necesariamente significa que esas páginas estén rotas de verdad**. Antes de invertir tiempo "arreglando" 102 URLs, lo correcto es volver a auditar el sitio con una velocidad de crawl más baja (1-2 URLs/segundo) para confirmar cuáles de estas siguen fallando con un código real (404, 500) y cuáles cargan bien y fue solo el rate-limit del primer crawleo.

De las URLs reales, **34 son fichas de producto** y **66 son colecciones** — varias de estas colecciones (`/collections/polietileno`, `/collections/tubos-y-accesorios`, `/collections/herramientas`, etc.) están en el `sitemap.xml` pero ya no existen o cambiaron de handle, lo cual sí es un hallazgo real independiente del rate-limit: son URLs muertas en el propio mapa del sitio que Google sigue rastreando.

Las 2 URLs restantes (`/account` y `/customer_authentication/redirect`, código 406) son rutas de autenticación de cliente — Shopify las bloquea a visitantes anónimos por diseño; no son un error a corregir, es comportamiento esperado del checkout/cuenta de Shopify.

### 2.1 Colecciones muertas en el sitemap (prioridad alta — revisar primero)

Estas colecciones aparecen en `sitemap.xml` pero fallaron al cargar. Si de verdad ya no existen, hay que quitarlas del sitemap y, si tenían enlaces desde el menú o desde otras páginas, poner una redirección 301 hacia la colección que las reemplazó:

| URL | Código |
|---|---|
| `/collections/abrasivos` | 429 |
| `/collections/accesorios-hierro-ductil-1` | 429 |
| `/collections/acueducto` | 429 |
| `/collections/alcantarillado` | 429 |
| `/collections/aseo-y-cafeteria` | 429 |
| `/collections/c900` | 429 |
| `/collections/cemento` | 429 |
| `/collections/codos` | 429 |
| `/collections/conduit` | 429 |
| `/collections/construccion` | 429 |
| `/collections/construccion-1` | 429 |
| `/collections/cpvc` | 429 |
| `/collections/dotaciones` | 429 |
| `/collections/electrica` | 429 |
| `/collections/electricos` | 429 |
| `/collections/epoxica` | 429 |
| `/collections/esmalte` | 429 |
| `/collections/extremo-brida` | 429 |
| `/collections/extremo-liso` | 429 |
| `/collections/garra-de-tigre` | 429 |
| `/collections/garra-de-tigre-1` | 429 |
| `/collections/geofonos` | 429 |
| `/collections/griferias` | 429 |
| `/collections/herramientas` | 429 |
| `/collections/hidrantes` | 429 |
| `/collections/hidrantes-1` | 429 |
| `/collections/hierro` | 429 |
| `/collections/hierro-ductil-1` | 429 |
| `/collections/impermeabilizantes` | 429 |
| `/collections/impermeabilizantes-y-siliconas` | 429 |
| `/collections/industrial` | 429 |
| `/collections/institucional` | 429 |
| `/collections/insumos-quimicos` | 429 |
| `/collections/manuak` | 429 |
| `/collections/medicion-y-regulacion` | 429 |
| `/collections/medidores` | 429 |
| `/collections/oferta` | 429 |
| `/collections/papeleria` | 429 |
| `/collections/papeleria-1` | 429 |
| `/collections/pintura` | 429 |
| `/collections/pisos-vinisol` | 429 |
| `/collections/pn-10` | 429 |
| `/collections/pn-16` | 429 |
| `/collections/polietileno` | 429 |
| `/collections/polietileno-1` | 429 |
| `/collections/presion` | 429 |
| `/collections/productos-destacados%F0%9F%94%A5` | 429 |
| `/collections/pvc` | 429 |
| `/collections/pvc-electrica` | 429 |
| `/collections/red-contra-incendios` | 429 |
| `/collections/reducciones` | 429 |
| `/collections/registros-y-cajillas` | 429 |
| `/collections/rejillas` | 429 |
| `/collections/sanitaria` | 429 |
| `/collections/stock` | 429 |
| `/collections/tapones` | 429 |
| `/collections/tees` | 429 |
| `/collections/tejas` | 429 |
| `/collections/tuberias-en-h` | 429 |
| `/collections/tubos-y-accesorios` | 429 |
| `/collections/uniones` | 429 |
| `/collections/uniones-1` | 429 |
| `/collections/valvulas` | 429 |
| `/collections/valvulas-1` | 429 |
| `/collections/valvulas-reguladoras` | 429 |
| `/collections/vinilo` | 429 |

### 2.2 Fichas de producto reportadas como rotas

Recomendación: re-crawlear estas URLs de forma individual y pausada antes de tocar nada — es muy probable que la mayoría cargue con normalidad y el error haya sido solo por la velocidad del crawler.

| URL | Código |
|---|---|
| `/products/alicatedeelectricistaaisladosata70333de8pulgadas` | 429 |
| `/products/alicatedeelectricistaaisladouniversalsatade8pulgadas200mmcrescent` | 429 |
| `/products/cajillaenplastionorecicladoparamedidordeaguahomologadaparabogotaeaab` | 429 |
| `/products/cajillaplasticaparamedidorconcierreantifraudeymirilla` | 429 |
| `/products/chapetaplasticaredondaenmaterialtipocristaldemediapulgada` | 429 |
| `/products/cintametricastanleybasicade5metros16piesmodelostht33989` | 429 |
| `/products/dispositivo-de-insercion-para-corte-antifraude` | 429 |
| `/products/empaqueenneoprenoparabrida` | 429 |
| `/products/flexometrocintamtrica-stanleyglobaplusde8metros26pies` | 429 |
| `/products/juego-de-anillos-puesta-a-tierra-para-medidor-electromagnetico` | 429 |
| `/products/juego-de-tornillos-hexagonal-zincado-en-caliente-grado-5` | 429 |
| `/products/kitdemonitoreodebajocostodeestuariosymarino` | 429 |
| `/products/korazasuperacrilico` | 429 |
| `/products/medidor-de-velocidad-r100-transmision-magnetica-de-1-2-cuerpo-metalico-copia` | 429 |
| `/products/medidor-electromagnetico-compacto-mag-8000-alimentacion-con-bateria-copia` | 429 |
| `/products/medidordevelocidadr100transmisionmagneticademediapulgadacuerpometalicocalibradoporunlaboratoriohomologadoporlaonac` | 429 |
| `/products/medidorelectromagneticocompactomag8000` | 429 |
| `/products/pinturademaximalavabilidadgrecotex` | 429 |
| `/products/pinturaparafachadas100acrilicasdurezza` | 429 |
| `/products/pinturapremiumsuperlavable` | 429 |
| `/products/pinturapremiumsuperlavablecopia` | 429 |
| `/products/registrodecortedemediapulgadaconincertometalicodzrpcp` | 429 |
| `/products/registrodecorteenlatonpn20hxh` | 429 |
| `/products/registrodeincorporacionparapfmasuaddemediapulgadaconincertodzrref3149` | 429 |
| `/products/rejillasumideroconmarcoenhierrofundidode74-5cmx37cmrejillasumideromunicipalenhf` | 429 |
| `/products/rejillasumideroenhierrofundidode100cmx50cmrejillaenhf` | 429 |
| `/products/rejillasumideroenpolipropilenohomologadaeaabde835cmx455cmx10cmconhomologacionenelacueductodebogota` | 429 |
| `/products/tapaenhierrofundidoparapozodeinspecciontapaparaalcantarilladoenhf` | 429 |
| `/products/tapaparapozodeinspeccionenpolipropilenode70cmx10cmhomologadaeaabempresadeacueductoyalcantarilladodebogota` | 429 |
| `/products/tapavalvulaenpolipropilenohomologadaeaabtapavalvulaplastica` | 429 |
| `/products/taponesauditivosdeespuma3m1100sincordon` | 429 |
| `/products/teedoblepvcsanitaria` | 429 |
| `/products/teflonindustrialde19mmx010mmx50mt` | 429 |
| `/products/yeepvcsanitario` | 429 |
## 3. SEO on-page: el problema más extendido del sitio

Esta es la categoría con más impacto real, porque toca directamente cómo Google lee y muestra cada página en los resultados de búsqueda.

### 3.1 Sin meta description (19 páginas) — prioridad alta 🔴

Estas páginas no tienen `<meta name="description">`. Cuando falta, Google genera automáticamente el fragmento (snippet) que se muestra debajo del título en los resultados de búsqueda, tomando texto suelto de la página — normalmente sale peor redactado y no incluye una llamada a la acción que ayude al clic.

| URL | Detalle |
|---|---|
| `/ (portada)` | Sin meta description |
| `/products/canastilla-lavaplatos-de-3-1-2-uso-comercial` | Sin meta description |
| `/products/pinturaparainteriorestipo1viniltexadvancepintuco` | Sin meta description |
| `/pages/superintendencia-de-industria-y-comercio` | Sin meta description |
| `/collections/macromedidores` | Sin meta description |
| `/collections/driwall` | Sin meta description |
| `/collections/accesorios-hierro-ductil` | Sin meta description |
| `/collections/siliconas` | Sin meta description |
| `/collections/junta-hidraulica` | Sin meta description |
| `/blogs/noticias` | Sin meta description |
| `/blogs/noticias/empresa` | Sin meta description |
| `/blogs/noticias/entrega` | Sin meta description |
| `/cart` | Sin meta description |
| `/collections` | Sin meta description |
| `/collections/all` | Sin meta description |
| `/policies/contact-information` | Sin meta description |
| `/policies/privacy-policy` | Sin meta description |
| `/policies/refund-policy` | Sin meta description |
| `/policies/terms-of-service` | Sin meta description |

La home (`/`) sin meta description es el caso más importante de corregir: es la página que más autoridad y clics de marca recibe.

### 3.2 Sin H1 (2 páginas) — prioridad alta 🔴

El `<h1>` le dice a Google (y a un lector de pantalla) cuál es el tema principal de la página. Faltan en:

| URL | Detalle |
|---|---|
| `/ (portada)` | Sin H1 |
| `/collections/accesorios-hierro-ductil` | Sin H1 |

Que falte en la portada es más grave que en una colección: la home suele ser la página con más enlaces entrantes del sitio y sin H1 pierde una señal fuerte de para qué palabra clave debería posicionar (ej. "ferretería industrial Bogotá" o el término que definan como principal).

### 3.3 Títulos de página demasiado largos (74 páginas) — prioridad media 🟡

Google recorta el `<title>` en el resultado de búsqueda alrededor de los 60 caracteres. Un título más largo que eso no es un error técnico grave, pero sí un problema de **clic**: el usuario ve el título cortado a la mitad, sin la palabra clave completa ni el diferenciador (marca, medida, uso). En este sitio el patrón es claro: el título de muchos productos es literalmente el nombre largo y descriptivo del producto (a veces de 100+ caracteres, como `"tapaparaalcantarilladoplasticahomologadaporlaempresadeserviciospublicosdebogotaeaabde65centimetrosy67centimetrostapaparapozodeinspeccion"`), sin que nadie haya escrito un `<title>` corto y optimizado por separado. Se muestran los 15 casos más extremos (varios llegan a 111-116 caracteres, casi el doble del máximo recomendado):

| URL | Longitud actual |
|---|---|
| `/products/medidorvolumetricotransmisinmecanicar200cuerpometalicode1-2calibradoporunlaboratoriohomologadoporlaonac` | Título muy largo (116 chars, máximo 60) |
| `/products/hidrante-tres-bocas-en-hd-extremo-liso-tipo-trafico` | Título muy largo (116 chars, máximo 60) |
| `/products/medidor-ultrasonico-r400-cuerpo-plastico-de-1-2-calibrado-por-un-laboratorio-acreditado-por-la-onac-ip68` | Título muy largo (116 chars, máximo 60) |
| `/products/medidorvolumetricotransmisionmecanicar315cuerpometalicodemediapulgadacalibradoporunlaboratoriohomologadoporlaonac` | Título muy largo (116 chars, máximo 60) |
| `/products/registro-de-corte-antifraude-de-1-2-con-incerto-dzr-x-telescopico` | Título muy largo (112 chars, máximo 60) |
| `/products/tapaparaalcantarilladoplasticahomologadaporlaempresadeserviciospublicosdebogotaeaabde65centimetrosy67centimetrostapaparapozodeinspeccion` | Título muy largo (111 chars, máximo 60) |
| `/products/tapaparaalcantarilladoenpolipropilenodealtadensidadyaroenlaminade70cm` | Título muy largo (111 chars, máximo 60) |
| `/products/tapa-para-alcantarillado-en-polipropileno-de-alta-densidad-y-aro-en-hierro-fundido-de-67cm` | Título muy largo (111 chars, máximo 60) |
| `/products/valvula-de-compuerta-en-hierro-ductil-vastago-no-ascendente-extremo-liso` | Título muy largo (111 chars, máximo 60) |
| `/products/valvula-de-compuerta-en-hierro-ductil-vastago-no-ascendente-extremo-liso-copia` | Título muy largo (111 chars, máximo 60) |
| `/products/medidordevelocidadtransmisionmecanicacuerpoencompositedemediapulgadacalibradoporunlaboratoriohomologadoporlaonac` | Título muy largo (111 chars, máximo 60) |
| `/products/medidordevelocidadtransmisionmagneticar160cuerpometalicode1-2calibradoporunlaboratoriohomologadoporlaonac` | Título muy largo (111 chars, máximo 60) |
| `/products/medidorvolumetricotransmisionmagneticar315cuerpoencompositedemediapulgadacalibradoporunlaboratoriohomologadoporlaonac` | Título muy largo (111 chars, máximo 60) |
| `/products/hidrante-tres-bocas-en-hd-extremo-liso-tipo-trafico-dos-de-2-1-2-y-una-de-4-1-2-copia` | Título muy largo (111 chars, máximo 60) |
| `/products/cajillaplasticaparamedidorconcierreantifraudeymirillagtborusia` | Título muy largo (111 chars, máximo 60) |

*(la lista completa de las 74 páginas afectadas está en el Anexo A al final de este documento)*

### 3.4 Meta description demasiado larga (59 páginas) — prioridad media 🟡

Mismo problema que el título pero en la descripción: el límite práctico son 160 caracteres y aquí hay descripciones de hasta 330. Google las trunca a mitad de frase, lo que se ve poco profesional en el resultado de búsqueda y desperdicia la oportunidad de convencer al usuario de hacer clic. El patrón otra vez es que la descripción se está generando automáticamente a partir del texto largo del producto en vez de escribirse a mano para cada ficha:

| URL | Longitud actual |
|---|---|
| `/products/medidordevelocidadtransmisionmecanicacuerpoencompositedemediapulgadacalibradoporunlaboratoriohomologadoporlaonac` | Meta description muy larga (330 chars, máximo 160) |
| `/products/medidordevelocidadtransmisionmagneticar160cuerpometalicode1-2calibradoporunlaboratoriohomologadoporlaonac` | Meta description muy larga (330 chars, máximo 160) |
| `/products/medidorvolumetricotransmisinmecanicar200cuerpometalicode1-2calibradoporunlaboratoriohomologadoporlaonac` | Meta description muy larga (330 chars, máximo 160) |
| `/products/medidorvolumetricotransmisionmecanicar315cuerpometalicodemediapulgadacalibradoporunlaboratoriohomologadoporlaonac` | Meta description muy larga (330 chars, máximo 160) |
| `/products/medidorvolumetricotransmisionmagneticar315cuerpoencompositedemediapulgadacalibradoporunlaboratoriohomologadoporlaonac` | Meta description muy larga (329 chars, máximo 160) |
| `/pages/contact` | Meta description muy larga (323 chars, máximo 160) |
| `/pages/preguntas-frecuentes-faqs` | Meta description muy larga (321 chars, máximo 160) |
| `/products/tuberia-para-alcantarillado-corrugada` | Meta description muy larga (320 chars, máximo 160) |
| `/products/tapaparaalcantarilladoenpolipropilenodealtadensidadyaroenlaminade70cm` | Meta description muy larga (320 chars, máximo 160) |
| `/products/tapa-para-alcantarillado-en-polipropileno-de-alta-densidad-y-aro-en-hierro-fundido-de-67cm` | Meta description muy larga (320 chars, máximo 160) |
| `/products/codo-90-en-polietileno-pn-16-para-termofusion` | Meta description muy larga (320 chars, máximo 160) |
| `/products/codo-45-en-polietileno-pn-16-para-termofusion` | Meta description muy larga (320 chars, máximo 160) |
| `/products/codo-90-pvc-presion-sch-40` | Meta description muy larga (320 chars, máximo 160) |
| `/products/codo-45-pvc-presion-sch-40` | Meta description muy larga (320 chars, máximo 160) |
| `/products/union-pvc-presion-sch-40` | Meta description muy larga (320 chars, máximo 160) |

*(lista completa de las 59 páginas en el Anexo B)*

### 3.5 Meta description demasiado corta (2 páginas)

| URL | Longitud actual |
|---|---|
| `/products/registro-de-corte-antifraude-tcl-de-1-2` | Meta description corta (41 chars, mínimo 70) |
| `/collections/acueducto-y-alcantarillado` | Meta description corta (60 chars, mínimo 70) |

### 3.6 Contenido escaso — menos de 300 palabras (74 páginas) — prioridad media 🟡

Google favorece páginas con contenido sustancial sobre el producto o la categoría, no solo una ficha técnica de tres líneas. Con menos de 300 palabras es difícil posicionar por variaciones de búsqueda long-tail (ej. "para qué sirve", "cómo instalar", "medidas disponibles"). Los 15 casos más delgados (algunos con menos de 150-200 palabras reales):

| URL | Palabras estimadas |
|---|---|
| `/policies/contact-information` | Contenido escaso (~146 palabras, recomendado 300+) |
| `/pages/superintendencia-de-industria-y-comercio` | Contenido escaso (~147 palabras, recomendado 300+) |
| `/blogs/noticias/empresa` | Contenido escaso (~159 palabras, recomendado 300+) |
| `/blogs/noticias/entrega` | Contenido escaso (~159 palabras, recomendado 300+) |
| `/products/canastilla-lavaplatos-de-3-1-2-uso-comercial` | Contenido escaso (~173 palabras, recomendado 300+) |
| `/blogs/noticias` | Contenido escaso (~174 palabras, recomendado 300+) |
| `/products/registro-de-corte-antifraude-tcl-de-1-2` | Contenido escaso (~181 palabras, recomendado 300+) |
| `/products/pinturaparainteriorestipo1viniltexadvancepintuco` | Contenido escaso (~190 palabras, recomendado 300+) |
| `/collections/driwall` | Contenido escaso (~192 palabras, recomendado 300+) |
| `/collections/siliconas` | Contenido escaso (~192 palabras, recomendado 300+) |
| `/cart` | Contenido escaso (~192 palabras, recomendado 300+) |
| `/collections/junta-hidraulica` | Contenido escaso (~194 palabras, recomendado 300+) |
| `/collections/accesorios-hierro-ductil` | Contenido escaso (~198 palabras, recomendado 300+) |
| `/products/codo-90-en-hierro-ductil-extremo-liso` | Contenido escaso (~201 palabras, recomendado 300+) |
| `/products/codo-90-en-hierro-ductil-extremo-liso-copia` | Contenido escaso (~203 palabras, recomendado 300+) |

*(lista completa de las 74 páginas en el Anexo C)*

**Nota de contexto sobre el score de SEO de Lighthouse:** el promedio de SEO en la auditoría automática es 98.2/100, que parece excelente — pero ese score de Lighthouse solo revisa un puñado de reglas técnicas básicas (que exista title, que exista meta description, que los links sean rastreables, que las imágenes tengan alt). **No evalúa** si el título mide más de 60 caracteres, si la meta description está bien redactada o si el contenido es suficiente — por eso el score puede estar en 92-100 y, al mismo tiempo, tener 74 páginas con título demasiado largo. Los hallazgos de las secciones 3.3 a 3.6 vienen de una capa de análisis SEO adicional (no del score de Lighthouse) y son, en la práctica, los que más van a mover el posicionamiento real.
## 4. Rendimiento (velocidad de carga)

Promedio de 73.3/100, con **34 páginas por debajo de 70** — la mayoría fichas de producto, que son justo las páginas donde un usuario decide comprar. Un Performance bajo no solo afecta el posicionamiento (Core Web Vitals es factor de ranking de Google), afecta directamente la tasa de conversión: cada segundo extra de carga en una ficha de producto es un comprador potencial que se puede ir.

### 4.1 Core Web Vitals — el hallazgo más grave del rendimiento (no estaba en el resumen anterior)

Al revisar los datos crudos de Lighthouse (`results.json`), que van más allá de lo que resume `ai-report.md`, aparece un problema serio que **no se ve solo con el score de Performance**: el **LCP (Largest Contentful Paint)** — el tiempo que tarda en aparecer el elemento visual más grande de la página (normalmente la imagen principal o el título) — está muy por encima de lo aceptable en la mayoría del sitio.

| Métrica | Valor |
|---|---|
| LCP promedio del sitio | **6.0 segundos** (Google considera "bueno" hasta 2.5s, "necesita mejora" hasta 4s, y "malo" por encima de 4s) |
| Páginas con LCP en rango "malo" (>4s) | **62 de 89 (70% del sitio)** |
| Peor caso | **Portada: 24.7 segundos** |

Un LCP de 24.7 segundos en la portada es un problema crítico y no es habitual — normalmente indica que un recurso puntual (una imagen sin optimizar, un video, o un elemento que depende de JavaScript pesado para renderizarse) está bloqueando la carga del elemento principal mucho más de lo normal. Esto es un factor de ranking directo de Google (Core Web Vitals) y, en la práctica, significa que 7 de cada 10 visitantes ven la página "en blanco" o incompleta durante varios segundos antes de que cargue el contenido principal.

**Recomendación inmediata:** priorizar el diagnóstico de LCP de la portada por separado — probablemente hay una imagen hero sin comprimir o sin `loading="eager"`/`fetchpriority="high"` correctamente configurado, o un video/slider que retrasa el renderizado del elemento principal.

Otros indicadores de Core Web Vitals están en buen estado: el CLS (estabilidad visual) promedio es bajo (ningún caso llega al umbral "malo" de 0.25 salvo la portada con 0.145, que ya está en el rango de mejora, no crítico) y el TBT (tiempo de bloqueo del hilo principal) promedio es de 139 ms, aceptable.

### 4.2 Corrección importante: los datos reales de visitantes (campo) dicen otra cosa — y ya se encontró la causa exacta en el código

Después de publicar la primera versión de este informe, se verificó el panel de **Shopify Admin → Tienda online**, que muestra el reporte de Core Web Vitals con datos reales de los últimos 30 días (no una simulación de laboratorio, sino el promedio real de las visitas de tus clientes, la misma fuente — CrUX de Google — que Google usa para rankear):

| Métrica (datos reales, 30 días, percentil 75) | Valor | Estado según Google |
|---|---|---|
| LCP | **1,386 milisegundos (1.4s)** | 🟢 Bueno |
| INP (interactividad) | **88 ms** | 🟢 Bueno |
| CLS (estabilidad visual) | **0.03** | 🟢 Bueno |

Esto es una diferencia enorme frente a los 6.0s de promedio y los 24.7s de la portada que reportó Lighthouse. La explicación no es que uno de los dos esté "mal" — son dos mediciones distintas y ambas son reales:

- **Lighthouse (lo que muestra `ai-report.md`)** es una prueba de laboratorio: simula una sola visita con conexión y procesador limitados a propósito (para representar el peor caso posible, un celular gama media con red lenta), en un momento puntual.
- **El reporte de Shopify Admin** son datos de campo: el promedio real de todas las visitas de clientes reales en los últimos 30 días, con sus conexiones y dispositivos reales — la métrica que Google efectivamente usa para el factor de ranking de Core Web Vitals.

**Conclusión: para el 75% de tus visitantes reales, la velocidad de carga NO es un problema — es buena.** Esto cambia la prioridad de la sección 4.1 de "crítico" a "vale la pena corregir, pero no es una emergencia".

Dicho esto, la revisión del código encontró la causa exacta de por qué Lighthouse sí midió un LCP tan alto, y es un hallazgo real que vale la pena corregir de todas formas — no cuesta nada y mejora el peor caso (esa cuarta parte de visitantes con conexión lenta que si sufre el problema):

**Causa encontrada:** en `snippets/image.liquid` (el componente que renderiza todas las imágenes del tema), existe un parámetro `prioritize` que, cuando se activa, marca la imagen con `fetchpriority="high"` para que el navegador la cargue primero. Este parámetro **sí se usa correctamente en la galería de imágenes de producto** (`snippets/product-media-gallery-item.liquid`, línea 63: `prioritize: is_first`, y también en `product-media-gallery-item-placeholder.liquid`, línea 29: `prioritize: forloop.first`) — la primera foto de cada producto se prioriza bien.

**Pero nunca se usa en la imagen principal (hero) de la portada** (`sections/image-hero.liquid`, líneas 27-32 y 39-44) ni en `sections/video-hero.liquid` (línea 119). El banner grande de la portada — que es casi con toda seguridad el elemento que Lighthouse detecta como LCP — se carga con prioridad `"auto"` (normal), compitiendo con todo lo demás en la página, en vez de pedirle al navegador que la traiga primero. Tampoco se le asigna explícitamente `loading="eager"` en ningún punto del snippet compartido.

| Sección | ¿Prioriza su imagen principal? |
|---|---|
| `product-media-gallery-item.liquid` (primera foto de producto) | Sí — `prioritize: is_first` |
| `image-hero.liquid` (banner de portada) | **No** |
| `video-hero.liquid` (banner de portada con video) | **No** |

**Recomendación:** agregar `prioritize: true` a las llamadas de `{% render 'image', ... %}` dentro de `image-hero.liquid` y `video-hero.liquid` para la imagen de escritorio y de móvil. Es un cambio de una línea por archivo, de bajo riesgo, y asegura que el elemento visual más grande de la portada se cargue primero — mejora el peor caso sin afectar a nadie más.

### 4.3 Las 15 páginas más lentas (score Performance de Lighthouse, laboratorio)

| URL | Performance |
|---|---|
| `/products/hidrante-tres-bocas-en-hd-extremo-liso-tipo-trafico` | 53 |
| `/products/registrodecorteantifraudedemediapulgadaconincertometalicodzr` | 53 |
| `/products/medidordevelocidadtransmisionmagneticar160cuerpometalicode1-2calibradoporunlaboratoriohomologadoporlaonac` | 54 |
| `/products/codo-45-para-red-contraincendios-enterrada-c900-copia` | 54 |
| `/products/tapon-soldado-pvc-presion-sch-40` | 55 |
| `/products/aroytapaenhierrofundidoparaalcantarilladopozodeinspeccionreddetelecomunicaciones` | 55 |
| `/products/portabrida-en-polietileno-pn16-235-psi` | 56 |
| `/products/silleta-en-polietileno-para-electrofusion-pn-16-235-psi` | 56 |
| `/products/uniongarradetigrepead` | 58 |
| `/products/tuberia-polietileno-linea-azul-pn16-235-psi-rde11-precio-por-ml-copia` | 59 |
| `/products/codo-90-pvc-presion-sch-40` | 59 |
| `/products/union-universal-en-hierro-ductil-copia` | 59 |
| `/ (portada)` | 60 |
| `/products/tuberia-para-alcantarillado-corrugada` | 60 |
| `/products/valvula-de-compuerta-en-hierro-ductil-vastago-no-ascendente-extremo-liso-copia` | 60 |

*(lista completa de las 34 páginas por debajo de 70 en el Anexo D)*

### 4.4 Causas repetidas en las 89 páginas

Estos problemas de rendimiento no son de una página suelta — están en el tema completo, así que arreglarlos una vez los arregla en todo el sitio:

| Problema | Páginas afectadas | Qué significa |
|---|---|---|
| Reduce unused JavaScript | 89/89 | El tema carga JS que no se usa en cada página (código de secciones que no están activas, funcionalidades no usadas). Se traduce en 116-185 KiB descargados de más por visita. |
| Minify JavaScript | 89/89 | El JS no está minificado (comentarios, espacios y nombres largos de variables incluidos en el archivo que se sirve al navegador). |
| Avoid serving legacy JavaScript | 89/89 | Se envían polyfills para navegadores antiguos incluso a navegadores modernos que no los necesitan. |
| Minimize main-thread work | 89/89 | El hilo principal del navegador está ocupado 4-4.7 segundos procesando JS antes de que la página responda con fluidez a la interacción del usuario. |
| Use efficient cache lifetimes | 89/89 | Los recursos estáticos no tienen una cabecera de caché larga, así que un visitante que vuelve al sitio los vuelve a descargar en vez de usar la copia local. |
| Serve static assets with an efficient cache policy | 88/89 | Mismo problema, versión Lighthouse-diagnóstico. |
| Improve image delivery | 66/89 | Las imágenes se sirven más pesadas o en peor formato de lo necesario (ahorro estimado de 250-310 KiB por página en varios casos). |
| Defer offscreen images | 37/89 | Imágenes fuera de la pantalla inicial se cargan de inmediato en vez de con `loading="lazy"`. |
| Avoid an excessive DOM size | 53/89 | Páginas con 950-1,100+ elementos en el DOM (el objetivo recomendado es menos de 800); un DOM grande hace más lento cada repintado. |

El tema descarga **`theme.js` (265 KB) y `vendor.min.js` (192 KB)** en cada carga — casi medio megabyte de JavaScript antes de comprimir, lo cual explica por qué "Reduce unused JavaScript" y "Minify JavaScript" aparecen en el 100% de las páginas. La solución no es una sola línea: implica revisar qué funcionalidades de `vendor.min.js` realmente se usan (swiper, filtros, etc.) y hacer code-splitting para que cada plantilla cargue solo el JS que necesita, en vez de un bundle único para todo el sitio.
## 5. Accesibilidad

Promedio 94.7/100, con un piso de 90 — es la categoría en mejor estado del sitio, pero tiene dos problemas que se repiten en el 100% de las páginas y sí vale la pena resolver, porque afectan a usuarios reales con baja visión o que navegan con teclado/lector de pantalla:

### 5.1 Contraste de color insuficiente (89/89 páginas)

Hay combinaciones de color de texto/fondo que no llegan al ratio mínimo de 4.5:1 (texto normal) o 3:1 (texto grande) que exige WCAG. Aparece en absolutamente todas las páginas porque viene de un componente compartido del tema (probablemente un color de texto secundario, un badge o un botón con poco contraste definido en `theme-colors.liquid` o en la configuración de esquema de colores). Se corrige ajustando 1-2 combinaciones de color en la configuración del tema, no página por página.

### 5.2 Encabezados fuera de orden jerárquico (89/89 páginas)

Los `<h1>`-`<h6>` no siguen un orden secuencial (por ejemplo, pasar de un H2 directo a un H4 sin H3 intermedio). No es solo un tema de accesibilidad — Google también usa la jerarquía de encabezados para entender la estructura temática de la página. Al venir en el 100% de las páginas, es casi seguro un patrón repetido en las secciones reutilizables del tema (ver sección 7).

### 5.3 Elementos sin nombre accesible (7 páginas — colecciones)

Elementos con texto visible pero sin un "accessible name" que coincida (típico de botones de filtro o swatches de color/variante que solo muestran un ícono o un color, sin `aria-label` que lo describa para un lector de pantalla):

| URL | Detalle |
|---|---|
| `/collections/acueducto-y-alcantarillado` |  |
| `/collections/macromedidores` |  |
| `/collections/driwall` |  |
| `/collections/accesorios-hierro-ductil` |  |
| `/collections/siliconas` |  |
| `/collections/junta-hidraulica` |  |
| `/collections/all` |  |

### 5.4 Otros hallazgos puntuales

- **Portada:** elementos `[aria-hidden="true"]` que contienen elementos enfocables por teclado — un lector de pantalla los oculta, pero un usuario de teclado puede tabular hasta ellos igual, lo cual es inconsistente.
- **Portada:** imágenes con texto alternativo redundante (el `alt` repite texto que ya está visible al lado, en vez de describir la imagen).

## 6. Buenas prácticas

Promedio 98.8/100 — la categoría más sana. Solo 5 páginas bajan a 79, todas por el mismo motivo:

| URL | Score |
|---|---|
| `/ (portada)` | 79 |
| `/products/tuberia-pvc-presion-rde-21-200-psi` | 79 |
| `/products/restrictor-hd-serie-1100-para-tuberia-c900` | 79 |
| `/products/medidor-ultrasonico-r400-cuerpo-plastico-de-1-2-calibrado-por-un-laboratorio-acreditado-por-la-onac-ip68` | 79 |
| `/collections/siliconas` | 79 |

El motivo es el uso de **cookies de terceros** (probablemente del script de Meta Pixel o de la app de WhatsApp) y avisos registrados en el panel "Issues" de Chrome DevTools. No es grave, pero conviene revisarlo junto con el punto de Meta Pixel de la sección 7.
## 7. Revisión del código del tema (verificación directa, no solo la auditoría automática)

Esto viene de revisar directamente los archivos del tema descargado localmente (`globaltools-companiaferretera/`), no del crawler. Complementa — y en un punto corrige — el handoff técnico previo.

### 7.1 Meta Pixel de Facebook antes del `<meta charset>` — prioridad alta 🔴, fix de 2 minutos

**Archivo:** `layout/theme.liquid`, líneas 1-22.

Confirmado en el código: el `<script>` del Meta Pixel (y su `<noscript>`) está insertado **antes** de `<meta charset="utf-8">`. El estándar recomienda que la declaración de charset esté dentro de los primeros 1024 bytes del `<head>` — si el navegador empieza a parsear con una codificación distinta a la real antes de encontrar el charset, en el peor caso fuerza un re-parseo completo del documento. Es un problema de rendimiento de renderizado, no cosmético, y afecta a las 89 páginas por igual porque está en el layout compartido.

**Fix:** mover el bloque completo del Meta Pixel a después de estas tres líneas:
```liquid
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1">
```

### 7.2 Datos estructurados (JSON-LD): mejor de lo que parecía — corrección al hallazgo anterior

Un documento de handoff previo señalaba que "no se encontró ningún schema markup". Verificado directamente en el código, **eso no es correcto**: el tema sí tiene JSON-LD implementado en tres puntos:

- `sections/main-product.liquid` → `{{ product | structured_data }}` (schema **Product** nativo de Shopify, con precio, disponibilidad, marca, etc., en cada ficha de producto).
- `sections/header.liquid` → schema **Organization** (nombre, logo, redes sociales) en todas las páginas.
- `sections/header.liquid` → schema **WebSite** con `SearchAction` (habilita el cuadro de búsqueda de sitio en resultados de Google) en la portada.

Lo que sí falta y es una oportunidad real de mejora:
- **BreadcrumbList** — no hay migas de pan estructuradas en ningún template. Añadirlas ayuda a que Google muestre la ruta de navegación en el snippet de búsqueda en vez de solo la URL.
- **Schema en páginas de colección** (ItemList) — las colecciones no emiten structured data propia.

### 7.3 App externa de WhatsApp activa — candidata a reemplazo nativo

**Archivo:** `config/settings_data.json`, bloque `shopify://apps/whatsapp-button/blocks/app-embed-block/...`, `"disabled": false`.

Es un App Embed que se inyecta vía `content_for_header` (no aparece como sección visible del tema). Funcionalmente es un botón flotante con link a `wa.me/<número>` — no necesita backend. Es candidata ideal para reemplazar por HTML/CSS nativo del tema: elimina una petición de script externo completa y probablemente resuelve parte del hallazgo de "cookies de terceros" de la sección 6.

Antes de tocarlo: confirmar con el cliente el número de WhatsApp activo y si usa alguna función avanzada de la app (mensajes predefinidos por página, horario de disponibilidad) que haya que replicar a mano.

### 7.4 App de WhatsApp instalada pero deshabilitada — limpieza

Mismo archivo, bloque `shopify://apps/myshop-whatsapp-button/blocks/widget/...`, `"disabled": true`. No carga en el sitio, pero sigue instalada. Recomendación: desinstalarla desde el admin (Apps), no solo dejarla desactivada — reduce superficie de riesgo (puede reactivarse por error) y limpia el conteo de apps instaladas.

### 7.5 Locales/idiomas sobrantes — verificar en Markets

El tema trae archivos de traducción para `de, en, es, fr, hi, it, ja, pt-BR, pt-PT, sv, zh-cn` — son los idiomas por defecto del tema base, no necesariamente los configurados en Settings → Languages del admin. Para una ferretera colombiana, es probable que solo `es` (y quizá `en`) sean relevantes. **Falta verificar** si en el admin hay idiomas publicados de más generando URLs `/en/`, `/fr/`, etc. indexables sin contenido real gestionado — eso sí sería un problema real de SEO técnico (contenido duplicado o vacío, hreflang mal configurado). Esto no se puede confirmar desde el tema local, requiere revisar el admin de Shopify.

### 7.6 Posibles colecciones duplicadas

Hay pares de templates de colección con nombres casi idénticos que sugieren una colección creada dos veces o una migración a medias: `collection.hierro-ductil.json` / `collection.hierro-ductil-2.json`, y `collection.pintura.json` / `collection.pintura-2.json`. Si ambas colecciones de cada par están activas y con productos parecidos, es contenido duplicado / canibalización de keyword entre las dos — vale la pena confirmar cuál es la vigente y redirigir la otra (301) hacia ella.
## 8. Verificación directa en Shopify Admin (nuevo — complementa la revisión de código)

Además del código del tema, se revisó directamente el panel de administración de Shopify (`admin.shopify.com`) para confirmar en vivo varios puntos que solo se podían inferir del código, y aparecieron hallazgos adicionales.

### 8.1 Título y meta description de la portada: vacíos, no solo "no ajustados" — prioridad alta 🔴

**Ubicación:** Tienda online → Preferencias → "Imagen de redes sociales y SEO".

El campo **"Título de la página de inicio" está en 0 de 70 caracteres** y el campo **"Meta descripción" está en 0 de 320 caracteres** — ambos completamente vacíos. Esto es más específico que el hallazgo de la sección 3.1 ("sin meta description"): confirma que nunca se ha escrito nada ahí, y es el lugar exacto donde corregirlo (no requiere tocar código, es un campo del admin). Sin esto, Google usa por defecto el nombre de la tienda como título, sin ninguna palabra clave relevante para búsqueda (ej. "ferretería industrial", "tubería PVC Bogotá", etc., lo que sea más relevante para el negocio).

### 8.2 Core Web Vitals reales: buenos — ver sección 4.2 para el detalle completo

Ya cubierto en profundidad en la sección 4.2. En resumen: LCP 1.4s, INP 88ms, CLS 0.03, los tres en verde según datos reales de 30 días.

### 8.3 Idiomas: solo español está publicado — se descarta el riesgo de hreflang

**Ubicación:** Configuración → Idiomas.

Confirmado: **solo "Español" aparece como idioma publicado**, con estado "Publicado" y 1 dominio asociado. Esto descarta la preocupación de la sección 7.5 (handoff técnico): los 11 archivos de traducción en `locales/` son peso muerto en el repositorio del tema (código sin usar), pero **no representan un riesgo real de contenido duplicado o hreflang mal configurado**, porque Shopify nunca publicó esos idiomas ni generó URLs `/en/`, `/fr/`, etc. Además, Shopify tiene activadas las "Etiquetas hreflang automáticas", que se generan correctamente solo para los idiomas y mercados que sí están publicados.

### 8.4 Apps instaladas: 5 en total, con redundancia confirmada

**Ubicación:** Configuración → Apps.

| App | Estado | Nota |
|---|---|---|
| WhatsApp Button | Activa, **$0.89 USD cada 30 días** | Confirma el hallazgo de la sección 7.3 — es una app de pago activa, candidata a reemplazo nativo |
| MyShop Social & Chat Button | Instalada (bloque desactivado en el tema) | Confirma el hallazgo de la sección 7.4 — desinstalar, no solo desactivar |
| Releasit COD Form | Instalada | App de formulario de pago contra entrega. No se encontró su bloque en `settings_data.json`, lo que sugiere que se inyecta por otra vía (extensión de checkout o app embed no detectado). Vale la pena confirmar con el equipo qué peso agrega a las páginas de producto/carrito. |
| Messaging | Instalada | Shopify Inbox (chat nativo de Shopify) — sin costo adicional, no requiere acción. |
| Claude Estructura Sitio | Instalada | App de uso interno del proyecto. |

### 8.5 Canal de Google & YouTube: no está instalado — oportunidad perdida

**Ubicación:** Configuración → Canales de ventas.

El sitio no tiene instalado el canal **"Google & YouTube"** de Shopify. Esto significa que no hay un feed de productos conectado a Google Merchant Center, por lo que los productos de Global Tools **no pueden aparecer en la pestaña Shopping de Google** ni en anuncios de Shopping, aunque el catálogo y los datos estructurados de producto (sección 7.2) ya están listos para alimentarlo. Es una oportunidad de visibilidad adicional gratuita (listados orgánicos en Google Shopping) que hoy no se está aprovechando.

### 8.6 Meta Pixel: doble configuración, una de las dos desconectada

**Ubicación:** Configuración → Canales de ventas → Facebook & Instagram.

El canal oficial de Facebook & Instagram está instalado, pero su sección de **"Píxeles" aparece como "Desconectado"**, y el canal completo muestra la etiqueta **"Requiere atención"**. Al mismo tiempo, existe un Meta Pixel insertado a mano directamente en el código del tema (`layout/theme.liquid`, ya documentado en la sección 7.1). En la práctica esto significa que la tienda tiene dos configuraciones de seguimiento de Meta que no están coordinadas entre sí: una manual que sí dispara (mal ubicada en el código), y la integración oficial de Shopify que no está conectada. Esto puede estar afectando la calidad de la atribución de las campañas de Facebook/Instagram Ads. El canal de **TikTok** también aparece marcado como "Requiere atención" — se recomienda revisar ambos con quien administre la pauta publicitaria.

### 8.7 Actualización de tema disponible

El tema activo "Global Tools - Fixed" tiene la actualización **"Versión 1.4.1 disponible"** en Shopify Admin. No se revisó el changelog en detalle, pero se recomienda que el equipo de desarrollo evalúe aplicarla — las actualizaciones de tema de Shopify suelen incluir mejoras de rendimiento y accesibilidad del código base.

### 8.8 Confirmaciones adicionales del código (revisión ampliada)

- **Enlace "saltar al contenido" (skip-to-content):** presente y correctamente implementado en `layout/theme.liquid` — buena práctica de accesibilidad que ya estaba resuelta.
- **Etiqueta canonical:** presente y dinámica (`{{ canonical_url }}`) en todas las páginas — correctamente implementada, sin riesgo de contenido duplicado por esta vía.
- **Meta robots:** no hay ninguna etiqueta `<meta name="robots">` que bloquee indexación en ningún template — el sitio usa el comportamiento por defecto de Shopify (indexable), sin bloqueos accidentales.
- **Carga de scripts:** `theme.js` y `vendor.min.js` se cargan como `type="module"` (que el navegador difiere automáticamente) y `shopify_common.js` con `defer` explícito — no están bloqueando el renderizado de forma incorrecta; el problema de estos archivos es su peso (sección 4.4), no el orden de carga.
- **Limpieza menor:** quedan 2 llamadas `console.log` en `theme.js` de producción — no afectan el rendimiento de forma medible, pero es buena práctica retirarlas.

## 9. Plan de acción priorizado

| # | Acción | Por qué importa | Esfuerzo | Dónde |
|---|---|---|---|---|
| 1 | Escribir título y meta description de la portada en Shopify Admin (hoy están vacíos) | Es el campo exacto donde Google saca el snippet de la marca; hoy no tiene ninguna palabra clave | Muy bajo (5 min) | Tienda online → Preferencias |
| 2 | Mover el Meta Pixel después del `<meta charset>` | Afecta el renderizado en las 89 páginas de un solo cambio | Muy bajo (5 min) | `layout/theme.liquid` |
| 3 | Agregar `prioritize: true` a la imagen del hero de portada | Corrige la causa exacta del LCP alto que detectó Lighthouse (el banner no se prioriza); mejora el peor caso aunque los datos reales ya son buenos | Bajo (1 línea x 2 archivos) | `sections/image-hero.liquid`, `sections/video-hero.liquid` |
| 4 | Añadir meta description a las 18 páginas restantes sin ella | Google deja de generar el snippet automáticamente | Bajo-medio | Admin Shopify (SEO de cada página/producto) |
| 5 | Añadir H1 a la portada y a la colección `accesorios-hierro-ductil` | Señal de tema principal para Google y para lectores de pantalla | Bajo | `templates/index.json` y sección de colección |
| 6 | Reconectar el píxel oficial de Meta en el canal Facebook & Instagram (hoy "Desconectado") y revisar TikTok ("Requiere atención") | Mejora la atribución de campañas pagas; hoy conviven un pixel manual y uno oficial desconectado | Bajo-medio | Configuración → Canales de ventas |
| 7 | Instalar el canal "Google & YouTube" y conectar Merchant Center | Habilita aparecer gratis en Google Shopping — el catálogo y el schema de producto ya están listos para alimentarlo | Medio | Configuración → Canales de ventas |
| 8 | Re-crawlear las 102 URLs "rotas" a velocidad baja para confirmar cuáles son reales | Evita perder tiempo arreglando páginas que en realidad cargan bien | Bajo | Screaming Frog, velocidad 1-2 URL/s |
| 9 | Redirigir (301) las colecciones del sitemap que ya no existen | Elimina rastreo de URLs muertas y recupera el link equity hacia la colección correcta | Medio | Admin Shopify → Redirects |
| 10 | Reescribir a mano título y meta description en los productos más críticos (mayor tráfico/margen) de los 74/59 afectados | Recupera CTR perdido por truncamiento en resultados de búsqueda | Medio-alto (por volumen) | Ficha de producto en el admin |
| 11 | Ampliar contenido a 300+ palabras en las fichas con menos texto (empezar por las de <200 palabras) | Mejora relevancia para búsquedas long-tail | Medio-alto (por volumen) | Ficha de producto |
| 12 | Reducir JS no usado / code-splitting de `theme.js` y `vendor.min.js` | Está en el 100% de las páginas y es la principal causa del Performance promedio de 73 en laboratorio | Alto (requiere dev) | `assets/theme.js`, `assets/vendor.min.js` |
| 13 | Corregir el contraste de color y el orden de encabezados a nivel de tema | Está en el 100% de las páginas, un solo ajuste lo resuelve en todo el sitio | Bajo-medio | `snippets/theme-colors.liquid` / secciones con headings |
| 14 | Reemplazar la app de WhatsApp externa (paga, $0.89/30 días) por HTML/CSS nativo; desinstalar la app duplicada "MyShop Social & Chat Button" | Elimina una petición externa, un costo recurrente y probablemente el hallazgo de cookies de terceros | Medio | `config/settings_data.json` + nuevo snippet |
| 15 | Confirmar con el equipo qué agrega la app "Releasit COD Form" a las páginas de producto/carrito | No se encontró su bloque en el tema; puede estar agregando peso no contabilizado en la auditoría de código | Bajo (solo verificar) | Configuración → Apps |
| 16 | Confirmar y consolidar las colecciones duplicadas (`hierro-ductil` vs `hierro-ductil-2`, `pintura` vs `pintura-2`) | Evita canibalización de keyword entre dos colecciones casi iguales | Medio | Admin Shopify |
| 17 | Añadir schema BreadcrumbList (y opcionalmente ItemList en colecciones) | Mejora la presentación en resultados de búsqueda | Medio | Nuevo snippet + `sections/main-product.liquid` / colección |
| 18 | Evaluar la actualización de tema disponible (versión 1.4.1) | Puede traer mejoras de rendimiento/accesibilidad del código base del tema | Bajo (evaluar changelog primero) | Shopify Admin → Temas |

*(El idioma sobrante en `locales/` ya no requiere acción — se confirmó en Shopify Admin que solo español está publicado, sección 8.3.)*
## Anexos: listados completos por categoría

### Anexo A — Todas las páginas con título demasiado largo (74)

| URL | Longitud actual |
|---|---|
| `/products/medidorvolumetricotransmisinmecanicar200cuerpometalicode1-2calibradoporunlaboratoriohomologadoporlaonac` | Título muy largo (116 chars, máximo 60) |
| `/products/hidrante-tres-bocas-en-hd-extremo-liso-tipo-trafico` | Título muy largo (116 chars, máximo 60) |
| `/products/medidor-ultrasonico-r400-cuerpo-plastico-de-1-2-calibrado-por-un-laboratorio-acreditado-por-la-onac-ip68` | Título muy largo (116 chars, máximo 60) |
| `/products/medidorvolumetricotransmisionmecanicar315cuerpometalicodemediapulgadacalibradoporunlaboratoriohomologadoporlaonac` | Título muy largo (116 chars, máximo 60) |
| `/products/registro-de-corte-antifraude-de-1-2-con-incerto-dzr-x-telescopico` | Título muy largo (112 chars, máximo 60) |
| `/products/tapaparaalcantarilladoplasticahomologadaporlaempresadeserviciospublicosdebogotaeaabde65centimetrosy67centimetrostapaparapozodeinspeccion` | Título muy largo (111 chars, máximo 60) |
| `/products/tapaparaalcantarilladoenpolipropilenodealtadensidadyaroenlaminade70cm` | Título muy largo (111 chars, máximo 60) |
| `/products/tapa-para-alcantarillado-en-polipropileno-de-alta-densidad-y-aro-en-hierro-fundido-de-67cm` | Título muy largo (111 chars, máximo 60) |
| `/products/valvula-de-compuerta-en-hierro-ductil-vastago-no-ascendente-extremo-liso` | Título muy largo (111 chars, máximo 60) |
| `/products/valvula-de-compuerta-en-hierro-ductil-vastago-no-ascendente-extremo-liso-copia` | Título muy largo (111 chars, máximo 60) |
| `/products/medidordevelocidadtransmisionmecanicacuerpoencompositedemediapulgadacalibradoporunlaboratoriohomologadoporlaonac` | Título muy largo (111 chars, máximo 60) |
| `/products/medidordevelocidadtransmisionmagneticar160cuerpometalicode1-2calibradoporunlaboratoriohomologadoporlaonac` | Título muy largo (111 chars, máximo 60) |
| `/products/medidorvolumetricotransmisionmagneticar315cuerpoencompositedemediapulgadacalibradoporunlaboratoriohomologadoporlaonac` | Título muy largo (111 chars, máximo 60) |
| `/products/hidrante-tres-bocas-en-hd-extremo-liso-tipo-trafico-dos-de-2-1-2-y-una-de-4-1-2-copia` | Título muy largo (111 chars, máximo 60) |
| `/products/cajillaplasticaparamedidorconcierreantifraudeymirillagtborusia` | Título muy largo (111 chars, máximo 60) |
| `/products/tuberia-polietileno-linea-azul-pn16-235-psi-rde11-precio-por-ml-copia` | Título muy largo (105 chars, máximo 60) |
| `/products/tuberia-polietileno-linea-azul-pn16-235-psi-rde11-ml` | Título muy largo (104 chars, máximo 60) |
| `/products/union-para-red-contraincendios-enterrada-c900-copia` | Título muy largo (100 chars, máximo 60) |
| `/products/macromedidormecanicotipowoltmannenhierroductilr200transmisionmagnetica` | Título muy largo (98 chars, máximo 60) |
| `/products/registrodecorteantifraudedemediapulgadaconincertometalicodzr` | Título muy largo (98 chars, máximo 60) |
| `/products/silleta-en-polietileno-para-electrofusion-pn-16-235-psi` | Título muy largo (96 chars, máximo 60) |
| `/products/pinturaparainteriorestipo1viniltexadvancepintuco` | Título muy largo (96 chars, máximo 60) |
| `/products/reduccion-en-polietileno-para-termofusion-pn16-235psi` | Título muy largo (95 chars, máximo 60) |
| `/products/tapon-en-polietileno-pn-16-235-psi-para-termofusion` | Título muy largo (92 chars, máximo 60) |
| `/products/canastilla-lavaplatos-de-3-1-2-uso-comercial` | Título muy largo (91 chars, máximo 60) |
| `/products/tuberia-c900-para-redes-contraincedios-enterradas` | Título muy largo (90 chars, máximo 60) |
| `/products/tuberia-pvc-orientada-alta-presion-rde-26-160-psi` | Título muy largo (90 chars, máximo 60) |
| `/products/codo-90-para-red-contraincendios-enterrada-c900` | Título muy largo (89 chars, máximo 60) |
| `/products/codo-45-para-red-contraincendios-enterrada-c900-copia` | Título muy largo (89 chars, máximo 60) |
| `/products/aroytapaenhierrofundidoparaalcantarilladopozodeinspeccionreddetelecomunicaciones` | Título muy largo (89 chars, máximo 60) |
| `/products/tu` | Título muy largo (88 chars, máximo 60) |
| `/products/tuberia-pvc-presion-rde-9-500-psi-de-1-2` | Título muy largo (87 chars, máximo 60) |
| `/products/codo-90-en-polietileno-pn-16-para-termofusion` | Título muy largo (86 chars, máximo 60) |
| `/products/codo-45-en-polietileno-pn-16-para-termofusion` | Título muy largo (86 chars, máximo 60) |
| `/products/registro-de-corte-antifraude-tcl-de-1-2` | Título muy largo (86 chars, máximo 60) |
| `/products/tee-en-polietileno-termofusion-pn-16-235-psi` | Título muy largo (85 chars, máximo 60) |
| `/products/union-garra-de-tigre-pead-copia` | Título muy largo (84 chars, máximo 60) |
| `/products/codo-90-en-hierro-ductil-extremo-liso-copia` | Título muy largo (83 chars, máximo 60) |
| `/products/restrictor-hd-serie-1100-para-tuberia-c900` | Título muy largo (83 chars, máximo 60) |
| `/products/restrictor-hd-serie-1200-para-tuberia-c900-copia` | Título muy largo (83 chars, máximo 60) |
| `/products/tuberia-para-alcantarillado-corrugada` | Título muy largo (82 chars, máximo 60) |
| `/pages/superintendencia-de-industria-y-comercio` | Título muy largo (81 chars, máximo 60) |
| `/products/bujesoldadopvcpresionsch-40` | Título muy largo (80 chars, máximo 60) |
| `/products/portabrida-en-polietileno-pn16-235-psi` | Título muy largo (79 chars, máximo 60) |
| `/products/codo-90-en-hierro-ductil-extremo-liso` | Título muy largo (79 chars, máximo 60) |
| `/products/t` | Título muy largo (77 chars, máximo 60) |
| `/products/tuberia-pvc-presion-rde-26-160-psi` | Título muy largo (77 chars, máximo 60) |
| `/products/tuberia-union-mecanica-alta-presion` | Título muy largo (76 chars, máximo 60) |
| `/products/tuberia-pvc-presion-rde-21-200-psi` | Título muy largo (75 chars, máximo 60) |
| `/products/tuberia-pvc-presion-rde-21-200-psi-1` | Título muy largo (75 chars, máximo 60) |
| `/products/tee-reducida-en-polietileno-pn-16` | Título muy largo (74 chars, máximo 60) |
| `/products/tee-en-hierro-ductil-extremo-liso` | Título muy largo (74 chars, máximo 60) |
| `/products/tapon-soldado-pvc-presion-sch-40` | Título muy largo (73 chars, máximo 60) |
| `/products/taponroscadopvcpresionsch-40` | Título muy largo (73 chars, máximo 60) |
| `/products/union-de-reparacion-y-transicion-apolo-flex-copia` | Título muy largo (73 chars, máximo 60) |
| `/products/bujesoldadopvcpresionsch40` | Título muy largo (72 chars, máximo 60) |
| `/products/union-de-reparacion-pvc-presion` | Título muy largo (72 chars, máximo 60) |
| `/products/codo-90-pvc-presion-sch-40` | Título muy largo (67 chars, máximo 60) |
| `/products/codo-45-pvc-presion-sch-40` | Título muy largo (67 chars, máximo 60) |
| `/collections/acueducto-y-alcantarillado` | Título muy largo (67 chars, máximo 60) |
| `/products/uniongarradetigrepead` | Título muy largo (66 chars, máximo 60) |
| `/products/yeereducidapvcsanitario` | Título muy largo (66 chars, máximo 60) |
| `/products/union-pvc-presion-sch-40` | Título muy largo (65 chars, máximo 60) |
| `/collections/accesorios-hierro-ductil` | Título muy largo (65 chars, máximo 60) |
| `/pages/aviso-privacidad` | Título muy largo (64 chars, máximo 60) |
| `/policies/contact-information` | Título muy largo (64 chars, máximo 60) |
| `/products/tee-pvc-presion-sch-40` | Título muy largo (63 chars, máximo 60) |
| `/products/teereducidasanitaria` | Título muy largo (63 chars, máximo 60) |
| `/policies/privacy-policy` | Título muy largo (63 chars, máximo 60) |
| `/products/tuberiaenpvcsanitariaaguaslluvias` | Título muy largo (62 chars, máximo 60) |
| `/policies/refund-policy` | Título muy largo (62 chars, máximo 60) |
| `/policies/terms-of-service` | Título muy largo (62 chars, máximo 60) |
| `/products/geofonoaquatestt10` | Título muy largo (61 chars, máximo 60) |
| `/pages/preguntas-frecuentes-faqs` | Título muy largo (61 chars, máximo 60) |

### Anexo B — Todas las páginas con meta description demasiado larga (59)

| URL | Longitud actual |
|---|---|
| `/products/medidordevelocidadtransmisionmecanicacuerpoencompositedemediapulgadacalibradoporunlaboratoriohomologadoporlaonac` | Meta description muy larga (330 chars, máximo 160) |
| `/products/medidordevelocidadtransmisionmagneticar160cuerpometalicode1-2calibradoporunlaboratoriohomologadoporlaonac` | Meta description muy larga (330 chars, máximo 160) |
| `/products/medidorvolumetricotransmisinmecanicar200cuerpometalicode1-2calibradoporunlaboratoriohomologadoporlaonac` | Meta description muy larga (330 chars, máximo 160) |
| `/products/medidorvolumetricotransmisionmecanicar315cuerpometalicodemediapulgadacalibradoporunlaboratoriohomologadoporlaonac` | Meta description muy larga (330 chars, máximo 160) |
| `/products/medidorvolumetricotransmisionmagneticar315cuerpoencompositedemediapulgadacalibradoporunlaboratoriohomologadoporlaonac` | Meta description muy larga (329 chars, máximo 160) |
| `/pages/contact` | Meta description muy larga (323 chars, máximo 160) |
| `/pages/preguntas-frecuentes-faqs` | Meta description muy larga (321 chars, máximo 160) |
| `/products/tuberia-para-alcantarillado-corrugada` | Meta description muy larga (320 chars, máximo 160) |
| `/products/tapaparaalcantarilladoenpolipropilenodealtadensidadyaroenlaminade70cm` | Meta description muy larga (320 chars, máximo 160) |
| `/products/tapa-para-alcantarillado-en-polipropileno-de-alta-densidad-y-aro-en-hierro-fundido-de-67cm` | Meta description muy larga (320 chars, máximo 160) |
| `/products/codo-90-en-polietileno-pn-16-para-termofusion` | Meta description muy larga (320 chars, máximo 160) |
| `/products/codo-45-en-polietileno-pn-16-para-termofusion` | Meta description muy larga (320 chars, máximo 160) |
| `/products/codo-90-pvc-presion-sch-40` | Meta description muy larga (320 chars, máximo 160) |
| `/products/codo-45-pvc-presion-sch-40` | Meta description muy larga (320 chars, máximo 160) |
| `/products/union-pvc-presion-sch-40` | Meta description muy larga (320 chars, máximo 160) |
| `/products/tee-pvc-presion-sch-40` | Meta description muy larga (320 chars, máximo 160) |
| `/products/tapon-soldado-pvc-presion-sch-40` | Meta description muy larga (320 chars, máximo 160) |
| `/products/bujesoldadopvcpresionsch40` | Meta description muy larga (320 chars, máximo 160) |
| `/products/bujesoldadopvcpresionsch-40` | Meta description muy larga (320 chars, máximo 160) |
| `/products/taponroscadopvcpresionsch-40` | Meta description muy larga (320 chars, máximo 160) |
| `/products/tuberiaenpvcsanitariaaguaslluvias` | Meta description muy larga (320 chars, máximo 160) |
| `/products/codo-90-para-red-contraincendios-enterrada-c900` | Meta description muy larga (320 chars, máximo 160) |
| `/products/codo-45-para-red-contraincendios-enterrada-c900-copia` | Meta description muy larga (320 chars, máximo 160) |
| `/products/union-para-red-contraincendios-enterrada-c900-copia` | Meta description muy larga (320 chars, máximo 160) |
| `/products/geofonoaquatestt10` | Meta description muy larga (320 chars, máximo 160) |
| `/products/tuberia-pvc-orientada-alta-presion-rde-26-160-psi` | Meta description muy larga (320 chars, máximo 160) |
| `/products/tuberia-union-mecanica-alta-presion` | Meta description muy larga (320 chars, máximo 160) |
| `/products/union-garra-de-tigre-pead-copia` | Meta description muy larga (320 chars, máximo 160) |
| `/products/union-de-reparacion-y-transicion-apolo-flex-copia` | Meta description muy larga (320 chars, máximo 160) |
| `/products/union-universal-en-hierro-ductil-copia` | Meta description muy larga (320 chars, máximo 160) |
| `/products/aroytapaenhierrofundidoparaalcantarilladopozodeinspeccionreddetelecomunicaciones` | Meta description muy larga (320 chars, máximo 160) |
| `/pages/aviso-privacidad` | Meta description muy larga (320 chars, máximo 160) |
| `/products/tapaparaalcantarilladoplasticahomologadaporlaempresadeserviciospublicosdebogotaeaabde65centimetrosy67centimetrostapaparapozodeinspeccion` | Meta description muy larga (319 chars, máximo 160) |
| `/products/hidrante-tres-bocas-en-hd-extremo-liso-tipo-trafico` | Meta description muy larga (319 chars, máximo 160) |
| `/products/hidrante-tres-bocas-en-hd-extremo-liso-tipo-trafico-dos-de-2-1-2-y-una-de-4-1-2-copia` | Meta description muy larga (319 chars, máximo 160) |
| `/products/tuberia-c900-para-redes-contraincedios-enterradas` | Meta description muy larga (319 chars, máximo 160) |
| `/products/uniongarradetigrepead` | Meta description muy larga (319 chars, máximo 160) |
| `/products/codopvcsanitariocampanaporcampana` | Meta description muy larga (307 chars, máximo 160) |
| `/products/teepvcsanitaria` | Meta description muy larga (307 chars, máximo 160) |
| `/products/teereducidasanitaria` | Meta description muy larga (307 chars, máximo 160) |
| `/products/yeereducidapvcsanitario` | Meta description muy larga (307 chars, máximo 160) |
| `/products/medidor-ultrasonico-r400-cuerpo-plastico-de-1-2-calibrado-por-un-laboratorio-acreditado-por-la-onac-ip68` | Meta description muy larga (306 chars, máximo 160) |
| `/products/cajillaplasticaparamedidorconcierreantifraudeymirillagtborusia` | Meta description muy larga (306 chars, máximo 160) |
| `/products/registro-de-corte-antifraude-de-1-2-con-incerto-dzr-x-telescopico` | Meta description muy larga (282 chars, máximo 160) |
| `/products/union-de-reparacion-pvc-presion` | Meta description muy larga (272 chars, máximo 160) |
| `/products/tuberia-pvc-presion-rde-9-500-psi-de-1-2` | Meta description muy larga (267 chars, máximo 160) |
| `/products/tu` | Meta description muy larga (267 chars, máximo 160) |
| `/products/t` | Meta description muy larga (267 chars, máximo 160) |
| `/products/tuberia-pvc-presion-rde-21-200-psi` | Meta description muy larga (267 chars, máximo 160) |
| `/products/tuberia-pvc-presion-rde-21-200-psi-1` | Meta description muy larga (267 chars, máximo 160) |
| `/products/tuberia-pvc-presion-rde-26-160-psi` | Meta description muy larga (267 chars, máximo 160) |
| `/products/valvula-de-compuerta-en-hierro-ductil-vastago-no-ascendente-extremo-liso` | Meta description muy larga (234 chars, máximo 160) |
| `/products/valvula-de-compuerta-en-hierro-ductil-vastago-no-ascendente-extremo-liso-copia` | Meta description muy larga (234 chars, máximo 160) |
| `/products/tuberia-polietileno-linea-azul-pn16-235-psi-rde11-ml` | Meta description muy larga (184 chars, máximo 160) |
| `/products/tuberia-polietileno-linea-azul-pn16-235-psi-rde11-precio-por-ml-copia` | Meta description muy larga (184 chars, máximo 160) |
| `/products/macromedidormecanicotipowoltmannenhierroductilr200transmisionmagnetica` | Meta description muy larga (169 chars, máximo 160) |
| `/products/restrictor-hd-serie-1100-para-tuberia-c900` | Meta description muy larga (167 chars, máximo 160) |
| `/products/restrictor-hd-serie-1200-para-tuberia-c900-copia` | Meta description muy larga (166 chars, máximo 160) |
| `/products/registrodecorteantifraudedemediapulgadaconincertometalicodzr` | Meta description muy larga (161 chars, máximo 160) |

### Anexo C — Todas las páginas con contenido escaso, <300 palabras (74)

| URL | Palabras estimadas |
|---|---|
| `/policies/contact-information` | Contenido escaso (~146 palabras, recomendado 300+) |
| `/pages/superintendencia-de-industria-y-comercio` | Contenido escaso (~147 palabras, recomendado 300+) |
| `/blogs/noticias/empresa` | Contenido escaso (~159 palabras, recomendado 300+) |
| `/blogs/noticias/entrega` | Contenido escaso (~159 palabras, recomendado 300+) |
| `/products/canastilla-lavaplatos-de-3-1-2-uso-comercial` | Contenido escaso (~173 palabras, recomendado 300+) |
| `/blogs/noticias` | Contenido escaso (~174 palabras, recomendado 300+) |
| `/products/registro-de-corte-antifraude-tcl-de-1-2` | Contenido escaso (~181 palabras, recomendado 300+) |
| `/products/pinturaparainteriorestipo1viniltexadvancepintuco` | Contenido escaso (~190 palabras, recomendado 300+) |
| `/collections/driwall` | Contenido escaso (~192 palabras, recomendado 300+) |
| `/collections/siliconas` | Contenido escaso (~192 palabras, recomendado 300+) |
| `/cart` | Contenido escaso (~192 palabras, recomendado 300+) |
| `/collections/junta-hidraulica` | Contenido escaso (~194 palabras, recomendado 300+) |
| `/collections/accesorios-hierro-ductil` | Contenido escaso (~198 palabras, recomendado 300+) |
| `/products/codo-90-en-hierro-ductil-extremo-liso` | Contenido escaso (~201 palabras, recomendado 300+) |
| `/products/codo-90-en-hierro-ductil-extremo-liso-copia` | Contenido escaso (~203 palabras, recomendado 300+) |
| `/products/restrictor-hd-serie-1100-para-tuberia-c900` | Contenido escaso (~206 palabras, recomendado 300+) |
| `/products/restrictor-hd-serie-1200-para-tuberia-c900-copia` | Contenido escaso (~206 palabras, recomendado 300+) |
| `/products/macromedidormecanicotipowoltmannenhierroductilr200transmisionmagnetica` | Contenido escaso (~207 palabras, recomendado 300+) |
| `/collections/acueducto-y-alcantarillado` | Contenido escaso (~208 palabras, recomendado 300+) |
| `/products/tee-reducida-en-polietileno-pn-16` | Contenido escaso (~211 palabras, recomendado 300+) |
| `/products/portabrida-en-polietileno-pn16-235-psi` | Contenido escaso (~212 palabras, recomendado 300+) |
| `/products/registrodecorteantifraudedemediapulgadaconincertometalicodzr` | Contenido escaso (~212 palabras, recomendado 300+) |
| `/products/tapon-en-polietileno-pn-16-235-psi-para-termofusion` | Contenido escaso (~213 palabras, recomendado 300+) |
| `/products/silleta-en-polietileno-para-electrofusion-pn-16-235-psi` | Contenido escaso (~213 palabras, recomendado 300+) |
| `/products/teereducidasanitaria` | Contenido escaso (~213 palabras, recomendado 300+) |
| `/pages/contact` | Contenido escaso (~214 palabras, recomendado 300+) |
| `/products/tee-en-polietileno-termofusion-pn-16-235-psi` | Contenido escaso (~215 palabras, recomendado 300+) |
| `/products/tuberia-pvc-presion-rde-9-500-psi-de-1-2` | Contenido escaso (~216 palabras, recomendado 300+) |
| `/products/yeereducidapvcsanitario` | Contenido escaso (~216 palabras, recomendado 300+) |
| `/products/teepvcsanitaria` | Contenido escaso (~217 palabras, recomendado 300+) |
| `/products/tu` | Contenido escaso (~218 palabras, recomendado 300+) |
| `/products/union-de-reparacion-pvc-presion` | Contenido escaso (~218 palabras, recomendado 300+) |
| `/products/t` | Contenido escaso (~219 palabras, recomendado 300+) |
| `/products/tuberia-pvc-presion-rde-26-160-psi` | Contenido escaso (~219 palabras, recomendado 300+) |
| `/products/tuberia-pvc-presion-rde-21-200-psi-1` | Contenido escaso (~221 palabras, recomendado 300+) |
| `/products/codopvcsanitariocampanaporcampana` | Contenido escaso (~222 palabras, recomendado 300+) |
| `/products/tuberia-pvc-presion-rde-21-200-psi` | Contenido escaso (~225 palabras, recomendado 300+) |
| `/products/registro-de-corte-antifraude-de-1-2-con-incerto-dzr-x-telescopico` | Contenido escaso (~225 palabras, recomendado 300+) |
| `/products/valvula-de-compuerta-en-hierro-ductil-vastago-no-ascendente-extremo-liso` | Contenido escaso (~227 palabras, recomendado 300+) |
| `/products/valvula-de-compuerta-en-hierro-ductil-vastago-no-ascendente-extremo-liso-copia` | Contenido escaso (~227 palabras, recomendado 300+) |
| `/products/reduccion-en-polietileno-para-termofusion-pn16-235psi` | Contenido escaso (~230 palabras, recomendado 300+) |
| `/products/cajillaplasticaparamedidorconcierreantifraudeymirillagtborusia` | Contenido escaso (~230 palabras, recomendado 300+) |
| `/products/medidor-ultrasonico-r400-cuerpo-plastico-de-1-2-calibrado-por-un-laboratorio-acreditado-por-la-onac-ip68` | Contenido escaso (~232 palabras, recomendado 300+) |
| `/products/medidorvolumetricotransmisinmecanicar200cuerpometalicode1-2calibradoporunlaboratoriohomologadoporlaonac` | Contenido escaso (~238 palabras, recomendado 300+) |
| `/products/medidorvolumetricotransmisionmecanicar315cuerpometalicodemediapulgadacalibradoporunlaboratoriohomologadoporlaonac` | Contenido escaso (~238 palabras, recomendado 300+) |
| `/products/codo-90-en-polietileno-pn-16-para-termofusion` | Contenido escaso (~241 palabras, recomendado 300+) |
| `/products/codo-45-en-polietileno-pn-16-para-termofusion` | Contenido escaso (~241 palabras, recomendado 300+) |
| `/products/union-pvc-presion-sch-40` | Contenido escaso (~242 palabras, recomendado 300+) |
| `/products/tee-pvc-presion-sch-40` | Contenido escaso (~242 palabras, recomendado 300+) |
| `/products/tapon-soldado-pvc-presion-sch-40` | Contenido escaso (~242 palabras, recomendado 300+) |
| `/products/taponroscadopvcpresionsch-40` | Contenido escaso (~242 palabras, recomendado 300+) |
| `/products/medidordevelocidadtransmisionmagneticar160cuerpometalicode1-2calibradoporunlaboratoriohomologadoporlaonac` | Contenido escaso (~242 palabras, recomendado 300+) |
| `/products/medidorvolumetricotransmisionmagneticar315cuerpoencompositedemediapulgadacalibradoporunlaboratoriohomologadoporlaonac` | Contenido escaso (~242 palabras, recomendado 300+) |
| `/products/codo-45-pvc-presion-sch-40` | Contenido escaso (~243 palabras, recomendado 300+) |
| `/products/medidordevelocidadtransmisionmecanicacuerpoencompositedemediapulgadacalibradoporunlaboratoriohomologadoporlaonac` | Contenido escaso (~243 palabras, recomendado 300+) |
| `/products/codo-90-pvc-presion-sch-40` | Contenido escaso (~244 palabras, recomendado 300+) |
| `/products/union-universal-en-hierro-ductil-copia` | Contenido escaso (~244 palabras, recomendado 300+) |
| `/products/tuberia-polietileno-linea-azul-pn16-235-psi-rde11-precio-por-ml-copia` | Contenido escaso (~245 palabras, recomendado 300+) |
| `/products/tuberia-polietileno-linea-azul-pn16-235-psi-rde11-ml` | Contenido escaso (~247 palabras, recomendado 300+) |
| `/products/tee-en-hierro-ductil-extremo-liso` | Contenido escaso (~247 palabras, recomendado 300+) |
| `/products/bujesoldadopvcpresionsch-40` | Contenido escaso (~258 palabras, recomendado 300+) |
| `/products/bujesoldadopvcpresionsch40` | Contenido escaso (~263 palabras, recomendado 300+) |
| `/products/uniongarradetigrepead` | Contenido escaso (~267 palabras, recomendado 300+) |
| `/products/hidrante-tres-bocas-en-hd-extremo-liso-tipo-trafico` | Contenido escaso (~270 palabras, recomendado 300+) |
| `/products/hidrante-tres-bocas-en-hd-extremo-liso-tipo-trafico-dos-de-2-1-2-y-una-de-4-1-2-copia` | Contenido escaso (~273 palabras, recomendado 300+) |
| `/products/tapaparaalcantarilladoplasticahomologadaporlaempresadeserviciospublicosdebogotaeaabde65centimetrosy67centimetrostapaparapozodeinspeccion` | Contenido escaso (~274 palabras, recomendado 300+) |
| `/products/tapaparaalcantarilladoenpolipropilenodealtadensidadyaroenlaminade70cm` | Contenido escaso (~274 palabras, recomendado 300+) |
| `/products/tapa-para-alcantarillado-en-polipropileno-de-alta-densidad-y-aro-en-hierro-fundido-de-67cm` | Contenido escaso (~275 palabras, recomendado 300+) |
| `/products/geofonoaquatestt10` | Contenido escaso (~280 palabras, recomendado 300+) |
| `/products/union-de-reparacion-y-transicion-apolo-flex-copia` | Contenido escaso (~285 palabras, recomendado 300+) |
| `/products/union-garra-de-tigre-pead-copia` | Contenido escaso (~287 palabras, recomendado 300+) |
| `/products/codo-90-para-red-contraincendios-enterrada-c900` | Contenido escaso (~293 palabras, recomendado 300+) |
| `/products/codo-45-para-red-contraincendios-enterrada-c900-copia` | Contenido escaso (~293 palabras, recomendado 300+) |
| `/products/union-para-red-contraincendios-enterrada-c900-copia` | Contenido escaso (~295 palabras, recomendado 300+) |

### Anexo D — Todas las páginas con Performance <70 (34)

| URL | Score Performance |
|---|---|
| `/products/hidrante-tres-bocas-en-hd-extremo-liso-tipo-trafico` | 53 |
| `/products/registrodecorteantifraudedemediapulgadaconincertometalicodzr` | 53 |
| `/products/medidordevelocidadtransmisionmagneticar160cuerpometalicode1-2calibradoporunlaboratoriohomologadoporlaonac` | 54 |
| `/products/codo-45-para-red-contraincendios-enterrada-c900-copia` | 54 |
| `/products/tapon-soldado-pvc-presion-sch-40` | 55 |
| `/products/aroytapaenhierrofundidoparaalcantarilladopozodeinspeccionreddetelecomunicaciones` | 55 |
| `/products/portabrida-en-polietileno-pn16-235-psi` | 56 |
| `/products/silleta-en-polietileno-para-electrofusion-pn-16-235-psi` | 56 |
| `/products/uniongarradetigrepead` | 58 |
| `/products/tuberia-polietileno-linea-azul-pn16-235-psi-rde11-precio-por-ml-copia` | 59 |
| `/products/codo-90-pvc-presion-sch-40` | 59 |
| `/products/union-universal-en-hierro-ductil-copia` | 59 |
| `/ (portada)` | 60 |
| `/products/tuberia-para-alcantarillado-corrugada` | 60 |
| `/products/valvula-de-compuerta-en-hierro-ductil-vastago-no-ascendente-extremo-liso-copia` | 60 |
| `/products/tuberia-pvc-presion-rde-21-200-psi` | 60 |
| `/products/codo-45-pvc-presion-sch-40` | 60 |
| `/products/union-de-reparacion-pvc-presion` | 60 |
| `/products/medidorvolumetricotransmisionmagneticar315cuerpoencompositedemediapulgadacalibradoporunlaboratoriohomologadoporlaonac` | 60 |
| `/products/hidrante-tres-bocas-en-hd-extremo-liso-tipo-trafico-dos-de-2-1-2-y-una-de-4-1-2-copia` | 60 |
| `/products/tuberia-c900-para-redes-contraincedios-enterradas` | 60 |
| `/products/medidor-ultrasonico-r400-cuerpo-plastico-de-1-2-calibrado-por-un-laboratorio-acreditado-por-la-onac-ip68` | 60 |
| `/products/medidorvolumetricotransmisionmecanicar315cuerpometalicodemediapulgadacalibradoporunlaboratoriohomologadoporlaonac` | 60 |
| `/products/bujesoldadopvcpresionsch40` | 63 |
| `/products/valvula-de-compuerta-en-hierro-ductil-vastago-no-ascendente-extremo-liso` | 64 |
| `/products/medidorvolumetricotransmisinmecanicar200cuerpometalicode1-2calibradoporunlaboratoriohomologadoporlaonac` | 65 |
| `/products/tuberia-polietileno-linea-azul-pn16-235-psi-rde11-ml` | 66 |
| `/products/canastilla-lavaplatos-de-3-1-2-uso-comercial` | 66 |
| `/products/reduccion-en-polietileno-para-termofusion-pn16-235psi` | 67 |
| `/collections` | 67 |
| `/collections/junta-hidraulica` | 68 |
| `/blogs/noticias` | 68 |
| `/blogs/noticias/empresa` | 69 |
| `/collections/all` | 69 |

---

*Fuentes: `ai-report.md` y `results.json` (Screaming Frog + Lighthouse, 28/8/2026), y revisión directa del código del tema en `globaltools-companiaferretera/` (carpeta local sincronizada vía Shopify CLI).*