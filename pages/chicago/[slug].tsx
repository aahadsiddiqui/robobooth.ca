import { GetStaticPaths, GetStaticProps } from 'next'
import ProductPageView from '../../components/ProductPageView'
import { ProductData, products } from '../../data/products'
import { type MarketId } from '../../data/markets'
import { REGIONAL_DYNAMIC_SLUGS } from '../../data/regionProductSlugs'

type Props = {
  product: ProductData
  marketId: MarketId
}

export default function ChicagoProductPage({ product, marketId }: Props) {
  return <ProductPageView product={product} marketId={marketId} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: REGIONAL_DYNAMIC_SLUGS.map((slug) => ({ params: { slug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug as string
  if (!REGIONAL_DYNAMIC_SLUGS.includes(slug)) {
    return { notFound: true }
  }
  const product = products.find((item) => item.slug === slug)
  if (!product) {
    return { notFound: true }
  }

  return {
    props: {
      product,
      marketId: 'chicago' as const
    }
  }
}
