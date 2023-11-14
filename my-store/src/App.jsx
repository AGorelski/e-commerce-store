import Navbar from "./Components/NavBar"
import { BrowserRouter } from "react-router-dom"
import Rout from "./Components/Rout"
import Footer from "./Components/Footer"

import HomeProducts from "./Components/HomeProducts"

import { useState } from "react"

function App() {
  const [product, setProduct] = useState(HomeProducts)
  const searchBtn = (product) =>
  {
    const change = HomeProducts.filter((x) =>
    {
      return x.Category === product
    })
    setProduct(change)
  }

  return (
     <div>

      <BrowserRouter>
      <Navbar searchBtn={searchBtn}/>
      <Rout product={product} setProduct={setProduct}/>
      <Footer />
      </BrowserRouter>

     </div> 
  )
}

export default App
