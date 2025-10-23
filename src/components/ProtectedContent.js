'use client';
import { useAuth } from '@/app/contexts/AuthContext';
import { useState } from 'react';

export default function ProtectedContent({ children, dayNumber }) {
  const { isAuthenticated, isChecking, login } = useAuth();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(code)) {
      setError('');
    } else {
      setError('Code d\'accès incorrect');
    }
  };

  if (isChecking) {
    return <div className="loading">Chargement...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="auth-container">
        <div className="auth-form">
          <div className="logo-container">
            <img src="/logo-jm.png" alt="Logo JM Consulting" className="logo jm-logo" />
            <img src="/logo-sycamore.png" alt="Logo Sycamore" className="logo sycamore-logo" />
          </div>
          
          <h2>Accès au contenu du Jour {dayNumber}</h2>
          <p>Veuillez saisir le code d'accès fourni pour consulter le contenu de formation.</p>
          
          <form onSubmit={handleSubmit} className="code-form">
            <input
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Entrez le code d'accès"
              className="code-input"
              required
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="content-button">
              Accéder au contenu
            </button>
          </form>
          
          <a href="/" className="back-button">
            &larr; Retour au Planning
          </a>
        </div>
      </div>
    );
  }

  return children;
}