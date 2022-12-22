import React from "react";
import Airplane404 from "./img/Airplane404.svg";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="container img-banner">
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-md-4">
          <img src={Airplane404} alt="airplane404" />
        </div>
        <div className="col-md-4 text-center mt-5">
          <h1 className="font-404">404</h1>
          <h3 className="font-Notfound">Page Not Found!</h3>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
