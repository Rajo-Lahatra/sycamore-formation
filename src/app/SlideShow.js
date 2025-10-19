// src/app/SlideShow.js
'use client';
import { useState, useEffect } from 'react';
import { useSlide } from './contexts/SlideContext';

export default function SlideShow({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setCurrentSlide } = useSlide();

  // Mettre à jour le slide courant dans le contexte
  useEffect(() => {
    setCurrentSlide(currentIndex + 1);
  }, [currentIndex, setCurrentSlide]);

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % slides.length;
      return newIndex;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev - 1 + slides.length) % slides.length;
      return newIndex;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slideshow-container">
      {/* Votre interface slideshow existante */}
      <div className="slide-nav">
        <button onClick={goToPrev} className="nav-button">←</button>
        <span className="slide-counter">
          Slide {currentIndex + 1} / {slides.length}
        </span>
        <button onClick={goToNext} className="nav-button">→</button>
      </div>

      {/* Navigation par miniatures si nécessaire */}
      <div className="slide-thumbnails">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}