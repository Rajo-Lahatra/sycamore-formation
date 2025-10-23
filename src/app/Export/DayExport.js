'use client';
import { useEffect } from 'react';

export default function DayExport({ dayNumber, slides }) {
  useEffect(() => {
    setTimeout(() => {
      window.print();
    }, 1000);
  }, []);

  // FONCTION AMÉLIORÉE pour extraire le contenu
  const getSlideContent = (slide) => {
    if (!slide || !slide.content) {
      return '<p>Contenu non disponible</p>';
    }

    try {
      console.log('🔍 Analyse slide:', slide.title, slide.content);
      
      // CAS 1: Si le contenu a directement du HTML (jours 2-5)
      if (slide.content.props?.dangerouslySetInnerHTML?.__html) {
        console.log('✅ Format HTML détecté');
        return slide.content.props.dangerouslySetInnerHTML.__html;
      }

      // CAS 2: Si c'est du JSX avec enfants (jour 1)
      if (slide.content.props?.children) {
        console.log('✅ Format JSX détecté');
        return extractFromJSX(slide.content);
      }

      // CAS 3: Si c'est un fragment React (<>...</>)
      if (slide.content.$$typeof) {
        console.log('✅ Format React Fragment détecté');
        return extractFromReactElement(slide.content);
      }

      console.log('❌ Format non reconnu:', slide.content);
      return `<p>Format non supporté: ${typeof slide.content}</p>`;

    } catch (error) {
      console.error('❌ Erreur extraction:', error);
      return `<p>Erreur: ${error.message}</p>`;
    }
  };

  // Extraction depuis JSX/React elements
  const extractFromJSX = (jsxElement) => {
    if (!jsxElement || !jsxElement.props) return '';
    
    const extract = (node, depth = 0) => {
      if (depth > 10) return ''; // Éviter la récursion infinie
      if (!node) return '';
      
      // Si c'est un tableau, traiter chaque élément
      if (Array.isArray(node)) {
        return node.map(item => extract(item, depth + 1)).join('');
      }
      
      // Si c'est une chaîne de caractères
      if (typeof node === 'string') {
        return node;
      }
      
      // Si c'est un nombre
      if (typeof node === 'number') {
        return node.toString();
      }
      
      // Si c'est un élément React avec des props
      if (node.props) {
        const tag = node.type || 'div';
        const childrenContent = extract(node.props.children, depth + 1);
        const className = node.props.className ? ` class="${node.props.className}"` : '';
        
        // Appliquer les balises HTML appropriées
        if (tag === 'h1' || tag === 'h2' || tag === 'h3' || tag === 'h4') {
          return `<${tag}${className}>${childrenContent}</${tag}>`;
        } else if (tag === 'p') {
          return `<p${className}>${childrenContent}</p>`;
        } else if (tag === 'ul') {
          return `<ul${className}>${childrenContent}</ul>`;
        } else if (tag === 'li') {
          return `<li${className}>${childrenContent}</li>`;
        } else if (tag === 'strong' || tag === 'b') {
          return `<strong>${childrenContent}</strong>`;
        } else if (tag === 'em' || tag === 'i') {
          return `<em>${childrenContent}</em>`;
        } else if (tag === 'div' || tag === 'span') {
          return `<${tag}${className}>${childrenContent}</${tag}>`;
        } else {
          // Pour les autres types, retourner juste le contenu
          return childrenContent;
        }
      }
      
      // Si c'est un fragment React (<>...</>)
      if (node.$$typeof) {
        return extract(node.props?.children, depth + 1);
      }
      
      return '';
    };
    
    return extract(jsxElement);
  };

  // Alternative pour les éléments React
  const extractFromReactElement = (element) => {
    try {
      // Méthode simple: convertir en string et extraire le texte
      const elementString = JSON.stringify(element);
      const textContent = elementString
        .replace(/{"children":"([^"]*)"}/g, '$1')
        .replace(/{"children":\[(.*?)\]}/g, '$1')
        .replace(/\\n/g, ' ')
        .replace(/\\"/g, '"')
        .replace(/\s+/g, ' ')
        .trim();
      
      return `<div>${textContent}</div>`;
    } catch (error) {
      return `<p>Impossible d'extraire le contenu React</p>`;
    }
  };

  return (
    <div className="export-container">
      <style jsx global>{`
        /* RESET COMPLET */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Arial', sans-serif; 
          line-height: 1.5;
          color: #333;
          background: white;
          font-size: 13px;
        }
        
        /* Styles écran */
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
        
        /* Styles impression */
        @media print {
          .screen-only { display: none !important; }
          .slide-page { 
            page-break-after: always; 
            padding: 15mm;
            margin: 0;
          }
          body { margin: 0; padding: 0; }
        }
        
        /* En-tête */
        .document-header {
          text-align: center;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 2px solid #8B4513;
        }
        
        .logos {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }
        
        .logo { height: 45px; }
        
        .document-title {
          color: #8B4513;
          font-size: 20px;
          margin: 10px 0 5px 0;
        }
        
        .document-subtitle {
          color: #654321;
          font-size: 16px;
        }
        
        /* Contenu slides */
        .slide-header {
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid #8B4513;
        }
        
        .slide-title {
          color: #8B4513;
          font-size: 18px;
          margin-bottom: 5px;
        }
        
        .slide-number {
          color: #666;
          font-size: 12px;
        }
        
        .slide-content {
          line-height: 1.5;
        }
        
        .slide-content h2 {
          color: #8B4513;
          font-size: 16px;
          margin: 15px 0 8px 0;
          border-bottom: 1px solid #e0e0e0;
          padding-bottom: 4px;
        }
        
        .slide-content h3 {
          color: #654321;
          font-size: 14px;
          margin: 12px 0 6px 0;
        }
        
        .slide-content p {
          margin: 8px 0;
        }
        
        .slide-content ul {
          margin: 10px 0;
          padding-left: 20px;
        }
        
        .slide-content li {
          margin: 5px 0;
        }
        
        .slide-content strong {
          color: #8B4513;
          font-weight: bold;
        }
        
        /* Pied de page */
        .slide-footer {
          margin-top: 25px;
          padding-top: 10px;
          border-top: 1px solid #e0e0e0;
          text-align: center;
          color: #666;
          font-size: 11px;
        }
      `}</style>

      {/* Message écran */}
      <div className="screen-only">
        <h2>📄 Export PDF - Jour {dayNumber}</h2>
        <p><strong>L'impression va démarrer automatiquement...</strong></p>
        <p>Ouvrez la console (F12) pour voir les détails d'extraction</p>
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
          {/* En-tête du document (première slide seulement) */}
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