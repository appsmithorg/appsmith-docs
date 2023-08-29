import React, { useState } from 'react';
import { generateFeedback, sendToSegment } from '@site/src/components/feedback/feedbackHelper';

const FeedbackWidget = () => {
  const [feedback, setFeedback] = useState({
    helpful: '',
  });

  const handleHelpfulChange = async (value) => {
    // Send the feedback to Segment first
    const feedbackJSON = generateFeedback(value);
    await sendToSegment(feedbackJSON);

    // Then open the Intercom survey to capture the feedback if "No" is chosen
    if (value === 'no') {
      if (typeof Intercom !== 'undefined') {
        Intercom('startSurvey', 35583751);
      }
    }

    // Update the feedback state after handling
    setFeedback({
      ...feedback,
      helpful: value,
    });
  };

  return (
    <div className="feedback-widget-container">
      <span className="feedback-heading">Was this page helpful?</span>
      <div>
        <button
          className={`submit-button ${feedback.helpful === 'yes' ? 'selected' : ''}`}
          onClick={() => handleHelpfulChange('yes')}
        > Yes
        </button>
        <button
          className={`submit-button ${feedback.helpful === 'no' ? 'selected' : ''}`}
          onClick={() => handleHelpfulChange('no')}
        > No
        </button>
      </div>
    </div>
  );
};

export default FeedbackWidget;
