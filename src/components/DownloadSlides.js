'use client';
import { useSlide } from '@/app/contexts/SlideContext';

export default function DownloadSlides({ dayNumber, slides }) {
  const { currentSlide } = useSlide();

  const downloadCurrentSlide = () => {
    // Approche plus simple et fiable
    const currentSlideData = slides[currentSlide - 1];
    if (!currentSlideData) return;

    const printWindow = window.open('', '_blank');
    
    // Extraire le contenu texte de manière sécurisée
    let slideHTML = '';
    if (currentSlideData.content.props?.dangerouslySetInnerHTML) {
      // Cas des jours 2-5
      slideHTML = currentSlideData.content.props.dangerouslySetInnerHTML.__html;
    } else {
      // Cas du jour 1 - on utilise une représentation texte simple
      slideHTML = `<div>${currentSlideData.title || `Slide ${currentSlide}`}</div>`;
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>Jour ${dayNumber} - Slide ${currentSlide}</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              margin: 40px;
              line-height: 1.6;
              color: #333;
            }
            h1, h2, h3 { color: #8B4513; }
            ul { margin: 15px 0; }
            li { margin: 8px 0; }
            .logo-container { 
              display: flex; 
              justify-content: space-between; 
              margin-bottom: 20px;
            }
            .logo { max-height: 60px; }
          </style>
        </head>
        <body>
          <div class="logo-container">
            <img src="${window.location.origin}/logo-jm.png" alt="JM Consulting" class="logo" />
            <img src="${window.location.origin}/logo-sycamore.png" alt="Sycamore" class="logo" />
          </div>
          <h1>Formation Sycamore - Jour ${dayNumber}</h1>
          <h2>Slide ${currentSlide}</h2>
          <div>${slideHTML}</div>
          <div style="margin-top: 30px; text-align: center; color: #666;">
            Téléchargé le ${new Date().toLocaleDateString('fr-FR')}
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const downloadAllSlides = () => {
    const printWindow = window.open('', '_blank');
    let allSlidesContent = '';
    
    slides.forEach((slide, index) => {
      let slideHTML = '';
      if (slide.content.props?.dangerouslySetInnerHTML) {
        slideHTML = slide.content.props.dangerouslySetInnerHTML.__html;
      } else {
        slideHTML = `<div>${slide.title || `Slide ${index + 1}`}</div>`;
      }
      
      allSlidesContent += `
        <div style="page-break-after: always; padding: 20px 0;">
          <h3>Slide ${index + 1}</h3>
          <div>${slideHTML}</div>
        </div>
      `;
    });

    printWindow.document.write(`
      <html>
        <head>
          <title>Formation Sycamore - Jour ${dayNumber}</title>
          <style>
            body { font-family: Arial; margin: 40px; color: #333; }
            h1, h2, h3 { color: #8B4513; }
            @media print { body { margin: 20px; } }
          </style>
        </head>
        <body>
          <div class="logo-container">
            <img src="${window.location.origin}/logo-jm.png" alt="JM Consulting" class="logo" />
            <img src="${window.location.origin}/logo-sycamore.png" alt="Sycamore" class="logo" />
          </div>
          <h1>Formation Sycamore - Jour ${dayNumber}</h1>
          ${allSlidesContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="download-section">
      <h3>Télécharger les slides</h3>
      <div className="download-buttons">
        <button onClick={downloadCurrentSlide} className="download-button">
          📄 Slide actuelle (Slide {currentSlide})
        </button>
        <button onClick={downloadAllSlides} className="download-button">
          📚 Toutes les slides du Jour {dayNumber}
        </button>
      </div>
    </div>
  );
}