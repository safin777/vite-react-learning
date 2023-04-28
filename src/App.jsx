import Navbar from "./layouts/Nav"
import TextForm from "./components/TextForm"
import About from "./components/About"
const App = () => {
  return (
    <div className="App">
      <Navbar title="Dev-Labour" about="About Us" home="Home" />
      <TextForm heading="Enter your text here" />
      {/* <About /> */}
    </div>
  )
}

export default App
