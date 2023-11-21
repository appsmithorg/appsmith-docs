import React, { useEffect } from 'react';
import DocSearchButton from '@theme-original/SearchBar';

const CustomDocSearchButton = () => {
    useEffect(() => {
        const searchInput = document.querySelector('.DocSearch-Button-Placeholder');
        const keysElement = document.querySelector('.DocSearch-Button-Keys');

        if (searchInput) {
            searchInput.display = none;
        }
        if (keysElement) {
            keysElement.remove();
        }
    }, []);

    return (
        <div className='search-link'>
            <div>
                <DocSearchButton />
            </div>
        </div>
    );
};

export default CustomDocSearchButton;
