// Fichier : src/lib/supabase/client.js

import { createBrowserClient } from '@supabase/ssr';

// Fonction pour initialiser le client Supabase côté navigateur
// Les variables d'environnement sont accessibles via le préfixe NEXT_PUBLIC_
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}