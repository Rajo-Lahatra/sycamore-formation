'use client';
import { useSlide } from '@/app/contexts/SlideContext';

export default function DownloadSlides({ dayNumber, slides }) {
  const { currentSlide } = useSlide();

  // Fonction pour extraire le contenu HTML d'une slide
  const getSlideContent = (slide) => {
    if (!slide || !slide.content) return '';
    
    try {
      // Cas des jours 2-5 : le contenu est dans dangerouslySetInnerHTML
      if (slide.content.props && slide.content.props.dangerouslySetInnerHTML) {
        return slide.content.props.dangerouslySetInnerHTML.__html;
      }
      
      // Cas du jour 1 : conversion simple du JSX en HTML
      if (slide.content.props && slide.content.props.children) {
        return convertJSXToHTML(slide.content);
      }
      
      return '<p>Contenu non disponible</p>';
    } catch (error) {
      console.error('Erreur extraction:', error);
      return '<p>Erreur lors de l\'extraction du contenu</p>';
    }
  };

  // Conversion basique du JSX en HTML
  const convertJSXToHTML = (jsxElement) => {
    if (!jsxElement || !jsxElement.props) return '';
    
    const { type, props } = jsxElement;
    const { children, className, dangerouslySetInnerHTML } = props;
    
    // Si c'est déjà du HTML dangereux
    if (dangerouslySetInnerHTML) {
      return dangerouslySetInnerHTML.__html;
    }
    
    let content = '';
    
    // Traitement des enfants
    if (children) {
      if (Array.isArray(children)) {
        content = children.map(child => {
          if (typeof child === 'string') return child;
          if (child && child.props) return convertJSXToHTML(child);
          return '';
        }).join('');
      } else if (typeof children === 'string') {
        content = children;
      } else if (children.props) {
        content = convertJSXToHTML(children);
      }
    }
    
    // Appliquer les balises HTML appropriées
    const tag = type || 'div';
    const classAttr = className ? ` class="${className}"` : '';
    
    if (tag === 'h2' || tag === 'h3' || tag === 'h4' || tag === 'p' || tag === 'div' || tag === 'ul' || tag === 'li') {
      return `<${tag}${classAttr}>${content}</${tag}>`;
    }
    
    // Pour les éléments non reconnus, retourner le contenu brut
    return content;
  };

  const downloadCurrentSlide = () => {
    const slideIndex = currentSlide - 1;
    const slide = slides[slideIndex];
    
    if (!slide) {
      alert('Slide non trouvée');
      return;
    }

    const slideContent = getSlideContent(slide);
    const slideTitle = slide.title || `Slide ${currentSlide}`;

    generatePDF(slideTitle, slideContent, dayNumber, currentSlide, false);
  };

  const downloadAllSlides = () => {
    let allSlidesContent = '';
    
    slides.forEach((slide, index) => {
      const slideContent = getSlideContent(slide);
      const slideTitle = slide.title || `Slide ${index + 1}`;
      
      allSlidesContent += `
        <div style="page-break-after: always; padding: 30px 0;">
          <h2 style="color: #8B4513; border-bottom: 2px solid #8B4513; padding-bottom: 10px;">
            ${slideTitle}
          </h2>
          <div style="margin-top: 20px;">
            ${slideContent}
          </div>
        </div>
      `;
    });

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
              margin: 40px;
              line-height: 1.6;
              color: #333;
              font-size: 14px;
            }
            h1 { 
              color: #8B4513; 
              text-align: center;
              border-bottom: 3px solid #8B4513;
              padding-bottom: 15px;
              margin-bottom: 30px;
            }
            h2 { 
              color: #8B4513; 
              border-bottom: 2px solid #8B4513;
              padding-bottom: 8px;
              margin: 25px 0 15px 0;
            }
            h3 { 
              color: #654321; 
              margin: 20px 0 10px 0;
            }
            h4 { 
              color: #654321; 
              margin: 18px 0 10px 0;
            }
            p { 
              margin: 12px 0; 
              line-height: 1.6;
            }
            ul, ol { 
              margin: 15px 0; 
              padding-left: 25px;
            }
            li { 
              margin: 8px 0; 
              line-height: 1.5;
            }
            strong { 
              color: #8B4513; 
              font-weight: bold;
            }
            table { 
              width: 100%; 
              border-collapse: collapse; 
              margin: 20px 0;
              font-size: 13px;
            }
            th, td { 
              border: 1px solid #ddd; 
              padding: 10px; 
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
              margin-bottom: 30px;
              padding-bottom: 20px;
              border-bottom: 2px solid #8B4513;
            }
            .logo { 
              height: 50px; 
            }
            .footer { 
              margin-top: 40px; 
              text-align: center; 
              color: #666; 
              font-size: 12px;
              border-top: 1px solid #ddd;
              padding-top: 15px;
            }
            .slide-title {
              color: #8B4513;
              font-size: 1.8em;
              border-bottom: 2px solid #8B4513;
              padding-bottom: 10px;
              margin-top: 0;
              margin-bottom: 25px;
            }
            @media print {
              body { margin: 20px; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <img src="${window.location.origin}/logo-jm.png" alt="JM Consulting" class="logo" />
            <div style="text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">Formation Sycamore</h1>
              <p style="margin: 5px 0 0 0; font-weight: bold; color: #8B4513;">
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
              Document généré le ${new Date().toLocaleDateString('fr-FR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} 
              ${isAllSlides ? 
                `- ${slides.length} slides` : 
                `- Slide ${slideNumber} sur ${slides.length}`
              }
            </p>
            <p style="font-size: 11px; color: #999;">
              Formation Sycamore Mine Guinée SAU - Du 20 au 24 octobre 2025
            </p>
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    
    // Attendre que le contenu soit chargé avant d'imprimer
    setTimeout(() => {
      printWindow.print();
    }, 500);
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
      <p style={{ fontSize: '0.9em', color: '#666', marginTop: '10px', textAlign: 'center' }}>
        <strong>Instructions :</strong> Cliquez sur un bouton, puis dans la fenêtre d'impression,<br/>
        choisissez <strong>"Enregistrer au format PDF"</strong> comme destination.
      </p>
    </div>
  );
}