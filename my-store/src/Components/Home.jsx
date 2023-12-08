import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Services from "../config/Services";

import { BsArrowRight } from "react-icons/bs";
import { FaTruckMoving } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import { TbDiscount } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai";


import "../assets/styles/home.css";

export default function Home({close, setClose, addToCart }) {
  const [productList, setProductList] = useState([]);
  const [highestPricedProduct, setHighestPricedProduct] = useState(null);

  const navigate = useNavigate();

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

  useEffect(() => {
    const fetchHighestPricedProduct = async () => {
      try {
        const product = await Services.getHighestPricedProduct();
        setHighestPricedProduct(product);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHighestPricedProduct();
  }, []);

  return (
    <div>
      {close ? (
        <div className="product_detail">
          <div className="container">
            <button onClick={() => setClose(false)} className="closeBtn">
              <AiOutlineCloseCircle />
            </button>
            {detail.map((curElm) => {
              return (
                <div className="product_box">
                  <div className="img_box">
                    <img src={curElm.Img} alt={curElm.Title}></img>
                  </div>
                  <div className="detail">
                    <h4>{curElm.Category}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>Something to print</p>
                    <h3>${curElm.Price}</h3>
                    <button onClick={() => addToCart(curElm)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="product-box"></div>
          </div>
        </div>
      ) : null}
      <div className="top_banner">
        {highestPricedProduct && (
          <div className="container">
            <div className="detail">
              <h2>{highestPricedProduct.name}</h2>
              <h3>Only for {highestPricedProduct.price}$</h3>
              <Link to="/products" className="link">
                Shop Now <BsArrowRight />
              </Link>
            </div>
            <div className="img_box">
              <img
                src={highestPricedProduct.imageUrl}
                alt={highestPricedProduct.name}
              />
            </div>
          </div>
        )}
      </div>
      <div className="product_type">
        <div className="container">
          {productList.map((product) => (
            <div className="box" key={product.id}>
              <div className="img_box">
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <div className="detail">
                <p>{product.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FaTruckMoving />
            </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>*Only for orders above 100BGN!</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FcMoneyTransfer />
            </div>
            <div className="detail">
              <h3>Return</h3>
              <p>*Guaranteed Refund</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <TbDiscount />
            </div>
            <div className="detail">
              <h3>Discount for Members</h3>
              <p>*On every order!</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FiPhoneCall />
            </div>
            <div className="detail">
              <h3>Contact Customer Support</h3>
              <p>+3598955555555</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {productList.map((curElm) => {
            return (
              <div className="box" key={curElm.id} onClick={() => navigate(`/products`)}>
                <div className="img_box">
                  <img src={curElm.imageUrl} alt={curElm.name}></img>
                </div>
                <div className="detail">
                  <p>{curElm.category}</p>
                  <h3>{curElm.name}</h3>
                  <h4>${curElm.price}</h4>
                </div>
              </div>
            );
          })}
          <div className="box"></div>
        </div>
      </div>
      <div className="banner">
      {highestPricedProduct && (
          <div className="container">
            <div className="detail">
            <h4>LATEST PRODUCT ADDED</h4>
            <h3>{highestPricedProduct.name}</h3>
            <p>Only for the price of ${highestPricedProduct.price}</p>
            <Link to="/products" className="link">
              Shop now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src={highestPricedProduct.imageUrl} alt={highestPricedProduct.name} />
          </div>
          </div>
        )}
      </div>
    </div>
  );
}
