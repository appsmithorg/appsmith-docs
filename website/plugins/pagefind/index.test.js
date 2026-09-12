const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const { gunzipSync } = require('node:zlib');
const plugin = require('./index');

test('indexes rendered docs with clean URLs and excludes navigation and noindex pages', async () => {
  const outDir = await fs.mkdtemp(path.join(os.tmpdir(), 'appsmith-pagefind-'));
  try {
    await fs.mkdir(path.join(outDir, 'reference'));
    await fs.writeFile(path.join(outDir, 'reference', 'function.html'), '<html lang="en"><body><nav>UNRELATED_NAVIGATION</nav><article><div class="theme-doc-markdown"><h1>storeValue()</h1><h2 id="signature">Signature</h2><p>Store a value.</p><button>UNRELATED_BUTTON</button></div></article></body></html>');
    await fs.writeFile(path.join(outDir, 'hidden.html'), '<html lang="en"><head><meta name="robots" content="noindex"></head><body><div class="theme-doc-markdown"><h1>Hidden</h1><p>PRIVATE_TEST_CONTENT</p></div></body></html>');
    await fs.writeFile(path.join(outDir, 'redirect.html'), '<html><body>Redirect</body></html>');
    await plugin().postBuild({ outDir });
    const entry = JSON.parse(await fs.readFile(path.join(outDir, 'pagefind/pagefind-entry.json')));
    assert.equal(entry.languages.en.page_count, 1);
    const fragments = await fs.readdir(path.join(outDir, 'pagefind/fragment'));
    assert.equal(fragments.length, 1);
    const raw = gunzipSync(await fs.readFile(path.join(outDir, 'pagefind/fragment', fragments[0]))).toString();
    assert.match(raw, /\/reference\/function/);
    assert.doesNotMatch(raw, /function\.html|UNRELATED_NAVIGATION|UNRELATED_BUTTON|PRIVATE_TEST_CONTENT/);
    assert.match(raw, /signature/);
  } finally {
    await fs.rm(outDir, { recursive: true, force: true });
  }
});

test('fails the build when documentation is missing', async () => {
  const outDir = await fs.mkdtemp(path.join(os.tmpdir(), 'appsmith-pagefind-'));
  try {
    await assert.rejects(plugin().postBuild({ outDir }), /no documentation pages/);
  } finally {
    await fs.rm(outDir, { recursive: true, force: true });
  }
});
