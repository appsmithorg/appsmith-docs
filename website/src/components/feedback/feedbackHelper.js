import React from "react";
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const generateFeedback = (feedbackOption, comments) => {
  if (ExecutionEnvironment.canUseDOM){
    const docId = window.location.pathname;
    const date = new Date().toISOString();
   
    const feedbackData = {
      docId: docId || null,
      feedbackOption: feedbackOption || null,
      comments: comments || null,
      date: date || null,
    };

    return feedbackData;
  }
    return null;
  };
  
const sendToSegment = (feedbackJSON) => {
    if (ExecutionEnvironment.canUseDOM){
      if (typeof window.analytics !== 'undefined') {
        window.analytics.track('Feedback Submitted', feedbackJSON);
        console.log('Sending feedback to Segment:', feedbackJSON);
      }
  }
};

export { generateFeedback, sendToSegment };