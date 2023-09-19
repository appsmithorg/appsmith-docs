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
      {feedback.helpful === '' ? (
        <>
          <div className="feedback-heading">Was this page helpful?</div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              id="thumbs-up"
              className={feedback.helpful === 'yes' ? 'selected' : ''}
              onClick={() => handleHelpfulChange('yes')}
            >
              <img src="/img/thumbs-up-line.svg" alt="Thumbs Up" />
            </button>
            <button
              id="thumbs-down"
              className={feedback.helpful === 'no' ? 'selected' : ''}
              onClick={() => handleHelpfulChange('no')}
            >
              <img src="/img/thumbs-down-line.svg" alt="Thumbs down" />
              </button>
            </div>
        </>
      ) : (
        <div className="feedback-heading">Thank you for your feedback!</div>
      )}
    </div>
  );
};

export default FeedbackWidget;
