// Fichier : middleware.js

import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Rafraîchir la session
  const { data: { session } } = await supabase.auth.getSession()
  const { pathname } = req.nextUrl

  // Si l'utilisateur n'est PAS connecté et essaie d'accéder à une route protégée
  if (!session && pathname === '/') {
    const redirectUrl = new URL('/login', req.url)
    return NextResponse.redirect(redirectUrl)
  }

  // Si l'utilisateur EST connecté et essaie d'accéder à /login
  if (session && pathname === '/login') {
    const redirectUrl = new URL('/', req.url)
    return NextResponse.redirect(redirectUrl)
  }

  return res
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}