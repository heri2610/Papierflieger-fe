import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAirport } from "../../../store/actions/airport";
import { SelectOptions } from "../../UIComponents/Select";
import { useNavigate } from "react-router-dom";

import "./searchTicket.scss";

export default function FormSearch() {
  const { data } = useSelector((state) => state.airportReducer);
  const [type, setType] = useState("");
  const [berangkat, setBerangkat] = useState("");
  console.log(berangkat);
  const history = useNavigate();
  const handleType = (event) => {
    setType(event.target.value);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAirport());
  }, [dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    history('/penerbangan', { state: { type, berangkat } });
  };

  const handleBerangkat = (e) => {
    console.log(e.value);
  };

  return (
    <div className="form-search">
      <Form onSubmit={handleSubmit}>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div className="col">
            <p className="label-form pt-1">
              <small className="ms-12 text-muted">Dari</small>
            </p>
            <SelectOptions options={data} onChange={(e) => handleBerangkat(e)} className="form-select" id="floatingSelectFrom" />
          </div>
          <div className="col">
            <p className="label-form pt-1">
              <small className="ms-12 text-muted">Ke</small>
            </p>
            <SelectOptions options={data} onChange={(e) => handleBerangkat(e)} className="form-select" id="floatingSelectFrom" />
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
            {type === "round-trip" &&
              <div className="form-floating">
                <input type="date" className="form-control" id="inputPulang" required />
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
  );
}