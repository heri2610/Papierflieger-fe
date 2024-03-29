import React, { useEffect, useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAirport } from "../../../store/actions/airport";
import { filterTickets } from "../../../store/actions/ticket";
import { SelectOptions } from "../../UIComponents/Select";
import { useNavigate } from "react-router-dom";

import "./searchTicket.scss";

export default function FormSearch(props) {
  const { data } = useSelector((state) => state.airportReducer);
  const { errorMessage } = useSelector((state) => state.ticketReducer);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      setError(errorMessage);
      setShow(true);
      window.setTimeout(() => {
        setShow(false);
        setError(false);
      }, 3000);
    }
  }, [errorMessage]);

  const [type, setType] = useState("");
  const [tujuan, setTujuan] = useState({});
  const history = useNavigate();
  const handleType = (event) => {
    setType(event.target.value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAirport());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setTujuan(current => {
      // 👇️ remove salary key from object
      const { returnDate, ...rest } = current;

      return rest;
    });
  }, [type]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(filterTickets(tujuan, history));
  };

  return (
    <>
      <div className="form-search">
        <Form onSubmit={handleSubmit}>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            <div className="col">
              <p className="label-form pt-1">
                <small className="ms-12 text-muted">Dari</small>
              </p>
              <SelectOptions options={data}
                onChange={(e) => setTujuan(current => ({ ...current, flightFrom: e.value }))}
                className="form-select" id="floatingSelectFrom"
              />
            </div>
            <div className="col">
              <p className="label-form pt-1">
                <small className="ms-12 text-muted">Ke</small>
              </p>
              <SelectOptions options={data}
                onChange={(e) => setTujuan(current => ({ ...current, flightTo: e.value }))}
                className="form-select" id="floatingSelectFrom2"
              />
            </div>
            <div className="col">
              <div className="form-floating">
                <input type="number" min="1" max="10" className="form-control" id="inputPenumpang" onChange={(e) => setTujuan(current => ({ ...current, penumpang: e.target.value }))} />
                <label htmlFor="inputPenumpang">Penumpang</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating">
                <select className="form-select" id="floatingSelectKelas">
                  <option defaultValue="ekonomi">Ekonomi</option>
                  <option value="bisnis">Bisnis</option>
                </select>
                <label htmlFor="floatingSelectKelas">Kelas</label>
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
                <input type="date" className="form-control" id="inputPergi" required onChange={(e) => setTujuan(current => ({ ...current, departureDate: e.target.value }))} />
                <label htmlFor="inputPergi">Pergi</label>
              </div>
            </div>
            <div className="col">
              {type === "round-trip" &&
                <div className="form-floating">
                  <input type="date" className="form-control" id="inputPulang" onChange={(e) => setTujuan(current => ({ ...current, returnDate: e.target.value }))} required />
                  <label htmlFor="inputPulang">Pulang</label>
                </div>
              }
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary w-100">
                Cari Penerbangan
              </button>
            </div>
          </div>
        </Form>
      </div>
      {show && error && (
        <Alert
          key="danger"
          variant="danger"
        >
          <>{error}</>
        </Alert>
      )}
    </>

  );
}