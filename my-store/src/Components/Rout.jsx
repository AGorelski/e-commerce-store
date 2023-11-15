import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Products from "./Produtcs"
import Cart from "./Cart"

export default function Rout({product, setProduct, detail, view, close, setClose, cart, setCart, addToCart}) {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home detail={detail} view={view} close={close} setClose={setClose} addToCart={addToCart}/>}/>
                <Route path="/products" element={<Products product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addToCart={addToCart}/>}/>
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
            </Routes>
        </div>
    )
}