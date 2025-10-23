import DayExport from '../DayExport';
// Importez les slides du jour 3 existant  
import { slides as day3Slides } from '../../day2/page';

export default function Day2ExportPage() {
  return <DayExport dayNumber={3} slides={day3Slides} />;
}