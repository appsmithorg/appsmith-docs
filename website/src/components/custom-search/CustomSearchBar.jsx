import { FaSearch } from 'react-icons/fa';
import './css/CustomSearch.css';
import AISearchButton from '@site/src/components/ask-ai/AISearchButton';
import DocSearch from '@theme-original/SearchBar';
import React, { useState, useEffect } from 'react';

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
        if (searchType === 'ai') {
            if (aiInput) {
                aiInput.click();
            }
        } else if (searchType === 'docs') {
            if (searchInput) {
                searchInput.click();
            }
        }
    }, [searchType]);

    return (
        <div>
            <label>
                <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                    <option value="">Search</option>
                    <option value="ai">Ask AI</option>
                    <option value="docs">Search in Docs</option>
                </select>
            </label>
            <AISearchButton />
            <DocSearch />
        </div>
    );
};

export default CustomSearchBar;
