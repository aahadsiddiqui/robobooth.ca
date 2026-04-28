import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { getMarketForPath, MARKETS, type MarketConfig } from '../data/markets'

/**
 * For custom product landings, resolve Chicago/Texas from the **browser URL** (e.g. /chicago/products/premium-photobooth) after rewrites.
 * Always prefer `asPath` (public URL). `pathname` is the *internal* file path under rewrites; using it when
 * `isReady` was false caused market=national while the real URL was /chicago/... → React hydration #418.
 */
export function useLandingMarket(): MarketConfig {
  const router = useRouter()
  return useMemo(() => {
    const raw = (router.asPath || router.pathname || '/').split('?')[0] || '/'
    if (!raw) return MARKETS.national
    return getMarketForPath(raw)
  }, [router.asPath, router.pathname])
}
