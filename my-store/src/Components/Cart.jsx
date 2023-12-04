import { AiOutlineClose } from 'react-icons/ai';

import { Link } from "react-router-dom"

import '../../assets/styles/cart.css'

export default function Cart({cart, setCart}) {
    //Increase quantity
    const increaseQty = (product) =>
    {
        const exist = cart.find((x) =>
        {
            return x.id === product.id;
        })
        setCart(cart.map((curElm) =>
        {
            return curElm.id === product.id ? {...exist, qty: exist.qty + 1} : curElm
        }))
    }

    //Decrease quantity
    const decreaseQty = (product) =>
    {
        const exist = cart.find((x) =>
        {
            return x.id === product.id;
        })
        setCart(cart.map((curElm) =>
        {
            return curElm.id === product.id ? {...exist, qty: exist.qty - 1} : curElm
        }))
    }

    //Remove an item
    const removeProduct = (product) =>
    {
        const exist = cart.find((x) =>
        {
            return x.id === product.id;
        })
        if(exist.qty > 0)
        {
            setCart(cart.filter((x) =>
            {
                return x.id !== product.id;
            }))
        }
    }

    //Total price
    const totalPrice = cart.reduce((price, item) => price + item.qty * item.Price, 0)

    return(
        <div>
            <div className="cart_container">
                {cart.length === 0 &&
                <div className='empty_cart'>
                    <h2 className='empty'>Cart is Empty</h2>
                    <Link to='/products' className='cart_button'>Shop Now</Link>
                </div>}
                <div className="content">
                    {
                        cart.map((curElm) =>
                        {
                            return(
                                <div className="cart_item" key={curElm.id}>
                                    <div className="img_box">
                                        <img src={curElm.Img} alt={curElm.Title} />
                                    </div>
                                    <div className="detail">
                                        <div className='info'>
                                            <h4>{curElm.Category}</h4>
                                            <h3>{curElm.Title}</h3>
                                            <p>Price: ${curElm.Price}</p>
                                            <div className='qty'>
                                                <button className='increase_qty' onClick={() => increaseQty(curElm)}>+</button>
                                                <input type="text" value={curElm.qty}></input>
                                                <button className='decrease_qty' onClick={() => decreaseQty(curElm)}>-</button>
                                            </div>
                                            <h4 className='subtotal'>Sub Total: ${curElm.Price * curElm.qty}</h4>
                                        </div>
                                        <div className='close'>
                                            <button className='remove_item' onClick={() => removeProduct(curElm)}><AiOutlineClose /></button>
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
                }
            </div>
        </div>
    )
}