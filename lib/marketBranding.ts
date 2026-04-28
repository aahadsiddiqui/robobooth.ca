import type { MarketConfig } from '../data/markets'

/** "Chicago's First" / "Texas's First" / "USA's First" (headline-style). */
export function firstRobotBrandPhrase(market: MarketConfig): string {
  if (market.id === 'chicago') return "Chicago's First"
  if (market.id === 'texas') return "Texas's First"
  return "USA's First"
}

/** Possessive only: "Chicago's" / "Texas's" / "USA's" */
export function firstRobotPossessive(market: MarketConfig): string {
  if (market.id === 'chicago') return "Chicago's"
  if (market.id === 'texas') return "Texas's"
  return "USA's"
}

/** Marquee under logo strip on several landings. */
export function trustedBrandsMarqueeLine(market: MarketConfig): string {
  if (market.id === 'chicago') return 'Trusted by leading brands across Chicago & surrounding areas'
  if (market.id === 'texas') return 'Trusted by leading brands across Texas & surrounding areas'
  return 'Trusted by leading brands across USA'
}

/** Corporate landing uses “companies” in the marquee. */
export function trustedCompaniesMarqueeLine(market: MarketConfig): string {
  if (market.id === 'chicago') return 'Trusted by leading companies across Chicago & surrounding areas'
  if (market.id === 'texas') return 'Trusted by leading companies across Texas & surrounding areas'
  return 'Trusted by leading companies across USA'
}

export function corporateHeroRatingLine(market: MarketConfig): string {
  if (market.id === 'chicago') return "5.0 Rating · Trusted by Chicago's Top Brands"
  if (market.id === 'texas') return "5.0 Rating · Trusted by Texas's Top Brands"
  return '5.0 Rating · Trusted by Leading Brands Across the USA'
}

export function weddingHeroRatingLine(market: MarketConfig): string {
  if (market.id === 'chicago') return '5.0 Rating · Trusted by couples across Chicago & surrounding areas'
  if (market.id === 'texas') return '5.0 Rating · Trusted by couples across Texas & surrounding areas'
  return '5.0 Rating · Trusted by Couples Across the USA'
}

export function weddingMarqueeLine(market: MarketConfig): string {
  if (market.id === 'chicago') return 'Trusted by leading brands & couples across Chicago & surrounding areas'
  if (market.id === 'texas') return 'Trusted by leading brands & couples across Texas & surrounding areas'
  return 'Trusted by leading brands & couples across USA'
}

/**
 * Rewrites national “USA’s first” positioning and mixed Chicago+USA phrases for regional URLs.
 * Does not modify copy when `market` is national.
 */
export function localizeMarketingCopy(text: string, market: MarketConfig): string {
  if (market.id === 'national') return text

  if (market.id === 'texas') {
    let t = text
      .replace(/\bUSA's First\b/g, "Texas's First")
      .replace(/\bUSA's first\b/g, "Texas's first")
    t = t.replace(/\bChicago USA\b/g, 'Texas')
    t = t.replace(/Serving Chicago & USA/g, 'Serving Texas & surrounding areas')
    t = t.replace(/Chicago & USA/g, 'Texas & surrounding areas')
    t = t.replace(/Chicago & the USA/gi, 'Texas & surrounding areas')
    t = t.replace(/serving Chicago & the USA/gi, 'serving Texas & surrounding areas')
    t = t.replace(/across Chicago & the USA/gi, 'across Texas & surrounding areas')
    t = t.replace(/Chicago & across USA/g, 'Texas & surrounding areas')
    t = t.replace(/— Chicago & across USA/g, '— Texas & surrounding areas')
    t = t.replace(/\bacross the USA\b/gi, 'across Texas & surrounding areas')
    t = t.replace(/\bacross USA\b/g, 'across Texas & surrounding areas')
    t = t.replace(/\bthroughout the USA\b/gi, 'throughout the Texas area')
    t = t.replace(/\bin the USA\b/gi, 'in Texas & surrounding areas')
    return t
  }

  let t = text
    .replace(/\bUSA's First\b/g, "Chicago's First")
    .replace(/\bUSA's first\b/g, "Chicago's first")

  t = t.replace(/Serving Chicago & USA/g, 'Serving Chicago & surrounding areas')
  t = t.replace(/Chicago & USA/g, 'Chicago & surrounding areas')
  t = t.replace(/Chicago & the USA/gi, 'Chicago & surrounding areas')
  t = t.replace(/serving Chicago & the USA/gi, 'serving Chicago & surrounding areas')
  t = t.replace(/across Chicago & the USA/gi, 'across Chicago & surrounding areas')
  t = t.replace(/Chicago & across USA/g, 'Chicago & surrounding areas')
  t = t.replace(/— Chicago & across USA/g, '— Chicago & surrounding areas')
  t = t.replace(/\bacross the USA\b/gi, 'across Chicago & surrounding areas')
  t = t.replace(/\bacross USA\b/g, 'across Chicago & surrounding areas')
  t = t.replace(/\bthroughout the USA\b/gi, 'throughout the Chicago area')
  t = t.replace(/\bin the USA\b/gi, 'in Chicago & surrounding areas')
  t = t.replace(/\bChicago USA\b/g, 'Chicago')

  return t
}
