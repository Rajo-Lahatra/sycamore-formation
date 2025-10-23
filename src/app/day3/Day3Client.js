// src/app/day3/Day3Client.js
'use client';

import ContentWrapper from '../ContentWrapper';
import SlideShow from '../SlideShow';
import QandA from '../../components/QandA';
import ProtectedContent from '../../components/ProtectedContent';

export default function Day3Client({ slides }) {
  return (
    <ProtectedContent dayNumber={3}>
      <ContentWrapper title="Jour 3: TVA, PF, RNS" date="22 octobre 2025">
        <SlideShow slides={slides} />
        <QandA dayNumber={3} />
      </ContentWrapper>
    </ProtectedContent>
  );
}