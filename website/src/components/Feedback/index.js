import React from 'react';
import HappySVG from '@site/static/img/happy.svg';
import SadSVG from '@site/static/img/sad.svg';
import NeutralSVG from '@site/static/img/neutral.svg';

function FeedbackWidget() {
  const [feedback, setFeedback] = React.useState(null);

  const handleFeedbackClick = (newFeedback) => {
    setFeedback(newFeedback);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div style={{ color: 'rgba(136,153,168,1.00)', marginRight: '16px',  width: '100%'}}>
      <hr style={{ border: '1px solid #ddd' }} />
        <h4>WAS THIS PAGE HELPFUL?</h4>
        <button onClick={() => handleFeedbackClick('happy')} style={{ padding: '8px', margin: '5px', borderRadius: '50%' }}>
          <HappySVG fill={feedback === 'happy' ? '#6DBA67' : 'rgba(136,153,168,1.00)'} onMouseEnter={() => { setFeedback('happy'); }} onMouseLeave={() => { setFeedback(null); }} />
        </button>
        <button onClick={() => handleFeedbackClick('sad')} style={{ padding: '8px', margin: '5px', borderRadius: '50%' }}>
            <SadSVG fill={feedback === 'sad' ? 'rgb(255, 0, 0)' : 'rgba(136,153,168,1.00)'} />
        </button>
        <button onClick={() => handleFeedbackClick('neutral')} style={{ padding: '8px', margin: '5px', borderRadius: '50%' }}>
          <NeutralSVG fill={feedback === 'neutral' ? '#FCC22D' : 'rgba(136,153,168,1.00)'} onMouseEnter={() => { setFeedback('neutral'); }} onMouseLeave={() => { setFeedback(null); }} />
        </button>
      </div>
    </div>
  );
}

export default FeedbackWidget;
