'use client';
import { useSlide } from '@/app/contexts/SlideContext';

export default function DownloadSlides({ dayNumber, slides }) {
  const { currentSlide } = useSlide();

  const downloadCurrentSlide = () => {
    const slideContent = document.getElementById(`slide-${currentSlide - 1}`);
    
    if (slideContent) {
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <html>
          <head>
            <title>Jour ${dayNumber} - Slide ${currentSlide}</title>
            <style>
              body { 
                font-family: Arial, sans-serif; 
                margin: 40px;
                line-height: 1.6;
              }
              .slide-title { 
                color: #8B4513; 
                border-bottom: 2px solid #8B4513;
                padding-bottom: 10px;
              }
              h3 { color: #333; margin-top: 20px; }
              ul { margin: 15px 0; padding-left: 20px; }
              li { margin: 8px 0; }
              table { 
                width: 100%; 
                border-collapse: collapse; 
                margin: 15px 0;
              }
              th, td { 
                border: 1px solid #ddd; 
                padding: 8px; 
                text-align: left;
              }
              th { 
                background-color: #8B4513; 
                color: white; 
              }
              .logo-container { 
                display: flex; 
                justify-content: space-between; 
                margin-bottom: 20px;
              }
              .logo { max-height: 60px; }
              .slide-body { margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="logo-container">
              <img src="${window.location.origin}/logo-jm.png" alt="JM Consulting" class="logo" />
              <img src="${window.location.origin}/logo-sycamore.png" alt="Sycamore" class="logo" />
            </div>
            <h1>Formation Sycamore - Jour ${dayNumber}</h1>
            <h2>Slide ${currentSlide}</h2>
            ${slideContent.innerHTML}
            <div style="margin-top: 30px; text-align: center; color: #666;">
              Téléchargé le ${new Date().toLocaleDateString('fr-FR')}
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const downloadAllSlides = () => {
    const printWindow = window.open('', '_blank');
    let allSlidesContent = '';
    
    slides.forEach((slide, index) => {
      const slideElement = document.getElementById(`slide-${index}`);
      if (slideElement) {
        allSlidesContent += `
          <div style="page-break-after: always; margin-bottom: 40px;">
            ${slideElement.innerHTML}
          </div>
        `;
      }
    });

    printWindow.document.write(`
      <html>
        <head>
          <title>Formation Sycamore - Jour ${dayNumber} - Slides Complets</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              margin: 40px;
              line-height: 1.6;
            }
            .slide-title { 
              color: #8B4513; 
              border-bottom: 2px solid #8B4513;
              padding-bottom: 10px;
            }
            h3 { color: #333; margin-top: 20px; }
            ul { margin: 15px 0; padding-left: 20px; }
            li { margin: 8px 0; }
            table { 
              width: 100%; 
              border-collapse: collapse; 
              margin: 15px 0;
            }
            th, td { 
              border: 1px solid #ddd; 
              padding: 8px; 
              text-align: left;
            }
            th { 
              background-color: #8B4513; 
              color: white; 
            }
            .logo-container { 
              display: flex; 
              justify-content: space-between; 
              margin-bottom: 20px;
            }
            .logo { max-height: 60px; }
            .slide-body { margin-top: 20px; }
            @media print {
              body { margin: 20px; }
            }
          </style>
        </head>
        <body>
          <div class="logo-container">
            <img src="${window.location.origin}/logo-jm.png" alt="JM Consulting" class="logo" />
            <img src="${window.location.origin}/logo-sycamore.png" alt="Sycamore" class="logo" />
          </div>
          <h1>Formation Sycamore - Fiscalité Minière</h1>
          <h2>Jour ${dayNumber} - Slides Complets</h2>
          ${allSlidesContent}
          <div style="margin-top: 30px; text-align: center; color: #666;">
            Document téléchargé le ${new Date().toLocaleDateString('fr-FR')}
          </div>
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