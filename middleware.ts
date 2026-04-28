import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/** Lets getServerSideProps see the real browser path (e.g. /chicago/events/product-launch) after rewrites. */
export function middleware(request: NextRequest) {
  const h = new Headers(request.headers)
  h.set('x-robobooth-path', request.nextUrl.pathname)
  return NextResponse.next({ request: { headers: h } })
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
