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
    return feedbackCommentData;
  }
  return null;
};

const generateAIFeedback = (feedbackOption, userSearchTerm, aiGeneratedResult) => {
  if (ExecutionEnvironment.canUseDOM) {
    const docId = window.location.pathname;
    const feedbackData = {
      docId: docId || null,
      feedbackOption: feedbackOption || null,
      userSearchTerm: userSearchTerm || null,
      aiGeneratedResult: aiGeneratedResult || null,
    };
    return feedbackData;
  }
  return null;
};

const sendToSegment = (feedbackJSON, eventType) => {
  if (ExecutionEnvironment.canUseDOM) {
    if (typeof window.analytics !== 'undefined') {
      window.analytics.track(eventType, feedbackJSON);
    }
  }
};

export { generateFeedback, generateFeedbackComment, sendToSegment, generateAIFeedback };