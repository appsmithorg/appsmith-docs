import React, { useState } from 'react';
import Feedback from '@site/src/components/feedback/feedback';
import FeedbackMessage from '@site/src/components/feedback/feedbackMessage';
import FeedbackComments from '@site/src/components/feedback/feedbackComments';
import { generateFeedback, sendToSegment, generateFeedbackComment, generateAIFeedback } from '@site/src/components/feedback/feedbackHelper';

const FeedbackWidget = ({ isCalledFromAISearch, userTerm, generatedAnswer }) => {
  const [feedback, setFeedback] = useState({
    helpful: '',
    comments: '',
  });

  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleHelpfulChange = async (value) => {
    const feedbackJSON = isCalledFromAISearch ? generateAIFeedback(value, userTerm, generatedAnswer) : generateFeedback(value);
    const feedbackEvent = isCalledFromAISearch ? 'AISearch Feedback Submitted' : 'Feedback Submitted';
    await sendToSegment(feedbackJSON, feedbackEvent);

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
      {(feedback.helpful === 'submitted' || (feedback.helpful === 'no' && isCalledFromAISearch)) && <FeedbackMessage />}
      {feedback.helpful === '' && (
        <Feedback feedback={feedback} handleHelpfulChange={handleHelpfulChange} />
      )}
      {feedback.helpful === 'no' && !isCalledFromAISearch && (
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
