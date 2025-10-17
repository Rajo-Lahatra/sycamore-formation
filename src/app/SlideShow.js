// Fichier : src/app/SlideShow.js

'use client'; // Indique que ce composant doit s'exécuter côté client

import React, { useState } from 'react';

export default function SlideShow({ slides }) {
  // État pour suivre l'index de la diapositive actuelle
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  // Fonctions pour naviguer
  const goToNext = () => {
    setCurrentSlideIndex((prevIndex) => Math.min(prevIndex + 1, slides.length - 1));
  };

  const goToPrev = () => {
    setCurrentSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  
  // Obtenir la diapositive actuelle
  const currentSlide = slides[currentSlideIndex];
  
  // Affichage de la diapositive et des contrôles
  return (
    <div className="slideshow">
      
      {/* 1. Affichage de la diapositive actuelle */}
      <section className="slide-section">
        {currentSlide.content}
      </section>
      
      {/* 2. Contrôles de navigation */}
      <div className="slide-controls">
        <button 
          onClick={goToPrev} 
          disabled={currentSlideIndex === 0}
          className="nav-button prev-button"
        >
          &larr; Diapositive Précédente
        </button>
        
        <span className="slide-counter">
          {currentSlideIndex + 1} / {slides.length}
        </span>
        
        <button 
          onClick={goToNext} 
          disabled={currentSlideIndex === slides.length - 1}
          className="nav-button next-button"
        >
          Diapositive Suivante &rarr;
        </button>
      </div>
      
    </div>
  );
}