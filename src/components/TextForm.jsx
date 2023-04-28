import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter your text here')
    const handleText = (event) => {
        let t = event.target.value;
        setText(t.toUpperCase()); 
    }

  return (
    <div className='container'>
         <p className='text-form-heading text-white text-2xl'>
            {props.heading}
         </p>
         <div className='text-form-textarea '>
            <textarea className='text-form-textarea-input' onChange={handleText} id='text-form-textarea-input' rows='8' cols='100' placeholder='Enter your text here'></textarea>
         </div>

         <div>
            <p className='text-white'>Output: {text} </p>
            <p className='text-caracter text-white'>you have: {text.length} caracter and {text.split(" ").length}</p>
            <p className='text-white'> {0.008 * text.length }minutes to read</p>
         </div>
    </div>
  )
}
