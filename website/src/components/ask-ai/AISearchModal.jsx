// src/components/ask-ai/AISearchModal.jsx

import React, { useEffect, useRef } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import './css/AISearch.css';

const AISearchModal = ({ show, closeModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const checkIfClickedOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target) && show) {
          closeModal();
        }
      };
      document.addEventListener('mousedown', checkIfClickedOutside);

      return () => {
        document.removeEventListener('mousedown', checkIfClickedOutside);
      };
    }
  }, [show, closeModal]);

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
      </div>
    </div>
  );
};

export default AISearchModal;
