import React, { useState } from "react";
import * as Services from "../../config/Services";

const EditProductModal = ({ onClose, id }) => {
  const [productData, setProductData] = useState({
    name: null,
    category: null,
    description: null,
    imageUrl: null,
    price: null,
    quantity: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Convert 'price' and 'quantity' values to numbers
    if (name === "price" || name === "quantity") {
      updatedValue = value ? Number(value) : null; // Converts to number, but uses null for empty strings
    }

    setProductData({ ...productData, [name]: updatedValue });
  };

  const updateProductInfo = async () => {
    try {
      // Filter out null values
      const updatedFields = Object.fromEntries(
        Object.entries(productData).filter(([_, value]) => value != null)
      );

      await Services.updateProduct(id, updatedFields);
      onClose(); // Close modal after successful update
    } catch (error) {
      console.error(error);
    }
  };

  const handleBackdropClick = (event) => {
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
          name="category"
          placeholder="Product category..."
          value={productData.category}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Product description..."
          value={productData.description}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="imageUrl"
          placeholder="Product image..."
          value={productData.imageUrl}
          onChange={handleInputChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Product price..."
          value={productData.price}
          onChange={handleInputChange}
        />

        <input
          type="number"
          name="quantity"
          placeholder="Product quantity..."
          value={productData.quantity}
          onChange={handleInputChange}
        />

        <button onClick={updateProductInfo}>Update Product</button>
      </div>
    </div>
  );
};

export default EditProductModal;
