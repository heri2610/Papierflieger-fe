import React, { useState } from 'react';
import { useSelector } from "react-redux";
import {Form, Container, Button } from 'react-bootstrap';
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDestinasi } from "../../../store/actions/destinasi";

const AddDestination = () => {
  const { dataAirport } = useSelector(
    (state) => state.destinasiReducer
  );
  const dispatch = useDispatch();
  const history = useNavigate();
  const [names, setName] = useState("");
  const [locations, setLocation] = useState("");
  const [airportNames, setAirportNames] = useState("");
  const [desc, setDescription] = useState("");
  const datas = {
    names,
    locations,
    airportNames,
    desc,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(datas);
    dispatch(addDestinasi(datas, history));
  };
  console.log(dataAirport)
  return (
    <div className="add-destination">
        <Form className="add" onSubmit={handleSubmit}>
          <Container>
            <Form.Group className="form" controlId="validationCustom01">
              <Form.Label>Nama Destinasi</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Pura Ulun Danu Beratan"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Gambar</Form.Label>
                <Form.Control require type="file" multiple/>
            </Form.Group>
            <Form.Group className="form mt-2" controlId="validationCustom01">
              <Form.Label>Lokasi</Form.Label>
              <Select options={dataAirport}  onChange={(e) => setLocation(e.target.value)} />
            </Form.Group>
            <Form.Group className="form mt-2" controlId="validationCustom01">
            <Form.Label>Bandara</Form.Label>
              <Select options={dataAirport} onChange={(e) => setAirportNames(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Deskripsi</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>
            <br/>
            <div className="edit-delete">
              <Button type="submit">
                Tambahkan
              </Button>
            </div>
          </Container>
        </Form>
    </div>
  )
}

export default AddDestination