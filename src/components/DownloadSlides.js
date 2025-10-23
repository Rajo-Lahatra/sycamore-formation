'use client';
import { useSlide } from '@/app/contexts/SlideContext';

export default function DownloadSlides({ dayNumber, slides }) {
  const { currentSlide } = useSlide();

  // Fonction UNIVERSELLE d'extraction de contenu
  const extractSlideContent = (slide) => {
    if (!slide || !slide.content) {
      return '<p>Contenu non disponible</p>';
    }

    try {
      console.log(`🔍 Analyse slide ${slide.title || 'sans titre'}:`, slide.content);

      // CAS 1: Contenu HTML direct (jours 2-5 standard)
      if (slide.content.props?.dangerouslySetInnerHTML?.__html) {
        const htmlContent = slide.content.props.dangerouslySetInnerHTML.__html;
        console.log(`✅ HTML direct: ${htmlContent.substring(0, 100)}...`);
        return htmlContent;
      }

      // CAS 2: JSX avec enfants (jour 1)
      if (slide.content.props?.children) {
        const jsxContent = extractFromJSX(slide.content);
        console.log(`✅ JSX extrait: ${jsxContent.substring(0, 100)}...`);
        return jsxContent;
      }

      // CAS 3: Structure imbriquée complexe (certains slides J5)
      if (typeof slide.content === 'object') {
        // Essayons une extraction profonde
        const deepContent = deepExtractContent(slide.content);
        if (deepContent && deepContent.length > 10) {
          console.log(`✅ Extraction profonde: ${deepContent.substring(0, 100)}...`);
          return deepContent;
        }
      }

      console.log('❌ Structure non reconnue:', slide.content);
      return '<p>Format de contenu non supporté</p>';

    } catch (error) {
      console.error('❌ Erreur extraction:', error);
      return `<p>Erreur technique: ${error.message}</p>`;
    }
  };

  // Extraction depuis JSX (pour Jour 1)
  const extractFromJSX = (jsxElement) => {
    if (!jsxElement || !jsxElement.props) return '';
    
    const extractFromNode = (node) => {
      if (!node) return '';
      
      if (Array.isArray(node)) {
        return node.map(extractFromNode).join('');
      }
      
      if (typeof node === 'string') {
        return node;
      }
      
      if (typeof node === 'number') {
        return node.toString();
      }
      
      if (node.props) {
        const tag = node.type || 'div';
        const childrenContent = extractFromNode(node.props.children);
        const className = node.props.className ? ` class="${node.props.className}"` : '';
        
        // Gérer les balises principales
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
        } else {
          return childrenContent;
        }
      }
      
      return '';
    };
    
    return extractFromNode(jsxElement);
  };

  // Extraction profonde pour les structures complexes
  const deepExtractContent = (obj, depth = 0) => {
    if (depth > 3) return ''; // Éviter la récursion infinie
    
    if (typeof obj === 'string') {
      return obj;
    }
    
    if (Array.isArray(obj)) {
      return obj.map(item => deepExtractContent(item, depth + 1)).join('');
    }
    
    if (obj && typeof obj === 'object') {
      // Priorité: chercher le HTML direct
      if (obj.props?.dangerouslySetInnerHTML?.__html) {
        return obj.props.dangerouslySetInnerHTML.__html;
      }
      
      // Chercher les enfants
      if (obj.props?.children) {
        return deepExtractContent(obj.props.children, depth + 1);
      }
      
      // Parcourir toutes les propriétés
      let content = '';
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          content += deepExtractContent(obj[key], depth + 1);
        }
      }
      return content;
    }
    
    return '';
  };

  const downloadCurrentSlide = () => {
    const slideIndex = currentSlide - 1;
    const slide = slides[slideIndex];
    
    if (!slide) {
      alert('Slide non trouvée');
      return;
    }

    const slideContent = extractSlideContent(slide);
    const slideTitle = slide.title || `Slide ${currentSlide}`;

    generatePDF(slideTitle, slideContent, dayNumber, currentSlide, false);
  };

  const downloadAllSlides = () => {
    let allSlidesContent = '';
    let successfulSlides = 0;
    
    console.log(`📊 Analyse de ${slides.length} slides pour le jour ${dayNumber}`);
    
    slides.forEach((slide, index) => {
      const slideContent = extractSlideContent(slide);
      const slideTitle = slide.title || `Slide ${index + 1}`;
      
      // Vérification robuste du contenu extrait
      const hasRealContent = slideContent && 
                            !slideContent.includes('non disponible') && 
                            !slideContent.includes('non supporté') && 
                            !slideContent.includes('Erreur technique') &&
                            slideContent.length > 50; // Au moins 50 caractères
      
      if (hasRealContent) {
        successfulSlides++;
        console.log(`✅ Slide ${index + 1}: ${slideContent.length} caractères`);
      } else {
        console.log(`❌ Slide ${index + 1}: contenu insuffisant (${slideContent?.length || 0} caractères)`);
      }
      
      allSlidesContent += `
        <div style="page-break-after: always; padding: 20px 0; min-height: 400px;">
          <div style="background: linear-gradient(135deg, #8B4513 0%, #654321 100%); color: white; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="margin: 0; font-size: 1.3em;">${slideTitle}</h2>
          </div>
          <div style="line-height: 1.6; font-size: 13px; padding: 0 10px;">
            ${slideContent}
          </div>
          ${!hasRealContent ? `
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; margin-top: 20px; border-radius: 5px;">
              <p style="margin: 0; color: #856404; font-style: italic;">
                ⚠️ <strong>Contenu limité</strong> - Cette slide contient des éléments complexes qui n'ont pas pu être extraits automatiquement. 
                Consultez la version en ligne pour le contenu complet.
              </p>
            </div>
          ` : ''}
        </div>
      `;
    });

    console.log(`📈 Résultat: ${successfulSlides}/${slides.length} slides extraites avec succès`);
    
    if (successfulSlides === 0) {
      alert(`Aucune slide n'a pu être extraite correctement. Le format des slides du Jour ${dayNumber} n'est pas compatible avec l'extraction automatique.`);
      return;
    } else if (successfulSlides < slides.length) {
      alert(`${successfulSlides} slides sur ${slides.length} ont été extraites. ${slides.length - successfulSlides} slides ont un contenu limité.`);
    }

    generatePDF(`Jour ${dayNumber} - Slides`, allSlidesContent, dayNumber, null, true);
  };

  const generatePDF = (title, content, dayNum, slideNumber = null, isAllSlides = false) => {
    const printWindow = window.open('', '_blank');
    const documentTitle = isAllSlides 
      ? `Formation Sycamore - Jour ${dayNum}` 
      : `Formation Sycamore - Jour ${dayNum} - Slide ${slideNumber}`;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${documentTitle}</title>
          <meta charset="UTF-8">
          <style>
            body { 
              font-family: 'Arial', sans-serif; 
              margin: 15px;
              line-height: 1.5;
              color: #333;
              font-size: 12px;
            }
            h1 { 
              color: #8B4513; 
              text-align: center;
              border-bottom: 3px solid #8B4513;
              padding-bottom: 10px;
              margin-bottom: 20px;
              font-size: 18px;
            }
            h2 { 
              color: #8B4513; 
              margin: 15px 0 10px 0;
              font-size: 16px;
            }
            h3 { 
              color: #654321; 
              margin: 12px 0 8px 0;
              font-size: 14px;
            }
            h4 { 
              color: #654321; 
              margin: 10px 0 6px 0;
              font-size: 13px;
            }
            p { 
              margin: 8px 0; 
              line-height: 1.4;
            }
            ul, ol { 
              margin: 10px 0; 
              padding-left: 15px;
            }
            li { 
              margin: 5px 0; 
              line-height: 1.3;
            }
            strong { 
              color: #8B4513; 
              font-weight: bold;
            }
            table { 
              width: 100%; 
              border-collapse: collapse; 
              margin: 12px 0;
              font-size: 11px;
            }
            th, td { 
              border: 1px solid #ddd; 
              padding: 6px; 
              text-align: left;
            }
            th { 
              background-color: #8B4513; 
              color: white; 
              font-weight: bold;
            }
            .header { 
              display: flex; 
              justify-content: space-between; 
              align-items: center;
              margin-bottom: 20px;
              padding-bottom: 15px;
              border-bottom: 2px solid #8B4513;
            }
            .logo { 
              height: 40px; 
            }
            .footer { 
              margin-top: 25px; 
              text-align: center; 
              color: #666; 
              font-size: 10px;
              border-top: 1px solid #ddd;
              padding-top: 10px;
            }
            @media print {
              body { margin: 10px; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <img src="${window.location.origin}/logo-jm.png" alt="JM Consulting" class="logo" />
            <div style="text-align: center;">
              <h1 style="margin: 0; font-size: 16px;">Formation Sycamore</h1>
              <p style="margin: 2px 0 0 0; font-weight: bold; color: #8B4513;">
                Fiscalité Minière - Jour ${dayNum}
              </p>
            </div>
            <img src="${window.location.origin}/logo-sycamore.png" alt="Sycamore Mining" class="logo" />
          </div>

          <div class="content">
            ${isAllSlides ? content : `
              <h2>${title}</h2>
              ${content}
            `}
          </div>

          <div class="footer">
            <p>
              Document généré le ${new Date().toLocaleDateString('fr-FR')} 
              ${isAllSlides ? 
                `• ${slides.length} slides` : 
                `• Slide ${slideNumber} sur ${slides.length}`
              }
            </p>
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    
    setTimeout(() => {
      printWindow.print();
    }, 1000);
  };

  return (
    <div className="download-section">
      <h3>📥 Télécharger les slides</h3>
      <div className="download-buttons">
        <button onClick={downloadCurrentSlide} className="download-button">
          📄 Slide actuelle (Slide {currentSlide})
        </button>
        <button onClick={downloadAllSlides} className="download-button">
          📚 Toutes les slides ({slides.length})
        </button>
      </div>
      <div style={{ 
        fontSize: '0.8em', 
        color: '#666', 
        marginTop: '10px', 
        textAlign: 'center',
        background: '#f8f9fa',
        padding: '8px',
        borderRadius: '4px'
      }}>
        <p style={{ margin: '0 0 3px 0' }}>
          <strong>Note :</strong> L'extraction automatique peut être limitée pour certains formats complexes.
        </p>
        <p style={{ margin: 0 }}>
          Ouvrez la console (F12) pour voir le détail de l'extraction.
        </p>
      </div>
    </div>
  );
}