import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAirport } from "../../../store/actions/airport";

import "./searchTicket.scss";

export default function SearchTicket() {
  const { data } = useSelector((state) => state.airportReducer);
  const [type, setType] = useState("");

  const handleType = (event) => {
    setType(event.target.value);
  };

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
                    <select className="form-select" id="floatingSelectFrom" required>
                      {data &&
                        data?.map((airport) => (
                          <option key={airport.id} value={airport.id}>
                            <div>
                              <strong>{airport.city}</strong>
                              <small> | {airport.airportName} ({airport.cityCode})</small>
                            </div>
                          </option>
                        ))
                      }
                      {!data &&
                        <option>memuat...</option>
                      }
                    </select>
                    <label htmlFor="floatingSelectFrom">Dari</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating">
                    <select className="form-select" id="floatingSelectTo" required>
                      {data &&
                        data?.map((airport) => (
                          <option key={airport.id} value={airport.id}>
                            <div>
                              <strong>{airport.city}</strong>
                              <small> | {airport.airportName} ({airport.cityCode})</small>
                            </div>
                          </option>
                        ))
                      }
                      {!data &&
                        <option>memuat...</option>
                      }
                    </select>
                    <label htmlFor="floatingSelectTo">Ke</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating">
                    <input type="number" min="1" max="10" className="form-control" id="inputPenumpang" />
                    <label htmlFor="inputPenumpang">Penumpang</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating">
                    <select className="form-select" id="floatingSelect">
                      <option defaultValue="ekonomi">Ekonomi</option>
                      <option value="bisnis">Bisnis</option>
                    </select>
                    <label htmlFor="floatingSelect">Kelas</label>
                  </div>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-3">
                <div className="col">
                  <div className="form-floating">
                    <select className="form-select" id="floatingSelect" onChange={handleType} value={type}>
                      <option defaultValue="one-way">Sekali Jalan</option>
                      <option value="round-trip">Pergi Pulang</option>
                    </select>
                    <label htmlFor="floatingSelect">Keberangkatan</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating">
                    <input type="date" className="form-control" id="inputPergi" required />
                    <label htmlFor="inputPergi">Pergi</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating">
                    {
                      type === 'round-trip' ?
                        <input type="date" className="form-control" id="inputPulang" required />
                        : <input type="date" className="form-control" id="inputPulang" disabled />
                    }
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
