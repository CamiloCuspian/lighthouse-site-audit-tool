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

- [ ] **Limpieza manual pendiente en la máquina de Camilo:** durante la
      sesión del 2026-08-13 se intentó validar el build (`npm run build` /
      `npm run dev`) desde el entorno de Claude, y un `git stash` de prueba
      dejó dos archivos sueltos de 0 bytes que Claude no pudo borrar por
      permisos del puente (bridge) con el escritorio:
      `.git/index.lock` y `_to_delete_gitlock_index.lock` (en la raíz del
      repo). **Hay que borrarlos a mano** (Explorador de Windows o
      `del .git\index.lock` / `del _to_delete_gitlock_index.lock` desde una
      terminal en la carpeta del proyecto) antes de volver a usar git ahí —
      si no, git puede quejarse de "Another git process seems to be
      running". No afecta nada más del repo ni de los archivos de trabajo.
- [ ] **Bug viejo "Iniciando repetido" — probablemente ya resuelto de rebote,
      falta confirmar.** Al entrar a la página de un proyecto sin hacer clic
      en nada, aparecía el mensaje "Iniciando" repetidamente sin parar. En
      su momento se descartaron varias causas a ciegas. En la sesión
      2026-08-13 (5) se encontró y arregló la causa real de un problema
      con el mismo patrón ("la interfaz muestra una auditoría corriendo
      que en realidad no existe"): un `estado.json` fantasma que quedó en
      `"crawleando"`/`"auditando"` porque el servidor murió a mitad de una
      auditoría (reinicio, crash, cierre de la terminal) sin llegar a
      escribir su estado final. Es muy probable que sea la misma causa de
      este bug viejo — la próxima vez que aparezca, ya no debería
      quedarse pegado en "Iniciando" para siempre, sino corregirse solo al
      siguiente poll. Falta confirmar con Camilo que de verdad no vuelve a
      pasar.
- [ ] Ningún cambio de `web/` ni de `cli/crawler.js` se ha subido a git
      todavía — todo está como cambios locales sin commitear. Falta decidir
      cuándo y cómo se hace el primer commit (ver "Cómo usar git en este
      proyecto" más abajo). Esto ahora incluye también los cambios de
      cancelar/borrar proyecto de la sesión del 2026-08-13.
- [ ] Falta probar la interfaz en las otras 2 máquinas del equipo (`npm
      install` + `npm run dev` en `web/`).
- [ ] Falta decidir si el flujo de `git add/commit/push` de `proyectos/`
      después de cada auditoría se automatiza desde la propia interfaz o
      se deja manual (hoy es manual, a propósito, para no complicar).
- [ ] **Sin probar en vivo:** los botones de cancelar y borrar (ver sesiones
      2026-08-13 abajo) se escribieron y se revisaron a mano, pero no se
      pudieron probar corriendo `npm run dev` real porque el entorno de
      Claude no tiene un `node_modules` funcional para este proyecto (error
      "Cannot find native binding" de rolldown/astro, un bug conocido de
      npm con dependencias opcionales — no relacionado con este cambio).
      Falta que Camilo los pruebe en su máquina.
- [ ] **"Cancelar auditoría" — cuarto intento, sigue sin confirmarse en la
      máquina real (ver sesión 2026-08-13 (5) abajo).** Los logs del
      cuarto intento revelaron la causa real de TODOS los intentos
      anteriores: cada prueba se hizo justo después de reiniciar
      `npm run dev` (como se venía pidiendo para que el servidor cargara
      el código nuevo), y reiniciar el servidor mata cualquier auditoría
      que estuviera corriendo de verdad SIN que termine de escribir su
      estado final. El resultado: `estado.json` se quedaba congelado
      diciendo `"auditando"` (o `"crawleando"`) para siempre, sin que
      hubiera ninguna auditoría real corriendo — un fantasma. Por eso
      nunca podía funcionar cancelar: no había nada vivo con qué hablar.
      Se agregó una corrección automática (`estadoEfectivo` en
      `audit-runner.js`): si `estado.json` dice "crawleando"/"auditando"
      pero este proceso no tiene esa auditoría realmente corriendo, se
      corrige solo a un nuevo estado `"interrumpido"` (con un mensaje
      claro) la próxima vez que se consulta — tanto al cargar la página
      como al intentar cancelar.
      **Importante para la próxima prueba — esta vez hay que lanzar una
      auditoría REAL, no solo recargar la página:**
      1. Reiniciar `npm run dev`.
      2. Abrir el proyecto — si el estado anterior estaba fantasma, ahora
         debería verse "Esta auditoría se quedó a medias..." en vez de
         quedarse pegado en "Iniciando"/"Auditando".
      3. Darle clic a **"Auditar ahora"** y esperar a ver en la terminal
         líneas `[auditoria] "<slug>": página X/Y — empieza Lighthouse en
         https://...` — eso confirma que SÍ hay una auditoría real
         corriendo esta vez.
      4. Solo entonces darle clic a "Cancelar auditoría". Debería
         aparecer `[cancelar] "<slug>": señal detectada mientras
         Lighthouse auditaba ... — cerrando Chrome...` seguido de
         `[auditoria] "<slug>": cancelada por el usuario.`, y sentirse
         casi instantáneo.
      Si todavía falla, **copiar el bloque completo de la terminal desde
      el clic en "Auditar ahora"** (no solo el momento de cancelar) —
      necesito ver los `[auditoria] "<slug>": página X/Y...` para
      confirmar que había algo real corriendo antes de cancelar.

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

### 2026-08-13 (5) — Causa raíz real: estado.json fantasma tras reiniciar el server

Camilo probó el fix de la sesión (4) recién reiniciado `npm run dev` y
compartió el log completo desde el arranque del servidor. Eso fue clave:
no aparecía NINGÚN `POST /api/auditar` ni ningún `[auditoria] "<slug>":
página X/Y — empieza Lighthouse`, lo que prueba que no había ninguna
auditoría real corriendo en ese proceso — solo `/api/estado` en loop y un
`POST /api/cancelar` que escribía la señal sin que nadie la fuera a leer
nunca.

**Causa raíz encontrada:** cada prueba de las sesiones (2), (3) y (4) se
hizo justo después de pedirle a Camilo reiniciar `npm run dev` (para que
el servidor cargara el código nuevo). Reiniciar el servidor mata de golpe
cualquier auditoría que estuviera corriendo — y como `iniciarAuditoria()`
nunca llega a su bloque `catch`/`finally` cuando el proceso entero muere
(no es un error normal de JavaScript, es el proceso completo terminando),
`estado.json` se queda congelado para siempre en lo último que decía
(`"crawleando"` o `"auditando"`), sin que exista ninguna auditoría real
detrás. Cada prueba de cancelar, sin saberlo, estaba probando contra un
fantasma — por eso ninguno de los fixes anteriores (que sí eran correctos
para una auditoría REAL) podía funcionar: no había nada vivo con qué
hablar.

**Fix:** nueva función `estadoEfectivo(slug)` en `audit-runner.js` que
envuelve la lectura de `estado.json` con una corrección: si dice
"crawleando"/"auditando" pero este proceso no tiene esa auditoría
realmente corriendo (`enCurso`), lo reescribe a un estado nuevo,
`"interrumpido"`, con un mensaje explicando qué pasó y qué hacer
("dale clic a Auditar ahora de nuevo"). Se usa tanto en `GET /api/estado`
(así la interfaz se autocorrige sola en el siguiente poll, en vez de
quedarse pegada mostrando progreso que ya no existe) como dentro de
`cancelarAuditoria` (si alguien cancela un fantasma, ya no hace nada
silenciosamente raro — la respuesta explica que no había nada corriendo).
Se agregó manejo del nuevo estado `"interrumpido"` en el frontend
(`[slug].astro`), igual que `"error"`/`"cancelado"`.

De rebote, esto probablemente también explica el bug viejo sin resolver
de "Iniciando" repetido para siempre al entrar a un proyecto (ver
"Pendientes activos") — es el mismo patrón: un `estado.json` fantasma que
la interfaz vieja no sabía distinguir de una auditoría real. Falta
confirmar con Camilo.

**Para la próxima prueba es indispensable lanzar una auditoría real**
(clic en "Auditar ahora" y esperar a ver los logs de página en la
terminal) antes de probar cancelar — ver "Pendientes activos" para los
pasos exactos.

### 2026-08-13 (4) — Tercer fix: cancelar ahora aborta Chrome en el acto

Camilo probó el fix de la sesión (3) y compartió los logs reales de la
terminal. Eso permitió ver la causa exacta en vez de seguir adivinando: la
señal SÍ se escribía en disco correctamente (`[cancelar] "grupo-ideas":
señal de cancelación escrita en disco...` aparecía tal cual), pero nunca
se veía el mensaje de "detectada" — porque el chequeo entre páginas
(`verificarCancelacion`) solo corre justo ANTES de arrancar cada página
nueva, nunca DURANTE una que ya está corriendo. Una sola auditoría de
Lighthouse puede tardar fácilmente 30-90 segundos o más (más aún si el
sitio es lento o Lighthouse simula throttling de red/CPU), así que
cancelar "funcionaba" pero solo se notaba hasta que esa página en curso
terminara sola — lo cual, para quien está esperando, se siente exactamente
igual que "no funciona".

**Cambio de fondo:** ahora, mientras se audita cada página, corre un
"vigilante" en segundo plano (`vigilarCancelacionDurante` en
`audit-runner.js`) que revisa la señal de cancelación cada 800ms en
paralelo a la llamada a Lighthouse (`Promise.race` entre el audit real y
el vigilante). En cuanto el vigilante gana la carrera, se llama
`killChrome()` de inmediato — eso corta la conexión que Lighthouse tiene
abierta con el navegador y hace que esa página se aborte ahí mismo, en vez
de esperar a que termine. Como matar Chrome a mitad de una auditoría hace
que la promesa de `auditPage()` también rechace (por la conexión perdida),
se agregó lógica para distinguir ese rechazo de un error real de la
página: si hay una cancelación pedida, se trata como cancelación, no como
"página con error".

También se agregaron logs de página por página
(`[auditoria] "<slug>": página X/Y — empieza Lighthouse en <url>` /
`... terminada en Xs`), así que de ahora en adelante, si algo vuelve a
fallar, los logs solos deberían decir en qué página estaba y cuánto llevaba
corriendo — sin tener que pedir explícitamente esa información cada vez.

**Sigue sin confirmarse en la máquina real** — ver "Pendientes activos".

### 2026-08-13 (3) — Segundo fix: cancelación movida de memoria a disco

Camilo probó otra vez después del fix de la sesión anterior y reportó que
"Cancelar auditoría" seguía sin cortar la auditoría. El código de ese fix
se revisó de nuevo con calma y, en frío, parecía correcto — así que en vez
de seguir ajustando el mismo mecanismo, se identificó una causa raíz
estructural más probable: la señal de cancelación vivía en una variable
dentro del módulo `audit-runner.js` (`cancelaciones`, un `Set` en
memoria). El servidor de desarrollo de Astro (Vite) puede recargar un
módulo del servidor cuando detecta cambios en disco — si eso pasa mientras
hay una auditoría corriendo, la función `iniciarAuditoria` que ya está en
marcha queda "atada" a la versión vieja de ese módulo (con su propio
`Set` vacío), mientras que una petición nueva a `/api/cancelar` carga la
versión nueva del módulo (con OTRO `Set`, también vacío desde su punto de
vista). Cada uno cree que el otro no existe — la cancelación se pierde en
silencio, sin ningún error visible.

**Cambio de fondo:** la señal de cancelación ahora es un archivo en disco,
`proyectos/<slug>/cancelar.flag` (nuevas funciones `pedirCancelacion`,
`hayCancelacionPedida`, `limpiarCancelacion` en `web/src/lib/projects.js`).
Un archivo en disco no tiene el problema de "dos instancias del módulo que
no se ven": cualquiera que lo lea o lo escriba ve siempre el mismo
archivo. `cancelarAuditoria(slug)` ahora también decide si hay algo que
cancelar leyendo `estado.json` de verdad (¿está en `"crawleando"` o
`"auditando"` ahora mismo?) en vez de confiar en un `Set` en memoria que
podía estar desactualizado.

De paso, como el nuevo mecanismo es asíncrono (lee/escribe archivos),
`crawlSite()` en `cli/crawler.js` ahora hace `await onStep?.()` en vez de
llamarlo sin esperar — cambio interno, no afecta a quien no use `onStep`
(como `cli/index.js`, que sigue llamando `crawlSite` sin ese argumento).

También se agregaron líneas de `console.log`/`console.error` en los puntos
clave (`cancelarAuditoria`, `verificarCancelacion`, el `catch` final de
`iniciarAuditoria`) — la próxima vez que algo falle, revisar la terminal
donde corre `npm run dev` debería decir exactamente en qué paso se atascó,
en vez de tener que adivinar a ciegas otra vez.

Se agregó `proyectos/*/cancelar.flag` al `.gitignore` (es estado
transitorio, igual que `estado.json`).

**Sigue sin confirmarse en la máquina real** — ver "Pendientes activos"
para las instrucciones exactas de qué revisar en la próxima prueba (qué
debería aparecer en la terminal, y qué información traer de vuelta si
sigue sin funcionar).

### 2026-08-13 (2) — Fix: "Cancelar auditoría" no cancelaba de verdad

Camilo reportó que el botón de cancelar (agregado en la sesión anterior,
más abajo) no cortaba la auditoría. Revisando el código se encontraron dos
problemas reales, no solo falta de prueba:

1. **El punto de control de cancelación durante el crawl era demasiado
   escaso.** Solo se revisaba dentro de `onProgress`, que el crawler
   (`cli/crawler.js`) únicamente llama cuando encuentra una página HTML
   válida. En un sitio con bastantes links rotos, redirects o URLs ya
   visitadas entre una página válida y la siguiente, ese chequeo podía
   tardar mucho en volver a ejecutarse — o casi no notarse. Se agregó un
   4º parámetro opcional `onStep` a `crawlSite()` (retrocompatible: los
   llamados existentes sin ese argumento, como `cli/index.js`, siguen
   igual) que se llama en **cada vuelta** del loop del crawler, sin
   excepción. Ahí es donde ahora vive el chequeo de cancelación durante el
   crawl.
2. **Caso borde: cancelar durante la ÚLTIMA página de Lighthouse.** El
   chequeo dentro del loop de auditoría solo corre al INICIO de cada
   vuelta; si la cancelación llegaba mientras se auditaba la última página,
   el loop terminaba normal (no hay vuelta siguiente donde revisar) y
   seguía de largo generando el reporte como si nada. Se agregó un chequeo
   extra justo después del loop, antes de generar el reporte.
3. **Bug de interfaz que hacía parecer que no pasaba nada.** El poll de
   `/api/estado` (cada 3 segundos) sobrescribía el botón de vuelta a
   "Cancelar auditoría" habilitado mientras la auditoría seguía en
   `"crawleando"`/`"auditando"` — como la cancelación real puede tardar
   unos segundos en surtir efecto (sobre todo si hay una carga de
   Lighthouse en curso), el botón parecía "resetearse solo" nada más
   hacer clic, dando la impresión de que el clic no hizo nada. Se agregó
   una bandera `cancelando` en el frontend que mantiene el botón en
   "Cancelando…" hasta que el estado real deja de ser
   `"crawleando"`/`"auditando"`, y ahora si el servidor responde que no
   había nada que cancelar, ese mensaje se muestra de verdad en vez de
   perderse en el siguiente poll.

**Importante para la próxima prueba: hay que reiniciar `npm run dev`**
para que el servidor cargue este código — ver "Pendientes activos".

### 2026-08-13 — Botones de "Cancelar auditoría" y "Borrar proyecto"

Se agregaron las dos funciones que pidió Camilo para la página de detalle
de un proyecto (`/proyectos/<slug>`):

1. **Cancelar auditoría en curso.** Botón "Cancelar auditoría" dentro de la
   caja de estado, visible solo mientras se está crawleando o auditando.
   Internamente (`web/src/lib/audit-runner.js`) se agregó un `Set` de
   slugs cancelados y una función `verificarCancelacion(slug)` que se
   llama en dos puntos de control: en el callback de progreso del crawl, y
   al inicio de cada iteración del loop de Lighthouse. A propósito NO corta
   a mitad de una carga de Lighthouse — solo entre páginas — para no dejar
   Chrome en un estado raro ni corromper el reporte parcial. Al cancelar,
   `estado.json` queda en un estado nuevo `"cancelado"` (no `"error"`), que
   el frontend maneja por separado. Nuevo endpoint `POST /api/cancelar`
   (`{ slug }`).
2. **Borrar proyecto por completo.** Botón "Borrar proyecto" en el header,
   con confirmación (`confirm()`) antes de ejecutar. Borra la carpeta
   `proyectos/<slug>/` (meta, historial, estado) y también
   `reports/<slug>/` (los reportes HTML completos, que nunca se versionan).
   Bloqueado con un 409 si hay una auditoría en curso para ese proyecto —
   hay que cancelarla primero. Nueva función `borrarProyecto(slug)` en
   `web/src/lib/projects.js` (valida que el slug sea un nombre de carpeta
   simple antes de tocar el disco, para no poder borrar nada fuera de
   `proyectos/`/`reports/` por accidente). Nuevo endpoint `POST /api/borrar`
   (`{ slug }`). Al borrar con éxito, el navegador redirige a `/`.

No se tocó nada del bloqueo de Analytics/GTM/Meta Pixel ni de la lógica de
auditoría en sí — solo se agregaron los dos puntos de control de
cancelación y las funciones nuevas de borrado.

**Importante — ver "Pendientes activos":** al intentar validar el cambio
corriendo `npm run build`/`npm run dev` desde el entorno de Claude, un
`git stash` de prueba dejó dos archivos de lock sueltos que hay que borrar
a mano, y el build tampoco pudo confirmarse ahí por un `node_modules` roto
específico de ese entorno (no de la máquina de Camilo). El cambio se
validó con `node --check` en los archivos `.js` y revisión manual del
`.astro`, pero **falta la prueba real en `npm run dev`**.

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
