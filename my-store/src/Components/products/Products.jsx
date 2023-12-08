import "../../assets/styles/products.css";
import { useEffect, useState } from "react";
import * as Services from "../../config/Services";
import Item from "../items/Item";
import AddProductModal from "../Modal/AddProductModal";

export default function Products({ addToCart, addToFav, userRole }) {
  const [productList, setProductList] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    let mounted = true;
    Services.getProducts()
      .then((data) => {
        if (mounted) {
          setProductList(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    return () => {
      mounted = false;
    };
  }, []);

  // const fetchProducts = () => {
  //   Services.getProducts()
  //     .then((data) => {
  //       setProductList(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

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
          {userRole === "admin" && (
            <button onClick={handleOpenModal} className="add-product-btn">
              Add Product
            </button>
          )}
          {showModal && <AddProductModal onClose={handleCloseModal} />}
        </div>

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
                  quantity={product.quantity}
                  addToCart={addToCart}
                  addToFav={addToFav}
                  userRole={userRole}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
