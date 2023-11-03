import React, { useState } from 'react';
import Feedback from '@site/src/components/feedback/feedback';
import FeedbackMessage from '@site/src/components/feedback/feedbackMessage';
import FeedbackComments from '@site/src/components/feedback/feedbackComments';
import { generateFeedback, sendToSegment, generateFeedbackComment } from '@site/src/components/feedback/feedbackHelper';

const FeedbackWidget = () => {
  const [feedback, setFeedback] = useState({
    helpful: '',
    comments: '',
  });

  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleHelpfulChange = async (value) => {
    const feedbackJSON = generateFeedback(value);
    await sendToSegment(feedbackJSON, 'Feedback Submitted');

    if (value === 'no') {
      setFeedback({
        helpful: value,
        comments: '',
      });
    } else {
      setFeedback({
        helpful: 'submitted',
        comments: '',
      });
    }
  };

  const handleCommentSubmit = async () => {
    if (feedback.comments.trim() === '') {
      return;
    }

    if (!feedbackSubmitted) {
      const feedbackCommentJSON = generateFeedbackComment(feedback.comments);
      await sendToSegment(feedbackCommentJSON, 'Feedback Comment Submitted');
      setFeedbackSubmitted(true);
    }

    setFeedback({
      helpful: 'submitted',
      comments: feedback.comments,
    });
  };

  const handleCommentChange = (value) => {
    setFeedback({
      ...feedback,
      comments: value,
    });
  };


  return (
    <>
      {feedback.helpful === 'submitted' && <FeedbackMessage />}
      {feedback.helpful === '' && (
        <Feedback feedback={feedback} handleHelpfulChange={handleHelpfulChange} />
      )}
      {feedback.helpful === 'no' && (
        <FeedbackComments
          feedback={feedback}
          handleCommentSubmit={handleCommentSubmit}
          handleCommentChange={handleCommentChange}
        />
      )}
    </>
  );
};

export default FeedbackWidget;
