import { Routes, Route } from "react-router-dom"
import Home from "./home/Home"
import Products from "./products/Products"
import Cart from "./cart/Cart"
import Contact from "./contact/Contact"
import About from "./about/About"
import ProductDetails from "./product-details/ProductDetails"
import Favourites from "./fav/Favourites"

export default function Rout({close, setClose, cart, setCart, addToCart, fav, setFav, addToFav, userRole}) {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home close={close} setClose={setClose} addToCart={addToCart} addToFav={addToFav}/>}/>
                <Route path="/products" element={<Products addToCart={addToCart} addToFav={addToFav} userRole={userRole}/>}/>
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
                <Route path="/favourites" element={<Favourites fav={fav} setFav={setFav} addToCart={addToCart}/>}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/products/:productId" element={<ProductDetails />} />
            </Routes>
        </div>
    )
}