import React from 'react'
import { useState , useEffect } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter your text here')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth)
    }
    const handleText = (event) => {
        let t = event.target.value;
        setText(t.toUpperCase()); 
    }
    // this is the useEffect function
    useEffect(() => {
        console.log('text mounted')  //will print after every render
    });


    useEffect(() => { 
        console.log('text was changed') //will print only first time becuase of empty array [dependencies]
    }, []);
    

    //this useEffect will change for a particular state change
    useEffect(() => {
        console.log(`text ${text} was change`) //will print only first time becuase of empty array [dependencies]
        return () => {
            //cleanup... 
            //this is for unmounting
            console.log('text unmounted')
        }
    }, [text]);

    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth)
        return () => {
            window.removeEventListener('resize', updateWindowWidth) //this is removing all the previous resize events
        }
    }, []);
    
    

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
            <p className='text-caracter text-white'>you have: {text.length} caracter and {text.split(" ").length} words</p>
            <p className='text-white'> {0.008 * text.length }minutes to read</p>
         </div>

         <div>
            <p className='text-white'>width: {windowWidth} px</p>
         </div>
    </div>
  )
}
