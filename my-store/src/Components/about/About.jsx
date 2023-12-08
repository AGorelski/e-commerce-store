import React from "react";
import { FaFacebook, FaInstagram, FaMapMarkedAlt } from "react-icons/fa";

import "../../assets/styles/about.css";

const About = () => {
  return (
    <div className="about-page">
      <h1>About Magazin Gorelski</h1>
      <p>
        Welcome to Magazin Gorelski, your ultimate online destination for home,
        family, and personal needs. Since our inception in 2005, we have strived
        to be the most reliable source for quality products. Whether you're
        looking for toys, office accessories, cozy bed sheets, elegant cutlery,
        or fashionable clothing, we've got you covered. Our extensive assortment
        includes a remarkable range of imported goods from Turkey, offering you
        unique and high-quality options.
      </p>

      <p>
        At Magazin Gorelski, we are committed to enriching your shopping
        experience with our diverse product range and top-notch customer
        service. Explore our vast selection and find the perfect items to
        enhance your lifestyle.
      </p>

      <div className="about-social-media">
        <h2>Connect with Us</h2>
        <p>
          Stay updated on our latest products and offers by following us on
          social media:
        </p>
        <div className="social-links">
          <a
            href="https://www.facebook.com/magazinGorelski"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            href="https://instagram.com/magazingorelski?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://maps.app.goo.gl/bzXP5sGxwGwU8UBa8"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkedAlt /> Find Us on Google Maps
          </a>
        </div>
      </div>

      <div className="about-history">
        <h2>Our Journey</h2>
        <p>
          From a small local store to an expansive online shop, our journey has
          been fueled by a passion for quality and customer satisfaction. Every
          product in our store is a testament to our commitment to excellence.
          Join us in this journey and be a part of the Magazin Gorelski family!
        </p>
      </div>

      <div className="store-image">
        <img src="/magazin.JPG" alt="Magazin Gorelski Store" />
      </div>
    </div>
  );
};

export default About;
