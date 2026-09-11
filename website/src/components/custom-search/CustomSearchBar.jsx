import React, { useState, useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import PagefindSearch from './PagefindSearch';
import AISearchButton from '@site/src/components/ask-ai/AISearchButton';
import '@site/src/components/custom-search/css/CustomSearch.css';

const CustomSearchBar = () => {
    const [searchOpen, setSearchOpen] = useState(false);

    // Identify the user once on mount
    useEffect(() => {
        if (ExecutionEnvironment.canUseDOM && typeof window.analytics !== 'undefined') {
            const user = JSON.parse(localStorage.getItem('user') || '{}');

            if (user?.id && user?.email) {
                window.analytics.identify(user.id, {
                    name: user.name,
                    email: user.email,
                    plan: user.plan || 'Free',
                });
            }

            // Optional: Enable debug logging
            // window.analytics.debug();
        }
    }, []);

    useEffect(() => {
        const shortcut = (event) => {
            const editing = event.target instanceof HTMLElement &&
                (event.target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName));
            if (editing || document.querySelector('.ai-search-modal.show') || event.altKey) return;
            if (((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') ||
                (event.key === '/' && !event.metaKey && !event.ctrlKey)) {
                event.preventDefault();
                setSearchOpen(true);
            }
        };
        document.addEventListener('keydown', shortcut);
        return () => document.removeEventListener('keydown', shortcut);
    }, []);

    const handleClick = (type) => {
        if (type === 'docs') setSearchOpen(true);
        else document.querySelector('.custom-doc-Search-bar')?.click();

        if (ExecutionEnvironment.canUseDOM && typeof window.analytics !== 'undefined') {
            const eventName = type === 'ai' ? 'Docs Ask AI Click' : 'Docs Search Button Click';
            window.analytics.track(eventName, {
                searchType: type,
                page: window.location.pathname,
                timestamp: new Date().toISOString(),
            });
        }
    };

    return (
        <>
            <div className="custom-segmented-search-option">
                <button
                    type="button"
                    className="custom-search-option"
                    onClick={() => handleClick('ai')}
                >
                    <img src="/img/ask-ai-robot-icon.svg" alt="" className="ai-search-icon" /> Ask AI
                </button>
                <button
                    type="button"
                    className="custom-search-option"
                    onClick={() => handleClick('docs')}
                    aria-haspopup="dialog"
                    aria-expanded={searchOpen}
                >
                    <img src="/img/search-in-docs-icon.svg" alt="" className="doc-search-icon" /> Search
                </button>
            </div>
            <AISearchButton />
            {searchOpen && <PagefindSearch onClose={() => setSearchOpen(false)} />}
        </>
    );
};

export default CustomSearchBar;
