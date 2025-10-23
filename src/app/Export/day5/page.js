import DayExport from '../DayExport';
// Importez les slides du jour 5 existant  
import { slides as day5Slides } from '../../day2/page';

export default function Day2ExportPage() {
  return <DayExport dayNumber={5} slides={day5Slides} />;
}