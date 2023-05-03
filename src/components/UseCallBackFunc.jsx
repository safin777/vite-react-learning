import React from 'react'
import { useState,useCallback,useMemo} from 'react'

export default function UseCallBackFunc() {
   
  const [count,setCount] = useState(0)
  

  // const incrementByOne = useCallback(() => {
  //   console.log("one")
  //   setCount((prevCount)=>{
  //     prevCount = prevCount + 1;
  //   })
  // }, [])
  const incrementByOne = useCallback(() => {
    setCount((prevCount)=>prevCount + 1)
    
  }, [])


  const incrementByFive = useCallback(() => {
    setCount((prevCount)=>{
      return prevCount + 5;
    })
  }, [])

  const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while(i < 200000) i++;
    return count % 2 === 0;

  }, [count])
  

  return (
    <div className='flex-1 my-6'>
        <p className='text-white'>
            This is useCallBackFunc counter : 
        </p>
        <p className='text-white'>
          {isEvenOrOdd() ? 'Even' : 'Odd'}
        </p>
        <div>
            <p className='text-white'>Count : {count}  </p>
            <button type="button" onClick={incrementByOne} className="btn btn-primary p-2  bg-slate-600 mx-2">Increment by 1</button>
            <button type="button" onClick={incrementByFive} className="btn btn-primary p-2  bg-lime-600">Increment by 5</button>
        </div>
        
    </div>
  )
}
