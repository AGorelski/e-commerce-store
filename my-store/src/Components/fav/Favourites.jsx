import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineEye } from "react-icons/hi";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import * as Services from "../../config/Services";

import "../../assets/styles/favourites.css";

export default function Favourites({ fav, setFav, addToCart }) {
  useEffect(() => {
    const fetchFavItems = async (userId) => {
      const fetchedFav = await Services.getUserFav(userId);
      setFav(fetchedFav);
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchFavItems(user.uid);
      } else {
        setFav([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const navigate = useNavigate();

  //Remove an item
  const removeProduct = (product) => {
    const exist = fav.find((x) => x.id === product.id);
    if (exist) {
      const updatedFav = fav.filter((x) => x.id !== product.id);
      setFav(updatedFav);
      Services.removeItemFromFav(auth.currentUser.uid, product.id);
    }
  };

  return (
    <div className="container">
      <h4>Your Favourites</h4>
      <div className="product-box">
        <div className="content">
          {fav.map((favItem) => (
            <div className="box" key={favItem.id}>
              <div className="img_box">
                <img src={favItem.imageUrl} alt={favItem.name}></img>
                <div className="icon">
                  <li onClick={() => navigate(`/products/${favItem.id}`)}>
                    <HiOutlineEye />
                  </li>
                </div>
              </div>
              <div className="detail">
                <p>{favItem.category}</p>
                <h3>{favItem.name}</h3>
                <h4>${favItem.price}</h4>
              </div>

              <div className="buttons">
                <button
                  className="add-to-cart"
                  onClick={() =>
                    addToCart({ id, name, category, imageUrl, price, quantity })
                  }
                >
                  Add to Cart
                </button>
              </div>
              <div className="close">
                <button
                  className="remove_item"
                  onClick={() => removeProduct(favItem)}
                >
                  <AiOutlineClose />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
