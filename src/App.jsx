import Navbar from "./layouts/Nav"
import TextForm from "./components/TextForm"
import About from "./components/About"
import Store from "./components/Store"
import Jokes from "./components/Jokes"
import { useState, useEffect } from "react"
import useRendomJokes from "./components/useRandomJokes"

const App = () => {

  //hooks
  const joke = useRendomJokes();
  
  const jokee = joke.map((jok)=>{
     return (
        <Jokes key={jok.id} id= { jok.id } setup={jok.setup} punchline={jok.punchline} type={jok.type} /> )
  })

  return (
    <div className="App">
      <Navbar title="Dev-Labour" about="About Us" home="Home" />
      <TextForm/>
      <div className = "flex gap-3 inline-flex flex-wrap">
      {jokee}
      </div>
      <Store />
       
      
    </div>
  )
  }

export default App
