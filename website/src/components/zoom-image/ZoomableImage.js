import React, { useState, useRef, useEffect } from 'react';
import './ZoomableImage.css';

const ZoomableImage = ({ src, alt, caption }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const tooltipRef = useRef(null);
    const imageRef = useRef(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleMouseMove = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        setTooltipPosition({ x, y });
    };

    const handleHover = () => {
        if (imageRef.current) {
            imageRef.current.style.cursor = 'zoom-in';
        }
    };

    const handleHoverOut = () => {
        if (imageRef.current) {
            imageRef.current.style.cursor = 'pointer';
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsModalOpen(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (tooltipRef.current) {
            tooltipRef.current.style.top = tooltipPosition.y + 20 + 'px';
            tooltipRef.current.style.left = tooltipPosition.x + 20 + 'px';
        }
    }, [tooltipPosition]);

    return (
        <div>
            <figure
                className="zoomable-image"
                onClick={openModal}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
            >
                <img src={src} alt={alt} style={{ width: '700px' }} ref={imageRef} />
                <figcaption align="center">
                    <i>{caption}</i>
                    <span className="image-tooltip" ref={tooltipRef}>
                        <i className="fas fa-search-plus"></i>
                    </span>
                </figcaption>
            </figure>

            {isModalOpen && (
                <div className="zoomable-modal-overlay" onClick={closeModal}>
                    <div className="zoomable-modal-content">
                        <img src={src} alt={alt} />
                        <figcaption align="center">
                            <i>{caption}</i>
                        </figcaption>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ZoomableImage;
