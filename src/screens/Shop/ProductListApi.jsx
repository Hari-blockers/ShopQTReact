import axios from "axios";
import React, { useState, useEffect } from "react";
import "../Home/home2.css";

function ApiProducts() {
  const [productsList, setProductsList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 10;

  useEffect(() => {
    const productListURL = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        console.log("response", response);
        setProductsList(response.data.products);
      } catch (error) {
        console.log("Error fetching product images", error);
      }
    };
    productListURL();
  }, []);

  const lastPageItem = currentPage * itemPerPage;
  const firstPageItem = lastPageItem - itemPerPage;

  const currentImg = productsList.slice(firstPageItem, lastPageItem);

  const renderimgsection = currentImg.map((item, index) => {
    return (
      <div key={item.id} className="pro">
        <img
          src={item.thumbnail}
          alt={item.title}
          style={{ width: "200px", height: "200px" }}
        />
        <div className="des">
          <span>{item.category}</span>
          <h5>{item.title}</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h4>{item.price}</h4>
        </div>
        <a href="#">
          <i className="fa-solid fa-cart-shopping"></i>
        </a>
      </div>
    );
  });

  const totalPage = Math.ceil(productsList.length / itemPerPage);

  const pageNumbers = Array.from(
    { length: totalPage },
    (_, index) => index + 1
  );

  const handlePageClick = (pagenumber) => {
    setCurrentPage(pagenumber);
  };

  return (
    <>
      <div id="product1" className="section-p1">
        <h2>Products for You...</h2>
        <div className="pro-container">{renderimgsection}</div>
      </div>

      <div id="pagination" className="section-p1">
        {pageNumbers.map((item, index) => (
          <button key={index} onClick={() => handlePageClick(item)}>
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default ApiProducts;
