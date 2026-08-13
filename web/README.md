# Interfaz web (Astro) — Lighthouse Reporter

Interfaz local para no tener que correr todo desde la CMD. Vive junto a `cli/`
en la raíz del repo y reutiliza esos mismos módulos (crawler, auditor,
reporter, sitemap) tal cual — no se reescribió la lógica de auditoría,
solo se le puso una cara encima.

## Cómo correrla (cada quien la primera vez, en su propia máquina)

```bash
cd web
npm install
npm run dev
```

Abre `http://localhost:4321` en el navegador. Requiere que **Google Chrome**
esté instalado (lo usa Lighthouse, igual que la versión de CMD).

## Qué guarda y qué no

Cada proyecto (cliente) vive en `proyectos/<slug>/` en la raíz del repo:

- `meta.json` — nombre y dominio del cliente. **Se versiona en git.**
- `historial.json` — un resumen compacto por cada auditoría (promedios de
  Performance/SEO/Accesibilidad/Best Practices, páginas auditadas, links
  rotos, problemas SEO). Pesa unos pocos KB así pasen años de historial.
  **Se versiona en git** — es lo que se comparte entre el equipo al hacer
  `git push` / `git pull`.
- `estado.json` — progreso de la auditoría en curso (transitorio). **No se
  versiona.**

El reporte completo (HTML con todos los detalles, errores, soluciones,
links rotos) se genera en `reports/<slug>/<fecha>/` en la raíz del repo,
igual que en la versión de CMD — y sigue en `.gitignore`, así que no infla
el repositorio. Es desechable: se regenera en cada auditoría y se puede ver
desde la propia interfaz (botones "Ver reporte completo" / "Reporte para
el cliente" / "Reporte para IA" en la página de cada proyecto).

## Flujo de equipo (3 personas, sin pagar nada)

1. `git pull` antes de auditar, para tener el historial más reciente de todos.
2. Crear el proyecto (si es la primera vez) o entrar a uno existente.
3. Clic en "Auditar ahora" — corre el crawler + Lighthouse igual que la CMD,
   con el mismo bloqueo de Analytics/GTM/Meta Pixel/etc. para no inflar las
   visitas del cliente.
4. Al terminar, el resumen queda en `historial.json`.
5. `git add proyectos/ && git commit -m "audit: <cliente> <fecha>" && git push`
   para que los otros dos vean la nueva auditoría y la tendencia actualizada.

## Auditorías grandes (más de 100 páginas)

Chrome se reinicia automáticamente cada 50 páginas durante la auditoría
(en vez de una sola instancia para todo el sitio) — esto es solo por
fiabilidad de las métricas en sitios grandes, no cambia nada de lo que se
mide por URL: cada página sigue recibiendo su propia corrida completa de
Lighthouse con su propio Core Web Vitals real. Si el proceso se interrumpe
a mitad de camino, el estado de la última auditoría queda en
`proyectos/<slug>/estado.json`; volver a auditar simplemente empieza una
corrida nueva.
