'use client';
import { useSlide } from '@/app/contexts/SlideContext';

export default function DownloadSlides({ dayNumber, slides }) {
  const { currentSlide } = useSlide();

  // Fonction UNIVERSELLE pour extraire le contenu
  const extractSlideContent = (slide) => {
    if (!slide || !slide.content) {
      return '<p>Contenu non disponible</p>';
    }

    try {
      // Méthode 1: Contenu HTML direct (jours 2-5)
      if (slide.content.props?.dangerouslySetInnerHTML?.__html) {
        return slide.content.props.dangerouslySetInnerHTML.__html;
      }

      // Méthode 2: JSX avec enfants (jour 1 et autres)
      if (slide.content.props?.children) {
        return extractFromJSXChildren(slide.content.props.children);
      }

      // Méthode 3: Accès direct au contenu
      if (typeof slide.content === 'object') {
        const contentStr = JSON.stringify(slide.content);
        if (contentStr.includes('"__html"')) {
          // Essayons d'extraire le HTML depuis la structure d'objet
          const htmlMatch = contentStr.match(/"__html":"(.*?)"/);
          if (htmlMatch) {
            return decodeURIComponent(htmlMatch[1].replace(/\\u0022/g, '"').replace(/\\n/g, ''));
          }
        }
      }

      console.log('Structure non reconnue:', slide);
      return '<p>Format de contenu non supporté</p>';

    } catch (error) {
      console.error('Erreur extraction:', error, slide);
      return `<p>Erreur d'extraction: ${error.message}</p>`;
    }
  };

  // Extraction récursive depuis les enfants JSX
  const extractFromJSXChildren = (children) => {
    if (!children) return '';

    if (Array.isArray(children)) {
      return children.map(child => extractFromJSXChildren(child)).join('');
    }

    if (typeof children === 'string') {
      return children;
    }

    if (typeof children === 'object' && children.props) {
      const tag = children.type || 'div';
      const childrenContent = extractFromJSXChildren(children.props.children);
      
      // Appliquer les balises appropriées
      if (tag === 'h1' || tag === 'h2' || tag === 'h3' || tag === 'h4') {
        return `<${tag}>${childrenContent}</${tag}>`;
      } else if (tag === 'p') {
        return `<p>${childrenContent}</p>`;
      } else if (tag === 'ul') {
        return `<ul>${childrenContent}</ul>`;
      } else if (tag === 'li') {
        return `<li>${childrenContent}</li>`;
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
    
    slides.forEach((slide, index) => {
      const slideContent = extractSlideContent(slide);
      const slideTitle = slide.title || `Slide ${index + 1}`;
      
      // Vérifier si le contenu a été extrait avec succès
      const hasRealContent = !slideContent.includes('non disponible') && 
                            !slideContent.includes('non supporté') && 
                            !slideContent.includes('Erreur d\'extraction');
      
      if (hasRealContent) {
        successfulSlides++;
      }
      
      allSlidesContent += `
        <div style="page-break-after: always; padding: 25px 0; min-height: 500px;">
          <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #8B4513; margin-bottom: 20px;">
            <h2 style="color: #8B4513; margin: 0; font-size: 1.4em;">${slideTitle}</h2>
          </div>
          <div style="line-height: 1.6; font-size: 14px;">
            ${slideContent}
          </div>
          ${!hasRealContent ? `
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; margin-top: 20px; border-radius: 5px;">
              <p style="margin: 0; color: #856404; font-style: italic;">
                ⚠️ Le contenu complet n'a pas pu être extrait automatiquement. 
                Veuillez consulter la version en ligne pour le contenu détaillé.
              </p>
            </div>
          ` : ''}
        </div>
      `;
    });

    // Avertissement si peu de slides ont été extraites
    if (successfulSlides < slides.length / 2) {
      alert(`Attention: Seulement ${successfulSlides} slides sur ${slides.length} ont pu être extraites correctement. Certains contenus peuvent être incomplets.`);
    }

    generatePDF(`Toutes les slides du Jour ${dayNumber}`, allSlidesContent, dayNumber, null, true);
  };

  const generatePDF = (title, content, dayNum, slideNumber = null, isAllSlides = false) => {
    const printWindow = window.open('', '_blank');
    const documentTitle = isAllSlides 
      ? `Jour ${dayNum} - Slides Complets` 
      : `Jour ${dayNum} - Slide ${slideNumber}`;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${documentTitle}</title>
          <meta charset="UTF-8">
          <style>
            body { 
              font-family: 'Arial', sans-serif; 
              margin: 25px;
              line-height: 1.6;
              color: #333;
              font-size: 13px;
            }
            h1 { 
              color: #8B4513; 
              text-align: center;
              border-bottom: 3px solid #8B4513;
              padding-bottom: 12px;
              margin-bottom: 25px;
              font-size: 22px;
            }
            h2 { 
              color: #8B4513; 
              border-bottom: 2px solid #8B4513;
              padding-bottom: 6px;
              margin: 20px 0 12px 0;
              font-size: 18px;
            }
            h3 { 
              color: #654321; 
              margin: 18px 0 10px 0;
              font-size: 16px;
            }
            h4 { 
              color: #654321; 
              margin: 16px 0 8px 0;
              font-size: 14px;
            }
            p { 
              margin: 10px 0; 
              line-height: 1.5;
            }
            ul, ol { 
              margin: 12px 0; 
              padding-left: 20px;
            }
            li { 
              margin: 6px 0; 
              line-height: 1.4;
            }
            strong { 
              color: #8B4513; 
              font-weight: bold;
            }
            table { 
              width: 100%; 
              border-collapse: collapse; 
              margin: 15px 0;
              font-size: 12px;
            }
            th, td { 
              border: 1px solid #ddd; 
              padding: 8px; 
              text-align: left;
            }
            th { 
              background-color: #8B4513; 
              color: white; 
              font-weight: bold;
            }
            tr:nth-child(even) { 
              background-color: #f9f9f9; 
            }
            .header { 
              display: flex; 
              justify-content: space-between; 
              align-items: center;
              margin-bottom: 25px;
              padding-bottom: 15px;
              border-bottom: 2px solid #8B4513;
            }
            .logo { 
              height: 45px; 
            }
            .footer { 
              margin-top: 30px; 
              text-align: center; 
              color: #666; 
              font-size: 11px;
              border-top: 1px solid #ddd;
              padding-top: 12px;
            }
            .content-section {
              margin-bottom: 20px;
            }
            @media print {
              body { margin: 15px; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <img src="${window.location.origin}/logo-jm.png" alt="JM Consulting" class="logo" />
            <div style="text-align: center; flex-grow: 1;">
              <h1 style="margin: 0; font-size: 20px;">Formation Sycamore</h1>
              <p style="margin: 3px 0 0 0; font-weight: bold; color: #8B4513;">
                Fiscalité Minière - Jour ${dayNum}
              </p>
            </div>
            <img src="${window.location.origin}/logo-sycamore.png" alt="Sycamore Mining" class="logo" />
          </div>

          <div class="content">
            ${isAllSlides ? content : `
              <div class="content-section">
                <h2>${title}</h2>
                ${content}
              </div>
            `}
          </div>

          <div class="footer">
            <p>
              Document généré le ${new Date().toLocaleDateString('fr-FR')} 
              ${isAllSlides ? 
                `• ${slides.length} slides au total` : 
                `• Slide ${slideNumber} sur ${slides.length}`
              }
            </p>
            <p style="font-size: 10px; color: #999; margin-top: 5px;">
              Formation Sycamore Mine Guinée SAU • Du 20 au 24 octobre 2025
            </p>
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    
    // Attendre que le contenu soit chargé avant d'imprimer
    setTimeout(() => {
      printWindow.print();
    }, 800);
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
        fontSize: '0.85em', 
        color: '#666', 
        marginTop: '12px', 
        textAlign: 'center',
        background: '#f8f9fa',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #e9ecef'
      }}>
        <p style={{ margin: '0 0 5px 0' }}>
          <strong>💡 Instructions :</strong> Cliquez sur un bouton, puis dans la fenêtre d'impression,
        </p>
        <p style={{ margin: 0 }}>
          choisissez <strong>"Enregistrer au format PDF"</strong> comme destination.
        </p>
      </div>
    </div>
  );
}