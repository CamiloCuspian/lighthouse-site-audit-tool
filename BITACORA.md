# Bitácora del proyecto — lighthouse-site-audit-tool

Este archivo existe para retomar el trabajo en cualquier momento (tú, alguien
más del equipo, o Claude en otra sesión) sin pisar lo que ya se hizo.

**Antes de pedir un cambio nuevo, lee "Pendientes activos".** Es lo último
que quedó sin resolver — evita que se repita trabajo o que un cambio nuevo
contradiga una decisión que ya se tomó por una razón concreta.

**Al terminar una sesión de trabajo**, agrega una entrada nueva arriba de
"Historial de sesiones" y actualiza "Pendientes activos": quita lo que se
resolvió, agrega lo que quedó abierto.

---

## Pendientes activos

- [ ] **Bug sin resolver:** al entrar a la página de un proyecto (`/proyectos/<slug>`)
      sin hacer clic en nada, aparece el mensaje "Iniciando" repetidamente y
      no se detiene. Confirmado que NO es el flujo del botón "Auditar ahora"
      (esa parte funciona — la primera auditoría real de Hermes Gamba
      completó bien). Se descartó: proceso de Chrome huérfano (no aparece en
      Task Manager), Chrome no instalado (sí está instalado), código
      desactualizado (el servidor ya está corriendo con los últimos
      archivos). Pendiente: el usuario va a mandar una captura/GIF de lo
      que aparece exactamente en pantalla para diagnosticar con evidencia
      en vez de seguir probando teorías a ciegas.
- [ ] Ningún cambio de `web/` ni de `cli/crawler.js` se ha subido a git
      todavía — todo está como cambios locales sin commitear. Falta decidir
      cuándo y cómo se hace el primer commit (ver "Cómo usar git en este
      proyecto" más abajo).
- [ ] Falta probar la interfaz en las otras 2 máquinas del equipo (`npm
      install` + `npm run dev` en `web/`).
- [ ] Falta decidir si el flujo de `git add/commit/push` de `proyectos/`
      después de cada auditoría se automatiza desde la propia interfaz o
      se deja manual (hoy es manual, a propósito, para no complicar).

---

## Cómo usar git en este proyecto

Git es el registro técnico exacto: cada commit guarda el diff completo de
qué cambió y cuándo. Esta bitácora es el resumen humano — los dos se
complementan, no se reemplazan.

Flujo sugerido para las 3 personas del equipo:

1. `git pull` antes de empezar a trabajar (código o auditorías).
2. Hacer los cambios / correr las auditorías.
3. `git add -A && git commit -m "mensaje claro de qué cambió"` — mensajes
   como "fix: auditoría se quedaba en Iniciando al entrar al proyecto" son
   más útiles que "cambios varios".
4. `git push` para que los otros dos vean el avance.
5. Actualizar esta bitácora si el cambio es grande o deja algo pendiente.

---

## Historial de sesiones

### 2026-08-14 — Interfaz web en Astro + primeros bugs en uso real

Se construyó `web/`, una interfaz local en Astro (SSR con `@astrojs/node`,
100% local y gratis) que reemplaza el uso por CMD. Reutiliza tal cual los
módulos de `cli/` — no se tocó la lógica de auditoría ni el bloqueo de
Analytics/GTM/Meta Pixel en `auditor.js` (requisito explícito: las visitas
de auditoría no deben registrarse en Analytics ni Search Console).

Modelo de datos por proyecto en `proyectos/<slug>/`:
`meta.json` (nombre/dominio) + `historial.json` (resumen compacto por
auditoría — promedios de scores, páginas, links rotos, problemas SEO, sin
guardar errores individuales ni el HTML completo) + `estado.json`
(progreso transitorio, no se versiona). El reporte HTML completo se sigue
generando en `reports/<slug>/<timestamp>/` (ya en `.gitignore`, desechable).

`audit-runner.js` agrega reciclaje de Chrome cada 50 páginas durante
auditorías largas (mejora de fiabilidad de la auditoría técnica previa, sin
cambiar la medición de Core Web Vitals por URL).

Se crearon los primeros dos proyectos reales: Grupo Ideas y Hermes Gamba.

Bugs encontrados en uso real y corregidos en esta sesión:

1. **Recarga infinita al terminar una auditoría.** `estado.json` se queda
   en `"listo"` en disco después de terminar; el frontend recargaba la
   página al verlo, pero tras el reload volvía a ver "listo" otra vez →
   loop infinito. Arreglado con un guardado en `sessionStorage` que recuerda
   qué auditoría ya se vio completada (por su timestamp), para recargar una
   sola vez.
2. **"Crear proyecto" se quedaba cargando indefinidamente** aunque el
   proyecto sí se creaba en el servidor. Se cambió de un POST de formulario
   nativo + redirect del servidor, a un flujo 100% por JavaScript
   (`fetch` + navegación manual con `window.location.href`), que además
   muestra el error en pantalla si algo falla en vez de quedarse pegado.
3. **Progreso invisible durante el crawl.** Antes de que arrancara
   Lighthouse, la fase de "descubrir páginas" no reportaba nada — parecía
   congelada en sitios grandes. Se agregó un callback `onProgress` opcional
   a `crawlSite()` (cambio retrocompatible, `cli/index.js` sigue
   funcionando igual) que ahora actualiza el conteo de páginas encontradas
   en tiempo real.

Bug nuevo reportado al final de la sesión (ver "Pendientes activos"): al
solo entrar a la página de un proyecto, sin hacer clic en nada, el mensaje
"Iniciando" se repite sin parar. Se descartaron varias causas (proceso de
Chrome huérfano, Chrome no instalado, servidor con código viejo). Se
reprodujo el flujo del botón exitosamente en un entorno de prueba aparte
(respuesta en <1s, estado correcto) — así que el problema parece estar
específicamente en lo que pasa al *cargar* la página del proyecto, no en
el flujo de auditar. Queda pendiente una captura/GIF del usuario para
diagnosticar con evidencia visual.

### 2026-08-13 — Auditoría técnica de la herramienta + decisiones de arquitectura

Se hizo una auditoría técnica completa del código original (`cli/`)
contrastada con documentación oficial de Google/Lighthouse. Hallazgos
principales: reutilizar una sola instancia de Chrome para hasta 500
páginas contradice la guía oficial de Lighthouse ("Running at scale"), no
hay concurrencia, solo hay datos de laboratorio (sin CrUX/PageSpeed
Insights API), falta INP como métrica, el crawler no ejecuta JavaScript
(falsos negativos en SPAs), no respeta robots.txt, la prioridad del
sitemap generado es cosmética (Google la ignora), y Lighthouse estaba
desactualizado (v12 fijado, estable actual v13.4.0). Reporte completo
entregado como archivo aparte con fuentes.

Se discutieron y descartaron alternativas de despliegue en la nube
(Firebase/Cloud Run) por costo y complejidad innecesaria para un equipo de
3 personas — se optó por un flujo 100% local + git como base de datos
compartida (cada quien corre la herramienta en su máquina, el historial
compacto se sincroniza por `git push`/`git pull`). Esta decisión es la que
llevó a construir la interfaz en Astro descrita en la sesión del
2026-08-14, en vez de una app desplegada.
