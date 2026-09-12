const fs = require('node:fs/promises');
const path = require('node:path');

async function htmlFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(file) : file;
  }));
  return files.flat().filter((file) => file.endsWith('.html'));
}

module.exports = function pagefindPlugin() {
  return {
    name: 'appsmith-pagefind',
    async postBuild({ outDir }) {
      const pagefind = await import('pagefind');
      const check = (result) => {
        if (result.errors?.length) throw new Error(JSON.stringify(result.errors));
        return result;
      };
      try {
        const { index } = check(await pagefind.createIndex({
          rootSelector: '.theme-doc-markdown',
          excludeSelectors: ['button', '.hash-link'],
          forceLanguage: 'en',
        }));
        let pages = 0;
        for (const file of await htmlFiles(outDir)) {
          const content = await fs.readFile(file, 'utf8');
          // Only index rendered documentation, excluding navigation and redirects.
          if (!content.includes('theme-doc-markdown')) continue;
          // The root selector excludes <head>, so honor Docusaurus robots metadata here.
          const noIndex = (content.match(/<meta\b[^>]*>/gi) || []).some((meta) =>
            /\bname=["']robots["']/i.test(meta) && /\bcontent=["'][^"']*\bnoindex\b/i.test(meta));
          if (noIndex) continue;
          const relative = path.relative(outDir, file).split(path.sep).join('/');
          const url = `/${relative.replace(/index\.html$/, '').replace(/\.html$/, '')}`;
          check(await index.addHTMLFile({ content, url }));
          pages += 1;
        }
        if (!pages) throw new Error('Pagefind: no documentation pages found.');
        check(await index.writeFiles({ outputPath: path.join(outDir, 'pagefind') }));
        console.log(`[Pagefind] Indexed ${pages} documentation pages.`);
      } finally {
        await pagefind.close();
      }
    },
  };
};
