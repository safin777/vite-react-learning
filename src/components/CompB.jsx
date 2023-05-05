import React from 'react'
import CompC from './CompC'

export default function CompB() {
  return (
    <div>
       <div className="mt-16">
            <p className='text-white text-2xl text-center'> ⚡ Use of <span className='text-green-300'>Context API</span>  🪝</p>
            <p className='text-white text-2xl text-center'> ⚡  <span className='text-green-300'>Component B</span> ⚡</p>
        </div>

        

        <CompC />
    </div>
  )
}
