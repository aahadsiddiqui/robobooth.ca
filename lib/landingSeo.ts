import type { MarketConfig } from '../data/markets'

const SITE = 'https://roboboothusa.com'

/**
 * Canonical and og:url: national uses the custom page path; regional uses /[region]/products/[dataSlug].
 */
export function landingCanonical(
  market: MarketConfig,
  nationalPath: string,
  dataSlug: string
): { canonical: string; ogUrl: string } {
  if (market.id === 'national') {
    const path = nationalPath.startsWith('/') ? nationalPath : `/${nationalPath}`
    const u = `${SITE}${path}`
    return { canonical: u, ogUrl: u }
  }
  const u = `${SITE}${market.basePath}/products/${dataSlug}`
  return { canonical: u, ogUrl: u }
}
