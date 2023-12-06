import React, { useState } from "react";
import * as Services from "../../config/Services";

const EditProductModal = ({ onClose, id }) => {
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    description: "",
    image: "",
    price: 0,
  });

  const handleInputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const updateProductInfo = async () => {
    try {
      await Services.updateProduct(id, productData);
      onClose(); // Close modal after successful update
      // Optionally, show a success message to the user
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
        <p>Edit Product Information</p>

        <input
          type="text"
          name="name"
          placeholder="Product name..."
          value={productData.name}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="name"
          placeholder="Product category..."
          value={productData.category}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="name"
          placeholder="Product description..."
          value={productData.description}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="name"
          placeholder="Product image..."
          value={productData.image}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="name"
          placeholder="Product price..."
          value={productData.price}
          onChange={handleInputChange}
        />

        <button onClick={updateProductInfo}>Update Product</button>
      </div>
    </div>
  );
};

export default EditProductModal;
