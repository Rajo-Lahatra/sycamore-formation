// Fichier : middleware.js

import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const { data: { session } } = await supabase.auth.getSession()
  const { pathname } = req.nextUrl

  // Rediriger vers /auth si non connecté et accès à la page principale
  if (!session && pathname === '/') {
    return NextResponse.redirect(new URL('/auth', req.url))
  }

  // Rediriger vers / si connecté et sur /auth
  if (session && pathname === '/auth') {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return res
}

export const config = {
  matcher: ['/', '/auth'],
}