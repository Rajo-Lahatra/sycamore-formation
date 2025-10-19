// src/app/contexts/SlideContext.js
'use client';
import React, { createContext, useContext, useState } from 'react';

const SlideContext = createContext();

export function SlideProvider({ children }) {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <SlideContext.Provider value={{ currentSlide, setCurrentSlide }}>
      {children}
    </SlideContext.Provider>
  );
}

export function useSlide() {
  const context = useContext(SlideContext);
  if (!context) {
    throw new Error('useSlide must be used within a SlideProvider');
  }
  return context;
}