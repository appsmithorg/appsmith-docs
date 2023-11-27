import React, { useState, useImperativeHandle, forwardRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { FaRobot, FaSpinner } from 'react-icons/fa';
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

    let eventSource;

    const commonSearchQueries = [
        "How to install Appsmith on Docker?",
        "How to display, filter and search data in a Table?",
        "How to submit form data?"
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
        setInputValue('');
        setSearchTerm('');
        setAnswer('');
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
            const projectURL = 'https://ghgdtsupocntpodexlbh.supabase.co/functions/v1/vector-search';
            const queryURL = `${projectURL}/stream?query=${query}`;

            eventSource = new EventSource(queryURL);

            eventSource.addEventListener('error', (err) => {
                setIsLoading(false);
                console.error(err);
            });

            eventSource.addEventListener('message', (e) => {
                setIsLoading(false);

                if (e.data.includes("[DONE]")) {
                    eventSource.close();
                    setIsAnswerComplete(true);
                    return;
                }

                const completionResponse = JSON.parse(e.data);
                const text = completionResponse.choices[0].text;

                setAnswer((prevAnswer) => prevAnswer + text);
            });
        } catch (error) {
            console.error(error);
            setIsLoading(false);
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
                resetGeneratedResponse();
            }
        }
    };

    const handleCommonQueryClick = (query) => {
        if (!isLoading) {
            setTermSelected(true);
            fetchData(query);
        }
    };

    return (
        <div className='ai-search-result-wrapper'>
            <header className='ai-search-bar-header'>
                <div className="custom-search-container">
                    <img src="../../../img/ask-ai-robot-icon.svg" alt="Ask AI" className='ai-search-icon'></img>
                    <input
                        id="question-input"
                        name="question-input"
                        placeholder="How do I upload a file to S3?"
                        type="text"
                        value={isAnswerComplete ? '' : termSelected ? searchTerm : inputValue}
                        onKeyDown={handleKeyDown}
                        onChange={handleChange}
                        disabled={isLoading && !isAnswerComplete}
                    />
                </div>
            </header>
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

                {
                    isLoading && <div className='loading-icon-container'>
                        <FaSpinner className='loading-icon' />
                    </div>
                }
                {!isLoading && searchTerm && (
                    <div className='search-term-answer'>
                        <ReactMarkdown>{answer}</ReactMarkdown>
                    </div>
                )}
                {isAnswerComplete &&
                    <div className="ai-experimental">
                        <img src="../../../img/ai-experimental-Icon.png" alt="experimental" style={{ width: '24px', height: '24px' }}></img>
                        <span className='ai-experimental-info'>
                            Appsmith AI is experiemental and may produce incorrect answers. Always verify the output before executing.
                        </span>
                    </div>

                }
                {isAnswerComplete && <FeedbackWidget isCalledFromAISearch={true} userTerm={searchTerm} generatedAnswer={answer} />}
            </div>
        </div>

    );
});

export default AISearch;
