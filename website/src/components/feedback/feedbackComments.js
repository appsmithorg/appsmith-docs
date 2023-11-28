import React, { useEffect, useRef } from 'react';

const FeedbackComments = ({ feedback, handleCommentSubmit, handleCommentChange }) => {
    const isButtonDisabled = feedback.comments.trim() === '';
    const commentsContainerRef = useRef(null);

    useEffect(() => {
        if (commentsContainerRef.current) {
            commentsContainerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [feedback.comments]);

    return (
        <div ref={commentsContainerRef} className="feedback-comments-container">
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
