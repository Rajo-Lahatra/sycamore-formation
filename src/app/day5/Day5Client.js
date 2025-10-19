// src/app/day5/Day5Client.js
'use client';

import ContentWrapper from '../ContentWrapper';
import SlideShow from '../SlideShow';
import QandA from '../../components/QandA';

export default function Day5Client({ slides }) {
  return (
    <ContentWrapper title="Jour 5: Cas pratiques sur Remboursement TVA & Contrôle Fiscal" date="24 octobre 2025">
      <SlideShow slides={slides} />
      <QandA dayNumber={5} />
    </ContentWrapper>
  );
}