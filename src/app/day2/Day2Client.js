'use client';

import ContentWrapper from '../ContentWrapper';
import SlideShow from '../SlideShow';
import QandA from '../../components/QandA';
import ProtectedContent from '../../components/ProtectedContent';
import DownloadSlides from '../../components/PDFExport';

export default function Day2Client({ slides }) {
  return (
    <ProtectedContent dayNumber={2}>
      <ContentWrapper title="Jour 2: Fiscalité du Personnel (RTS, VF, CNSS, TA & ONFPP" date="21 octobre 2025">
        <SlideShow slides={slides} />
        <DownloadSlides dayNumber={2} slides={slides} />
        <QandA dayNumber={2} />
      </ContentWrapper>
    </ProtectedContent>
  );
}