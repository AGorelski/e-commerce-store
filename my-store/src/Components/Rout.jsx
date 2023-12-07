import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Products from "./Products"
import Cart from "./Cart"
import Contact from "./Contact"
import About from "./about/About"
import ProductDetails from "./product-details/ProductDetails"

export default function Rout({product, setProduct, detail, view, close, setClose, cart, setCart, addToCart}) {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home detail={detail} view={view} close={close} setClose={setClose} addToCart={addToCart}/>}/>
                <Route path="/products" element={<Products addToCart={addToCart} />}/>
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/products/:productId" element={<ProductDetails />} />
                {/* product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addToCart={addToCart} */}
            </Routes>
        </div>
    )
}