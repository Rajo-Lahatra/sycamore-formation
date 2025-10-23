'use client'; // Ajoutez cette ligne en haut

import Link from 'next/link';
import styles from './thank-you.module.css';
export default function ThankYouPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Merci pour votre évaluation !</h1>
      <p className={styles.message}>
        Votre feedback a été enregistré avec succès. Il nous aidera à améliorer 
        continuellement la qualité de nos formations.
      </p>
      <Link href="/" className={styles.button}>
        Retour à l'accueil
      </Link>
    </div>
  );
}
export default function ThankYouPage() {
  return (
    <div style={{
      maxWidth: '600px',
      margin: '50px auto',
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(72,40,27,0.2)',
      borderLeft: '8px solid #fba519',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#48281b', marginBottom: '20px' }}>
        Merci pour votre évaluation !
      </h1>
      <p style={{ 
        color: '#654530', 
        marginBottom: '30px', 
        lineHeight: '1.6' 
      }}>
        Votre feedback a été enregistré avec succès. Il nous aidera à améliorer 
        continuellement la qualité de nos formations.
      </p>
      <Link 
        href="/" 
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: '#eea125',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#e8a73d'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#eea125'}
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}