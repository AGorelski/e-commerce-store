import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Products from "./Produtcs"

export default function Rout({product, setProduct}) {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/products" element={<Products product={product} setProduct={setProduct} />}/>
            </Routes>
        </div>
    )
}