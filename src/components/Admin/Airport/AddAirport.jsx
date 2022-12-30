import React, { useState } from "react";
import {Form, Container, Button} from 'react-bootstrap';
import '../Admin.scss';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAirport } from "../../../store/actions/airport";

const AddAirport = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [cityCode, setCityCode] = useState("");
  const [airportName, setAirportName] = useState("");
  const [city, setCity] = useState("");
  const data = {
    cityCode,
    airportName,
    city,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    dispatch(addAirport(data, history));
  };
  return (
    <div className="add-airport">
      <div className="container-airport">
        <Form className="add" onSubmit={handleSubmit}>
          <Container>
            <Form.Group className="form" controlId="validationCustom01">
              <Form.Label>Nama Bandara</Form.Label>
              <Form.Control required type="text" placeholder="Ngurah Rai International Airport" onChange={(e) => setAirportName(e.target.value)} />
            </Form.Group>
            <Form.Group className="form" controlId="validationCustom01">
              <Form.Label>Wilayah</Form.Label>
              <Form.Control required type="text" placeholder="Denpasar, Bali, Indonesia" onChange={(e) => setCity(e.target.value)} />
            </Form.Group>
            <Form.Group className="form" controlId="validationCustom01">
              <Form.Label>Kode Bandara</Form.Label>
              <Form.Control required type="text" placeholder="DPS" onChange={(e) => setCityCode(e.target.value)} />
            </Form.Group>
            <br />
            <div className="edit-delete">
              <Button variant="primary" type="submit">
                Tambahkan
              </Button>
            </div>
          </Container>
        </Form>
      </div>
    </div>
  );
}

export default AddAirport