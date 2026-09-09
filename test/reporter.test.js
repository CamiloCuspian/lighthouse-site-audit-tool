import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { generateReport } from '../cli/reporter.js';

test('errores quedan separados de mediciones y visibles en los entregables', t => {
  const dir = mkdtempSync(join(tmpdir(), 'lh-report-test-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const good = { url: 'https://example.com/', scores: { performance: 90, accessibility: 90, bestPractices: 90, seo: 90 }, metrics: {}, opportunities: [], diagnostics: [], meta: { issues: [] } };
  const bad = { ...good, url: 'https://example.com/failed', scores: { performance: 0, accessibility: 0, bestPractices: 0, seo: 0 }, error: 'Chrome disconnected' };
  generateReport([good, bad], [], dir, 'example.com', null, { crawlErrors: [{ url: 'https://example.com/blocked', status: 429 }] });
  const data = JSON.parse(readFileSync(join(dir, 'results.json')));
  assert.equal(data.results.length, 1);
  assert.equal(data.auditErrors.length, 1);
  assert.equal(data.crawlErrors.length, 1);
  for (const file of ['index.html', 'client-report.html', 'ai-report.md']) {
    const content = readFileSync(join(dir, file), 'utf8');
    assert.match(content, /Cobertura parcial/);
    assert.match(content, /Chrome disconnected/);
    assert.doesNotMatch(content, /NaN/);
  }
  assert.throws(() => generateReport([bad], [], dir, 'example.com'), /Ninguna página/);
});
