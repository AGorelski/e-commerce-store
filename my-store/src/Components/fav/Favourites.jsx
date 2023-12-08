import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineEye } from "react-icons/hi";

import { useNavigate } from "react-router-dom";

import "../../assets/styles/favourites.css";

export default function Favourites({ fav, setFav, addToCart }) {
  const navigate = useNavigate();

  //Remove an item
  const removeProduct = (product) => {
    const exist = fav.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 0) {
      setFav(
        fav.filter((x) => {
          return x.id !== product.id;
        })
      );
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
