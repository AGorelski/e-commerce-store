import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as Services from "../../config/Services";

import "../../assets/styles/productDetails.css";

const ProductDetails = ({ id, addToCart }) => {
  const { productId } = useParams();
  const navigate = useNavigate(); // Hook to navigate to different routes
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await Services.getProductById(productId);
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, [productId]);

  const onClose = () => {
    navigate(-1); // Go back to the previous page
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const { name, category, description, imageUrl, price, quantity } = product;

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>{name}</h3>
        <p>Category: {category}</p>
        <p>Description: {description}</p>
        <img src={imageUrl} alt={name} />
        <p>Price: ${price}</p>
        <p>{quantity > 0 ? "Product Available" : "Not Available at the moment"}</p>
        <button className="add-to-cart" onClick={() => addToCart({ id, product })}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
