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
import CounterUseReducer from "./components/CounterUseReducer"
import CounterThree from "./components/CounterThree"
import CompA from "./components/CompA"
import { createContext } from "react";
import RedCounter from "./components/RedCounter"


const FirstName = createContext();

const App = () => {
  
  //hooks
  // const joke = useRendomJokes();
  
  // const jokee = joke.map((jok)=>{
  //    return (
  //       <Jokes key={jok.id} id= { jok.id } setup={jok.setup} punchline={jok.punchline} type={jok.type} /> )
  // })

  return (
    
    <div className="App">

      <Navbar title="💵DEV-lab💵" about="Abouts" home="Home" />
      <RedCounter/>
      {/* <FirstName.Provider value={"Safin Sayed"}>
        <CompA/>
      </FirstName.Provider> */}
    
    </div>
  )

  }

export default App;
export {FirstName};



