import React, { useState } from 'react';
import generateFeedback from '@site/src/components/feedback/generateFeedback'; 

const FeedbackWidget = () => {
  const [feedback, setFeedback] = useState({
    helpful: '',
    comments: '',
  });

  const handleHelpfulChange = (value) => {
    setFeedback({
      ...feedback,
      helpful: value,
    });
  };

  const handleCommentsChange = (event) => {
    setFeedback({
      ...feedback,
      comments: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const feedbackJSON = generateFeedback(
      feedback.helpful,
      feedback.comments
    );

    console.log('Generated Feedback JSON:', feedbackJSON);
  };

  return (
    <div className="feedback-widget-container">
      <div className="docFooterDivider"></div>
      <div className="feedback-widget">
        <h2 className="feedback-heading">Was this page helpful?</h2>
        <form onSubmit={handleSubmit}>
          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="helpful"
                value="yes"
                checked={feedback.helpful === 'yes'}
                onChange={() => handleHelpfulChange('yes')}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="helpful"
                value="no"
                checked={feedback.helpful === 'no'}
                onChange={() => handleHelpfulChange('no')}
              />
              No
            </label>
          </div>
        </form>
        <div >
          <textarea className="comments-box"
            placeholder="Share your comments(optional)"
            value={feedback.comments}
            onChange={handleCommentsChange}
          />
          <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
         
        </div>
      </div>
    </div>
  );
};

export default FeedbackWidget;
