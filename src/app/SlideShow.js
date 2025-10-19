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

  // Fonction pour détecter si c'est du JSX (méthode améliorée)
  const isJSX = (content) => {
    if (!content) return false;
    
    // Si c'est un élément React valide
    if (typeof content === 'object' && content.$$typeof) {
      return true;
    }
    
    // Si c'est un fragment React
    if (Array.isArray(content)) {
      return content.some(item => typeof item === 'object' && item?.$$typeof);
    }
    
    return false;
  };

  // Fonction pour rendre le contenu selon le format
  const renderSlideContent = () => {
    const currentSlide = slides[currentIndex];
    
    if (!currentSlide || !currentSlide.content) {
      return <p>Slide non disponible</p>;
    }
    
    const { content } = currentSlide;
    
    // Si le contenu est du JSX (Day1)
    if (isJSX(content)) {
      return content;
    }
    
    // Si le contenu est une string HTML (Days 2-5)
    if (typeof content === 'string') {
      return (
        <div 
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      );
    }
    
    // Fallback avec plus d'informations de debug
    console.warn('Format de slide non supporté:', { 
      type: typeof content,
      content: content
    });
    return <p>Format de slide non supporté - Type: {typeof content}</p>;
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