import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Products from "./Produtcs"

export default function Rout({product, setProduct, detail, view, close, setClose}) {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home detail={detail} view={view} close={close} setClose={setClose}/>}/>
                <Route path="/products" element={<Products product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose}/>}/>
            </Routes>
        </div>
    )
}