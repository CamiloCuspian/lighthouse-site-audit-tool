import { cancelarAuditoria } from '../../lib/audit-runner.js';

export async function POST({ request }) {
  const { slug } = await request.json();
  if (!slug) {
    return new Response(JSON.stringify({ error: 'Falta el slug del proyecto.' }), { status: 400 });
  }

  const ok = await cancelarAuditoria(slug);

  return new Response(
    JSON.stringify(
      ok
        ? { ok: true, mensaje: 'Cancelando… la auditoría se detendrá en el próximo punto de control.' }
        : { ok: false, mensaje: 'No hay ninguna auditoría en curso para este proyecto.' }
    ),
    { headers: { 'Content-Type': 'application/json' } }
  );
}
