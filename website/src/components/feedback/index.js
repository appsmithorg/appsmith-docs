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

    // Then open the Intercom widget if "No" is chosen
    if (value === 'no') {
      if (typeof Intercom !== 'undefined') {
        Intercom('show');
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
          className={`thumbs-button ${feedback.helpful === 'yes' ? 'selected' : ''}`}
          onClick={() => handleHelpfulChange('yes')}
        >
          <img src="/img/feedback-thumbs-up.png" alt="Thumbs Up" className="thumbs-icon" />
        </button>
        <button
          className={`thumbs-button ${feedback.helpful === 'no' ? 'selected' : ''}`}
          onClick={() => handleHelpfulChange('no')}
        >
          <img src="/img/feedback-thumbs-down.png" alt="Thumbs Down" className="thumbs-icon rotate-image" />
        </button>
      </div>
    </div>
  );
};

export default FeedbackWidget;
