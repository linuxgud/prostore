//const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

//const Homepage = async () => {
//await delay(2000)

import ProductList from '@/components/shared/product/product-list'
//import sampleData from '@/db/sample-data'
import { getLatestProducts } from '@/lib/actions/product.actions'

const Homepage = async () => {
  const latestProducts = await getLatestProducts()
  return (
    <>
      <ProductList title="Newest Arrivals" data={latestProducts} limit={4} />
    </>
  )
}
export default Homepage
