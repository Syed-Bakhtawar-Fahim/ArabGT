import React, { useState, useEffect, useRef } from 'react';
import './CarSlider.css';

const CarSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const slidesContainerRef = useRef(null);
    const slideWidth = window.innerWidth * 0.475; // width of one slide
    const visibleSlides = 2; // number of visible slides

    const slides = [
        "assets/car1.png",
        "assets/car2.png",
        "assets/car3.png",
        
    ];

    const totalSlides = slides.length;

    // Clone first and last slides for infinite loop effect
    const allSlides = [slides[totalSlides - 1], ...slides, slides[0]];

    useEffect(() => {
        const offset = -currentIndex * slideWidth + (slideWidth * (visibleSlides - 1)) / 2;
        slidesContainerRef.current.style.transform = `translateX(${offset}px)`;
    }, [currentIndex, slideWidth]);

    const showSlide = (index) => {
        if (index >= allSlides.length - 1) {
            setTimeout(() => setCurrentIndex(1), 500);
            slidesContainerRef.current.style.transition = 'none';
        } else if (index <= 0) {
            setTimeout(() => setCurrentIndex(totalSlides), 500);
            slidesContainerRef.current.style.transition = 'none';
        } else {
            setCurrentIndex(index);
            slidesContainerRef.current.style.transition = 'transform 0.5s ease-in-out';
        }
    };

    const updatePagination = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='CarSlider'>
            <div className="slider">
            <div className="slides" ref={slidesContainerRef}>
                {allSlides.map((slide, index) => (
                    <img src={slide} alt={`Slide ${index}`} key={index} />
                ))}
            </div>

            {/* Pagination Lines */}
            <div className="pagination">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={currentIndex === index + 1 ? 'active' : ''}
                        onClick={() => updatePagination(index + 1)}
                    ></div>
                ))}
            </div>
        </div>
        </div>


    );
};

export default CarSlider;
