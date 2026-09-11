# Pagefind / Orama validation

Validated locally on 2026-09-11 against the current Appsmith Docusaurus build: **415 documentation pages**, represented as **5,686 sections** in Orama. Production configuration and dependencies are unchanged.

## Recommendation

Prefer **Pagefind** for the next integration preview. It ranked the expected page first for every standard query in this small benchmark and required substantially less data for a first search. Do not treat this as production sign-off: one nonsense query returned an unrelated result, and the existing Search / Ask AI modal has not been migrated or tested.

## Measured results

| Check | Pagefind 1.5.2 | Orama 3.1.18 | Orama, tolerance = 1 |
|---|---:|---:|---:|
| Standard queries: expected page ranked first | 10/10 | 9/10 | 9/10 |
| Standard queries: expected page in top five | 10/10 | 10/10 | 9/10 |
| Typo queries: expected page in top five | 3/3 | 0/3 | 1/3 |
| Nonsense query correctly returns zero results | No | Yes | Yes |
| First search compressed bytes | 139,166 | 3,122,409 | 3,122,409 |
| All 14 queries, cumulative compressed bytes | 433,696 | 3,122,409 | 3,122,409 |
| First search on localhost | 88 ms | 398 ms | 411 ms |
| Returned URLs / anchors checked | 360 | 48 | 58 |
| Invalid returned URLs / anchors | 0 | 0 | 0 |

First-search bytes include Pagefind's JS, worker, WASM, metadata, index chunks and the first five results; Orama loads its entire serialized index. They exclude the shared comparison UI bundle (approximately 23 KB gzip), HTML, benchmark metadata and query fixtures. Server-side request instrumentation includes worker requests that are absent from the window's Resource Timing entries. HTTP gzip was enabled; these are response-body bytes, not headers. Pagefind requested 11 resources for its first query (see raw evidence). Counts and raw timings are preserved in `results/`.

Timings are single desktop Chrome runs on localhost, with no CPU/network throttling. They are not mobile performance predictions. Orama searches after initialization were generally faster because its full index was already loaded. Its serialized JSON was 15,144,859 bytes uncompressed; this is not a measurement of runtime heap usage.

## Relevance observations

- Pagefind placed `storeValue`, `showAlert`, `navigateTo`, `resetWidget`, `prepared statements`, `server side pagination`, `PostgreSQL`, `Filepicker`, `Table`, and `Query.run` at rank 1.
- Orama's default matching placed the pagination guide at rank 5; the other standard queries ranked first.
- With Orama tolerance 1, the pagination guide left the top five. `pagintion` matched at rank 4, but `storeVaule` and `postgress` did not match the expected page in the top five.
- Pagefind matched all three typos. However, `qzxwvvnonexistent` returned a workflow page, highlighting the sample identifier `B5XGV5QZ`. Investigate this broad matching before production rollout.
- All returned page paths and section IDs exist in the built HTML. This verifies link targets structurally, not deployed routing or keyboard navigation.

The query set was hand selected before running the engines, not taken from search analytics. Expected-page-in-top-five is a narrow retrieval check; it is not an overall relevance score. Further Orama tuning, tokenization, aliases, query thresholds, different indexing granularity, or a typo fallback could change the outcome. Tolerance 1 is one configuration, not a claim about Orama's maximum typo capability.

## Integration findings

Pagefind can index generated HTML, which fits Docusaurus and captures rendered MDX content. Its default worker keeps search processing off the main thread. The prototype uses its Node indexing API and browser search API.

The official `@orama/plugin-docusaurus-v3@3.1.18` package was inspected. It does support local mode without cloud credentials: it fetches a gzip index, decompresses it and calls Orama `load`. Cloud and analytics are optional. Its indexer renders source Markdown with MarkdownIt; full rendered MDX parity should be checked if choosing that plugin.

For a fair corpus comparison this experiment uses **Orama core with a custom HTML-to-section indexer**, not the official plugin UI or exact plugin index schema. Both engines receive the same built documentation text, excluding navigation, buttons, scripts and pages marked noindex. Orama gets title/heading boosts of 5/2; Pagefind uses its default ranking. Orama's top 100 section hits are deduplicated to five page results; Pagefind returns five pages with section sub-results. These representation differences are intentional and can affect ranking and payload.

The current `website/src/components/custom-search/CustomSearchBar.jsx` depends on Algolia CSS selectors to open/focus search. Ask AI styles also reference DocSearch variables. Either migration needs a proper modal integration, keyboard/focus handling, mobile checks, error/loading states, and a preview deployment with correct static-asset caching. This experiment changes none of those production files.

Primary references:

- [Pagefind Node indexing API](https://pagefind.app/docs/node-api/)
- [Pagefind browser configuration](https://pagefind.app/docs/search-config/)
- [Orama Docusaurus integration](https://docs.orama.com/docs/orama-js/plugins/plugin-docusaurus)
- [Orama source repository](https://github.com/oramasearch/orama)

## Reproduce

From `website/`:

```sh
npm ci --legacy-peer-deps
npm run build
```

The existing site built successfully with broken-link/anchor warnings. `--legacy-peer-deps` accommodates existing dependency peer conflicts.

From `experiments/search-validation/`:

```sh
npm ci
npm run build
npm run serve
```

Open <http://127.0.0.1:4175/?engine=pagefind>. On each of the three engine pages, run **Run validation suite** exactly once after a fresh navigation/reload, before any manual query, so the first measurement includes initialization. Run only one suite at a time because server request metrics are shared. The local server writes reports into `build/`.

Then run:

```sh
node summarize.mjs
```

This verifies all reported URL/anchor targets and copies browser evidence into `results/`. It exits nonzero for invalid targets; retrieval misses are reported as benchmark findings, not treated as a failing link-check command.

The server binds only to loopback and is for this experiment, not production. Stop it with Ctrl+C. Generated indexes and installed dependencies are gitignored.
