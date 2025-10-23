'use client';
import ContentWrapper from '../ContentWrapper';
import SlideShow from '../SlideShow';
import QandA from '../../components/QandA';
import ProtectedContent from '../../components/ProtectedContent';


export default function Day1Client({ slides }) {
  return (
    <ProtectedContent dayNumber={1}>
      <ContentWrapper title="Jour 1: Introduction à la fiscalité minière" date="20 octobre 2025">
        <SlideShow slides={slides} />
        
        <QandA dayNumber={1} />
      </ContentWrapper>
    </ProtectedContent>
  );
}