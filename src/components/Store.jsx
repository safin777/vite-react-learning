import React from 'react'
import Product from './Product'
export default function Store() {
  //array of objects of products
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is product 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is product 2',
      price: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is product 3',
      price: 300,
    },
  ]

  let product = products.map((product) => {
    return (
    <Product key={product.id} name={product.name} description={product.description} price={product.price}/>)
  })

  return (
    <div>
      <div className="bg-gray-800 m-auto max-w-sm">
        <h1 className="text-white text-3xl">Store</h1>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {
          product
        }
      </div>
    </div>
  )
}
