import React, { useState, useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import DocSearch from '@theme-original/SearchBar';
import AISearchButton from '@site/src/components/ask-ai/AISearchButton';
import '@site/src/components/custom-search/css/CustomSearch.css';

const CustomSearchBar = () => {
    const [searchType, setSearchType] = useState('');

    useEffect(() => {
        if (ExecutionEnvironment.canUseDOM) {
            const searchInput = document.querySelector('.DocSearch-Button');
            const aiInput = document.querySelector('.custom-doc-Search-bar');

            if (searchType === 'ai' && aiInput) {
                aiInput.click();
            } else if (searchType === 'docs' && searchInput) {
                searchInput.click();
            }

            setSearchType('');
        }
    }, [searchType]);

    const handleClick = (type) => {
        setSearchType(type);
        if (ExecutionEnvironment.canUseDOM) {
            const eventName = type === 'ai' ? 'Ask AI Button Click' : 'Search Button Click';
            console.log("eventName", eventName);
            if (typeof window.analytics !== 'undefined') {
                window.analytics.track(eventName, { searchType: type });
            }
        }
    };

    return (
        <>
            <div className="custom-segmented-search-option">
                <div
                    className={`custom-search-option ${searchType === 'ai' ? 'selected' : ''}`}
                    onClick={() => handleClick('ai')}
                >
                    <img src="/img/ask-ai-robot-icon.svg" alt="Ask AI" className='ai-search-icon'></img> Ask AI
                </div>

                <div
                    className={`custom-search-option ${searchType === 'docs' ? 'selected' : ''}`}
                    onClick={() => handleClick('docs')}
                >
                    <img src="/img/search-in-docs-icon.svg" alt="Search" className='doc-search-icon'></img> Search
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