import React from 'react'

function Input({type ,placeholder},ref) {


  return (
    <div className='flex justify-center mt-16'>
        <input ref={ref} placeholder={placeholder} type={type} className="w-96 placeholder:text-blue-300 placeholder:italic placeholder:uppercase  px-5 py-2 rounded-full outline-2 outline-lime-600"/>
    </div>
  )
}

const forwardednput = React.forwardRef(Input);

export default forwardednput;
