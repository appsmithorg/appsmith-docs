import React from 'react';
import TOC from '@theme-original/TOC';
import FeedbackWidget from '@site/src/components/feedback';

export default function TOCWrapper(props) {
  return (
    <>
    <div>
      <div>
      <TOC {...props} />
      </div>
      <div>
      <FeedbackWidget/>
      </div>
    </div>
     
    </>
  );
}
