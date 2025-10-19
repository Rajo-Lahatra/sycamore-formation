// Fichier : src/app/auth/page.js

'use client';

import React, { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let result;
      
      if (isSignUp) {
        result = await supabase.auth.signUp({
          email: email.trim(),
          password,
        });
      } else {
        result = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });
      }

      const { data, error } = result;

      if (error) {
        setError(error.message);
        return;
      }

      if (isSignUp) {
        alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
        setIsSignUp(false);
        setEmail('');
        setPassword('');
      } else {
        // Redirection après connexion réussie
        router.push('/');
        router.refresh();
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
      <h1>{isSignUp ? 'Créer un compte' : 'Connexion'}</h1>
      <p>{isSignUp ? 'Créez votre compte pour accéder à la formation' : 'Accédez à la formation ou à l\'espace formateur.'}</p>
      
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
          {loading 
            ? (isSignUp ? 'Inscription en cours...' : 'Connexion en cours...') 
            : (isSignUp ? 'S\'inscrire' : 'Se Connecter')
          }
        </button>
        
        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}

        <div className="auth-switch">
          <p>
            {isSignUp ? 'Déjà un compte ?' : 'Pas encore de compte ?'}{' '}
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError('');
                setEmail('');
                setPassword('');
              }}
              className="link-button"
            >
              {isSignUp ? 'Se connecter' : 'Créer un compte'}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}