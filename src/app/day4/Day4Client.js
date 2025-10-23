'use client';

import ContentWrapper from '../ContentWrapper';
import SlideShow from '../SlideShow';
import QandA from '../../components/QandA';
import ProtectedContent from '../../components/ProtectedContent';
import DownloadSlides from '../../components/PDFExport';

export default function Day4Client({ slides }) {
  return (
    <ProtectedContent dayNumber={4}>
      <ContentWrapper title="Jour 4: IS, IMF, IRCM, Patente, CFU..." date="23 octobre 2025">
        <SlideShow slides={slides} />
        <DownloadSlides dayNumber={4} slides={slides} />
        <QandA dayNumber={4} />
      </ContentWrapper>
    </ProtectedContent>
  );
}