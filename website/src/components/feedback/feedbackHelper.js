import React from "react";
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const generateFeedback = (feedbackOption) => {
  if (ExecutionEnvironment.canUseDOM) {
    const docId = window.location.pathname;
    const feedbackData = {
      docId: docId || null,
      feedbackOption: feedbackOption || null,
    };
    return feedbackData;
  }
  return null;
};

const generateFeedbackComment = (comment) => {
  if (ExecutionEnvironment.canUseDOM) {
    const docId = window.location.pathname;
    const feedbackCommentData = {
      docId: docId || null,
      feedbackComment: comment || null,
    };
    console.log(feedbackCommentData);
    return feedbackCommentData;
  }
  return null;
};

const sendToSegment = (feedbackJSON, eventType) => {
  console.log("eventType", eventType);
  console.log("feedbackJSON", feedbackJSON);
  if (ExecutionEnvironment.canUseDOM) {
    if (typeof window.analytics !== 'undefined') {
      window.analytics.track(eventType, feedbackJSON);
    }
  }
};

export { generateFeedback, generateFeedbackComment, sendToSegment };