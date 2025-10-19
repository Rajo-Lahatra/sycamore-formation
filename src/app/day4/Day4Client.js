// src/app/day4/Day4Client.js
'use client';

import ContentWrapper from '../ContentWrapper';
import SlideShow from '../SlideShow';
import QandA from '../../components/QandA';

export default function Day4Client({ slides }) {
  return (
    <ContentWrapper title="Jour 4: IS & IMF" date="23 octobre 2025">
      <SlideShow slides={slides} />
      <QandA dayNumber={4} />
    </ContentWrapper>
  );
}