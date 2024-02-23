import React from "react";
import "../Home/home2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import appImage from "../images/app.jpg";
import payImage from "../images/pay.png";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div id="page-header" class="about-header">
        <h2>Let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you</p>
      </div>

      <div id="contact-details" class="div-p1">
        <div class="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>QT Office</h3>
          <div>
            <li>
              <i class="fa-regular fa-map"></i>
              <p>Quality Thought infosystem , Chennai</p>
            </li>
            <li>
              <i class="fa-regular fa-envelope"></i>
              <p>contact@example.com</p>
            </li>
            <li>
              <i class="fa-solid fa-phone"></i>
              <p>contact@example.com</p>
            </li>
            <li>
              <i class="fa-regular fa-clock"></i>
              <p>Monday to Saturday: 9.00am to 16.pm</p>
            </li>
          </div>
        </div>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.899537344097!2d80.2247179!3d12.
            978277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b17463fca9%3A0x2c556c2164072372!2sQuality%20Thought%20Chennai!
            5e0!3m2!1sen!2sin!4v1701605077872!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your message"
          ></textarea>
          <button class="normal">Submit</button>
        </form>
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

export default Contact;
