import React from "react";
import "../../assets/styles/addModal.css";

import { useEffect, useState } from "react";
import * as Services from "../../config/Services";

const AddProductModal = ({ onClose }) => {
  const [productList, setProductList] = useState([]);

  //New product state
  const [newProductName, setNewProductName] = useState("");
  const [newProductCategory, setNewProductCategory] = useState("");
  const [newProductDescription, setNewProductDescription] = useState("");
  const [newProductImage, setNewProductImage] = useState("");
  const [newProductPrice, setNewProductPrice] = useState(0);
  const [newProductQuantity, setNewProductQuantity] = useState(0);

  const [showModal, setShowModal] = useState(false);

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

  const onSubmitProduct = async () => {
    try {
      await Services.addNewProduct(
        newProductName,
        newProductCategory,
        newProductDescription,
        newProductImage,
        newProductPrice,
        newProductQuantity
      );

      onClose();

      // Clear the input fields by resetting the state
      setNewProductName("");
      setNewProductCategory("");
      setNewProductDescription("");
      setNewProductImage("");
      //setNewProductPrice(0);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBackdropClick = (event) => {
    // Check if the click is on the backdrop (modal) and not the content
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>Add Information for the new product</p>
        <input
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

        <input
          type="number"
          placeholder="Product quantity..."
          //value={newProductPrice}
          onChange={(e) => setNewProductQuantity(Number(e.target.value))}
        />
        <button onClick={onSubmitProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default AddProductModal;
