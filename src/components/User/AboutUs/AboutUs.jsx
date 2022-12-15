import React from "react";
import Heri from "../../../assets/images/Heri.svg";

const AboutUs = () => {
  return (
    <div className="container-fluid mt-5 bg-babyblue" id="aboutus">
      <div className="row">
        <div className="col">
          <h3 className="font-title text-center pt-5">TENTANG KAMI</h3>
        </div>
      </div>
      <div className="row justify-content-center text-center g-4 mt-2">
        <div className="col-md-2 mb-5">
          <div className="card">
            <div className="card-body">
              <img className="img-circle w-75" src={Heri} alt="Heri" />
              <h6 className="mt-3">Suhaeri</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
