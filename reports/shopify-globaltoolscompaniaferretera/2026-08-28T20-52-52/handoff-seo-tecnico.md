# Handoff SEO técnico — Global Tools (globaltoolscompaniaferretera.com)

**Store:** `0xriis-hj.myshopify.com`
**Tema en producción:** "Global Tools - Fixed" (`#138503258174`)
**Carpeta local del proyecto:** `globaltools-companiaferretera/` (tema descargado vía Shopify CLI, con git inicializado)
**División de trabajo:** Juli + Claude llevan visual/UX/UI/CRO. Este documento es para quien lleve la parte técnica de SEO.

---

## 1. Meta Pixel de Facebook mal ubicado (prioridad alta, fix rápido)

**Archivo:** `layout/theme.liquid`

El script del Meta Pixel está insertado **antes** de `<meta charset="utf-8">`. Google recomienda que la declaración de charset esté dentro de los primeros 1024 bytes del `<head>`; si el navegador empieza a parsear con encoding equivocado antes de encontrarla, puede forzar un re-parseo completo del documento. Es un problema de rendimiento de render, no cosmético.

**Fix:** mover el bloque completo del Meta Pixel (el `<script>` y el `<noscript>`) a después de:
```
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1">
```

---

## 2. App externa de WhatsApp activa — candidata a pasar a código nativo

**Ubicación:** `config/settings_data.json`, bloque `shopify://apps/whatsapp-button/blocks/app-embed-block/...`, `"disabled": false`.

Es un App Embed (se inyecta vía `content_for_header`, no aparece como sección normal en el tema). Funcionalmente es solo un botón flotante con link a `wa.me/<número>` — no requiere backend ni lógica de servidor. Es candidata ideal para reemplazar por HTML/CSS nativo: elimina una petición de script externo completa.

**Antes de tocarlo:** confirmar con el cliente el número de WhatsApp activo y si usa alguna función avanzada de la app (mensajes predefinidos por página, horario de disponibilidad, etc.) que haya que replicar.

---

## 3. App instalada pero deshabilitada — limpiar

**Ubicación:** mismo archivo, bloque `shopify://apps/myshop-whatsapp-button/blocks/widget/...`, `"disabled": true`.

No carga en el sitio actualmente, pero sigue instalada. Recomendación: pedirle al cliente que la **desinstale** desde el admin (Apps), no solo que la deje desactivada — reduce superficie de riesgo (puede reactivarse por error) y limpia el conteo de apps instaladas.

---

## 4. Locales/idiomas a verificar (posible peso muerto o riesgo de hreflang)

**Carpeta:** `locales/`

El tema trae archivos de traducción para `de`, `en`, `es`, `fr`, `hi`, `it`, `ja`, `pt-BR`, `pt-PT`, `sv`, `zh-cn` — son los idiomas por defecto que trae el tema base, no necesariamente configurados en Markets/Languages del admin. Para una ferretera colombiana probablemente solo `es` (y quizá `en`) son relevantes.

**Falta verificar:** si en Settings → Languages del admin hay idiomas publicados que no correspondan al negocio real. Si los hay, revisar que no estén generando URLs `/en/`, `/fr/`, etc. indexables sin contenido real ni gestión — eso sí es un problema real de SEO técnico (contenido duplicado/vacío, hreflang mal configurado).

---

## 5. Pendiente de auditoría técnica (no revisado aún)

- `snippets/meta-tags.liquid` — qué meta tags genera realmente (OG, Twitter Cards, robots) y si hay valores hardcodeados vs. dinámicos por página.
- Schema markup / JSON-LD (no se encontró ninguno en la revisión rápida — a confirmar si existe en algún snippet no revisado).
- `robots.txt.liquid` (si el plan de Shopify permite editarlo) y `sitemap.xml` autogenerado.
- Core Web Vitals / velocidad de carga real (el tema carga `theme.js` de 265 KB y `vendor.min.js` de 192 KB — vale la pena perfilar qué tan optimizado está el bundling).
- Estructura de URLs de colecciones y productos (hay bastantes handles de colección que sugieren posible necesidad de consolidar o redirigir duplicados: `collection.hierro-ductil.json` y `collection.hierro-ductil-2.json`, `collection.pintura.json` y `collection.pintura-2.json`).

---

*Documento generado a partir de una revisión inicial del tema descargado localmente. No se ha tocado ningún archivo todavía — todo lo anterior son hallazgos, no cambios aplicados.*
