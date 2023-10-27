import React from 'react';

const FeedbackComments = ({ feedback, handleCommentSubmit, handleCommentChange }) => {
    const isButtonDisabled = feedback.comments.trim() === ''; // Determine if the button should be disabled

    return (
        <div className="feedback-comments-container transition">
            <div className="feedback-heading">How can we improve this page?</div>
            <div className="feedback-textarea">
                <textarea
                    id="comments"
                    value={feedback.comments}
                    onChange={(e) => handleCommentChange(e.target.value)}
                ></textarea>
            </div>
            <div className="feedback-button-container">
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
