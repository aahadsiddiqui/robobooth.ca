import type { GetServerSidePropsContext } from 'next'

function headerPathFromContext(context: GetServerSidePropsContext): string {
  const raw = context.req?.headers['x-robobooth-path']
  const s = typeof raw === 'string' ? raw : Array.isArray(raw) ? raw[0] : ''
  return s ? s.split('?')[0] : ''
}

/**
 * getServerSideProps for /corporate, /wedding, /brand-activations and their /chicago/... rewrites.
 * Uses the same `x-robobooth-path` header as event pages so SSR + first client paint use the real URL
 * (avoids React #418 hydration errors from `pathname` being the internal route under rewrites).
 */
export function getRegionalLandingSsp(fallbackPath: string) {
  return async (context: GetServerSidePropsContext) => {
    const resolved = context.resolvedUrl?.split('?')[0] || ''
    const browserPath = headerPathFromContext(context) || resolved || fallbackPath
    return { props: { browserPath } }
  }
}
