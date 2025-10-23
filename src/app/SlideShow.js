'use client';
import { useSlide } from './contexts/SlideContext';

export default function SlideShow({ slides }) {
  const { currentSlide, setCurrentSlide } = useSlide();
  const currentIndex = currentSlide - 1;

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="slideshow-container">
      {/* Contrôles de navigation */}
      <div className="slide-controls">
        <button 
          onClick={prevSlide} 
          disabled={currentIndex === 0}
          className="nav-button"
        >
          ← Précédent
        </button>
        
        <span className="slide-counter">
          Slide {currentSlide} / {slides.length}
        </span>
        
        <button 
          onClick={nextSlide} 
          disabled={currentIndex === slides.length - 1}
          className="nav-button"
        >
          Suivant →
        </button>
      </div>

      {/* Conteneur principal avec une seule slide visible */}
      <div className="slides-wrapper">
        <div className="slide-viewport">
          {slides.map((slide, index) => (
            <div
              key={index}
              id={`slide-${index}`}
              className={`slide-content ${index === currentIndex ? 'active' : 'hidden'}`}
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>

      {/* Indicateur de progression */}
      <div className="slide-progress">
        <div 
          className="progress-bar" 
          style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}