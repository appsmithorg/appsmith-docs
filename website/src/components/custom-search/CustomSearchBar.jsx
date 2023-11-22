import React, { useState, useEffect } from 'react';
import './css/CustomSearch.css';
import AISearchButton from '@site/src/components/ask-ai/AISearchButton';
import DocSearch from '@theme-original/SearchBar';

const CustomSearchBar = () => {
    const [searchType, setSearchType] = useState('');

    useEffect(() => {
        const searchInput = document.querySelector('.DocSearch-Button');
        const aiInput = document.querySelector('.custom-doc-Search-bar');

        if (searchInput) {
            searchInput.style.display = 'none';
        }
        if (aiInput) {
            aiInput.style.display = 'none';
        }

        if (searchType === 'ai' && aiInput) {
            aiInput.click();
        } else if (searchType === 'docs' && searchInput) {
            searchInput.click();
        }

        setSearchType('');
    }, [searchType]);

    return (
        <>
            <div className="custom-segmented-search-option">
                <label>
                    <div
                        className={`custom-search-option ${searchType === 'ai' ? 'selected' : ''}`}
                        onClick={() => setSearchType('ai')}
                    >
                        🧠 Ask AI
                    </div>

                    <div
                        className={`custom-search-option ${searchType === 'docs' ? 'selected' : ''}`}
                        onClick={() => setSearchType('docs')}
                    >
                        🔍 Search
                    </div>
                </label>
            </div>
            <AISearchButton />
            <DocSearch />
        </>
    );
};

export default CustomSearchBar;
