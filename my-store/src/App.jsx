import Navbar from "./Components/NavBar"
import { BrowserRouter } from "react-router-dom"
import Rout from "./Components/Rout"
import Footer from "./Components/Footer"

import HomeProducts from "./Components/HomeProducts"

import { useState } from "react"

function App() {
  //product detail
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  //filter product
  const [product, setProduct] = useState(HomeProducts)
  const searchBtn = (product) =>
  {
    const change = HomeProducts.filter((x) =>
    {
      return x.Category === product
    })
    setProduct(change)
  }
  //product detail
  const view = (product) =>
  {
    setDetail([{...product}])
    setClose(true)
  }

  return (
     <div>

      <BrowserRouter>
      <Navbar searchBtn={searchBtn}/>
      <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose}/>
      <Footer />
      </BrowserRouter>

     </div> 
  )
}

export default App
