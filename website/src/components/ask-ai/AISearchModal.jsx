import React, { useEffect, useRef } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import AISearch from '@site/src/components/ask-ai/AISearch';
import './css/AISearch.css';

const AISearchModal = ({ show, closeModal }) => {
    const modalRef = useRef();
    const childRef = useRef();

    const handleResetModal = () => {
        if (childRef.current) {
            childRef.current.resetModal();
        }
    };


    useEffect(() => {
        if (ExecutionEnvironment.canUseDOM) {
            const checkIfClickedOutside = (e) => {
                if (modalRef.current && !modalRef.current.contains(e.target) && show) {
                    handleResetModal();
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
                <div className="">
                    <AISearch ref={childRef} />
                </div>
            </div>
        </div>
    );
};

export default AISearchModal;
