import React from "react";
import Balii from "../../../assets/images/bali1.svg";
import Slider from "../Slider/Slider";
import "./Wishlist.scss";

const Wishlist = () => {
  return (
    <div>
      <div className="img-banner">
        <h4 className="font-wishlist mt-3">Daftar Keinginan</h4>
        <br />
        <div className="container card mb-3 w-100">
          <div className="row g-0">
            <div className="col-md-4">
              <img className="m-4 w-75" variant="top" src={Balii} alt="" />
            </div>
            <div className="col-md-8">
              <div className="card-body mt-3">
                <h5 className="card-title">Bali</h5>
                <p className="card-text">
                  <small className="text-muted">Destinasi</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container card mb-3 w-100">
          <div className="row g-0">
            <div className="col-md-4">
              <img className="m-4 w-75" variant="top" src={Balii} alt="" />
            </div>
            <div className="col-md-8">
              <div className="card-body mt-3">
                <h5 className="card-title">Bali</h5>
                <p className="card-text">
                  <small className="text-muted">Destinasi</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};
export default Wishlist;
