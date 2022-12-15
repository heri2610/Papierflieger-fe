import React from "react";
import Heri from "../../../assets/images/Heri.svg";
// import Bregsi from "../../../assets/images/Bregsi.svg";
// import Muel from "../../../assets/images/Muel.svg";
// import Sri from "../../../assets/images/Sri.svg";
// import Ican from "../../../assets/images/Ican.svg";
// import Gevin from "../../../assets/images/Gevin.svg";
// import Izzu from "../../../assets/images/Izzu.svg";

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
