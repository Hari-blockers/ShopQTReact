import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./screens/About/about";
import Shop from "./screens/Shop/shop";
import Home from "./screens/Home/home";
import Cart from "./screens/Cart/cart";
import Contact from "./screens/Contact/contact";
import Login from "./screens/logins/login/login";
import Register from './screens/logins/register/Register';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
