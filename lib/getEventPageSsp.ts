import type { GetServerSidePropsContext } from 'next'
import { getMarketForPath } from '../data/markets'

function headerPath(context: GetServerSidePropsContext): string {
  const raw = context.req?.headers['x-robobooth-path']
  const s = typeof raw === 'string' ? raw : Array.isArray(raw) ? raw[0] : ''
  return s ? s.split('?')[0] : ''
}

/**
 * Correct og:url + canonical for /chicago/events/... and /texas/events/... (uses x-robobooth-path from middleware).
 */
export function getEventPageSsp(canonicalPath: string) {
  return async (context: GetServerSidePropsContext) => {
    const resolved = context.resolvedUrl?.split('?')[0] || ''
    const path = headerPath(context) || resolved || canonicalPath
    const market = getMarketForPath(path)
    const seg = canonicalPath.replace(/^\/events\//, '')
    const ssrPublicPath = market.id === 'national' ? canonicalPath : `${market.basePath}/events/${seg}`
    return { props: { ssrPublicPath } }
  }
}
