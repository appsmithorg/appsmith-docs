// src/components/ask-ai/AISearchButton.jsx

import React, { Component } from 'react';
import AISearchModal from './AISearchModal';

class AISearchButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    return (
      <div className='search-link'>
        <button className='custom-doc-Search-bar hideSearchButtons' onClick={this.toggleModal}>
          Ask Appsmith AI
        </button>
        <AISearchModal show={this.state.isModalOpen} closeModal={this.toggleModal} />
      </div>
    );
  }
}

export default AISearchButton;
