// Fichier : src/app/login/AuthForm.js

'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

const AUTH_STATUS = {
    IDLE: 'IDLE',
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR'
}

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState(AUTH_STATUS.IDLE);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  // Vérifier si l'utilisateur est déjà connecté
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.push('/');
        router.refresh();
      }
    };
    checkSession();
  }, [supabase.auth, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(AUTH_STATUS.LOADING);
    setErrorMessage('');

    // Validation
    if (isSignUp && password !== confirmPassword) {
      setErrorMessage('Les mots de passe ne correspondent pas');
      setStatus(AUTH_STATUS.ERROR);
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Le mot de passe doit contenir au moins 6 caractères');
      setStatus(AUTH_STATUS.ERROR);
      return;
    }

    try {
      let result;
      
      if (isSignUp) {
        // INSCRIPTION
        result = await supabase.auth.signUp({
          email: email.trim(),
          password,
          
        });
      } else {
        // CONNEXION
        result = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });
      }

      const { data, error } = result;

      if (error) {
        throw error;
      }

      if (isSignUp) {
        // Après l'inscription
        if (data.user && !data.user.identities?.length) {
          setErrorMessage('Un compte avec cet email existe déjà');
          setStatus(AUTH_STATUS.ERROR);
          return;
        }
        
        if (data.user) {
          alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
          setIsSignUp(false);
          setPassword('');
          setConfirmPassword('');
          setStatus(AUTH_STATUS.IDLE);
        }
      } else {
        // Après la connexion - Attendre un peu pour que la session soit disponible
        if (data.user) {
          setStatus(AUTH_STATUS.SUCCESS);
          
          // Attendre un court instant pour que la session soit mise à jour
          setTimeout(() => {
            router.push('/');
            router.refresh();
          }, 500);
        }
      }
    } catch (error) {
      console.error('Erreur:', error.message);
      setErrorMessage(error.message || `Erreur lors de ${isSignUp ? 'l\'inscription' : 'la connexion'}`);
      setStatus(AUTH_STATUS.ERROR);
    }
  };

  const isDisabled = status === AUTH_STATUS.LOADING;

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

        {isSignUp && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              disabled={isDisabled}
              placeholder="Confirmez votre mot de passe"
              minLength={6}
            />
          </div>
        )}
        
        <button 
          type="submit" 
          disabled={isDisabled} 
          className="content-button"
        >
          {status === AUTH_STATUS.LOADING 
            ? (isSignUp ? 'Inscription en cours...' : 'Connexion en cours...') 
            : (isSignUp ? 'S\'inscrire' : 'Se Connecter')
          }
        </button>
        
        {errorMessage && (
          <p className="error-message" role="alert">
            {errorMessage}
          </p>
        )}

        <div className="auth-switch">
          <p>
            {isSignUp ? 'Déjà un compte ?' : 'Pas encore de compte ?'}{' '}
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setErrorMessage('');
                setPassword('');
                setConfirmPassword('');
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