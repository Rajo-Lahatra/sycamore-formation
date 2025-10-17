// Fichier : src/app/ContentWrapper.js

'use client'; 

import { usePathname } from 'next/navigation';

export default function ContentWrapper({ children, title, date }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  if (isHomePage) {
      // Si c'est la page principale, on laisse le contenu tel quel
      return <>{children}</>;
  }
  
  // Si ce n'est PAS la page principale (i.e., /dayX) :
  return (
    <div className="content-body"> 
      {/* Structure de l'en-tête pour les pages de contenu */}
      <div className="content-title-header">
        
        {/* LOGOS : J&M est listé en premier pour être à gauche (order: 1) */}
        <div className="logo-container">
            <img 
                src="/logo-jm.png" 
                alt="Logo JM Consulting" 
                className="logo jm-logo" 
            />
            <img 
                src="/logo-sycamore.png" 
                alt="Logo Sycamore Mine Guinée SAU" 
                className="logo sycamore-logo" 
            />
        </div>
        
        <h1>{title}</h1>
        <p className="content-date">{date}</p>
        
        {/* Bouton de retour à la page principale (super utile !) */}
        <a href="/" className="back-button">
            &larr; Retour au Planning
        </a>
      </div>
      
      {/* Contenu enfant (Diaporama) */}
      <div className="content-container">
        {children}
      </div>
    </div>
  );
}