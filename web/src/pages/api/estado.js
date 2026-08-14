import { estadoEfectivo } from '../../lib/audit-runner.js';

export async function GET({ url }) {
  const slug = url.searchParams.get('slug');
  if (!slug) {
    return new Response(JSON.stringify({ error: 'Falta el slug del proyecto.' }), { status: 400 });
  }

  // estadoEfectivo (en vez de leerEstado directo) también corrige solo un
  // estado.json que quedó fantasma en "crawleando"/"auditando" por un
  // servidor reiniciado a mitad de la auditoría — así la interfaz se
  // autocorrige en el siguiente poll en vez de quedarse pegada para
  // siempre mostrando un progreso que ya no existe.
  const estado = await estadoEfectivo(slug);
  return new Response(JSON.stringify(estado), {
    headers: { 'Content-Type': 'application/json' },
  });
}
