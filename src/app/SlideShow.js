// Fichier : src/app/SlideShow.js

'use client'; 

import React, { useState, useEffect } from 'react';

export default function SlideShow({ slides }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  // Fonctions pour naviguer
  const goToNext = () => {
    setCurrentSlideIndex((prevIndex) => Math.min(prevIndex + 1, slides.length - 1));
  };

  const goToPrev = () => {
    setCurrentSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  
  // Gestion de la navigation au clavier (optionnel, mais pratique)
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
      
      {/* Bouton de navigation Précédent (Gauche) */}
      <button 
        onClick={goToPrev} 
        disabled={currentSlideIndex === 0}
        className="nav-button prev-button slide-nav-side"
        aria-label="Diapositive précédente"
      >
        &#9664; {/* Flèche gauche */}
      </button>

      <div className="slideshow">
        
        {/* 1. Affichage de la diapositive actuelle */}
        <section className="slide-section">
          {currentSlide.content}
        </section>
        
        {/* 2. Affichage du compteur de diapositives en bas (nouveau) */}
        <div className="slide-controls-bottom">
          <span className="slide-counter">
            Diapositive {currentSlideIndex + 1} / {slides.length}
          </span>
        </div>
        
      </div>

      {/* Bouton de navigation Suivant (Droite) */}
      <button 
        onClick={goToNext} 
        disabled={currentSlideIndex === slides.length - 1}
        className="nav-button next-button slide-nav-side"
        aria-label="Diapositive suivante"
      >
        &#9654; {/* Flèche droite */}
      </button>
      
    </div>
  );
}