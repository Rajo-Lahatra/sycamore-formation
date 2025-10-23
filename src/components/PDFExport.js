'use client';

export default function PDFExport({ dayNumber }) {
  const exportUrl = `/export/day${dayNumber}`;

  return (
    <div className="download-section">
      <h3>📥 Exporter en PDF</h3>
      
      <div className="download-buttons">
        <a 
          href={exportUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="download-button"
        >
          📄 Générer PDF Jour {dayNumber}
        </a>
      </div>
      
      <div style={{ 
        fontSize: '0.85em', 
        color: '#666', 
        marginTop: '12px', 
        textAlign: 'center',
        background: '#f8f9fa',
        padding: '10px',
        borderRadius: '5px'
      }}>
        <p style={{ margin: '0 0 5px 0' }}>
          <strong>🚀 Action unique :</strong> Ouvre une page optimisée pour l'impression
        </p>
        <p style={{ margin: 0 }}>
          <strong>📋 Résultat :</strong> PDF unique avec toutes les slides du jour
        </p>
      </div>
    </div>
  );
}