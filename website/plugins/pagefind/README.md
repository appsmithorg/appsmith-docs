# Documentation search

`appsmith-pagefind` generates a static Pagefind index in the Docusaurus `postBuild` hook. Deploy the entire `build/` directory, including `build/pagefind/`. Search runs in the browser and requires no Algolia account, API key, crawler, or search server.

Only rendered `.theme-doc-markdown` content is indexed. Navigation, copy buttons, heading-link icons, redirects and pages marked `noindex` are excluded. URLs preserve this site's clean paths and heading IDs. Index generation errors or missing documentation fail the build.

## Develop and verify

From `website/`:

```sh
npm run build
npm run serve -- --port 4180
node --test plugins/pagefind/index.test.js
```

Use the built preview for search validation. `npm start` does not run `postBuild` and therefore does not produce the search index.

The Search button, Cmd/Ctrl+K, and `/` open the search dialog. Typing in editable controls does not trigger the shortcuts. The dialog supports Tab, arrow keys, Enter, Escape, focus restoration and a mobile layout. Search loads lazily, debounces typing, ignores stale results, and exposes retry/reload actions for loading failures. Ask AI remains a separate service and retains its existing interface.

The first eight matching pages include excerpts and up to three section links each. Pagefind's excerpt HTML is escaped by the engine before adding highlight tags; raw metadata is rendered as React text. A retry uses a fresh import URL because browsers cache failed dynamic imports.

Pagefind's broad matching can return related or unrelated results for nonsense input, as recorded in `experiments/search-validation/README.md`. Quoted queries request exact phrases. This integration retains the validated default ranking and does not apply an arbitrary score cutoff that could suppress useful typo matches.

## Verification performed

- Production build generated an index for 415 pages.
- Indexer fixtures cover clean URLs, headings, exclusion of navigation/buttons/noindex pages, and failing a build with no documentation.
- Desktop browser: `storeValue` results, arrow-key selection, Enter navigation to `#signature`, Cmd+K, Escape, and focus restoration to Search.
- Mobile browser emulation at 390px: search input, results, scrolling and close button fit within the viewport.
- Simulated missing Pagefind assets displayed an error; restoring them and clicking Try again recovered results without reloading. The no-results state was also observed.
- Ask AI opened with its examples and input after removing Algolia styles; no AI request was sent.

The prototype comparisons remain in `experiments/search-validation/`. This integration has not been deployed.
