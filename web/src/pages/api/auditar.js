import { slugValido } from '../../lib/projects.js';
import { iniciarAuditoria, auditoriaEnCurso } from '../../lib/audit-runner.js';

export async function POST({ request }) {
  const { slug, maxPaginas = 500, sinLimite = false } = await request.json();
  if (!slugValido(slug)) {
    return new Response(JSON.stringify({ error: 'Falta el slug del proyecto.' }), { status: 400 });
  }

  if (typeof sinLimite !== 'boolean' || (!sinLimite && (!Number.isSafeInteger(maxPaginas) || maxPaginas < 1))) {
    return new Response(JSON.stringify({ error: 'El límite debe ser un entero positivo.' }), { status: 400 });
  }
  if (auditoriaEnCurso(slug)) {
    return new Response(JSON.stringify({ ok: true, mensaje: 'Ya hay una auditoría en curso para este proyecto.' }));
  }

  // A propósito no se espera (await) esta llamada: la auditoría puede tardar
  // minutos u horas en sitios grandes, y correrla en segundo plano permite
  // que el navegador consulte el progreso via /api/estado sin quedar colgado
  // esperando la respuesta de este POST.
  iniciarAuditoria(slug, { maxPaginas: sinLimite ? Infinity : maxPaginas }).catch((err) => {
    console.error(`Error en auditoría de "${slug}":`, err);
  });

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
