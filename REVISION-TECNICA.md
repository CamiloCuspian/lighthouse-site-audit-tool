# Revisión de fiabilidad — 8 de septiembre de 2026

La herramienta tiene una base aprovechable, pero sus informes anteriores no son una garantía de cobertura completa. Esta revisión corrige fallos reproducibles del rastreo y la presentación de resultados; no certifica ausencia de otros fallos ni reemplaza una prueba prolongada sobre los sitios reales.

## Evidencia encontrada en los reportes

Se inspeccionaron los 15 archivos `results.json` principales guardados, sin contar las copias de `history/`. El detalle de cada URL con un error guardado está en [revision-datos.json](./revision-datos.json). Son observaciones históricas; no implican que esas URLs sigan fallando hoy.

| Proyecto y fecha | Entradas del reporte | Hallazgo |
|---|---:|---|
| Acctua, 04-sep | 128 | 175 respuestas 429 y 2 respuestas 404 |
| Acctua, 08-sep | 94 | 184 respuestas 429 y 1 respuesta 404 |
| Shopify Globaltools, 28-ago | 89 | 160 respuestas 429 y 2 respuestas 406 |
| Shopify Globaltools, 02-sep | 74 | 188 respuestas 429 y 5 respuestas 404 |
| Shopify Globaltools, 03-sep | 74 | 127 respuestas 429 |
| Almo, 26-ago | 356 | 69 entradas con error de Lighthouse incluidas como ceros |
| Tatiana Leal, 26-ago | 308 | 60 entradas con error de Lighthouse incluidas como ceros |

**Causa principal de las URLs faltantes en Acctua:** el crawler sí descubrió muchas URLs, pero las descartó al recibir 429. No tenía pausas ni reintentos. Un 429 comunica exceso de solicitudes y puede incluir `Retry-After`; no demuestra que la página esté rota. Véase [HTTP 429 en MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429).

Los errores internos de Almo y Tatiana incluyen marcas de rendimiento de Lighthouse ausentes, conexiones CDP cerradas, timeouts y fallos al conectar con Chrome. Son fallos de ejecución; una puntuación cero no describe correctamente ese resultado. No se puede atribuir cada desconexión histórica a una causa única sin los logs de proceso de aquella ejecución.

## Correcciones aplicadas

| Problema verificado | Cambio |
|---|---|
| 429 se descartaba sin reintentos | Pausa de 500 ms entre solicitudes; hasta 3 reintentos con espera progresiva para errores transitorios. Se tiene en cuenta Retry-After; si excede 60 s, la URL queda sin verificar. |
| Bloqueos y timeouts se llamaban enlaces rotos | 404/410 quedan en `brokenLinks`; el resto de fallos HTTP/red queda en `crawlErrors`, con estado e intentos. |
| Se borraban todos los parámetros | Se conservan parámetros funcionales; solo se eliminan fragmentos y parámetros de seguimiento conocidos. |
| Se borraban barras finales y se resolvían mal enlaces relativos | Se conserva la ruta y se usa la URL final de la respuesta, con soporte de `<base href>`. |
| Redirección inicial www/HTTPS podía vaciar el alcance | El origen final de la página de entrada determina el alcance. |
| Solo se consultaba `/sitemap.xml` | Se consultan también declaraciones Sitemap de robots.txt; índices, ciclos, entidades XML y gzip tienen soporte. |
| No se esperaba el callback de progreso | El crawler espera sus callbacks; las escrituras de progreso del worker se ordenan antes de resolver el lote. |
| Límite de 500 oculto en la interfaz | Se añadió máximo editable y opción sin límite; el CLI valida enteros positivos. |
| Errores Lighthouse convertidos en resultados aparentemente válidos | Se rechazan runtimeError y categorías sin medición; los reportes e históricos nuevos calculan promedios solo sobre resultados válidos. |
| Fallos invisibles en los entregables | HTML técnico, HTML de cliente y Markdown muestran cobertura parcial y lista de URLs pendientes/errores. JSON conserva las listas separadas. |
| Un crash del worker descartaba todo el lote | El worker envía cada resultado terminado por IPC; el padre conserva los recibidos y marca solo los faltantes. |
| Un navegador roto contaminaba páginas siguientes | El worker intenta abrir otra instancia tras un error de página. No se promete recuperar el resultado fallido. |
| Worker sin respuesta podía quedar indefinidamente | Vigilancia de cuatro minutos sin mensajes y manejo explícito del evento de error del proceso hijo. |
| Recarga de módulos podía perder la identidad del trabajo | Registro de trabajos y actividad compartido en globalThis durante la vida del servidor. |
| Limpieza global de Chrome podía cerrar auditorías ajenas | Se retiraron esas llamadas del orquestador. Sigue pendiente una limpieza robusta por propietario/PID. |
| Excepciones globales se ignoraban y el servidor seguía en estado incierto | Se retiraron los handlers que suprimían uncaughtException y unhandledRejection del servidor. |
| Rutas del worker dependían de import.meta.url antes de empaquetar | La raíz se resuelve desde el proyecto, también en el servidor compilado. |
| Lecturas/escrituras admitían slugs no válidos; ruta de reportes insuficiente en Windows | Validación de slugs y comprobación de que las rutas resueltas permanezcan dentro de reports/. |
| Estado JSON podía leerse durante una escritura incompleta | Archivos temporales y renombrado, con serialización de escrituras por archivo en el proceso. |
| Autenticación CLI no llegaba al crawler; headers con `=` se truncaban | Se pasan cabeceras al rastreo y se separa por el primer `=`. No se guardan extraHeaders en los metadatos del reporte. |
| Sitemap generado inventaba fecha de actualización | Se retiró lastmod calculado con la fecha de auditoría y se excluyen noindex/canonical distinto. |
| Lint fallaba antes de empezar | Se eliminó una variable sin uso; se añadió `npm test`. |

