import React, { useEffect, useRef, useState } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import './css/AISearch.css';

const FEEDBACK_INTERVAL_DAYS = 3;
const FEEDBACK_STORAGE_KEY = 'appsmith-ai-feedback-last-submitted';

const AISearchModal = ({ show, closeModal }) => {
  const modalRef = useRef();
  const [feedbackEnabled, setFeedbackEnabled] = useState(false);
  const [feedbackAllowed, setFeedbackAllowed] = useState(false);
  const [thumbs, setThumbs] = useState(null);
  const [comment, setComment] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const checkIfClickedOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target) && show) {
          closeModal();
        }
      };
      document.addEventListener('mousedown', checkIfClickedOutside);
      return () => document.removeEventListener('mousedown', checkIfClickedOutside);
    }
  }, [show, closeModal]);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM && show) {
      const lastFeedback = localStorage.getItem(FEEDBACK_STORAGE_KEY);
      const now = Date.now();
      if (!lastFeedback || now - parseInt(lastFeedback, 10) > FEEDBACK_INTERVAL_DAYS * 24 * 60 * 60 * 1000) {
        setFeedbackAllowed(true);
        const timer = setTimeout(() => {
          setFeedbackEnabled(true);
        }, 10000);
        return () => clearTimeout(timer);
      }
    }
  }, [show]);

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  const submitFeedback = (thumbOverride = null) => {
    const feedback = {
      thumbs: thumbOverride ?? thumbs,
      comment,
      timestamp: new Date().toISOString(),
    };

    console.log('Feedback submitted:', feedback);

    localStorage.setItem(FEEDBACK_STORAGE_KEY, Date.now().toString());

    setThumbs(null);
    setComment('');
    setFeedbackEnabled(false);
    setFeedbackAllowed(false);
    showToast();
  };

  const handleThumb = (value) => {
    setThumbs(value);
    submitFeedback(value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const hasTyped = comment.trim().length > 0;

  return (
    <div className={`ai-search-modal ${show ? 'show' : ''}`}>
      <div className="ai-search-modal-content" ref={modalRef}>
        <iframe
          src="https://harshil.appsmithai.com/app/ai-agent-5/page-6837e5ba8de6fb4180ad8c5b?embed=true"
          title="Ask AI Agent"
          width="100%"
          height="600px"
          style={{ border: 'none' }}
          allow="clipboard-write"
        ></iframe>

        {feedbackAllowed && feedbackEnabled && (
          <div className="ai-feedback-widget">
            <p className="ai-feedback-label">Was this answer helpful?</p>
            <div className="ai-feedback-buttons">
              <button
                className={`thumb-button ${thumbs === 'up' ? 'selected' : ''}`}
                onClick={() => handleThumb('up')}
              >
                👍
              </button>
              <button
                className={`thumb-button ${thumbs === 'down' ? 'selected' : ''}`}
                onClick={() => handleThumb('down')}
              >
                👎
              </button>
            </div>
            <textarea
              placeholder="Optional: Share your feedback"
              value={comment}
              onChange={handleCommentChange}
              rows="3"
            />
            {hasTyped && (
              <button className="submit-feedback-btn" onClick={() => submitFeedback()}>
                Submit Feedback
              </button>
            )}
          </div>
        )}

        {toastVisible && (
          <div className="ai-toast">
            <span>✅ Thanks for your feedback!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AISearchModal;
