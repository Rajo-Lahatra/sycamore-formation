// Fichier : src/app/LogoutButton.js

'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw error;
      }

      // Redirection vers la page d'authentification après déconnexion
      router.push('/auth');
      router.refresh();
    } catch (error) {
      console.error('Erreur de déconnexion:', error.message);
      alert('Erreur lors de la déconnexion: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      onClick={handleLogout} 
      disabled={isLoading}
      className="content-button" 
      style={{ 
        padding: '5px 15px', 
        fontSize: '0.8em', 
        backgroundColor: isLoading ? '#666' : '#cc0000', 
        display: 'inline-block',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: isLoading ? 'not-allowed' : 'pointer'
      }}
    >
      {isLoading ? 'Déconnexion...' : 'Se Déconnecter'}
    </button>
  );
}