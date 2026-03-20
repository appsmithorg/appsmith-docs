import React, { useState, useCallback } from 'react';
import AISearchModal from './AISearchModal';

const AISearchButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <div className="search-link">
      <button className="custom-doc-Search-bar hideSearchButtons" onClick={openModal}>
        Ask Appsmith AI
      </button>
      <AISearchModal show={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default AISearchButton;
