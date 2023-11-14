import Navbar from "./Components/NavBar"
import { BrowserRouter } from "react-router-dom"
import Rout from "./Components/Rout"
import Footer from "./Components/Footer"

function App() {

  return (
     <div>

      <BrowserRouter>
      <Navbar />
      <Rout />
      <Footer />
      </BrowserRouter>

     </div> 
  )
}

export default App
