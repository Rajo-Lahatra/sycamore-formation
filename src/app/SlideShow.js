// src/app/SlideShow.js
'use client';
import { useState, useEffect } from 'react';
import { useSlide } from './contexts/SlideContext';

export default function SlideShow({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setCurrentSlide } = useSlide();

  useEffect(() => {
    setCurrentSlide(currentIndex + 1);
  }, [currentIndex, setCurrentSlide]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Fonction pour rendre le contenu selon le format
  const renderSlideContent = () => {
    const currentSlide = slides[currentIndex];
    
    if (!currentSlide) return <p>Slide non disponible</p>;
    
    // Si le contenu est du JSX (Day1)
    if (React.isValidElement(currentSlide.content)) {
      return currentSlide.content;
    }
    
    // Si le contenu est une string HTML (Days 2-5)
    if (typeof currentSlide.content === 'string') {
      return (
        <div 
          dangerouslySetInnerHTML={{ __html: currentSlide.content }} 
        />
      );
    }
    
    // Fallback
    return <p>Format de slide non supporté</p>;
  };

  return (
    <div className="slideshow-container">
      {/* SLIDE PRINCIPAL */}
      <div className="main-slide-display">
        <div className="slide-content">
          {renderSlideContent()}
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="slide-nav">
        <button onClick={goToPrev} className="nav-button">← Précédent</button>
        <span className="slide-counter">
          Slide {currentIndex + 1} / {slides.length}
        </span>
        <button onClick={goToNext} className="nav-button">Suivant →</button>
      </div>

      {/* MINIATURES */}
      <div className="slide-thumbnails">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            title={slide.title}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}