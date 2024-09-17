import React, { useState } from 'react';
import AISearchModal from './AISearchModal';
import {
    AIlogo, ExploreButton
} from "@site/src/components/icons";




const AISearchButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="search-link">
            <button className="buttonAI" onClick={toggleModal}><ExploreButton />
            </button>
            <AISearchModal
                show={isModalOpen}
                closeModal={toggleModal}
                inputValue={inputValue}
                handleInputChange={handleInputChange}
            />
        </div>
    );
};

export default AISearchButton;
