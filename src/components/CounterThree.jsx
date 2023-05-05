import React from 'react'
import { useReducer } from 'react'


//complex way to reduce 
 //1st step set an initial state for the reducer

const initailState = {
    counter : 0,
};
const initailState5 = {
    counter : 5,
};

const reducer =  (state,action) =>{
   switch(action.type){
        case 'increment1':
            return { counter : state.counter + action.value };
        case 'decrement1':
            return { counter : state.counter - action.value };
        
        default:
            return state;
        
   }
}

export default function CounterThree() {

   const [count,dispatch] = useReducer(reducer, initailState);
   const [count2,dispatch2] = useReducer(reducer,initailState5);
  return (
    <div> 
        <p className='text-white text-2xl text-center'> ⚡ Use of <span className='text-green-300'>UseReducer</span> Hooks 🪝</p>
        <p className='text-white text-2xl text-center'> ⚡  <span className='text-green-300'>Its use for the state management</span> ⚡</p>

        <div className='text-white text-2xl text-center mt-12'>
            <p>Count:   {count.counter} </p>
            
        </div>

        <div className='flex justify-center my-10'>
            <button onClick={()=> dispatch({type : 'increment1', value:1})} className='px-5 py-2 bg-white rounded-full text-black'>➕1</button>  
            <button onClick={()=> dispatch({type : 'decrement1', value:1})} className='px-5 py-2 bg-white rounded-full text-black'>➖1</button>
        </div>


        <div className='text-white text-2xl text-center mt-12'>
            <p>count2:  {count2.counter} </p>
            
        </div>

        <div className='flex justify-center my-10'>
            <button onClick={()=> dispatch2({type : 'increment1', value:1})} className='px-5 py-2 bg-white rounded-full text-black'>➕1</button>  
            <button onClick={()=> dispatch2({type : 'decrement1', value:1})} className='px-5 py-2 bg-white rounded-full text-black'>➖1</button>
        </div>
    </div>
  )
}
