import React from 'react'

export default function Jokes({id,setup,punchline,type}) {

  return (
    <>
        <div className="max-w-md mx-auto bg-gray-200 mb-4 rounded-md shadow-md overflow-hidden">
          <div className="md:flex">
            
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Type : {type} </div>
              <a href="#" className="block mt-1 text-lg  leading-tight font-medium text-black hover:underline">Joke ID: {id}</a>
              <p className="mt-2 text-gray-500">Setup : {setup}</p>
              <p className="mt-2 text-gray-500">Punchline: {punchline}</p>
               
            </div>
          </div>
        </div>
    </>
  )
}
