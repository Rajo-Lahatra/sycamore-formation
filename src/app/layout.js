// Fichier : sycamore-formation/src/app/layout.js

import './globals.css'; 
import './content.css'; // S'assure que le CSS de contenu est bien importé

export const metadata = {
  title: 'Formation Sycamore - Fiscalité Minière',
  description: 'Planning détaillé de la formation sur la fiscalité minière guinéenne.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {/* Children est le contenu principal, y compris ContentWrapper */}
        {children}
      </body>
    </html>
  );
}