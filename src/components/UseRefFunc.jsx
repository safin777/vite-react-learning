import React from 'react'
import { useRef , useEffect } from 'react'
import Input from './Input'

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
            <input  type="text" name="" id="" placeholder='Enter your name ' className='w-80 placeholder:text-blue-300 placeholder:italic placeholder:uppercase  px-5 py-2 rounded-full outline-2 outline-lime-600  ' />
        </div>

        <div className='flex justify-center my-10'>
            <input type="text" name="" id="" placeholder='Enter your name ' className='w-80 placeholder:text-blue-300 placeholder:italic placeholder:uppercase  px-5 py-2 rounded-full outline-2 outline-lime-600  ' />
        </div>


        <div>
            <p className='text-white text-2xl text-center'> ⚡ Use of <span className='text-green-300'>ForwardRef</span> Hooks 🪝</p>
            <p className='text-white text-2xl text-center'> ⚡  <span className='text-green-300'>Its only use in the replacement of UseRef for a whole component</span> ⚡</p>
        </div>

        <Input placeholder='Enter your name' type='text' ref={focusUseRef}/>

    </>
   
  )
}
