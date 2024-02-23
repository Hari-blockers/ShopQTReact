import React from "react";
import "../Home/home2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import about3Image from "../images/about3.png";
import features1Image from "../images/features1.png";
import features2Image from "../images/features2.webp";
import features3Image from "../images/features3.jpg";
import features4Image from "../images/features4.webp";
import features5Image from "../images/features5.jpg";
import appImage from "../images/app.jpg";
import payImage from "../images/pay.png";
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />

      <div id="page-header" className="about-header">
        <h2>KnowUs</h2>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
      </div>

      <div id="about-head" className="div-p1">
        <img src={about3Image} alt="" />
        <div className="who">
          <h2>Who We Are?</h2>
          <p>
            At Quality Thought we make your every penny count. With a motto to
            deliver maximum subject knowledge to every single student of ours,
            Quality Thought has been a pioneer in the IT training industry with
            over a decade on experience in training and placements. With a team
            of highly dedicated and motivated staff and faculties, we assure
            excellent quality and complete satisfaction on each and every
            training programs.
          </p>
          <abbr title="">
            Quality Thought has been a pioneer in the IT training industry with
            over a decade of experience in training and placements.
          </abbr>
          <br />
          <br />

          <div
            style={{
              backgroundColor: "#f2f7f1",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                whiteSpace: "nowrap",
                animation: "scrollText 10s linear infinite",
              }}
            >
              Quality Thought has been a pioneer in the IT training industry
              with over a decade of experience in training and placements.
            </div>
          </div>
        </div>
      </div>

      <div id="about-app" className="div-p1">
        <h1>Here Our Special products </h1>
        
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

export default About;
