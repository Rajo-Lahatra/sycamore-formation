// Fichier : src/app/LogoutButton.js

'use client';

import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    // Déconnexion de Supabase
    const { error } = await supabase.auth.signOut();

    if (!error) {
      // Redirection vers la page de connexion après déconnexion
      router.push('/login');
      router.refresh(); 
    } else {
      console.error('Erreur de déconnexion:', error.message);
      alert('Erreur lors de la déconnexion.');
    }
  };

  return (
    <button 
      onClick={handleLogout} 
      className="content-button" 
      style={{ 
        padding: '5px 15px', 
        fontSize: '0.8em', 
        backgroundColor: '#cc0000', 
        display: 'inline-block',
        color: 'white'
      }}
    >
      Se Déconnecter
    </button>
  );
}