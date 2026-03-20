import React, { useEffect, useRef, useState } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Markdown from 'markdown-to-jsx';
import { FaSpinner } from 'react-icons/fa';
import FeedbackWidget from '@site/src/components/feedback';
import { registerAISearch } from '@site/src/components/feedback/feedbackHelper';
import './css/AISearch.css';

const EXAMPLE_QUERIES = [
  'How do I install Appsmith using Docker?',
  'How do I connect to my local PostgreSQL database?',
  'How do I pass inputs from a widget to a query?',
  'How do I trigger multiple queries conditionally?',
  "How do I fix the error: This value does not evaluate to type Array<Object>?",
];

const AISearchModal = ({ show, closeModal }) => {
  const modalRef = useRef();
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userSearchTerm, setUserSearchTerm] = useState('');
  const [error, setError] = useState('');

  const showExamples = !answer && !isLoading && !error;
  const isAnswerComplete = !!answer && !isLoading && !error;

  // Close on click outside or Escape; only listen when modal is open
  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM || !show) return;
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [show, closeModal]);

  // Auto-focus input and reset state when modal opens
  useEffect(() => {
    if (show) {
      setInputValue('');
      setAnswer('');
      setIsLoading(false);
      setUserSearchTerm('');
      setError('');
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [show]);

  const fetchData = async (query) => {
    setIsLoading(true);
    setAnswer('');
    setError('');
    setUserSearchTerm(query);
    registerAISearch(query);

    try {
      const response = await fetch('/api/ask-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        setError(data.error || 'Something went wrong. Please try again.');
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      setAnswer(data.answer);
      setIsLoading(false);
      setInputValue('');
    } catch (err) {
      console.error('Ask AI error:', err);
      setError('Failed to connect. Please try again.');
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isLoading && inputValue.trim()) {
      e.preventDefault();
      fetchData(inputValue.trim());
    }
  };

  const handleChange = (e) => {
    if (!isLoading) {
      setInputValue(e.target.value);
    }
  };

  const handleExampleClick = (query) => {
    if (!isLoading) {
      setInputValue(query);
      fetchData(query);
    }
  };

  return (
    <div className={`ai-search-modal ${show ? 'show' : ''}`}>
      <div className="ai-search-modal-content" ref={modalRef}>
        <div className="ai-search-result-wrapper">
          <header className="ai-search-bar-header">
            <div className="custom-search-container">
              <img src="/img/ask-ai-robot-icon.svg" alt="Ask AI" />
              <input
                ref={inputRef}
                id="question-input"
                name="question-input"
                placeholder="How do I upload a file to S3?"
                type="text"
                value={inputValue}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                disabled={isLoading}
              />
              <span className="ai-submit-message">Submit message</span>
              <img src="/img/ai-enter-icon.svg" alt="Enter" />
            </div>
          </header>

          {isLoading && (
            <div className="loading-icon-container">
              <FaSpinner className="loading-icon" />
              <span className="ai-loading-time-info">
                AI generated responses can take up to a minute.
              </span>
            </div>
          )}

          <div className="ai-result-container scrolled">
            {showExamples && (
              <div className="ai-query-wrapper">
                <span className="ai-query-heading">Examples</span>
                {EXAMPLE_QUERIES.map((query, index) => (
                  <span
                    key={index}
                    className="ai-search-term"
                    onClick={() => handleExampleClick(query)}
                  >
                    {query}
                  </span>
                ))}
              </div>
            )}

            {error && (
              <div className="ai-error-message">
                <p>{error}</p>
              </div>
            )}

            {!isLoading && answer && (
              <div className="search-term-answer">
                <Markdown>{answer}</Markdown>
              </div>
            )}

            {isAnswerComplete && (
              <div className="ai-experimental">
                <span className="ai-experimental-info">
                  Appsmith AI is experimental and may produce incorrect answers.
                  Always verify with the official documentation.
                </span>
              </div>
            )}

            {isAnswerComplete && (
              <FeedbackWidget
                isCalledFromAISearch={true}
                userTerm={userSearchTerm}
                generatedAnswer={answer}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISearchModal;
