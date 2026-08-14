import { auditoriaEnCurso } from '../../lib/audit-runner.js';
import { borrarProyecto } from '../../lib/projects.js';

// No se puede borrar un proyecto mientras tiene una auditoría corriendo:
// primero hay que cancelarla (ver /api/cancelar) para no dejar el crawl o
// Lighthouse escribiendo en una carpeta que ya no existe.
export async function POST({ request }) {
  const { slug } = await request.json();
  if (!slug) {
    return new Response(JSON.stringify({ error: 'Falta el slug del proyecto.' }), { status: 400 });
  }

  if (auditoriaEnCurso(slug)) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: 'Hay una auditoría en curso para este proyecto. Cancélala antes de borrarlo.',
      }),
      { status: 409, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    await borrarProyecto(slug);
    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
