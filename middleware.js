// Fichier : middleware.js

import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const { data: { session } } = await supabase.auth.getSession()
  const { pathname } = req.nextUrl

  // Routes protégées
  const protectedRoutes = ['/', '/day1', '/day2', '/day3', '/day4', '/day5']
  const isProtectedRoute = protectedRoutes.includes(pathname)

  // Rediriger vers /login si non connecté et accès à une route protégée
  if (!session && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // Rediriger vers / si connecté et sur /login
  if (session && pathname === '/login') {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return res
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}