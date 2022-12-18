import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAirport } from "../../../store/actions/airport";

import "./searchTicket.scss";

export default function SearchTicket() {
  // const { data } = useSelector((state) => state.airportReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAirport());
  }, [dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="form-search d-flex justify-content-center position-relative">
        <div className="col-md-8 col-9 card">
          <Form onSubmit={handleSubmit}>
            <div className="card-body">
              <h4 className="mb-3">Pencarian Tiket</h4>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
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
                  <div className="form-floating">
                    <input type="number" min="1" className="form-control" id="inputPenumpang" placeholder="name@example.com" />
                    <label htmlFor="inputPenumpang">Penumpang</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                      <option defaultValue="one-way">One-Way</option>
                      <option value="round-trip">Round-trip</option>
                    </select>
                    <label htmlFor="floatingSelect">Keberangkatan</label>
                  </div>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-3">
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
                  <div className="form-floating">
                    <input type="date" className="form-control" id="inputPergi" placeholder="name@example.com" />
                    <label htmlFor="inputPergi">Pergi</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating">
                    <input type="date" className="form-control" id="inputPulang" placeholder="name@example.com" />
                    <label htmlFor="inputPulang">Pulang</label>
                  </div>
                </div>
                <div className="col">
                  <button type="submit" className="btn btn-primary w-100">
                    Cari Penerbangan
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <div className="row row-cols-12">
        <div className="col"></div>
      </div>
    </>
  );
}
