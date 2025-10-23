import DayExport from '../DayExport';
// Importez les slides du jour 4 existant  
import { slides as day4Slides } from '../../day2/page';

export default function Day2ExportPage() {
  return <DayExport dayNumber={4} slides={day4Slides} />;
}