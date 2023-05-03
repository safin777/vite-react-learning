import React from 'react'

export default function Login() {
  return (
    <div className='flex justify-center'>
        <div className='bg-gray-900 text-white w-80'>
           <p className='text-center'>Login Here</p>
            <form className='flex flex-col gap-3'>
                <input type='text' placeholder='Enter your name' className='username border-2 border-gray-500 rounded-md p-2'/>
                <input type='password' placeholder='Enter your password' className='password border-2 border-gray-500 rounded-md p-2'/>
                <button className='login-btn bg-gray-500 rounded-md p-2'>Login</button>
            </form>
        </div>
     </div>
  )
}
