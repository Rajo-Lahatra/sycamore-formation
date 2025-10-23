import DayExport from '../DayExport';
// Importez les slides du jour 2 existant  
import { slides as day2Slides } from '../../day2/page';

export default function Day2ExportPage() {
  return <DayExport dayNumber={2} slides={day2Slides} />;
}