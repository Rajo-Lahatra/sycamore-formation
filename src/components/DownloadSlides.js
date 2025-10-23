'use client';
import { useSlide } from '@/app/contexts/SlideContext';

export default function DownloadSlides({ dayNumber, slides }) {
  const { currentSlide } = useSlide();

  // Fonction pour extraire le contenu texte d'une slide
  const getSlideTextContent = (slide) => {
    if (!slide || !slide.content) return '';
    
    try {
      // Pour les jours 2-5 : le contenu HTML est dans dangerouslySetInnerHTML
      if (slide.content.props && slide.content.props.dangerouslySetInnerHTML) {
        return slide.content.props.dangerouslySetInnerHTML.__html;
      }
      
      // Pour le jour 1 : on utilise une méthode simple pour extraire le texte
      if (slide.content.props && slide.content.props.children) {
        return extractTextFromJSX(slide.content);
      }
      
      return '';
    } catch (error) {
      console.error('Erreur extraction contenu:', error);
      return `<p>Contenu non disponible</p>`;
    }
  };

  // Fonction simple pour extraire le texte du JSX
  const extractTextFromJSX = (jsxElement) => {
    if (!jsxElement || !jsxElement.props) return '';
    
    const extractFromChildren = (children) => {
      if (!children) return '';
      
      if (Array.isArray(children)) {
        return children.map(child => extractFromChildren(child)).join('');
      }
      
      if (typeof children === 'string') {
        return children;
      }
      
      if (children.props && children.props.children) {
        return extractFromChildren(children.props.children);
      }
      
      return '';
    };
    
    const textContent = extractFromChildren(jsxElement.props.children);
    
    // Formater le texte en HTML basique
    if (textContent) {
      return `<div>${textContent.split('\n').map(line => 
        line.trim() ? `<p>${line}</p>` : ''
      ).join('')}</div>`;
    }
    
    return '';
  };

  const downloadCurrentSlide = () => {
    const currentSlideData = slides[currentSlide - 1];
    if (!currentSlideData) return;

    const slideContent = getSlideTextContent(currentSlideData);
    const slideTitle = currentSlideData.title || `Slide ${currentSlide}`;

    generatePDF(slideTitle, slideContent, dayNumber, currentSlide, false);
  };

  const downloadAllSlides = () => {
    let allSlidesContent = '';
    
    slides.forEach((slide, index) => {
      const slideContent = getSlideTextContent(slide);
      const slideTitle = slide.title || `Slide ${index + 1}`;
      
      allSlidesContent += `
        <div style="page-break-after: always; padding: 20px 0;">
          <h2>${slideTitle}</h2>
          ${slideContent}
        </div>
      `;
    });

    generatePDF(`Toutes les slides du Jour ${dayNumber}`, allSlidesContent, dayNumber, null, true);
  };

  // Fonction pour générer le PDF
  const generatePDF = (title, content, dayNumber, slideNumber = null, isAllSlides = false) => {
    const printWindow = window.open('', '_blank');
    const documentTitle = isAllSlides 
      ? `Jour ${dayNumber} - Slides Complets` 
      : `Jour ${dayNumber} - Slide ${slideNumber}`;

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
            @media print {
              body { margin: 20px; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <img src="${window.location.origin}/logo-jm.png" alt="JM Consulting" class="logo" />
            <div style="text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">Formation Sycamore</h1>
              <p style="margin: 5px 0 0 0; font-weight: bold; color: #8B4513;">
                Fiscalité Minière - Jour ${dayNumber}
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