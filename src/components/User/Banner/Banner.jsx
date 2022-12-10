import React from "react";
import brand from "../../../assets/images/brand.svg";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="home" id="main">
      <div
        className="container-fluid mt-5 bg-papier"
        style={{ height: "430px" }}
      >
        <div className="row">
          <div className="col-md-3 pt-5">
            <div className="banner-titles my-5">
              <h5 className="mx-5">Hi, kenalin!</h5>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div className="logo">
              <img src={brand} alt="" />
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <div className="banner-titles my-5">
              <h5 className="me-6">Pilihan Penerbanganmu</h5>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <div className="banner-titles my-5">
              <h1>
                To Infinity <br /> & Beyond!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
