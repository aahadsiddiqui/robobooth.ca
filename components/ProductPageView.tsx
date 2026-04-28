import React from 'react'
import Head from 'next/head'
import { ProductData } from '../data/products'
import { MARKETS, type MarketId } from '../data/markets'
import ProductLayout from './ProductLayout'
import RobotBoothPage from './RobotBoothPage'
import { getProductSeoName, getRobotBoothPageCopy, localizeProductBadges, productServingLine } from '../lib/productLocalize'
import { regionalProductHref } from '../lib/regionalLinks'

type ProductPageViewProps = {
  product: ProductData
  marketId: MarketId
}

export default function ProductPageView({ product, marketId }: ProductPageViewProps) {
  const market = MARKETS[marketId]
  const isPremium = product.slug === 'premium-photobooth'
  const isRobot = product.slug === 'robot-photobooth'

  if (isRobot) {
    const rb = getRobotBoothPageCopy(market)
    return (
      <>
        <Head>
          <title>{rb.metaTitle}</title>
          <meta name="description" content={rb.metaDescription} />
          <meta property="og:title" content="Robot Photobooth | Robo Booth" />
          <meta property="og:description" content={rb.ogDescription} />
          <meta property="og:type" content="website" />
          {marketId !== 'national' && (
            <link rel="canonical" href={`https://roboboothusa.com${regionalProductHref(market, product)}`} />
          )}
        </Head>
        <RobotBoothPage market={market} />
      </>
    )
  }

  const seo = getProductSeoName(market, product.name)
  const badges = localizeProductBadges(product.badges, market)
  const serving = productServingLine(market)
  const metaDesc = seo.desc(product.summary)

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={metaDesc} />
        <meta property="og:title" content={`${product.name} | Robo Booth`} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="website" />
        {marketId !== 'national' && (
          <link rel="canonical" href={`https://roboboothusa.com${regionalProductHref(market, product)}`} />
        )}
      </Head>
      <ProductLayout
        market={market}
        name={product.name}
        tagline={product.tagline}
        summary={product.summary}
        priceLabel={product.priceLabel}
        priceNote={product.priceNote}
        badges={badges}
        usp={product.usp}
        videoUrl={product.videoUrl}
        productImage={product.productImage}
        faqData={product.faqData}
        testimonials={product.testimonials}
        ctaLabel="Reserve Yours"
        ctaHref={market.contactPath}
        servingLine={serving}
        belowHeroContent={isPremium ? <PremiumBellowHero /> : undefined}
      />
    </>
  )
}

function PremiumBellowHero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      <div>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Premium Photobooth Overview</h2>
        <p className="text-white/70">
          The Premium Photobooth delivers a sleek, compact setup with studio lighting and instant sharing. Perfect for
          elegant events where space is tight but quality still matters.
        </p>
      </div>
      <div className="rounded-3xl overflow-hidden shadow-2xl bg-black w-full aspect-video max-h-[360px]">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline controls={false} preload="metadata">
          <source src="/videos/premiumphoto.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
