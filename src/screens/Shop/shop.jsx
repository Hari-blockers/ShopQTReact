import React from "react";
import "../Home/home2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import appImage from "../images/app.jpg";
import payImage from "../images/pay.png";
import Navbar from "../Navbar/Navbar";
import ApiProducts from "./ProductListApi";

const Shop = () => {
  return (
    <>
      <Navbar />

      <div id="page-header" className="shop-header">
        <h2>Stayhome</h2>
        <p>Save more with coupons & up to 70% off!</p>
      </div>

      <div className="search-container">
        <div style={{ margin: "0" }} className="form-group has-search">
          <span className="fa fa-search form-control-feedback"></span>
          <input
            type="text"
            className="form-control"
            placeholder="Search....."
          />
        </div>
      </div>

      <ApiProducts />

      <div id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletter</h4>
          <p>Get E-mail updates about our latest shop and special offers.</p>
        </div>

        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </div>

      <footer className="section-p1">
        <div className="col">
          <h2>ShopSmartify</h2>
          <h4>Contact:</h4>
          <p>
            <strong>Address:</strong> Quality Thought infosystem , velachery ,
            chennai
          </p>
          <p>
            <strong>Phone:</strong>+01 2222 365 /(+91) 01 2345 6789
          </p>
          <p>
            <strong>Hours:</strong>10:00 - 18:00, Mon - Sat
          </p>
          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest-p"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="col">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact us</a>
        </div>

        <div className="col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">help</a>
        </div>

        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img className="app" src={appImage} alt="" />
          </div>
          <p>Secured Payment Gateways</p>
          <img className="pay" src={payImage} alt="" />
        </div>
        <div className="copyright">
          <p>© 2023, Quality Thought - HTML , CSS (UI) Ecommerce Template</p>
        </div>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      <script
        defer
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js"
      ></script>
    </>
  );
};

export default Shop;
