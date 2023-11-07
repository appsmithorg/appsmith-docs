import React, { Component } from 'react';
import AISearchModal from './AISearchModal';

class AISearchButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            inputValue: ''
        };
    }

    toggleModal = () => {
        this.setState((prevState) => ({
            isModalOpen: !prevState.isModalOpen
        }));
    };

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    render() {
        return (
            <div className='ask-ai-modal-button'>
                <button onClick={this.toggleModal}>Ask AI</button>
                <AISearchModal
                    show={this.state.isModalOpen}
                    closeModal={this.toggleModal}
                    inputValue={this.state.inputValue}
                    handleInputChange={this.handleInputChange}
                />
            </div>
        );
    }
}

export default AISearchButton;
