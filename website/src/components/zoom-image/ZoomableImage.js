import React, { useState, useRef } from 'react';
import './ZoomableImage.css';

const ZoomableImage = ({ src, alt, caption }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const tooltipRef = useRef(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleMouseMove = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        tooltipRef.current.style.top = y + 20 + 'px';
        tooltipRef.current.style.left = x + 20 + 'px';
    };

    return (
        <div>
            <figure
                className="zoomable-image image-tooltip"
                onClick={openModal}
                onMouseMove={handleMouseMove}
            >
                <img src={src} alt={alt} />
                <figcaption align="center">
                    <i>{caption}</i>
                    <span
                        id="image-tooltip-span"
                        ref={tooltipRef}
                    >
                        Click to expand
                    </span>
                </figcaption>
            </figure>

            {isModalOpen && (
                <div className="zoomable-modal-overlay" onClick={closeModal}>
                    <div className="zoomable-modal-content">
                        <img src={src} alt={alt} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ZoomableImage;
