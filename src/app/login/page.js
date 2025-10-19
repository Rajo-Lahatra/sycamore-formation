// Fichier : src/app/login/page.js

import { createClient } from '@/lib/supabase/client';
import { redirect } from 'next/navigation';
import AuthForm from './AuthForm';

export default async function LoginPage() {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();

  // Redirection simple si déjà connecté
  if (session) {
    redirect('/');
  }

  return (
    <div className="login-page-wrapper">
      <AuthForm />
    </div>
  );
}