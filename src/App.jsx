import Navbar from "./layouts/Nav"
import TextForm from "./components/TextForm"
import About from "./components/About"
import Store from "./components/Store"
const App = () => {
  return (
    <div className="App">
      <Navbar title="Dev-Labour" about="About Us" home="Home" />
      <Store />
    </div>
  )
}

export default App
