import './globals.css'; 
import './content.css';
import { SlideProvider } from './contexts/SlideContext';
import { AuthProvider } from './contexts/AuthContext';

export const metadata = {
  title: 'Formation Sycamore - Fiscalité Minière',
  description: 'Planning détaillé de la formation sur la fiscalité minière guinéenne.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <AuthProvider>
          <SlideProvider>
            {children}
          </SlideProvider>
        </AuthProvider>
      </body>
    </html>
  );
}