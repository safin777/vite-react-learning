import React from 'react'
import CompB from './CompB'

export default function CompA() {
  return (
    <div>
        <div className=''>
            <p className='text-white text-2xl text-center'> ⚡ Use of <span className='text-green-300'>Context API</span>  🪝</p>
            <p className='text-white text-2xl text-center'> ⚡  <span className='text-green-300'>Component A (Parent Component)</span> ⚡</p>
        </div>

        <CompB  />
    </div>
  )
}
