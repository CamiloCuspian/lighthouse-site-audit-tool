# 🔦 Lighthouse Reporter

Audita **todas las páginas** de tu sitio web con Google Lighthouse y genera un **reporte HTML estático completo** — sin pantallas en blanco, sin servidor, sin configuración compleja.

![Version](https://img.shields.io/badge/version-0.3.0-blue)
![Node](https://img.shields.io/badge/node-%3E%3D18-green)
![License](https://img.shields.io/badge/license-MIT-orange)

---

## ✨ ¿Qué hace?

- 🔍 **Crawlea** todas las páginas del sitio automáticamente
- 🔦 **Audita** con Lighthouse: Performance, Accesibilidad, Best Practices y SEO
- 🔄 **Comparación histórica**: botón para comparar con auditorías anteriores almacenadas automáticamente
- 🏷️ **Extrae Meta Tags SEO** por página: title, description, H1, canonical, robots, conteo de palabras — con alertas automáticas
- 💀 **Detecta Links Rotos** (404, 500, timeouts) y en qué página estaban enlazados
- 📊 **Genera un reporte HTML** estático con detalles expandibles y promedios del sitio
- ⬇️ **Exporta a CSV** con un clic para compartir con clientes
- 🗺️ **Genera sitemap.xml** listo para subir a Google Search Console

Todo en un solo comando. Sin pantalla en blanco. Sin servidor.

---

## ⚙️ Requisitos

- **Node.js 18+** — [descargar aquí](https://nodejs.org)
- **Google Chrome** instalado en tu computador

---

## 🚀 Instalación

```bash
# Clona el repositorio
git clone https://github.com/CamiloCuspian/lighthouse-site-audit-tool.git
cd lighthouse-site-audit-tool

# Instala las dependencias (solo la primera vez)
npm install
```

---

## 📋 Uso

```bash
# Auditar un sitio (30 páginas máximo por defecto)
node cli/index.js --site https://tusitio.com

# Limitar a 10 páginas
node cli/index.js --site https://tusitio.com --max 10

# Guardar el reporte en carpeta personalizada
node cli/index.js --site https://tusitio.com --out ./mi-reporte

# Auditar sitio con autenticación
node cli/index.js --site https://tusitio.com --cookie "session=abc123" --header "Authorization=Bearer token"

# Comparar con reporte anterior
node cli/index.js --site https://tusitio.com --compare ./reports/results.json
```

Cuando termine abre `reports/index.html` en tu navegador.
También encontrarás `reports/sitemap.xml` listo para Google Search Console.

---

## 📦 Publicar en npm

```bash
npm login
npm publish
```

Luego puedes instalar globalmente: `npm install -g lighthouse-reporter`

---

## 🛠️ Opciones del CLI

| Opción | Descripción | Default |
|--------|-------------|---------|
| `--site` / `-s` | URL del sitio a auditar | *requerido* |
| `--max` / `-m` | Máximo de páginas a auditar | `30` |
| `--out` / `-o` | Carpeta de salida del reporte | `./reports` |
| `--cookie` / `-c` | Cookie para autenticación | |
| `--header` / `-H` | Header adicional (puede repetirse) | |
| `--compare` | Ruta a reporte JSON anterior para comparar | |

---

## 📊 ¿Qué incluye el reporte?

### Resumen general
Promedios de Performance, Accesibilidad, Best Practices y SEO para todo el sitio.

### 🏷️ Tabla de Meta Tags SEO
| Campo | Qué revisa |
|-------|-----------|
| Title | Longitud (30–60 chars), ausencia |
| Meta Description | Longitud (70–160 chars), ausencia |
| H1 | Presencia |
| Canonical | Si apunta a URL diferente |
| Robots | noindex / nofollow |
| Palabras | Contenido mínimo recomendado (300+) |

### 💀 Links Rotos
Lista de todos los enlaces internos que devuelven 404, 500 o no responden, con la página donde fueron encontrados.

### 🔦 Audits por página
Scores con gráfico circular, Core Web Vitals (FCP, LCP, TBT, CLS, Speed Index, TTI) y oportunidades de mejora expandibles con tablas de recursos detalladas — igual al Lighthouse nativo.

### ⬇️ Exportar CSV
Botón en el header para descargar todos los datos en Excel.

---

## 📁 Estructura del proyecto

```
lighthouse-reporter/
├── cli/
│   ├── index.js      ← Punto de entrada del CLI
│   ├── crawler.js    ← Crawlea páginas + extrae meta tags + detecta links rotos
│   ├── auditor.js    ← Corre Lighthouse en cada página
│   ├── reporter.js   ← Genera el reporte HTML completo
│   └── sitemap.js    ← Genera el sitemap.xml
├── reports/          ← Reportes generados (se crea automático, en .gitignore)
├── .gitignore
├── package.json
└── README.md
```

---

## 💡 Consejos

- Empieza con `--max 5` para verificar que todo funciona antes de auditar el sitio completo
- Puedes auditar sitios locales: `node cli/index.js --site http://localhost:4321`
- El reporte se guarda también como `reports/results.json` para procesarlo con scripts
- Revisa el `sitemap.xml` generado antes de subirlo a Google

---

## 🗺️ Roadmap

- [x] Comparar reportes entre auditorías (histórico)
- [x] Soporte para sitios con autenticación
- [x] Publicar como paquete npm (`npm install -g lighthouse-reporter`)
- [ ] Modo watch: re-auditar cuando detecta cambios

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Abre un issue o pull request.

---

## 📄 Licencia

MIT — úsalo libremente, incluso en proyectos comerciales.

---

Hecho con ❤️ usando [Lighthouse](https://github.com/GoogleChrome/lighthouse) de Google.
