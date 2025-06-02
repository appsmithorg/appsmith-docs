import React, { useEffect, useRef } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './AskAINewModal.module.css';

const AskAINewModal = ({ show, closeModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target) && show) {
          closeModal();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [show, closeModal]);

  return (
    <div className={`${styles.modal} ${show ? styles.show : ''}`}>
      <div className={styles.modalContent} ref={modalRef}>
        <iframe
          src="https://harshil.appsmithai.com/app/ai-agent-5/page-6837e5ba8de6fb4180ad8c5b?embed=true"
          title="Ask AI Assistant"
          width="100%"
          height="600px"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
};

export default AskAINewModal;
