import Navbar from "./Components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Rout from "./Components/Rout";
import Footer from "./Components/Footer";

import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";

import * as Services from "./config/Services";

import HomeProducts from "./Components/HomeProducts";

import { useState, useEffect } from "react";

function App() {
  // State for user role
  const [userRole, setUserRole] = useState(null);

  //add to cart
  const [cart, setCart] = useState([]);

  //add to fav
  const [fav, setFav] = useState([]);

  //product detail
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);

  //filter product
  const [product, setProduct] = useState(HomeProducts);

  const searchBtn = (product) => {
    const change = HomeProducts.filter((x) => {
      return x.Category === product;
    });
    setProduct(change);
  };
  //product detail
  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  //gets the role of the current user
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const role = await Services.getUserRole(user.uid);
        setUserRole(role);
      } else {
        setUserRole(null);
      }
    });
  }, []);

  const addToCart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      alert("This product has already been added to the cart!");
    } else {
      const updatedCart = [...cart, { ...product, qty: 1 }];
      setCart(updatedCart);
      // Update Firestore cart for the current user
      Services.updateUserCart(auth.currentUser.uid, updatedCart);
      alert("The product has been added to the cart");
    }
  };

  const addToFav = (product) => {
    const exist = fav.find((x) => x.id === product.id);
    if (exist) {
      alert("This product has already been added to your favourites!");
    } else {
      const updatedFav = [...fav, { ...product }];
      setFav(updatedFav);
      // Update Firestore favorites for the current user
      Services.updateUserFav(auth.currentUser.uid, updatedFav);
      alert("The product has been added to your favourites");
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar searchBtn={searchBtn} />
        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
          addToCart={addToCart}
          fav={fav}
          setFav={setFav}
          addToFav={addToFav}
          userRole={userRole}
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
