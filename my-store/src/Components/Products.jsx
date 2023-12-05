// import HomeProducts from "./HomeProducts"

// import { BsBagCheck } from 'react-icons/bs';
import { HiOutlineEye } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
// import { AiOutlineCloseCircle } from 'react-icons/ai';

import "../assets/styles/products.css";
import { useEffect, useState } from "react";
import * as Services from "../config/Services";

export default function Products() {
  // {product, setProduct, detail, view, close, setClose, addToCart}
  // //const {loginWithRedirect, isAuthenticated} = useAuth0();
  // const filterProduct = (product) =>
  // {
  //     const update = HomeProducts.filter((x) =>
  //     {
  //         return x.Category === product;
  //     })
  //     setProduct(update);
  // }
  // const allProducts = () =>
  // {
  //     setProduct(HomeProducts)
  // }

  const [productList, setProductList] = useState([]);

  //New product state
   const [newProductName, setNewProductName] = useState("");
   const [newProductCategory, setNewProductCategory] = useState("");
   const [newProductDescription, setNewProductDescription] = useState("");
   const [newProductImage, setNewProductImage] = useState("");
   const [newProductPrice, setNewProductPrice] = useState(0);

  useEffect(() => {
    Services.getProducts()
      .then((data) => {
        console.log(data); // This will log the actual data
        setProductList(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onSubmitProduct = async () => {
    try {
        await Services.addNewProduct(
            newProductName,
            newProductCategory,
            newProductDescription,
            newProductImage,
            newProductPrice
        );

        Services.getProducts();
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <div>
      <div className="products">
        <h2>Products</h2>
        <div className="add-product">
          <input type="text" placeholder="Product name..." onChange={(e) => setNewProductName(e.target.value)} />
          <input type="text" placeholder="Product category..." onChange={(e) => setNewProductCategory(e.target.value)}/>
          <input type="text" placeholder="Product description..." onChange={(e) => setNewProductDescription(e.target.value)}/>
          <input type="text" placeholder="Product image..." onChange={(e) => setNewProductImage(e.target.value)}/>
          <input type="number" placeholder="Product price..." onChange={(e) => setNewProductPrice(Number(e.target.value))}/>
          <button onClick={onSubmitProduct}>Add Product</button>
        </div>
        <div className="container">
          <div className="product-box">
            <div className="content">
              {productList.map((product) => (
                // <div className="product_box" key={product.id}>
                //     <div className="img_box">
                //         <img src={product.ImageUrl} alt={product.Name}></img>
                //     </div>
                //     <div className="detail">
                //         <h4>{product.Category}</h4>
                //         <h2>{product.Name}</h2>
                //         <p>{product.Description}</p>
                //         <h3>${product.Price}</h3>
                //         <button onClick={() => addToCart(curElm)}>Add to Cart</button>
                //     </div>
                // </div>

                <div className="box" key={product.id}>
                  <div className="img_box">
                    <img src={product.ImageUrl} alt={product.Name}></img>
                    <div className="icon">
                      <li>
                        <HiOutlineEye />
                      </li>
                      <li>
                        <AiOutlineHeart />
                      </li>
                    </div>
                  </div>
                  <div className="detail">
                    <p>{product.Category}</p>
                    <h3>{product.Name}</h3>
                    <h4>${product.Price}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* {
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
                                                <div className="icon"> */}
      {/* {
                                                        isAuthenticated ?
                                                        <li onClick={() => addToCart (curElm)}><BsBagCheck /></li>
                                                        :
                                                        <li onClick={() => loginWithRedirect ()}><BsBagCheck /></li>
                                                    } */}

      {/* <li onClick={() => addToCart (curElm)}><BsBagCheck /></li>
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
            </div> */}
    </div>
  );
}
