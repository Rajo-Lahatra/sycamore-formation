'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà authentifié au chargement
    const savedAuth = localStorage.getItem('formation_authenticated');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
    setIsChecking(false);
  }, []);

  const login = (code) => {
    // Code d'accès - à changer selon vos besoins
    const validCodes = process.env.NEXT_PUBLIC_ACCESS_CODES 
      ? process.env.NEXT_PUBLIC_ACCESS_CODES.split(',') 
      : ['SYCAMORE2024', 'MINING2024'];
    
    if (validCodes.includes(code.toUpperCase())) {
      setIsAuthenticated(true);
      localStorage.setItem('formation_authenticated', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('formation_authenticated');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isChecking, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}