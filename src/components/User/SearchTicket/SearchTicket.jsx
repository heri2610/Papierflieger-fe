import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAirport } from "../../../store/actions/airport";
export default function SearchTicket() {
    const { data } = useSelector((state) => state.carReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAirport());
  }, [dispatch]);
  return (
    <>
      <div className="d-flex justify-content-md-center position-relative" style={{ bottom: "6rem" }}>
        <div className="col-8 card">
          <div className="card-body">
            <h4>Pencarian Tiket</h4>
            <div className="row row-cols-4 mb-3">
              <div className="col">
                <div className="form-floating">
                  <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option defaultValue>Jakarta (CGK)</option>
                    <option value="1">Sydney</option>
                    <option value="2">Tokyo</option>
                    <option value="3">Jeddah</option>
                  </select>
                  <label htmlFor="floatingSelect">Dari</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option defaultValue>Singapura (SIN)</option>
                    <option value="1">Sydney</option>
                    <option value="2">Tokyo</option>
                    <option value="3">Jeddah</option>
                  </select>
                  <label htmlFor="floatingSelect">Ke</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="inputenumpang" placeholder="name@example.com" />
                  <label htmlFor="inputenumpang">Penumpang</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option defaultValue="one-way">One-Way</option>
                    <option value="round-trip">Round-trip</option>
                  </select>
                  <label htmlFor="floatingSelect">Keberengkatan</label>
                </div>
              </div>
            </div>
            <div className="row row-cols-4 mb-3">
              <div className="col">
                <div className="form-floating">
                  <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option defaultValue="ekonomi">Ekonomi</option>
                    <option value="bisnis">Bisnis</option>
                  </select>
                  <label htmlFor="floatingSelect">Kelas</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="date" className="form-control" id="inputPergi" placeholder="name@example.com" />
                  <label htmlFor="inputPergi">Pergi</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="date" className="form-control" id="inputPulang" placeholder="name@example.com" />
                  <label htmlFor="inputPulang">Pulang</label>
                </div>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-primary w-100 h-75">
                  Cari Penerbangan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-12">
        <div className="col"></div>
      </div>
    </>
  );
}
