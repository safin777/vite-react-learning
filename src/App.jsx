import Navbar from "./layouts/Nav"
import TextForm from "./components/TextForm"
import About from "./components/About"
import Store from "./components/Store"
import Jokes from "./components/Jokes"
import { useState, useEffect,useCallback } from "react"
import useRendomJokes from "./components/useRandomJokes"
import Login from "./components/Login"
import UseCallBackFunc from "./components/useCallBackFunc"
import UseRefFunc from "./components/UseRefFunc"

const App = () => {

 

  //hooks
  const joke = useRendomJokes();
  
  const jokee = joke.map((jok)=>{
     return (
        <Jokes key={jok.id} id= { jok.id } setup={jok.setup} punchline={jok.punchline} type={jok.type} /> )
  })

  return (

    <div className="App">

      <Navbar title="💵DEV-lab💵" about="Abouts" home="Home" />
      <UseRefFunc />
      
    </div>
  )
  }

export default App
