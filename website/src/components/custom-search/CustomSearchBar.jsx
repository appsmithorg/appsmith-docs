import React, { useState, useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import DocSearch from '@theme-original/SearchBar';
import AISearchButton from '@site/src/components/ask-ai/AISearchButton';
import '@site/src/components/custom-search/css/CustomSearch.css';

const CustomSearchBar = () => {
    const [searchType, setSearchType] = useState('');

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

    // Trigger search input clicks
    useEffect(() => {
        if (ExecutionEnvironment.canUseDOM) {
            const searchInput = document.querySelector('.DocSearch-Button');
            const aiInput = document.querySelector('.custom-doc-Search-bar');

            if (searchType === 'ai' && aiInput) {
                aiInput.click();
            } else if (searchType === 'docs' && searchInput) {
                searchInput.click();
                setTimeout(() => {
                    const searchTerm = document.querySelector('.DocSearch-Input');
                    if (searchTerm) {
                        searchTerm.focus();
                        searchTerm.click();
                    }
                }, 100);
            }

            setSearchType('');
        }
    }, [searchType]);

    const handleClick = (type) => {
        setSearchType(type);

        if (ExecutionEnvironment.canUseDOM && typeof window.analytics !== 'undefined') {
            const eventName = type === 'ai' ? 'Ask AI Button Click' : 'Search Button Click';

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
                <div
                    className={`custom-search-option ${searchType === 'ai' ? 'selected' : ''}`}
                    onClick={() => handleClick('ai')}
                >
                    <img src="/img/ask-ai-robot-icon.svg" alt="Ask AI" className="ai-search-icon" /> Ask AI
                </div>
                <div
                    className={`custom-search-option ${searchType === 'docs' ? 'selected' : ''}`}
                    onClick={() => handleClick('docs')}
                >
                    <img src="/img/search-in-docs-icon.svg" alt="Search" className="doc-search-icon" /> Search
                </div>
            </div>
            <AISearchButton />
            <div style={{ display: 'none' }}>
                <DocSearch />
            </div>
        </>
    );
};

export default CustomSearchBar;
