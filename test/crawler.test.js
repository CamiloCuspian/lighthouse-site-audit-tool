import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { crawlSite } from '../cli/crawler.js';
import { normalizeUrl } from '../cli/discovery.js';

async function fixture(t, handler) {
  const server = createServer(handler);
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => server.close(resolve)));
  return `http://127.0.0.1:${server.address().port}`;
}

test('conserva parámetros funcionales y barras; elimina fragmentos y tracking', () => {
  assert.equal(normalizeUrl('/dir/?page=2&amp;utm_source=x#h', 'https://example.com'), 'https://example.com/dir/?page=2');
  assert.throws(() => normalizeUrl('mailto:test@example.com'));
});

test('429 se reintenta; un bloqueo persistente no se presenta como enlace roto', async t => {
  let calls = 0;
  const origin = await fixture(t, (req, res) => {
    if (req.url === '/robots.txt' || req.url === '/sitemap.xml') { res.writeHead(404).end(); return; }
    if (req.url === '/retry' && calls++ === 0) { res.writeHead(429, { 'Retry-After': '0' }).end(); return; }
    if (req.url === '/blocked') { res.writeHead(429).end(); return; }
    if (req.url === '/missing') { res.writeHead(404).end(); return; }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(req.url === '/' ? '<a href="/retry">Retry</a><a href="/blocked">Blocked</a><a href="/missing">Missing</a>' : '<h1>Recovered</h1>');
  });
  const result = await crawlSite(origin, 20, undefined, undefined, { delayMs: 0, retries: 1, maxRetryWaitMs: 0 });
  assert.equal(calls, 2);
  assert.equal(result.pages.length, 2);
  assert.deepEqual(result.brokenLinks.map(r => r.status), [404]);
  assert.deepEqual(result.crawlErrors.map(r => r.status), [429]);
  assert.equal(result.coverage.complete, false);
});

test('robots, sitemap index con ciclo, query strings y enlaces relativos tras redirect', async t => {
  let origin;
  const requested = [];
  origin = await fixture(t, (req, res) => {
    requested.push(req.url);
    if (req.headers.cookie !== 'session=a=b') { res.writeHead(403).end(); return; }
    if (req.url === '/start') { res.writeHead(302, { Location: '/folder/' }).end(); return; }
    if (req.url === '/robots.txt') { res.end('Sitemap: ' + origin + '/index.xml'); return; }
    if (req.url === '/sitemap.xml') { res.writeHead(404).end(); return; }
    if (req.url === '/index.xml') { res.end('<sitemapindex><sitemap><loc>' + origin + '/index.xml</loc></sitemap><sitemap><loc>' + origin + '/urls.xml</loc></sitemap></sitemapindex>'); return; }
    if (req.url === '/urls.xml') { res.end('<urlset><url><loc>' + origin + '/orphan?a=1&amp;b=2</loc></url></urlset>'); return; }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(req.url === '/folder/' ? '<a href = "child">Child</a><a href=?page=2>Page 2</a>' : '<h1>Page</h1>');
  });
  const result = await crawlSite(origin + '/start', 20, undefined, undefined, { delayMs: 0, extraHeaders: { Cookie: 'session=a=b' } });
  assert.deepEqual(result.pages.map(p => p.url).sort(), ['/folder/', '/folder/?page=2', '/folder/child', '/orphan?a=1&b=2'].map(p => origin + p).sort());
  assert.equal(requested.filter(p => p === '/index.xml').length, 1);
  assert.equal(result.coverage.complete, true);
});

test('límite explícito y cancelación durante descubrimiento', async t => {
  const origin = await fixture(t, (req, res) => {
    if (req.url !== '/') { res.writeHead(404).end(); return; }
    res.writeHead(200, { 'Content-Type': 'text/html' }).end('<a href="/next">Next</a>');
  });
  const result = await crawlSite(origin, 1, undefined, undefined, { delayMs: 0 });
  assert.equal(result.pending.length, 1);
  assert.equal(result.coverage.limitReached, true);
  await assert.rejects(crawlSite(origin, NaN), /entero positivo/);
  await assert.rejects(crawlSite(origin, 5, undefined, () => { throw new Error('cancelled'); }), /cancelled/);
});
