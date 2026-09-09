import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

// Funciona desde la raíz, web/ y el servidor compilado: import.meta.url
// cambia cuando Astro empaqueta los módulos en dist/server/chunks/.
export function findProjectRoot(start = process.cwd()) {
  let directory = start;
  while (true) {
    const manifest = join(directory, 'package.json');
    if (existsSync(manifest) && JSON.parse(readFileSync(manifest, 'utf8')).name === 'lighthouse-reporter') return directory;
    const parent = dirname(directory);
    if (parent === directory) throw new Error('Inicia la herramienta desde su carpeta o desde web/.');
    directory = parent;
  }
}

export const PROJECT_ROOT = findProjectRoot();
