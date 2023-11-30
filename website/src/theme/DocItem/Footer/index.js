import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import FeedbackWidget from '@site/src/components/feedback';

export default function FooterWrapper(props) {
  return (
    <>
    <div className="footerWrapper">
      <FeedbackWidget/>
      <Footer/>
    </div>
    </>
  );
}
