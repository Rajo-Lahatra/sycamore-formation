// Fichier : src/app/login/AuthForm.js

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client'; // Assurez-vous que le chemin est correct

const LOGIN_STATUS = {
    IDLE: 'IDLE',
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR'
}

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(LOGIN_STATUS.IDLE);
  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(LOGIN_STATUS.LOADING);
    
    // Tentative de connexion (sign-in)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Erreur de connexion:', error.message);
      alert(`Erreur: ${error.message}`);
      setStatus(LOGIN_STATUS.ERROR);
    } else {
      setStatus(LOGIN_STATUS.SUCCESS);
      // Redirection vers la page d'accueil après une connexion réussie
      router.push('/');
      router.refresh(); // Force le rafraîchissement des données de session
    }
  };

  const isDisabled = status === LOGIN_STATUS.LOADING;

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
            disabled={isDisabled}
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
            disabled={isDisabled}
          />
        </div>
        
        <button type="submit" disabled={isDisabled} className="content-button">
          {status === LOGIN_STATUS.LOADING ? 'Connexion en cours...' : 'Se Connecter'}
        </button>
        
        {status === LOGIN_STATUS.ERROR && (
            <p className="error-message">Échec de la connexion. Vérifiez vos identifiants.</p>
        )}
        
      </form>
    </div>
  );
}