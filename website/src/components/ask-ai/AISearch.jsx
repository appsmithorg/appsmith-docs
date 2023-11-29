import React, { useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Markdown from 'markdown-to-jsx';
import { FaSpinner } from 'react-icons/fa';
import FeedbackWidget from '../feedback';
import './css/AISearch.css';

const AISearch = forwardRef((props, ref) => {
    const [inputValue, setInputValue] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [answer, setAnswer] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showExamples, setShowExamples] = useState(true);
    const [isAnswerComplete, setIsAnswerComplete] = useState(false);
    const [termSelected, setTermSelected] = useState(false);

    const commonSearchQueries = [
        "How do I setup appsmith ?",
        "How do I connect to my local database ?",
        "How can I send parameters to my query ?",
        "How can I transform my query response ?",
        "How can I trigger multiple queries conditionally ?"
    ];

    const resetState = () => {
        setInputValue('');
        setSearchTerm('');
        setAnswer('');
        setIsLoading(false);
        setShowExamples(true);
        setTermSelected(false);
        setIsAnswerComplete(false);
    };

    const resetGeneratedResponse = () => {
        setAnswer('');
        setIsLoading(false);
        setShowExamples(false);
        setTermSelected(false);
        setIsAnswerComplete(false);
    };


    const allowToAddAnotherRequest = () => {
        setIsLoading(false);
        setShowExamples(false);
        setTermSelected(false);
        setIsAnswerComplete(false);
    }

    const closeModal = () => {
        if (props.closeModal) {
            props.closeModal();
        }
        setTermSelected(false);
        setAnswer('');
        setIsLoading(false);
        setShowExamples(true);
    };

    useImperativeHandle(ref, () => ({
        resetModal: () => {
            resetState();
            closeModal();
        },
        closeModal,
    }));

    const fetchData = async (query) => {
        setIsLoading(true);
        setAnswer('');
        setSearchTerm(query);
        setShowExamples(false);
        setIsAnswerComplete(false);

        try {
            const apiUrl = "https://hook.eu1.make.com/zw41brw94vfiwuue91riqmoe2ms2nhf6";
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "input": query }),
            });

            if (response.ok) {
                const data = await response.text();
                setIsLoading(false);
                setAnswer(data);
                setIsAnswerComplete(true);
                setInputValue('');
                setSearchTerm('');
                return;
            }

            if (!response.ok) {
                console.log(`HTTP error! Status: ${response.status}`);
                setIsLoading(false);
                setAnswer("Sorry, I don't know how to help with that.");
            }

        } catch (error) {
            console.error(error);
            setIsLoading(false);
            setAnswer("Sorry, I don't know how to help with that.");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (!isLoading) {
                fetchData(inputValue);
                if (isAnswerComplete) {
                    resetGeneratedResponse();
                }
            }
        }
    };

    const handleChange = (e) => {
        if (!isLoading) {
            setInputValue(e.target.value);
            if (isAnswerComplete) {
                allowToAddAnotherRequest();
            }
        }
    };

    const handleCommonQueryClick = (query) => {
        if (!isLoading) {
            setTermSelected(true);
            fetchData(query);
        }
    };

    useEffect(() => {
        if (ExecutionEnvironment.canUseDOM) {
            const resultContainer = document.querySelector('.ai-result-container');
            const handleScroll = () => {
                resultContainer.classList.add('scrolled');
            };
            if (!resultContainer.classList.contains('scrolled'))
                document.addEventListener('scroll', handleScroll);


            return () => {
                document.removeEventListener('scroll', handleScroll);
                resultContainer.classList.remove('scrolled');
            };
        }
    }, []);


    return (
        <div className='ai-search-result-wrapper'>
            <header className='ai-search-bar-header'>
                <div className="custom-search-container">
                    <img src="../../../img/ask-ai-robot-icon.svg" alt="Ask AI"></img>
                    <input
                        id="question-input"
                        name="question-input"
                        placeholder="How do I upload a file to S3?"
                        type="text"
                        value={termSelected ? searchTerm : inputValue}
                        onKeyDown={handleKeyDown}
                        onChange={handleChange}
                        disabled={isLoading && !isAnswerComplete}
                    /><span className="ai-submit-message">Submit message</span>
                    <img src="../../../img/ai-enter-icon.svg" alt="Enter"></img>
                </div>
            </header>
            {
                isLoading && <div className='loading-icon-container'>
                    <FaSpinner className='loading-icon' />
                </div>
            }
            <div className='ai-result-container'>
                {showExamples && (
                    <div className='ai-query-wrapper'>
                        <span className='ai-query-heading'>Examples</span>
                        {showExamples && commonSearchQueries.map((query, index) => (
                            <span
                                key={index}
                                className='ai-search-term'
                                onClick={() => handleCommonQueryClick(query)}
                            >
                                {query}
                            </span>
                        ))}
                    </div>
                )}
                {!isLoading && answer && (
                    <div className='search-term-answer'>
                        <Markdown>{answer}</Markdown>
                    </div>
                )}
                {isAnswerComplete &&
                    <div className="ai-experimental">
                        <span className='ai-experimental-info'>
                            Appsmith AI is experiemental and may produce incorrect answers.
                        </span>
                    </div>

                }
                {isAnswerComplete && <FeedbackWidget isCalledFromAISearch={true} userTerm={searchTerm} generatedAnswer={answer} />}
            </div>
        </div>

    );
});

export default AISearch;
