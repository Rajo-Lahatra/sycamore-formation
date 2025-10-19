// src/app/day2/Day2Client.js
'use client';

import ContentWrapper from '../ContentWrapper';
import SlideShow from '../SlideShow';
import QandA from '../../components/QandA';

export default function Day2Client({ slides }) {
  return (
    <ContentWrapper title="Jour 2: Fiscalité du Personnel" date="21 octobre 2025">
      <SlideShow slides={slides} />
      <QandA dayNumber={2} />
    </ContentWrapper>
  );
}