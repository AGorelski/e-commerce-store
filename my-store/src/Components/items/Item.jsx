import React, { useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

import { useNavigate } from "react-router-dom";

import { HiOutlineEye } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";

import * as Services from "../../config/Services";
// import { user } from "../../config/firebase";
import EditProductModal from "../Modal/EditProductModal";

export default function Item(props) {
  // Use a single props object

  const {
    id,
    name,
    category,
    description,
    imageUrl,
    price,
    quantity,
    addToCart,
    addToFav,
    userRole,
  } = props; // Destructure props

  const [user] = useAuthState(auth);

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
          <li
            className="add-to-fav"
            onClick={() => addToFav({ id, name, category, imageUrl, price })}
          >
            <AiOutlineHeart />
          </li>
        </div>
      </div>
      <div className="detail">
        <p>{category}</p>
        <h3>{name}</h3>
        <h4>${price}</h4>
      </div>

      <div className="buttons">
        {userRole === "admin" && (
          <>
            <button className="delete-btn" onClick={() => onDeleteProduct(id)}>
              Delete Product
            </button>
            <button className="edit-btn" onClick={handleOpenModal}>
              Edit
            </button>
          </>
        )}
        {showModal && <EditProductModal onClose={handleCloseModal} id={id} />}

        <button
          className="add-to-cart"
          onClick={() => {
            if (!user) {
              // If user is not signed in, display an alert
              alert("You should sign in in order to add products to your cart");
            } else {
              // If user is signed in, add to cart
              addToCart({ id, name, category, imageUrl, price, quantity });
            }
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
