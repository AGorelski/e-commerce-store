import HomeProducts from "./HomeProducts"

import { BsBagCheck } from 'react-icons/bs';
import { HiOutlineEye } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import '../../assets/styles/products.css'

export default function Products({product, setProduct, detail, view, close, setClose, addToCart}){
    
    const filterProduct = (product) =>
    {
        const update = HomeProducts.filter((x) =>
        {
            return x.Category === product;
        })
        setProduct(update);
    }
    const allProducts = () =>
    {
        setProduct(HomeProducts)
    }

    return(
        <div>
            {
                close ?
                <div className="product_detail">
                    <div className="container">
                        <button onClick={() => setClose(false)} className="closeBtn"><AiOutlineCloseCircle /></button>
                        {
                            detail.map((curElm) =>
                            {
                                return(
                                    <div className="product_box">
                                        <div className="img_box">
                                            <img src={curElm.Img} alt={curElm.Title}></img>
                                        </div>
                                        <div className="detail">
                                            <h4>{curElm.Category}</h4>
                                            <h2>{curElm.Title}</h2>
                                            <p>Something to print</p>
                                            <h3>${curElm.Price}</h3>
                                            <button onClick={() => addToCart(curElm)}>Add to Cart</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="product-box"></div>
                    </div>
                </div> : null

            }
            
            <div className="products">
                <h2>Products</h2>
                <div className="container">
                    <div className="filter">
                        <div className="categories">
                            <ul>
                                <li onClick={() => allProducts ()}>All Products</li>
                                <li onClick={() => filterProduct ("Energy Drink")}>Energy Drink</li>
                                <li onClick={() => filterProduct ("Sports Drink")}>Sports Drink</li>
                                <li onClick={() => filterProduct ("Water")}>Water</li>
                                <li onClick={() => filterProduct ("Fruit")}>Fruit</li>
                                <li onClick={() => filterProduct ("Kitchenware")}>Kitchenware</li>
                            </ul>
                        </div>
                    </div>
                    <div className="product-box">
                        <div className="content">
                            {
                                product.map((curElm) => {
                                    return (
                                        <div className="box" key={curElm.id}>
                                            <div className="img_box">
                                                <img src={curElm.Img} alt={curElm.Title}></img>
                                                <div className="icon">
                                                    {/* {
                                                        isAuthenticated ?
                                                        <li onClick={() => addToCart (curElm)}><BsBagCheck /></li>
                                                        :
                                                        <li onClick={() => loginWithRedirect ()}><BsBagCheck /></li>
                                                    } */}
                                                    <li onClick={() => addToCart (curElm)}><BsBagCheck /></li>
                                                    <li onClick={() => view (curElm)}><HiOutlineEye /></li>
                                                    <li><AiOutlineHeart /></li> 
                                                </div>
                                            </div>
                                            <div className="detail">
                                                <p>{curElm.Category}</p>
                                                <h3>{curElm.Title}</h3>
                                                <h4>${curElm.Price}</h4>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}