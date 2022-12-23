import React, { useEffect, useState } from "react";
import brand from "./img/brand.svg";
import "./banner.scss";
import { Link } from "react-router-dom";

const Banner = () => {
  const token = window.localStorage.getItem("token");
  const avatar = window.localStorage.getItem("avatar");
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div className="home" id="main">
      <div className="container-fluid mt-5 bg-papier banner">
        {matches && (
          <div className="row row-cols-lg-4">
            <div className="col pt-5">
              <div className="banner-titles my-5">
                <h5 className="mx-5">Hi, kenalin!</h5>
              </div>
            </div>
            <div className="col mt-4">
              <div className="logo img-fluid">
                <img src={brand} alt="" />
              </div>
            </div>
            <div className="col mt-5">
              <div className="banner-titles my-5">
                <h5 className="me-6">Pilihan Penerbanganmu</h5>
              </div>
            </div>
            <div className="col mt-5">
              <div className="banner-titles my-5">
                <h1>
                  To Infinity <br /> & Beyond!
                </h1>
              </div>
            </div>
          </div>
        )}
        {!matches && token && (
          <div className="pt-3 pb-5 mx-2 d-flex justify-content-between">
            <div className="me-3">
              <p className="fs-5 mb-0">Welcome!</p>
              <p className="fs-4 text-capitalize">
                {window.localStorage.getItem("user")}
              </p>
            </div>
            <Link to={'/user/profile'}>
              <div
                className="avatar"
                style={{ backgroundImage: `url(${avatar})` }}
              ></div>
            </Link>
          </div>
        )}
        {!matches && !token && (
          <div className="pt-3 pb-5 mx-2 d-flex justify-content-between">
            <div className="me-3">
              <p className="fs-5 mb-0">Hai, kenalin!</p>
              <p className="fs-4">Pilihan penerbanganmu.</p>
            </div>
            <div className="w-25">
              <img src={brand} height="60px" width="60px" alt="pp" />
              <p className="mt-2">To Infinity & Beyond!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
