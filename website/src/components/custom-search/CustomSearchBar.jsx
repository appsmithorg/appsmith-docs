
import { FaSearch } from 'react-icons/fa';
import './css/CustomSearch.css';
import AISearchButton from '@site/src/components/ask-ai/AISearchButton';
import DocSearch from '@theme-original/SearchBar';
import React, { useState, useRef, useEffect } from 'react';



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
                <input
                    type="radio"
                    value="ai"
                    checked={searchType === 'ai'}
                    onChange={() => setSearchType('ai')}
                />
                Ask AI
            </label>
            <label>
                <input
                    type="radio"
                    value="docs"
                    checked={searchType === 'docs'}
                    onChange={() => setSearchType('docs')}
                />
                Search in Docs
            </label>
            <AISearchButton />
            <DocSearch />
        </div>
    );
};

export default CustomSearchBar;

