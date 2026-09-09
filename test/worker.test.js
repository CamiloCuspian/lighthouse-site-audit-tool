import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { ejecutarLoteEnWorker } from '../web/src/lib/audit-runner.js';
import { PROJECT_ROOT } from '../cli/paths.js';
import { pedirCancelacion } from '../web/src/lib/projects.js';

test('un worker que muere conserva resultados recibidos y marca solo los faltantes', async t => {
  const dir = await mkdtemp(join(tmpdir(), 'lh-worker-test-'));
  const slug = 'test-worker-' + Date.now();
  t.after(async () => {
    await rm(dir, { recursive: true, force: true });
    await rm(join(PROJECT_ROOT, 'proyectos', slug), { recursive: true, force: true });
  });
  const worker = join(dir, 'worker.cjs');
  await writeFile(worker, `process.on('message', () => {
    process.send({ tipo: 'progreso', indice: 0, resultado: { url: 'https://example.com/ok', scores: { performance: 88 } } }, () => process.exit(1));
  });`);
  const result = await ejecutarLoteEnWorker(slug, [{ url: 'https://example.com/ok' }, { url: 'https://example.com/missing' }], 0, 2, worker);
  assert.equal(result.resultados[0].scores.performance, 88);
  assert.equal(result.resultados[0].error, undefined);
  assert.match(result.resultados[1].error, /interrumpió/);
  assert.equal(result.cancelado, false);
});

test('la señal de cancelación llega al worker y confirma el cierre', async t => {
  const dir = await mkdtemp(join(tmpdir(), 'lh-cancel-test-'));
  const slug = 'test-cancel-' + Date.now();
  t.after(async () => {
    await rm(dir, { recursive: true, force: true });
    await rm(join(PROJECT_ROOT, 'proyectos', slug), { recursive: true, force: true });
  });
  const worker = join(dir, 'worker.cjs');
  await writeFile(worker, `process.on('message', msg => {
    if (msg.tipo === 'cancelar') process.send({ tipo: 'fin', resultados: [], cancelado: true }, () => process.exit(0));
  });`);
  const running = ejecutarLoteEnWorker(slug, [{ url: 'https://example.com/' }], 0, 1, worker);
  await pedirCancelacion(slug);
  const result = await running;
  assert.equal(result.cancelado, true);
});
