import React, { useState } from 'react';

const FeedbackWidget = () => {
  const [feedback, setFeedback] = useState('');
  const [emoji, setEmoji] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleEmojiClick = (event) => {
    setEmoji(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Feedback: ${feedback} Emoji: ${emoji}`);
    // Send feedback to server or perform some other action
    setFeedback('');
    setEmoji('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ color: 'rgba(136,153,168,1.00)', marginRight: '16px',  width: '100%'}}>
      <hr style={{ border: '1px solid #ddd' }} />
      <h4>WAS THIS PAGE HELPFUL?</h4>
      <div>
        <button type="button" value="😠" onClick={handleEmojiClick} style={{ fontSize: '2rem', margin: '3px' }}>
          😠
        </button>

        <button type="button" value="😕" onClick={handleEmojiClick} style={{ fontSize: '2rem' , margin: '3px' }}>
          😕
        </button>
        <button type="button" value="😐" onClick={handleEmojiClick} style={{ fontSize: '2rem', margin: '3px' }}>
          😐
        </button>
        <button type="button" value="🙂" onClick={handleEmojiClick} style={{ fontSize: '2rem' , margin: '3px'}}>
          🙂
        </button>
        <button type="button" value="😃" onClick={handleEmojiClick} style={{ fontSize: '2rem' , margin: '3px'}}>
          😃
        </button>
        </div>
        <div>
        <textarea id="feedback" value={feedback} onChange={handleFeedbackChange} style={{ minWidth: '33%', minHeight: '100px' }} />

        </div>
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackWidget;