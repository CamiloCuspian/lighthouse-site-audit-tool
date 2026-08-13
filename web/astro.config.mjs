import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// Interfaz local para lighthouse-site-audit-tool.
// Corre en modo servidor (SSR) porque necesita disparar auditorías reales
// (Chrome + Lighthouse) desde el navegador, no solo servir páginas estáticas.
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  server: { port: 4321 },
  vite: {
    build: {
      // cli/ ya trae estas dependencias instaladas en la raíz del repo
      // (package.json de la raíz). No hace falta que el bundler de Astro
      // las empaquete: Node las resuelve solo al arrancar, subiendo por
      // los node_modules de las carpetas padre.
      rollupOptions: {
        external: ['lighthouse', 'chrome-launcher', 'chalk', 'node-fetch', 'ora', 'commander'],
      },
    },
  },
});

