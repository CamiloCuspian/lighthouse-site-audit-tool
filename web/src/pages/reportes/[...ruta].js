/**
 * Sirve los reportes completos (HTML, JSON, Markdown) que se generan en
 * reports/<proyecto>/<fecha>/ en la raíz del repo. Esa carpeta está en
 * .gitignore a propósito — el reporte completo es desechable, se regenera
 * en cada auditoría; lo único que queda versionado en git es el resumen
 * compacto de proyectos/<slug>/historial.json.
 */

import { readFile } from 'node:fs/promises';
import { join, extname, resolve, relative, isAbsolute } from 'node:path';
import { PROJECT_ROOT } from '../../../../cli/paths.js';

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.csv': 'text/csv; charset=utf-8',
};

export async function GET({ params }) {
  const ruta = params.ruta;
  if (!ruta) return new Response('No encontrado', { status: 404 });

  // Evita salir de la carpeta reports/ con ../
  const root = join(PROJECT_ROOT, 'reports');
  const rutaArchivo = resolve(root, ruta);
  const rel = relative(root, rutaArchivo);
  if (rel.startsWith('..') || isAbsolute(rel)) return new Response('Ruta inválida', { status: 400 });

  try {
    const contenido = await readFile(rutaArchivo);
    const tipo = TIPOS[extname(rutaArchivo)] ?? 'application/octet-stream';
    return new Response(contenido, { headers: { 'Content-Type': tipo } });
  } catch {
    return new Response('Reporte no encontrado.', { status: 404 });
  }
}
