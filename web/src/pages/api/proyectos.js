import { crearProyecto } from '../../lib/projects.js';

// Devuelve JSON en vez de redirigir en el propio servidor — la navegación
// a la página del proyecto la hace el navegador por JavaScript (ver
// proyectos/nuevo.astro), así el formulario puede mostrar un error real en
// vez de quedarse "cargando" si algo falla.
export async function POST({ request }) {
  const form = await request.formData();
  const nombre = form.get('nombre')?.toString().trim();
  const dominio = form.get('dominio')?.toString().trim();

  if (!nombre || !dominio) {
    return new Response(
      JSON.stringify({ ok: false, error: 'Faltan datos: nombre y dominio son obligatorios.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const slug = await crearProyecto({ nombre, dominio });
    return new Response(JSON.stringify({ ok: true, slug }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
