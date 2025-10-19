// Fichier : src/app/login/page.js

import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import AuthForm from './AuthForm';

// Cette fonction crée un client Supabase pour le serveur
async function getSupabase() {
  const { createServerClient } = await import('@supabase/ssr');
  const { cookies } = await import('next/headers');
  
  const cookieStore = cookies();
  
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch (error) {
            // Gestion des cookies en Server Component
          }
        },
      },
    }
  );
}

export default async function LoginPage() {
  const supabase = await getSupabase();
  const { data: { session } } = await supabase.auth.getSession();

  // Rediriger vers la page d'accueil si déjà connecté
  if (session) {
    redirect('/');
  }

  return (
    <div className="login-page-wrapper">
      <AuthForm />
    </div>
  );
}