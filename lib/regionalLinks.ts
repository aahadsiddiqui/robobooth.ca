import type { MarketConfig } from '../data/markets'
import type { ProductData } from '../data/products'

/**
 * Public path for a product: national `/products/:slug` (or linkOverride);
 * regional `/{region}/products/:slug` (rewrites to the same page entry as before).
 */
export function regionalProductHref(
  market: MarketConfig,
  product: Pick<ProductData, 'slug' | 'linkOverride'>
): string {
  if (market.id === 'national') {
    return product.linkOverride || `/products/${product.slug}`
  }
  return `${market.basePath}/products/${product.slug}`
}
