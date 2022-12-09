import React from 'react';
import brandWhite from "../../../assets/images/logo-white.svg";

export function Footer() {
  const tahun = new Date().getFullYear();
  return (
    <footer className="container-fluid bg-papier mt-5">
      <div className="d-flex justify-content-between p-5">
        <div>
          <span className="text-white d-inline-flex mb-2">Connect with us:</span>
          <ul className="justify-content-start list-unstyled d-flex">
            <li className="me-3">
              <button
                className="btn btn-primary rounded-circle"
                href="#"
                target="_blank"
              >
                <i className="bi bi-facebook"></i>
              </button>
            </li>
            <li className="me-3">
              <button
                className="btn btn-primary rounded-circle"
                href="#"
                target="_blank"
              >
                <i className="bi bi-twitter"></i>
              </button>
            </li>
            <li className="me-3">
              <button
                className="btn btn-primary rounded-circle"
                href="#"
                target="_blank"
              >
                <i className="bi bi-line"></i>
              </button>
            </li>
            <li className="me-3">
              <button
                className="btn btn-primary rounded-circle"
                href="#"
                target="_blank"
              >
                <i className="bi bi-instagram"></i>
              </button>
            </li>
            <li className="me-3">
              <button
                className="btn btn-primary rounded-circle"
                href="#"
                target="_blank"
              >
                <i className="bi bi-youtube"></i>
              </button>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none ms-auto lh-1"
          >
            <img src={brandWhite} width="70" alt="brand oimage" />
          </a>
          <span
            className="mb-3 mb-md-0 text-white justify-content-end"
            style={{ fontSize: "0.7rem" }}
          >
            Copyright © {tahun}
            <br />
            PT. Papier Flieger &#40;Persero&#41; Tbk.
            <br />
            All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}