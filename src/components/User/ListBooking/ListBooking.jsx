import React from "react";
import Arrow from "../../../assets/images/Vector.svg";
import logocard from "../../../assets/images/Logo-card.svg";
import "./ListBooking.scss";

const ListBooking = () => {
  return (
    <div className="img-banner">
      <div className="container">
        <h4 className="my-3 fw-bold">Daftar Pemesanan</h4>
        <div className="container card mb-5">
          <div className="card-body d-flex align-items-start align-items-md-center justify-content-between">
            <div className="d-flex align-items-center">
              <div className="col-md-4 me-4 p-lg-3">
                <img
                  className="img-fluid"
                  variant="top"
                  src={logocard}
                  alt=""
                />
              </div>
              <div className="col-5 mt-md-0">
                <p>Penerbangan</p>
                <h3 className="card-title fw-bold fs-5">Banda Aceh</h3>
                <p className="card-text text-muted">Selasa 10 Januari 2022</p>
              </div>
              <div className="col-md mt-md-0 vector-right">
                <img src={Arrow} alt="arrow" className="mx-3 mt-2" />
              </div>
              <div className="col-md mt-3 mt-md-0">
                <h3 className="card-title fw-bold fs-5 mt-3">Jakarta</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListBooking;
