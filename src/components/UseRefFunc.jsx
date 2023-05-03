import React from 'react'
import { useRef , useEffect } from 'react'

export default function UseRefFunc() {

  //when relode the component input field should be focus 


  const focusUseRef = useRef(null);

    useEffect(() => {
        focusUseRef.current.focus();
    },[])


  return (
    <>
        <div>
            <p className='text-white text-2xl text-center'> ⚡ Use of <span className='text-green-300'>UseRef</span> Hooks 🪝</p>
            <p className='text-white text-2xl text-center'> ⚡  <span className='text-green-300'>Its initially focus on the First input field when reload</span> ⚡</p>
        </div>
        
        <div className='flex justify-center my-10'>
            <input ref={focusUseRef} type="text" name="" id="" placeholder='Enter your name ' className='w-80 placeholder:text-blue-300 placeholder:italic placeholder:uppercase w-96 px-5 py-2 rounded-full outline-2 outline-lime-600  ' />
        </div>

        <div className='flex justify-center my-10'>
            <input type="text" name="" id="" placeholder='Enter your name ' className='w-80 placeholder:text-blue-300 placeholder:italic placeholder:uppercase w-96 px-5 py-2 rounded-full outline-2 outline-lime-600  ' />
        </div>

    </>
   
  )
}
