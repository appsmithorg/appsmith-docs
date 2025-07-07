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
      return () => document.removeEventListener('mousedown', checkIfClickedOutside);
    }
  }, [show, closeModal]);
  // https://demo.appsmithai.com/app/docs-agent/page-686bba24341eb84314a2e48e
  

  return (
    <div className={`ai-search-modal ${show ? 'show' : ''}`}>
      <div className="ai-search-modal-content no-padding" ref={modalRef}>
        <iframe
          src="https://harshil.appsmithai.com/app/ai-agent-5/page-6837e5ba8de6fb4180ad8c5b?embed=true"
          title="Ask AI Agent"
          width="100%"
          height="100%"
          style={{
            border: 'none',
            margin: 0,
            padding: 0,
            display: 'block',
          }}
          allow="clipboard-write"
        ></iframe>
      </div>
    </div>
  );
};

export default AISearchModal;
