import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { IoLogInOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

import { Link } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import LoginModal from "./login/LoginModal";

import "../assets/styles/navbar.css";
import { useState, useEffect } from "react";

export default function Navbar({ searchBtn }) {
  const [search, setSearch] = useState();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const [userEmail, setUserEmail] = useState(""); // Add state for user email

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUserEmail(user.email); // Set the user's email
      } else {
        setIsAuthenticated(false);
        setUserEmail(""); // Reset the email if logged out
      }
    });

    return () => unsubscribe(); // Clean up the subscription
  }, []);

  const handleLoginClick = () => setShowLoginModal(true);

  const handleLogoutClick = async () => {
    try {
      await signOut(auth);
      setShowLogoutPopup(true); // Show logout popup message
      setTimeout(() => setShowLogoutPopup(false), 3000); // Hide after 3 seconds
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="free">
        <div className="icon">
          <FaTruckMoving />
        </div>
        <p>FREE Shipping for orders above 100BGN</p>
      </div>
      <div className="main_header">
        <div className="container">
          <div className="logo">
            <img src="/logo.png" alt="logo"></img>
          </div>
          <div className="search_box">
            <input
              type="text"
              value={search}
              placeholder="Search the product you need"
              autoComplete="off"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => searchBtn(search)}>Search</button>
          </div>
          <div className="icon">
            <div className="second_icon">
              {isAuthenticated ? (
                <>
                  <span className="user-email">Hello, {userEmail}</span>{" "}
                  {/* Display user email */}
                  <FaUserCircle className="user-icon"/>
                  <Link to="/favourites" className="link">
                    <AiOutlineHeart />
                  </Link>
                  <Link to="/cart" className="link">
                    <BsBagCheck />
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/favourites" className="link">
                    <AiOutlineHeart />
                  </Link>
                  <Link to="/cart" className="link">
                    <BsBagCheck />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="link">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="auth">
            {isAuthenticated ? (
              <>
                <button onClick={handleLogoutClick}>
                  <label className="logout-label">Log out</label>
                  <IoLogOutOutline />
                </button>
              </>
            ) : (
              <button onClick={handleLoginClick}>
                <label className="login-label">Log in or Sign up</label>
                <IoLogInOutline />
              </button>
            )}
          </div>

          {showLogoutPopup && (
            <div className="logout-popup">You have been logged out.</div>
          )}

          {showLoginModal && (
            <LoginModal onClose={() => setShowLoginModal(false)} />
          )}
        </div>
      </div>
    </>
  );
}
