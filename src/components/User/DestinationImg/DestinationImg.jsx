import React from "react";
import Balii from "../../../assets/images/bali1.svg";
import Bali from "../../../assets/images/Bali.svg";

const DestinationImg = () => {
  return (
    <div>
      <div className="container-fluid p-0 img-banner">
        <img className="img-fluid mb-3" src={Bali} alt="" />
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center text-center mt-4">
          <div className="col-md-4">
            <img className="mb-4" src={Balii} alt="" />
          </div>
          <div className="col-md-4">
            <img className="mb-4" src={Balii} alt="" />
          </div>
          <div className="col-md-4">
            <img className="mb-4" src={Balii} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DestinationImg;
