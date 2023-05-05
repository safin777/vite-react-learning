import React from 'react'
import { FirstName } from '../App'

export default function CompC() {
  return (
    <div>
      <div className="mt-16">
            <p className='text-white text-2xl text-center'> ⚡ Use of <span className='text-green-300'>Context API</span>  🪝</p>
            <p className='text-white text-2xl text-center'> ⚡  <span className='text-green-300'>Component C</span> ⚡</p>
      </div>
      
      <FirstName.Consumer>
        {
          (fname)=>{
             return (
              <p className='text-white text-2xl text-center mt-10'>
               🔶My name is {fname}🔶
              </p>
             )
          }
        }
      </FirstName.Consumer>
    </div>
  )
}
