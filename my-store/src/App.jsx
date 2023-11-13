import Navbar from "./Components/NavBar"
import { BrowserRouter } from "react-router-dom"
import Rout from "./Components/Rout"

function App() {

  return (
     <div>

      <BrowserRouter>
      <Navbar />
      <Rout />
      </BrowserRouter>

     </div> 
  )
}

export default App
