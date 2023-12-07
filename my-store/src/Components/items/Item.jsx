import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { HiOutlineEye } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";

import * as Services from "../../config/Services";
import EditProductModal from "../Modal/EditProductModal";

export default function Item(props) {
  // Use a single props object

  const { id, name, category, description, imageUrl, price, quantity } = props; // Destructure props

  //   const [updatedName, setUpdatedName] = useState("");
  // const [showDetailsModal, setShowDetailsModal] = useState(false);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // const handleDetailsClick = () => {
  //   setShowDetailsModal(true);
  // };

  // const handleDetailsModalClose = () => {
  //   setShowDetailsModal(false);
  // };

  const onDeleteProduct = async (id) => {
    try {
      await Services.deleteProduct(id);
    } catch (error) {
      console.error(error);
    }
  };

  //   const onUpdateProductName = async (id) => {
  //     try {
  //       await Services.updateProductName(id, updatedName);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  return (
    <div className="box" key={id}>
      <div className="img_box">
        <img src={imageUrl} alt={name}></img>
        <div className="icon">
          <li onClick={() => navigate(`/products/${id}`)}>
            <HiOutlineEye />
          </li>
          <li>
            <AiOutlineHeart />
          </li>
        </div>
      </div>
      <div className="detail">
        <p>{category}</p>
        <h3>{name}</h3>
        <h4>${price}</h4>
      </div>

      <button onClick={() => onDeleteProduct(id)}>Delete Product</button>
      <div>
        <button onClick={handleOpenModal}>Edit</button>
        {showModal && <EditProductModal onClose={handleCloseModal} id={id} />}

        <button className="add-to-cart">Add to Cart</button>
      </div>
      {/* {showDetailsModal && (
        <ProductDetailsModal
          onClose={handleDetailsModalClose}
          name={name}
          category={category}
          description={description}
          imageUrl={imageUrl}
          price={price}
          availability={quantity > 0 ? "Available" : "Not Available"}
        />
      )} */}
    </div>
  );
}
