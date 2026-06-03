import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''

  if (host.includes('docs.sejed.dev')) {
    const url = req.nextUrl.clone()
    url.pathname = '/customize'
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next).*)'],
}
