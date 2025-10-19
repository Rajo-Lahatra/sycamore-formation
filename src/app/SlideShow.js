// src/app/SlideShow.js
'use client'; 

import React, { useState, useEffect } from 'react';

export default function SlideShow({ slides, onSlideChange }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  const goToNext = () => {
    const newIndex = Math.min(currentSlideIndex + 1, slides.length - 1);
    setCurrentSlideIndex(newIndex);
    if (onSlideChange) {
      onSlideChange(newIndex + 1); // +1 car les slides commencent à 1
    }
  };

  const goToPrev = () => {
    const newIndex = Math.max(currentSlideIndex - 1, 0);
    setCurrentSlideIndex(newIndex);
    if (onSlideChange) {
      onSlideChange(newIndex + 1);
    }
  };
  
  // Gestion de la navigation au clavier
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' && currentSlideIndex < slides.length - 1) {
        goToNext();
      } else if (event.key === 'ArrowLeft' && currentSlideIndex > 0) {
        goToPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlideIndex, slides.length]); 
  
  const currentSlide = slides[currentSlideIndex];
  
  return (
    <div className="slideshow-wrapper"> 
      
      <button 
        onClick={goToPrev} 
        disabled={currentSlideIndex === 0}
        className="nav-button prev-button slide-nav-side"
        aria-label="Diapositive précédente"
      >
        &#9664;
      </button>

      <div className="slideshow">
        
        <section className="slide-section">
          <div className="slide-header">
            <span className="slide-number">
              Slide {currentSlideIndex + 1} sur {slides.length}
            </span>
          </div>
          {currentSlide.content}
        </section>
        
        <div className="slide-controls-bottom">
          <button 
            onClick={goToPrev} 
            disabled={currentSlideIndex === 0}
            className="nav-button"
          >
            Précédent
          </button>
          
          <span className="slide-counter">
            {currentSlideIndex + 1} / {slides.length}
          </span>
          
          <button 
            onClick={goToNext} 
            disabled={currentSlideIndex === slides.length - 1}
            className="nav-button"
          >
            Suivant
          </button>
        </div>
        
      </div>

      <button 
        onClick={goToNext} 
        disabled={currentSlideIndex === slides.length - 1}
        className="nav-button next-button slide-nav-side"
        aria-label="Diapositive suivante"
      >
        &#9654;
      </button>
      
    </div>
  );
}