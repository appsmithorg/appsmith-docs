import React from "react";
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const generateFeedbackJSON = (feedbackOption, comments) => {
    let docId;

    if (ExecutionEnvironment.canUseDOM){
        docId = window.location.pathname; // Fetches the current page's path as doc ID
    }
    const date = new Date().toISOString(); // Current date in ISO format

    console.log('Generating Feedback JSON:');
    console.log('Doc ID:', docId);
    console.log('Date:', date);
    console.log('feedbackOption:' , feedbackOption);
    console.log('comments:' , comments);
  
    return {
      docId,
      feedbackOption,
      comments,
      date,
    };
  };
  
  export default generateFeedbackJSON;
