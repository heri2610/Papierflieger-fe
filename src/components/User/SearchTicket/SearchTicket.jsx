import React from "react";

export default function SearchTicket() {
  return (
    <div
      className="d-flex justify-content-md-center position-relative"
      style={{ bottom: "5rem" }}
    >
      <div className="col-8 card search-flight">
        <div className="card-body">
          <h4 className="mt-1 mb-3">Booking Ticket</h4>
          <div className="row row-cols-4 mb-4">
            <div className="col">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue hidden>
                  Dari
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue hidden>
                  Ke
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Penumpang"
              />
            </div>
            <div className="col">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue hidden>
                  Keberangkatan
                </option>
                <option value="One-Way">One-Way</option>
                <option value="Round-trip">Round-trip</option>
              </select>
            </div>
          </div>
          <div className="row row-cols-4 mb-3">
            <div className="col">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue hidden>
                  Kelas
                </option>
                <option value="Economy">Ekonomi</option>
                <option value="Business">Bisnis</option>
              </select>
            </div>
            <div className="col">
              <input
                type="date"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
            <div className="col">
              <input
                type="date"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary w-100">
                Cari Penerbangan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}