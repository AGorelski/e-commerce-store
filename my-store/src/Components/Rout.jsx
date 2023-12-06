import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Products from "./Products"
import Cart from "./Cart"
import Contact from "./Contact"
import About from "./about/About"

export default function Rout({product, setProduct, detail, view, close, setClose, cart, setCart, addToCart}) {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home detail={detail} view={view} close={close} setClose={setClose} addToCart={addToCart}/>}/>
                <Route path="/products" element={<Products />}/>
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/about" element={<About />}/>
                {/* product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addToCart={addToCart} */}
            </Routes>
        </div>
    )
}