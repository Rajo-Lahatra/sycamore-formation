// Fichier : sycamore-formation/src/app/layout.js

import './globals.css'; // Importez le fichier CSS global

export const metadata = {
  title: 'Formation Sycamore - Fiscalité Minière',
  description: 'Planning détaillé de la formation sur la fiscalité minière guinéenne.',
};

// Le composant RootLayout DOIT prendre 'children' en paramètre.
// 'children' représente votre page.js (et toutes les autres pages futures).
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}