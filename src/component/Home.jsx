import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/assets/bg.jpg" className="card-img" alt="Background" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p>
            </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
