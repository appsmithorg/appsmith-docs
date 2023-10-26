import React from 'react';

const FeedbackComments = ({ feedback, handleCommentSubmit, handleCommentChange }) => {
    const isButtonDisabled = feedback.comments.trim() === ''; // Determine if the button should be disabled

    return (
        <div className="feedback-widget-container">
            <div className="feedback-heading">How can we improve this page?</div>
            <div>
                <input
                    type="text"
                    id="comments"
                    value={feedback.comments}
                    onChange={(e) => handleCommentChange(e.target.value)}
                ></input>
            </div>
            <div style={{ margin: "2px" }}>
                <input
                    type="button"
                    className={`feedback-button ${isButtonDisabled ? 'disabled' : ''}`}
                    value="Submit"
                    onClick={handleCommentSubmit}
                    disabled={isButtonDisabled}
                ></input>
            </div>
        </div>
    );
};

export default FeedbackComments;
