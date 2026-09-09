import { test } from 'node:test';
import assert from 'node:assert/strict';
import { join } from 'node:path';
import { findProjectRoot, PROJECT_ROOT } from '../cli/paths.js';
import { leerMeta, writeEstado } from '../web/src/lib/projects.js';
import { GET } from '../web/src/pages/reportes/[...ruta].js';

test('rutas estables desde web y su compilación', () => {
  assert.equal(findProjectRoot(join(PROJECT_ROOT, 'web')), PROJECT_ROOT);
  assert.equal(findProjectRoot(join(PROJECT_ROOT, 'web/dist/server')), PROJECT_ROOT);
});

test('rechaza lectura/escritura y rutas Windows fuera de las carpetas previstas', async () => {
  await assert.rejects(leerMeta('../outside'), /Slug/);
  await assert.rejects(writeEstado('..\\outside', {}), /Slug/);
  const response = await GET({ params: { ruta: '..\\package.json' } });
  if (process.platform === 'win32') assert.equal(response.status, 400);
  else assert.equal(response.status, 404);
});
