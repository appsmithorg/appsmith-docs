import React from 'react';

const Feedback = ({ feedback, handleHelpfulChange }) => {
    return (
        <div className="feedback-widget-container">
            {feedback.helpful === '' && (
                <div className="feedback-heading">Was this page helpful?</div>
            )}
            {feedback.helpful !== 'submitted' && (
                <div style={{ display: 'flex', gap: '8px' }}>
                    {feedback.helpful !== 'no' && (
                        <button
                            id="thumbs-up"
                            className={feedback.helpful === 'yes' ? 'selected' : ''}
                            onClick={() => handleHelpfulChange('yes')}
                        >
                            <img src="/img/thumbs-up-line.svg" alt="Thumbs Up" />
                        </button>
                    )}
                    {feedback.helpful !== 'no' && (
                        <button
                            id="thumbs-down"
                            className={feedback.helpful === 'no' ? 'selected' : ''}
                            onClick={() => handleHelpfulChange('no')}
                        >
                            <img src="/img/thumbs-down-line.svg" alt="Thumbs down" />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Feedback;
