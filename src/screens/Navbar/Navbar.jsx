import React from "react";

import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  const navHome = () => {
    navigate("/");
  };
  const navShop = () => {
    navigate("/shop");
  };
  const navCart = () => {
    navigate("/cart");
  };
  const navAbout = () => {
    navigate("/about");
  };
  const navContact = () => {
    navigate("/contact");
  };
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <h1 style={{ color: "#660466", fontWeight: "600" }}>
          <i className="fab fa-shopify"></i> ShopSmartify
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-auto" id="navbarNav">
          <ul className="navbar-nav navbar-right">
            <li className="nav-item active">
              <a className="nav-link" onClick={navHome}>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={navShop}>
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={navCart}>
                Cart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={navAbout}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={navContact}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
