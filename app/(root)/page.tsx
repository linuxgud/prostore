//const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

//const Homepage = async () => {
//await delay(2000)

import ProductList from '@/components/shared/product/product-list'
//import sampleData from '@/db/sample-data'
import {
  getLatestProducts,
  getFeaturedProducts,
} from '@/lib/actions/product.actions'
import ProductCarousel from '@/components/shared/product/product-carousel'
import ViewAllProductsButton from '@/components/view-all-products-button'
import IconBoxes from '@/components/icon-boxes'

const Homepage = async () => {
  const latestProducts = await getLatestProducts()
  const featuredProducts = await getFeaturedProducts()

  return (
    <>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList title="Newest Arrivals" data={latestProducts} limit={4} />
      <ViewAllProductsButton />
      <IconBoxes />
    </>
  )
}
export default Homepage
