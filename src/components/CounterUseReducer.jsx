import React from 'react'
import { useReducer } from 'react'


const initailState = 0;  //1st step set an initial state for the reducer
const reducer = (updatedState, action) =>{  //2nd step set an updated state and action  for the reducer 
    switch(action){      //3rd step set an action for the reducer , use switch action for multiple reducers
        case 'increment':
            return updatedState + 1;  // 4th return the updated state
        case 'decrement':
            return updatedState - 1;
        default:
            return updatedState;
    }
}

export default function CounterUseReducer() {

   const [count,dispatch] = useReducer(reducer, initailState); //5th step set an useReducer 
   //hook with reducer function and initial state and its return a tuple destructuring
   // value count and dispatch function

  return (
    <div> 
        <p className='text-white text-2xl text-center'> ⚡ Use of <span className='text-green-300'>UseReducer</span> Hooks 🪝</p>
        <p className='text-white text-2xl text-center'> ⚡  <span className='text-green-300'>Its use for the state management</span> ⚡</p>

        <div className='text-white text-2xl text-center mt-12'>
            <p>Count : {count}</p>
        </div>

        <div className='flex justify-center my-10'>
            <button onClick={()=> dispatch('increment')} className='px-5 py-2 bg-white rounded-full text-black'>➕</button>  
            {/* 6th step set an action for the reducer */}
            <span className='text-white'>♻️♻️♻️♻️♻️♻️♻️♻️♻️♻️</span>
            <button onClick={()=> dispatch('decrement')} className='px-5 py-2 bg-white rounded-full text-black'>➖</button>
        </div>
    </div>
  )
}
