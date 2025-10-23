'use client';

import ContentWrapper from '../ContentWrapper';
import SlideShow from '../SlideShow';
import QandA from '../../components/QandA';
import ProtectedContent from '../../components/ProtectedContent';
import DownloadSlides from '../../components/PDFExport';

export default function Day5Client({ slides }) {
  return (
    <ProtectedContent dayNumber={5}>
      <ContentWrapper title="Jour 5: Cas pratiques sur Remboursement TVA & Contrôle Fiscal" date="24 octobre 2025">
        <SlideShow slides={slides} />
        <DownloadSlides dayNumber={5} slides={slides} />
        <QandA dayNumber={5} />
      </ContentWrapper>
    </ProtectedContent>
  );
}