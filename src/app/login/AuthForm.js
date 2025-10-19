// Fichier : src/app/login/AuthForm.js

'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

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
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const supabase = createClient();

  // Vérifier si l'utilisateur est déjà connecté
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.push('/');
        router.refresh();
      }
    };
    checkUser();
  }, [supabase.auth, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(LOGIN_STATUS.LOADING);
    setErrorMessage('');
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        setStatus(LOGIN_STATUS.SUCCESS);
        router.push('/');
        router.refresh();
      }
    } catch (error) {
      console.error('Erreur de connexion:', error.message);
      setErrorMessage(error.message || 'Erreur de connexion');
      setStatus(LOGIN_STATUS.ERROR);
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
            disabled={isDisabled}
            placeholder="Votre mot de passe"
            minLength={6}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isDisabled} 
          className="content-button"
          aria-label={status === LOGIN_STATUS.LOADING ? 'Connexion en cours' : 'Se connecter'}
        >
          {status === LOGIN_STATUS.LOADING ? 'Connexion en cours...' : 'Se Connecter'}
        </button>
        
        {errorMessage && (
          <p className="error-message" role="alert">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}