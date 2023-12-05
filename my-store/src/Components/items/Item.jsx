import React, { useState } from 'react'; // Make sure to import React

import { HiOutlineEye } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";

import * as Services from "../../config/Services";

export default function Item(props) { // Use a single props object
    
    const { id, Name, Category, Description, ImageUrl, Price } = props; // Destructure props

    const [updatedName, setUpdatedName] = useState("");
    
    const onDeleteProduct = async (id) => {
        try {
            await Services.deleteProduct(id);
        } catch (error) {
            console.error(error);
        }
    }

    const onUpdateProductName = async (id) => {
        try {
            await Services.updateProductName(id, updatedName);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="box" key={id}>
            <div className="img_box">
                <img src={ImageUrl} alt={Name}></img>
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
                <p>{Category}</p>
                <h3>{Name}</h3>
                <h4>${Price}</h4>
            </div>

            <button onClick={() => onDeleteProduct(id)}>
                Delete Product
            </button>
            <div>
                <button onClick={() => onUpdateProductName(id)}>Update Name</button>

                <input type="text" placeholder='Add new name...' onChange={(e) => setUpdatedName(e.target.value)} />
            </div>
        </div>
    );
}
