import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./DataAirplane.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAirplane } from "../../../store/actions/airplane";

const AddAirplane = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [klass, setklass] = useState("");
  const data = {
    airplaneCode: code,
    airplaneName: name,
    class: klass,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    dispatch(addAirplane(data, history));
  };
  return (
    <div className="add-airplane">
      <div className="container-airplane">
        <Form onSubmit={handleSubmit}>
          <Container>
            <Form.Group className="form mb-3" controlId="validationCustom01">
              <Form.Label>Nama Pesawat</Form.Label>
              <Form.Control required type="text" placeholder="Boeing 737-800" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="form mb-3" controlId="validationCustom01">
              <Form.Label>Kode Pesawat</Form.Label>
              <Form.Control required type="text" placeholder="AF12345" onChange={(e) => setCode(e.target.value)} />
            </Form.Group>
            <Form.Group className="form mb-3" controlId="validationCustom01">
              <Form.Label>Kelas</Form.Label>
              <Form.Select aria-label="Default select example" onChange={(e) => setklass(e.target.value)}>
                <option value="Bisnis">Bisnis</option>
                <option value="Ekonomi 1">Ekonomi 1</option>
                <option value="Ekonomi 2">Ekonomi 2</option>
              </Form.Select>
            </Form.Group>
            <br />
            <div className="add-airplane">
              <Button variant="primary" type="submit">
                Tambahkan
              </Button>
            </div>
          </Container>
        </Form>
      </div>
    </div>
  );
};

export default AddAirplane;
