// Fichier : src/app/login/AuthForm.js

'use client';

import React, { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const supabase = createClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      if (data.user) {
        // Redirection FORCÉE vers la page d'accueil
        window.location.href = '/';
      }
    } catch (err) {
      setError('Une erreur est survenue');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h1>Connexion</h1>
      <p>Accédez à la formation ou à l'espace formateur.</p>
      
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
            placeholder="votre@email.com"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
            placeholder="Votre mot de passe"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading} 
          className="content-button"
        >
          {loading ? 'Connexion en cours...' : 'Se Connecter'}
        </button>
        
        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}