import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './css/PagefindSearch.css';

let enginePromise;
let loadAttempt = 0;
function loadEngine(url) {
  if (!enginePromise) {
    // Browsers cache failed module imports; a fresh URL makes retry recoverable.
    const moduleUrl = `${url}?attempt=${loadAttempt++}`;
    enginePromise = import(/* webpackIgnore: true */ moduleUrl).catch((error) => {
      enginePromise = undefined;
      throw error;
    });
  }
  return enginePromise;
}

// Pagefind escapes excerpt text before inserting its <mark> tags.
function Excerpt({ html }) {
  return <p className="docs-search-excerpt" dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function PagefindSearch({ onClose }) {
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState('idle');
  const [retry, setRetry] = useState(0);
  const engineUrl = useBaseUrl('/pagefind/pagefind.js');
  const baseUrl = useBaseUrl('/');

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    inputRef.current.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const term = query.trim();
    setResults([]);
    setTotal(0);
    if (!term) {
      setStatus('idle');
      return;
    }
    setStatus('loading');
    const timer = setTimeout(async () => {
      let deadline;
      try {
        const search = async () => {
          const engine = await loadEngine(engineUrl);
          const response = await engine.search(term);
          const hits = await Promise.all(response.results.slice(0, 8).map((hit) => hit.data()));
          return { hits, count: response.results.length };
        };
        const { hits, count } = await Promise.race([
          search(),
          new Promise((_, reject) => {
            deadline = setTimeout(() => reject(new Error('Search timed out')), 15000);
          }),
        ]);
        if (!cancelled) {
          setResults(hits);
          setTotal(count);
          setStatus('ready');
        }
      } catch {
        if (!cancelled) {
          enginePromise = undefined;
          setStatus('error');
        }
      } finally {
        clearTimeout(deadline);
      }
    }, 180);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [query, retry, engineUrl]);

  function handleKeys(event) {
    if (!['ArrowDown', 'ArrowUp'].includes(event.key) || event.altKey || event.metaKey || event.ctrlKey) return;
    const links = [...dialogRef.current.querySelectorAll('.docs-search-results a')];
    if (!links.length) return;
    const current = links.indexOf(document.activeElement);
    if (current < 0 && document.activeElement !== inputRef.current) return;
    event.preventDefault();
    if (event.key === 'ArrowUp' && current === 0) inputRef.current.focus();
    else links[current < 0 ? (event.key === 'ArrowDown' ? 0 : links.length - 1) :
      (current + (event.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length].focus();
  }

  const resultUrl = (url) => `${baseUrl}${url.replace(/^\//, '')}`;
  return createPortal(
    <dialog ref={dialogRef} className="docs-search-dialog" aria-labelledby="docs-search-title"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === dialogRef.current) onClose(); }}
      onKeyDown={handleKeys}>
      <div className="docs-search-panel">
        <header className="docs-search-header">
          <h2 id="docs-search-title"><img src={`${baseUrl}img/search-in-docs-icon.svg`} alt="" />Search documentation</h2>
          <button type="button" className="docs-search-close" onClick={onClose} aria-label="Close search"><span aria-hidden="true">×</span></button>
        </header>
        <form role="search" onSubmit={(event) => {
          event.preventDefault();
          dialogRef.current.querySelector('.docs-search-results a')?.click();
        }}>
          <label className="sr-only" htmlFor="docs-search-query">Search documentation</label>
          <input ref={inputRef} id="docs-search-query" type="search" value={query} autoComplete="off"
            placeholder="Search guides, widgets, and functions…"
            onChange={(event) => setQuery(event.target.value)} />
        </form>
        <div className="docs-search-body">
          <p className="docs-search-status" role="status" aria-live="polite">
            {status === 'idle' && 'What would you like to build? Search for a topic or function.'}
            {status === 'loading' && 'Searching…'}
            {status === 'ready' && (total ? `${total} matching pages${total > 8 ? ' · showing the first 8' : ''}` : 'No results. Try a different word or a shorter query.')}
          </p>
          {status === 'error' && <div role="alert" className="docs-search-error">
            <p>Search couldn’t load. Check your connection and try again.</p>
            <button type="button" onClick={() => setRetry((value) => value + 1)}>Try again</button>
            <button type="button" onClick={() => window.location.reload()}>Reload page</button>
          </div>}
          <ol className="docs-search-results">
            {results.map((result) => <li key={result.url}>
              <a href={resultUrl(result.url)} onClick={onClose}>
                <strong>{result.meta.title}</strong>
                <Excerpt html={result.excerpt} />
              </a>
              {result.sub_results?.filter((section) => section.url !== result.url).slice(0, 3).map((section) => (
                <a className="docs-search-section" key={section.url} href={resultUrl(section.url)} onClick={onClose}>
                  <span aria-hidden="true">↳ </span>{section.title}
                </a>
              ))}
            </li>)}
          </ol>
        </div>
        <footer className="docs-search-footer"><span><kbd>↑</kbd> <kbd>↓</kbd> Navigate</span><span><kbd>↵</kbd> Open</span><span><kbd>esc</kbd> Close</span></footer>
      </div>
    </dialog>, document.body,
  );
}
