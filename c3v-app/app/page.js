"use Client"

import MainLayout from './layouts/MainLayout'
import CarouselComp from './components/CarouselComp'
import Product from './components/Product';

export default function Home() {
  
  const products = [
    {
      id: 1,
      title: "brown leather bag",
      description: "brown bag he",
      url: "https://picsum.photos/id/7",
      price: 5000
    },
    {
      id: 2,
      title: "School books",
      description: "school books he",
      url: "https://picsum.photos/id/20",
      price: 2000
    }

  ]
  return (
    <MainLayout>
        <CarouselComp />

        <div className="max-w-[1200px] mx-auto">
          <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>

          <div className="grid grid-cols-5 gap-4">
              {products.map(product => (
                <Product key={product.id} product={product} />
              ))}
            </div>
        </div>
    </MainLayout>

  )
}
