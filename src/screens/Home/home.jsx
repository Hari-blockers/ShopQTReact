import React from "react";
import "./home2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import shopImage from "../images/shop.png";
import features1Image from "../images/features1.png";
import features2Image from "../images/features2.webp";
import features3Image from "../images/features3.jpg";
import features4Image from "../images/features4.webp";
import features5Image from "../images/features5.jpg";
import appImage from "../images/app.jpg";
import payImage from "../images/pay.png";
import Navbar from "../Navbar/Navbar";
import ApiProducts from "../Shop/ProductListApi";

const Home = () => {
  return (
    <>
      <Navbar />

      <div id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <img className="free" src={shopImage} alt="" />
      </div>

      <div id="feature" className="section-p1">
        <div className="fe-box">
          <img className="free" src={features1Image} alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img className="free" src={features2Image} alt="" />
          <h6>Online Order</h6>
        </div>

        <div className="fe-box">
          <img className="free" src={features3Image} alt="" />
          <h6>Save Money</h6>
        </div>

        <div className="fe-box">
          <img className="free" src={features4Image} alt="" />
          <h6>Promotions</h6>
        </div>

        <div className="fe-box">
          <img className="free" src={features5Image} alt="" />
          <h6>Happy Sell</h6>
        </div>
      </div>

      <ApiProducts />

      <div id="banner" className="section-m1">
        <h4>Repair Services</h4>
        <h2>
          Up to <span>70% off </span> - All t-shirts & Accessories
        </h2>
        <button className="normal">Explore More</button>
      </div>

      <div id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>crazy deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box">
          <h4>spring/summer</h4>
          <h2>upcomming season</h2>
          <span>The best dress is on sale at cara </span>
          <button className="white">Collection</button>
        </div>
      </div>

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

export default Home;
