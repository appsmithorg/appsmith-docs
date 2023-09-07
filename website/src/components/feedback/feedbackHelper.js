import React from "react";
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const generateFeedback = (feedbackOption) => {
  if (ExecutionEnvironment.canUseDOM){
    const docId = window.location.pathname;
    const feedbackData = {
      docId: docId || null,
      feedbackOption: feedbackOption || null,
    };
    return feedbackData;
  }
    return null;
  };
  
const sendToSegment = (feedbackJSON) => {
    if (ExecutionEnvironment.canUseDOM){
      if (typeof window.analytics !== 'undefined') {
        window.analytics.track('Feedback Submitted', feedbackJSON);
      }
  }
};

export { generateFeedback, sendToSegment };