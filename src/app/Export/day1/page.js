import DayExport from '../DayExport';
// Importez les slides du jour 1 existant
import { slides as day1Slides } from '../../day1/page'; 

export default function Day1ExportPage() {
  return <DayExport dayNumber={1} slides={day1Slides} />;
}