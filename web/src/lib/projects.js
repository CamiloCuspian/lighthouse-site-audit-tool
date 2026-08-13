/**
 * projects.js
 * Capa de datos de la interfaz: cada proyecto (cliente) vive en
 * proyectos/<slug>/ en la raíz del repo, con tres archivos livianos:
 *   - meta.json       → nombre, dominio, fecha de creación
 *   - historial.json  → arreglo de resúmenes compactos, uno por auditoría
 *   - estado.json     → estado transitorio de la auditoría en curso (no se versiona)
 *
 * Nada de esto guarda el HTML completo ni los detalles de cada error:
 * solo los promedios y conteos, para poder ver la tendencia de salud
 * del sitio a lo largo del tiempo con un historial que pesa casi nada.
 */

import { readFile, writeFile, mkdir, readdir, access } from 'node:fs/promises';
import { join } from 'node:path';

// web/src/lib -> raíz del repo (donde vive cli/, proyectos/, reports/)
const ROOT = join(process.cwd(), '..');
const PROYECTOS_DIR = join(ROOT, 'proyectos');

export function slugify(nombre) {
  return nombre
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function existe(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

/** Lista todos los proyectos con su última auditoría (para el dashboard). */
export async function listarProyectos() {
  if (!(await existe(PROYECTOS_DIR))) return [];
  const entradas = await readdir(PROYECTOS_DIR, { withFileTypes: true });
  const proyectos = [];

  for (const entrada of entradas) {
    if (!entrada.isDirectory()) continue;
    const meta = await leerMeta(entrada.name).catch(() => null);
    if (!meta) continue;
    const historial = await leerHistorial(entrada.name);
    const estado = await leerEstado(entrada.name);
    proyectos.push({
      slug: entrada.name,
      ...meta,
      ultima: historial.at(-1) ?? null,
      estado: estado.estado,
    });
  }

  return proyectos.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
}

export async function leerMeta(slug) {
  const raw = await readFile(join(PROYECTOS_DIR, slug, 'meta.json'), 'utf-8');
  return JSON.parse(raw);
}

export async function crearProyecto({ nombre, dominio }) {
  const slug = slugify(nombre);
  if (!slug) throw new Error('El nombre del cliente no es válido.');

  const dir = join(PROYECTOS_DIR, slug);
  if (await existe(dir)) throw new Error('Ya existe un proyecto con ese nombre.');

  await mkdir(dir, { recursive: true });
  await writeFile(
    join(dir, 'meta.json'),
    JSON.stringify({ nombre, dominio, creado: new Date().toISOString() }, null, 2)
  );
  await writeFile(join(dir, 'historial.json'), '[]\n');

  return slug;
}

/** Historial compacto: solo promedios y conteos, nunca el detalle completo. */
export async function leerHistorial(slug) {
  const path = join(PROYECTOS_DIR, slug, 'historial.json');
  if (!(await existe(path))) return [];
  const raw = await readFile(path, 'utf-8');
  return JSON.parse(raw);
}

export async function appendHistorial(slug, registro) {
  const historial = await leerHistorial(slug);
  historial.push(registro);
  const dir = join(PROYECTOS_DIR, slug);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'historial.json'), JSON.stringify(historial, null, 2) + '\n');
}

export async function leerEstado(slug) {
  const path = join(PROYECTOS_DIR, slug, 'estado.json');
  if (!(await existe(path))) return { estado: 'inactivo' };
  const raw = await readFile(path, 'utf-8');
  return JSON.parse(raw);
}

export async function writeEstado(slug, estado) {
  const dir = join(PROYECTOS_DIR, slug);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'estado.json'), JSON.stringify(estado, null, 2));
}
