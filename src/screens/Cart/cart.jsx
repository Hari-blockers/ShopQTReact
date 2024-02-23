import React from "react";
import "../Home/home2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import shirt1Image from "../images/shirt1.webp";
import shirt4Image from "../images/shirt1.webp";
import chudi2Image from "../images/chudi2.jpeg";
import appImage from "../images/app.jpg";
import payImage from "../images/pay.png";
import Navbar from "../Navbar/Navbar";

const Cart = () => {
  return (
    <>
      <Navbar />

      <div id="page-header" class="about-header">
        <h2>Cart</h2>
        <p>Add your coupon code & SAVE upto 70%!</p>
      </div>

      <div id="cart" class="div-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>REMOVE</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="#">
                  {" "}
                  <i class="far fa-times-circle"></i>
                </a>
              </td>
              <td>
                <img src={shirt1Image} alt="" />
              </td>
              <td>Cartoon Astronaut T-Shirts</td>
              <td>$599.00</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$599.00</td>
            </tr>

            <tr>
              <td>
                <a href="#">
                  {" "}
                  <i class="far fa-times-circle"></i>
                </a>
              </td>
              <td>
                <img src={shirt4Image} alt="" />
              </td>
              <td>Cartoon Astronaut T-Shirts</td>
              <td>$699.00</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$699.00</td>
            </tr>
            <tr>
              <td>
                <a href="#">
                  {" "}
                  <i class="far fa-times-circle"></i>
                </a>
              </td>
              <td>
                <img src={chudi2Image} alt="" />
              </td>
              <td>Cotton Churidar</td>
              <td>$1999.00</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$1999.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="cart-add" class="div-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon" />
            <button class="normal">Apply</button>
          </div>
        </div>
        <div id="Subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>$ 899.00</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>
                {" "}
                <strong>Total</strong>
              </td>
              <td>
                <strong>$ 999.00</strong>
              </td>
            </tr>
          </table>
          <button class="normal">Proceed to Chekout</button>
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

export default Cart;
