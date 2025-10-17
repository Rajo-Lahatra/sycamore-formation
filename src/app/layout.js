// Fichier : sycamore-formation/src/app/layout.js

import './globals.css'; // Importe les styles généraux (Header, Planning...)
import './content.css'; // NOUVEAU : Importe les styles spécifiques aux slides

export const metadata = {
  title: 'Formation Sycamore - Fiscalité Minière',
  description: 'Planning détaillé de la formation sur la fiscalité minière guinéenne.',
};

export default function RootLayout({ children }) {
  // Le style est appliqué à <body>, mais sera ciblé par des classes CSS spécifiques 
  // dans page.js et dayX/page.js pour que seul le contenu de dayX soit affecté.
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}