`discovery.json` conserva el descubrimiento aunque no haya páginas auditables. La interfaz guarda `audit-progress.json` tras cada lote. Si todas las mediciones fallan se informa un error; no se fabrica un promedio global.

Los reportes históricos y los archivos de Acctua que ya estaban modificados no se reescribieron. Sus promedios antiguos siguen necesitando revisión. Los consumidores de JSON deben usar `results` para mediciones válidas y `auditErrors` para errores nuevos.

## Validación realizada

- Nueve pruebas automatizadas: URLs, 429 recuperable/persistente, robots/sitemaps con ciclos, redirecciones y autenticación, límite/cancelación de crawl, reportes parciales, rutas y traversal en Windows, crash con resultados parciales y cancelación por IPC.
- `npm run lint`: correcto.
- `npm --prefix web run build`: correcto.
- `git diff --check`: correcto.
- Lighthouse real 12.8.2 sobre una página HTTP local: Performance 100, Accesibilidad 100, Best Practices 96, SEO 91, sin runWarnings. Esta prueba confirma que Chrome y Lighthouse producen mediciones en esta máquina.
- La limpieza posterior de Chrome produjo EPERM en una carpeta temporal de Windows; el proceso de prueba no terminó por sí solo y se interrumpió. Esto sigue pendiente de endurecer.
- Las consultas de red a robots.txt y sitemap.xml de Acctua no pudieron completarse desde este entorno. No se ejecutó una nueva auditoría completa de Acctua ni se verificó de nuevo cada URL remota.
- No se probaron visualmente todos los controles del navegador ni una ejecución simultánea de varias auditorías largas. La prueba de cancelación usa un worker controlado; no certifica todos los casos de cierre de Chrome real.

## Qué falta para un uso profesional sostenido

1. **Validación prolongada antes de entregar a clientes.** Ejecutar Acctua completo y comparar el inventario descubierto con sitemaps/exportación del CMS. Criterio de aceptación: cada URL esperada debe quedar medida, excluida con motivo, o pendiente con error; ninguna desaparición silenciosa. Una cobertura parcial debe comunicarse al cliente.
2. **Cola persistente y reanudación.** Persistir cada resultado y su estado antes de confirmar progreso, reanudar únicamente pendientes tras reiniciar, reintentar páginas fallidas y limitar concurrencia global. Los checkpoints actuales son por lote y no constituyen reanudación automática.
3. **Cierre de procesos en Windows.** Guardar propietario, PID y perfil de cada Chrome; probar desconexión del padre, crash, cancelación forzada y limpieza EPERM. No volver a matar globalmente todos los Chrome que compartan user-agent.
4. **Descubrimiento ampliado.** Parser real de HTML/XML, modo de renderizado JavaScript, lista explícita de URLs/importación CMS, políticas para parámetros/filtros y reglas de exclusión. El modo sin límite puede recorrer muchas combinaciones. Actualmente hay tope de 200 sitemaps y 20 MB por respuesta, con avisos ante fallos; no se admiten sitemaps de otros orígenes.
5. **Política de rastreo.** Leer Sitemap de robots.txt no equivale a aplicar sus reglas Allow/Disallow. Añadir interpretación de robots, control por host, pausas configurables en interfaz y tratamiento explícito de bloqueos prolongados.
6. **Medición comparable.** Guardar perfil y versiones, separar móvil/escritorio, repetir varias corridas y usar una estadística robusta. El bloqueo actual de Analytics/GTM modifica la carga medida; debe ser una opción visible y quedar documentado. El user-agent y el bloqueo no garantizan que ninguna analítica registre visitas. [Google explica la variabilidad de las puntuaciones](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring).
7. **Alcance del diagnóstico.** Lighthouse es una medición de laboratorio. No sustituye métricas reales de usuarios, revisión manual de accesibilidad, auditoría de seguridad ni auditoría SEO integral. Umbrales de caracteres o palabras son heurísticas; faltan duplicados, múltiples H1, hreflang y validación más completa de canonical/noindex. El extractor actual limita diagnósticos y recursos mostrados y puede omitir comprobaciones de Lighthouse sin tabla.
8. **Uso por equipo.** Probar instalación reproducible y versiones de Node en las tres máquinas, añadir CI y controlar almacenamiento de reportes. Antes de exponer el servidor fuera del entorno local, hacen falta autenticación, autorización y revisión de las solicitudes salientes. El modelo de archivos/globalThis supone un solo proceso de servidor.

La prioridad es estabilizar cobertura, persistencia y mediciones antes de añadir más puntuaciones o rediseñar el panel.
