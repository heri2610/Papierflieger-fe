import React from "react";
import GoKyungPyo from "../../../assets/images/go_kyung_pyo.svg";
import RantiRastanti from "../../../assets/images/feby_rastanti.svg";
import VerrelBramasta from "../../../assets/images/verrel_bramasta.svg";
import Rate from "../../../assets/images/rate.svg";
import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <div className="card-item" id="testimonial">
      <div className="container px-lg-5 mt-5">
        <div className="textCarou">
          <h2 className="text-center fw-bold">TESTIMONIAL</h2>
        </div>
        <div className="row mt-5 ms-2">
          <div className="col col-md-4">
            <div className="card card-testi">
              <div className="card-body my-2">
                <img className="profile-img mt-4" src={GoKyungPyo} alt="" />
                <p className="text-center mt-3">Go Kyung Pyo</p>
                <img className="rate" src={Rate} alt="" />
                <p className="text-center mt-3">
                  "Lorem ipsum dolor sit amet,
                  <br /> consectetur adipisicing elit, sed do
                  <br /> eiusmod tempor incididunt ut labore etdolore magna
                  aliqua."
                </p>
              </div>
            </div>
          </div>
          <div className="col col-md-4">
            <div className="card card-testi">
              <div className="card-body my-2">
                <img className="profile-img mt-4" src={RantiRastanti} alt="" />
                <p className="text-center mt-3">Ranti Rastanti</p>
                <img className="rate" src={Rate} alt="" />
                <p className="text-center mt-3">
                  "Lorem ipsum dolor sit amet,
                  <br /> consectetur adipisicing elit, sed do
                  <br /> eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."
                </p>
              </div>
            </div>
          </div>
          <div className="col col-md-4">
            <div className="card card-testi">
              <div className="card-body my-2">
                <img className="profile-img mt-4" src={VerrelBramasta} alt="" />
                <p className="text-center mt-3">Verrel Bramasta</p>
                <img className="rate" src={Rate} alt="" />
                <p className="text-center mt-3">
                  "Lorem ipsum dolor sit amet,
                  <br /> consectetur adipisicing elit, sed do
                  <br /> eiusmod tempor incididunt ut labore etdolore magna
                  aliqua."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
