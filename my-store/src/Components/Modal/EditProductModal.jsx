import React, { useState } from "react";
import * as Services from "../../config/Services";

const EditProductModal = ({ onClose, id }) => {
  const [updatedName, setUpdatedName] = useState("");
  const [updatedCategory, setUpdatedCategory] = useState("");

  const onUpdateProductName = async () => {
    try {
      await Services.updateProductName(id, updatedName);
      onClose(); // Close modal after update
    } catch (error) {
      console.error(error);
    }
  };

  const onUpdateProductCategory = async () => {
    try {
      await Services.updateProductCategory(id, updatedCategory);
      onClose(); // Close modal after update
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>This is a Modal!</p>

        <input
          type="text"
          placeholder="Add new name..."
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        />
        <button onClick={onUpdateProductName}>Update name</button>

        <input
          type="text"
          placeholder="Add new category..."
          value={updatedCategory} // Bind to updatedCategory
          onChange={(e) => setUpdatedCategory(e.target.value)} // Update updatedCategory
        />
        <button onClick={onUpdateProductCategory}>Update category</button>
      </div>
    </div>
  );
};

export default EditProductModal;
