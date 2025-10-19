// Fichier : sycamore-formation/src/app/layout.js

import './globals.css'; 
import './content.css'; // S'assure que le CSS de contenu est bien importé
import { SlideProvider } from './contexts/SlideContext'; // Import du Provider

export const metadata = {
  title: 'Formation Sycamore - Fiscalité Minière',
  description: 'Planning détaillé de la formation sur la fiscalité minière guinéenne.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {/* Envelopper children avec SlideProvider */}
        <SlideProvider>
          {children}
        </SlideProvider>
      </body>
    </html>
  );
}