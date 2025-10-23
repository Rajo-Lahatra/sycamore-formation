'use client';
import { useEffect } from 'react';

export default function DayExport({ dayNumber, slides }) {
  useEffect(() => {
    // Démarrer l'impression automatiquement quand le composant est monté
    setTimeout(() => {
      window.print();
    }, 1000);
  }, []);

  // Fonction pour extraire le contenu d'une slide
  const getSlideContent = (slide) => {
    if (!slide || !slide.content) return '';
    
    try {
      // Pour les jours 2-5 : contenu HTML
      if (slide.content.props?.dangerouslySetInnerHTML?.__html) {
        return slide.content.props.dangerouslySetInnerHTML.__html;
      }
      
      // Pour le jour 1 : conversion JSX simple
      if (slide.content.props?.children) {
        return extractTextFromJSX(slide.content);
      }
      
      return '<p>Contenu non disponible</p>';
    } catch (error) {
      return `<p>Erreur d'extraction</p>`;
    }
  };

  // Extraction de texte depuis JSX
  const extractTextFromJSX = (jsxElement) => {
    if (!jsxElement || !jsxElement.props) return '';
    
    const extract = (node) => {
      if (!node) return '';
      
      if (Array.isArray(node)) {
        return node.map(extract).join('');
      }
      
      if (typeof node === 'string') {
        return node;
      }
      
      if (node.props?.children) {
        return extract(node.props.children);
      }
      
      return '';
    };
    
    return `<div>${extract(jsxElement)}</div>`;
  };

  return (
    <div className="export-container">
      <style jsx global>{`
        /* RESET COMPLET pour l'impression */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.4;
          color: #333;
          background: white;
          font-size: 12px;
        }
        
        .export-container {
          width: 100%;
        }
        
        /* Styles pour l'écran (prévisualisation) */
        @media screen {
          .screen-only {
            display: block;
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            border-bottom: 3px solid #8B4513;
            margin-bottom: 20px;
          }
          
          .slide-page {
            background: white;
            margin: 10px auto;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            max-width: 1000px;
          }
        }
        
        /* Styles pour l'impression */
        @media print {
          .screen-only {
            display: none !important;
          }
          
          .slide-page {
            page-break-after: always;
            padding: 15mm;
            margin: 0;
            box-shadow: none;
          }
          
          body {
            margin: 0;
            padding: 0;
          }
        }
        
        /* En-tête de document */
        .document-header {
          text-align: center;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid #8B4513;
        }
        
        .logos {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }
        
        .logo {
          height: 40px;
        }
        
        .document-title {
          color: #8B4513;
          font-size: 18px;
          margin: 10px 0 5px 0;
        }
        
        .document-subtitle {
          color: #654321;
          font-size: 14px;
          margin-bottom: 5px;
        }
        
        /* Styles du contenu des slides */
        .slide-header {
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid #8B4513;
        }
        
        .slide-title {
          color: #8B4513;
          font-size: 16px;
          margin-bottom: 5px;
        }
        
        .slide-number {
          color: #666;
          font-size: 11px;
        }
        
        .slide-content {
          line-height: 1.5;
        }
        
        .slide-content h2 {
          color: #8B4513;
          font-size: 14px;
          margin: 15px 0 8px 0;
          border-bottom: 1px solid #e0e0e0;
          padding-bottom: 4px;
        }
        
        .slide-content h3 {
          color: #654321;
          font-size: 13px;
          margin: 12px 0 6px 0;
        }
        
        .slide-content p {
          margin: 8px 0;
          text-align: justify;
        }
        
        .slide-content ul, .slide-content ol {
          margin: 8px 0;
          padding-left: 20px;
        }
        
        .slide-content li {
          margin: 4px 0;
        }
        
        .slide-content strong {
          color: #8B4513;
          font-weight: bold;
        }
        
        .slide-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 10px 0;
          font-size: 11px;
        }
        
        .slide-content th {
          background: #8B4513;
          color: white;
          padding: 6px;
          text-align: left;
          font-weight: bold;
        }
        
        .slide-content td {
          padding: 6px;
          border: 1px solid #ddd;
        }
        
        /* Pied de page */
        .slide-footer {
          margin-top: 20px;
          padding-top: 10px;
          border-top: 1px solid #e0e0e0;
          text-align: center;
          color: #666;
          font-size: 10px;
        }
      `}</style>

      {/* Message de prévisualisation (visible uniquement à l'écran) */}
      <div className="screen-only">
        <h2>📄 Export PDF - Jour {dayNumber}</h2>
        <p><strong>L'impression va démarrer automatiquement...</strong></p>
        <p>Si rien ne se passe, utilisez <strong>Ctrl+P</strong> (Windows) ou <strong>Cmd+P</strong> (Mac)</p>
        <p>Choisissez <strong>"Enregistrer au format PDF"</strong> comme destination</p>
        <button 
          onClick={() => window.print()}
          style={{
            background: '#8B4513',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          📋 Relancer l'impression
        </button>
      </div>

      {/* Contenu du document */}
      {slides.map((slide, index) => (
        <div key={index} className="slide-page">
          {/* En-tête du document (sur la première slide seulement) */}
          {index === 0 && (
            <div className="document-header">
              <div className="logos">
                <img src="/logo-jm.png" alt="JM Consulting" className="logo" />
                <img src="/logo-sycamore.png" alt="Sycamore Mining" className="logo" />
              </div>
              <h1 className="document-title">Formation Sycamore - Fiscalité Minière</h1>
              <h2 className="document-subtitle">Jour {dayNumber} - {slides.length} slides</h2>
            </div>
          )}
          
          {/* En-tête de la slide */}
          <div className="slide-header">
            <h3 className="slide-title">{slide.title || `Slide ${index + 1}`}</h3>
            <div className="slide-number">Slide {index + 1} sur {slides.length}</div>
          </div>
          
          {/* Contenu de la slide */}
          <div 
            className="slide-content"
            dangerouslySetInnerHTML={{ __html: getSlideContent(slide) }}
          />
          
          {/* Pied de page */}
          <div className="slide-footer">
            Formation Sycamore Mine Guinée SAU • Du 20 au 24 octobre 2025 • Jour {dayNumber}
          </div>
        </div>
      ))}
    </div>
  );
}