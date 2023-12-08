import { AiOutlineClose } from "react-icons/ai";

import { Link } from "react-router-dom";

import "../assets/styles/cart.css";

export default function Cart({ cart, setCart }) {
  //Increase quantity
  const increaseQty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((item) => {
        return item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item;
      })
    );
  };

  //Decrease quantity
  const decreaseQty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 1) { // Check if quantity is greater than 1 before decreasing
      setCart(
        cart.map((item) => {
          return item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item;
        })
      );
    }
  };


  //Remove an item
  const removeProduct = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 0) {
      setCart(
        cart.filter((x) => {
          return x.id !== product.id;
        })
      );
    }
  };

  //Total price
  const totalPrice = cart.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  return (
    <div>
      {cart.length === 0 &&
                <div className='empty_cart'>
                    <h2 className='empty'>Cart is Empty</h2>
                    <Link to='/products' className='cart_button'>Shop Now</Link>
                </div>}
                <div className="cart_container">
                  {cart.map((item) => {
                    return (
                      <div className="cart_item" key={item.id}>
                        <div className="img_box">
                          <img src={item.imageUrl} alt={item.name} />
                        </div>
                        <div className="detail">
                          <div className="info">
                            <h4>{item.category}</h4>
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <div className="qty">
                              <button
                                className="increase_qty"
                                onClick={() => increaseQty(item)}
                              >
                                +
                              </button>
                              <input type="text" value={item.qty}></input>
                              <button
                                className="decrease_qty"
                                onClick={() => decreaseQty(item)}
                              >
                                -
                              </button>
                            </div>
                            <h4 className="subtotal">
                              Sub Total: ${item.price * item.qty}
                            </h4>
                          </div>
                          <div className="close">
                            <button
                              className="remove_item"
                              onClick={() => removeProduct(item)}
                            >
                              <AiOutlineClose />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* {cart.length === 0 &&
                          <div className='empty_cart'>
                              <h2 className='empty'>Cart is Empty</h2>
                              <Link to='/products' className='cart_button'>Shop Now</Link>
                          </div>}
                          <div className="content">
                              {
                                  cart.map((item) =>
                                  {
                                      return(
                                          <div className="cart_item" key={item.id}>
                                              <div className="img_box">
                                                  <img src={item.Img} alt={item.Title} />
                                              </div>
                                              <div className="detail">
                                                  <div className='info'>
                                                      <h4>{item.Category}</h4>
                                                      <h3>{item.Title}</h3>
                                                      <p>Price: ${item.Price}</p>
                                                      <div className='qty'>
                                                          <button className='increase_qty' onClick={() => increaseQty(item)}>+</button>
                                                          <input type="text" value={item.qty}></input>
                                                          <button className='decrease_qty' onClick={() => decreaseQty(item)}>-</button>
                                                      </div>
                                                      <h4 className='subtotal'>Sub Total: ${item.Price * item.qty}</h4>
                                                  </div>
                                                  <div className='close'>
                                                      <button className='remove_item' onClick={() => removeProduct(item)}><AiOutlineClose /></button>
                                                  </div>
                                              </div>
                                          </div>
                                      )
                                  })
                              }
                          </div>
                          {
                              cart.length > 0 &&
                              <>
                              <h2 className='total_price'>Total ${totalPrice}</h2>
                              <button className='checkout'>Checkout</button>
                              </>
                          } */}
                </div>
      {cart.length > 0 && (
        <div className="checkout">
          <h2 className="total_price">Total ${totalPrice}</h2>
          <button className="checkout-btn">Checkout</button>
          <Link to='/products' className='cart_button'>Shop More</Link>
        </div>
      )}
    </div>
  );
}
