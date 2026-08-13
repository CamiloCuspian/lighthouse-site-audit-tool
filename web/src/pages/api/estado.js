import { leerEstado } from '../../lib/projects.js';

export async function GET({ url }) {
  const slug = url.searchParams.get('slug');
  if (!slug) {
    return new Response(JSON.stringify({ error: 'Falta el slug del proyecto.' }), { status: 400 });
  }

  const estado = await leerEstado(slug);
  return new Response(JSON.stringify(estado), {
    headers: { 'Content-Type': 'application/json' },
  });
}
