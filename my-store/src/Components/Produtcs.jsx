import HomeProducts from "./HomeProducts"

import { BsBagCheck } from 'react-icons/bs';
import { HiOutlineEye } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';

import './products.css'

export default function Products({product, setProduct}){
    
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
                                                    <li><BsBagCheck /></li>
                                                    <li><HiOutlineEye /></li>
                                                    <li><AiOutlineHeart /></li> 
                                                </div>
                                            </div>
                                            <div className="detail">
                                                <p>{curElm.Category}</p>
                                                <h3>{curElm.Title}</h3>
                                                <h4>{curElm.Price}</h4>
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