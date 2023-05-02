import React from 'react'

export default function Product({name, description, price, key}) { //props can be destructured here.Just like this line of code inside {a,b,c}
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg border m-auto">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">{name}</div>
          <p className="text-white text-base">
            {description}
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">${price}</span>
          <span value={key} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Add to Cart</span>
        </div>
      </div>
    </div>
  )
}
