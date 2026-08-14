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

import { readFile, writeFile, mkdir, readdir, access, rm } from 'node:fs/promises';
import { join } from 'node:path';

// web/src/lib -> raíz del repo (donde vive cli/, proyectos/, reports/)
const ROOT = join(process.cwd(), '..');
const PROYECTOS_DIR = join(ROOT, 'proyectos');
const REPORTS_DIR = join(ROOT, 'reports');

/**
 * Valida que un slug sea un simple nombre de carpeta (sin "..", "/" ni "\"),
 * para no poder borrar nada fuera de proyectos/ o reports/ por accidente.
 */
function slugValido(slug) {
  return typeof slug === 'string' && slug.length > 0 && /^[a-z0-9-]+$/.test(slug);
}

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

/**
 * Señal de "cancelar auditoría" como un archivo en disco
 * (proyectos/<slug>/cancelar.flag) en vez de una variable en memoria.
 *
 * A propósito: el servidor de desarrollo de Astro (Vite) puede recargar un
 * módulo del servidor cuando detecta un cambio en algún archivo. Si la
 * señal de cancelación viviera solo en una variable dentro de
 * audit-runner.js, una auditoría que ya estaba corriendo (con una versión
 * vieja de ese módulo en su clausura) y una petición nueva a
 * /api/cancelar (que puede terminar cargando una versión más nueva del
 * mismo módulo) podrían terminar hablando con dos instancias distintas de
 * esa variable y nunca enterarse la una de la otra — la cancelación se
 * "pierde" en silencio. Un archivo en disco no tiene ese problema:
 * cualquiera que lo lea o lo escriba ve siempre el mismo archivo, sin
 * importar qué instancia del módulo lo pidió.
 */
export async function pedirCancelacion(slug) {
  const dir = join(PROYECTOS_DIR, slug);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'cancelar.flag'), new Date().toISOString());
}

export async function hayCancelacionPedida(slug) {
  return existe(join(PROYECTOS_DIR, slug, 'cancelar.flag'));
}

export async function limpiarCancelacion(slug) {
  await rm(join(PROYECTOS_DIR, slug, 'cancelar.flag'), { force: true });
}

/**
 * Borra un proyecto por completo: su carpeta en proyectos/ (meta,
 * historial y estado — lo que se versiona en git) y, por defecto, también
 * sus reportes HTML completos en reports/<slug>/ (nunca se versionan, así
 * que si el usuario los quiere conservar debe copiarlos antes de borrar).
 * No borra nada si el slug no es un nombre de carpeta simple, ni si el
 * proyecto no existe.
 */
export async function borrarProyecto(slug, { borrarReportes = true } = {}) {
  if (!slugValido(slug)) throw new Error('Slug de proyecto inválido.');

  const dir = join(PROYECTOS_DIR, slug);
  if (!(await existe(dir))) throw new Error('Ese proyecto no existe.');

  await rm(dir, { recursive: true, force: true });

  if (borrarReportes) {
    const reportesDir = join(REPORTS_DIR, slug);
    await rm(reportesDir, { recursive: true, force: true }).catch(() => {
      /* si no hay reportes para este proyecto, no hay nada que borrar */
    });
  }
}
