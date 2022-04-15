import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-container">
      <div  className="banner  container-fluid py-5 my-2">
        <div className="banner-search py-5 d-flex justify-content-center align-items center">
          <div className="">
            <h1 className="title-food ">
              Best food Waiting For Your Belly
            </h1>

            <div className="py-5  ms-5 w-100">
              <input
                className="w-50 outline-none rounded-pill shadow-lg px-2 py-1"
                type="text"
              />
              <button className="btn btn-warning me-2 rounded-pill ">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
