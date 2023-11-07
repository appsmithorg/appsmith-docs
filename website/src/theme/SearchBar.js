import React from 'react';
import SearchBar from '@theme-original/SearchBar';
import AISearchButton from '@site/src/components/ask-ai/AISearchButton';
import '@site/src/components/ask-ai/css/AISearch.css'

export default function SearchBarWrapper(props) {
  return (
    <>
      <div className="custom-search-container">
        <SearchBar {...props} />
        <AISearchButton />
      </div>
    </>
  );
}