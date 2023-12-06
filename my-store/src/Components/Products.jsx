// import HomeProducts from "./HomeProducts"

// import { BsBagCheck } from 'react-icons/bs';

// import { AiOutlineCloseCircle } from 'react-icons/ai';

import "../assets/styles/products.css";
import { useEffect, useState } from "react";
import * as Services from "../config/Services";
import Item from "./items/Item";
import Modal from "./Modal/AddProductModal";

export default function Products() {
  // {product, setProduct, detail, view, close, setClose, addToCart}
  // //const {loginWithRedirect, isAuthenticated} = useAuth0();
  // const filterProduct = (product) =>
  // {
  //     const update = HomeProducts.filter((x) =>
  //     {
  //         return x.category === product;
  //     })
  //     setProduct(update);
  // }
  // const allProducts = () =>
  // {
  //     setProduct(HomeProducts)
  // }

  const [productList, setProductList] = useState([]);

  //New product state
  // const [newProductName, setNewProductName] = useState("");
  // const [newProductCategory, setNewProductCategory] = useState("");
  // const [newProductDescription, setNewProductDescription] = useState("");
  // const [newProductImage, setNewProductImage] = useState("");
  // const [newProductPrice, setNewProductPrice] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  Services.getProducts()
    .then((data) => {
      setProductList(data);
    })
    .catch((error) => {
      console.error(error);
    });

  useEffect(() => {
    Services.getProducts();
  }, []);

  // const onSubmitProduct = async () => {
  //   try {
  //     await Services.addNewProduct(
  //       newProductName,
  //       newProductCategory,
  //       newProductDescription,
  //       newProductImage,
  //       newProductPrice
  //     );

  //     // Clear the input fields by resetting the state
  //     setNewProductName("");
  //     setNewProductCategory("");
  //     setNewProductDescription("");
  //     setNewProductImage("");
  //     //setNewProductPrice(0);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div>
      <div className="products">
        <div className="products-header">
          <h2>Products</h2>
          <button onClick={handleOpenModal} className="add-product-btn">Add Product</button>
          {showModal && <Modal onClose={handleCloseModal} />}
        </div>
          


          {/* <input
            type="text"
            placeholder="Product name..."
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Product category..."
            value={newProductCategory}
            onChange={(e) => setNewProductCategory(e.target.value)}
          />
          <input
            type="text"
            placeholder="Product description..."
            value={newProductDescription}
            onChange={(e) => setNewProductDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Product image..."
            value={newProductImage}
            onChange={(e) => setNewProductImage(e.target.value)}
          />
          <input
            type="number"
            placeholder="Product price..."
            //value={newProductPrice}
            onChange={(e) => setNewProductPrice(Number(e.target.value))}
          />
          <button onClick={onSubmitProduct}>Add Product</button> */}
        
        <div className="container">
          <div className="product-box">
            <div className="content">
              {productList.map((product) => (
                <Item
                  key={product.id} // Make sure to specify a unique 'key' prop
                  id={product.id}
                  name={product.name}
                  category={product.category}
                  description={product.description}
                  imageUrl={product.imageUrl}
                  price={product.price}
                />
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
                                            <h4>{curElm.category}</h4>
                                            <h2>{curElm.Title}</h2>
                                            <p>Something to print</p>
                                            <h3>${curElm.price}</h3>
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
                                                <p>{curElm.category}</p>
                                                <h3>{curElm.Title}</h3>
                                                <h4>${curElm.price}</h4>
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
