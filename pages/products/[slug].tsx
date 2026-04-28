import { GetStaticPaths, GetStaticProps } from 'next'
import ProductPageView from '../../components/ProductPageView'
import { ProductData, products } from '../../data/products'
import { type MarketId } from '../../data/markets'

type ProductPageProps = {
  product: ProductData
  marketId: MarketId
}

export default function ProductPage({ product, marketId }: ProductPageProps) {
  return <ProductPageView product={product} marketId={marketId} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: products.map((product) => ({ params: { slug: product.slug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<ProductPageProps> = async (context) => {
  const slug = context.params?.slug as string
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    return { notFound: true }
  }

  return {
    props: {
      product,
      marketId: 'national' as const
    }
  }
}
