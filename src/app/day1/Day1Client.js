// src/app/day1/Day1Client.js
'use client';

import { useState } from 'react';
import ContentWrapper from '../ContentWrapper';
import SlideShow from '../SlideShow';
import QandA from '../../components/QandA';

export default function Day1Client({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(1);

  // Fonction pour détecter le changement de slide
  const handleSlideChange = (slideIndex) => {
    setCurrentSlide(slideIndex + 1); // +1 car les indices commencent à 0
  };

  return (
    <ContentWrapper title="Jour 1: Introduction" date="20 octobre 2025">
      <SlideShow slides={slides} onSlideChange={handleSlideChange} />
      <QandA dayNumber={1} currentSlide={currentSlide} />
    </ContentWrapper>
  );
}