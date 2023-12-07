import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { RiTiktokFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

import "../assets/styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="about">
          <div className="logo">
            <img src="/logo.png" alt="logo"></img>
          </div>
          <div className="detail">
            <p>
              You can find Magazin Gorelski store at the following locations:{" "}
            </p>
            <li>
              <FaLocationDot /> Gorno Kraishte, Belitsa
            </li>
            <li>
              <FaLocationDot /> Dagonovo, Belitsa
            </li>
            <li>
              <FaLocationDot /> Yakoruda, Belitsa
            </li>
            <div className="icon">
              <a
                href="https://www.facebook.com/magazinGorelski"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
              <a
                href="https://instagram.com/magazingorelski?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@sladkarnicasarai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTiktokFill />
              </a>
              <a
                href="https://maps.app.goo.gl/bzXP5sGxwGwU8UBa8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FcGoogle />
              </a>
            </div>
          </div>
        </div>
        <div className="account">
          <h3>Account</h3>
          <ul>
            <li>Account</li>
            <li>Order</li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>Shipping</li>
            <li>Return</li>
          </ul>
        </div>
        <div className="page">
          <h3>Pages</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
