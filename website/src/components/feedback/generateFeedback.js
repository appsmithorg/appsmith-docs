import React from "react";
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const generateFeedback = (feedbackOption, comments) => {
    let docId;

    if (ExecutionEnvironment.canUseDOM){
        docId = window.location.pathname;
    }
    const date = new Date().toISOString();

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
  
  export default generateFeedback;
