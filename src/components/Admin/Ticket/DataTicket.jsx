import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../UIComponents/Loading";
import { Button, Container, Table, Alert, Modal, Form, Row, Col } from "react-bootstrap";
import {
  MdDelete,
  MdRemoveRedEye
} from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import "../Admin.scss";
import { Link } from "react-router-dom";
import Select from "react-select";
import { getTicket, deleteTicket } from "../../../store/actions/ticket.js";

const airport = [
  {value: "Ngurah Rai", label: "Ngurah Rai"},
  {value: "Soekarno Hatta", label: "Soekarno Hatta"}
]

const airplane = [
  {value: "Boeing", label: "Boeing"},
  {value: "Airbus", label: "Airbus"}
]

const typeTicket = [
  {value: "Domestik", label: "Domestik"},
  {value: "Internasional", label: "Internasional"}
]

const DataTicket = () => {
  const { loading, data, errorMessage, message } = useSelector((state) => state.tiketsReducer);
  const [messages, setMessages] = useState("");
  const [eror, setEror] = useState("");
  // const [edit, setEdit] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTicket());
  }, [dispatch]);
  useEffect(() => {
    if (errorMessage) {
      setEror(errorMessage);
      window.setTimeout(() => {
        setMessages("");
      }, 3000);
    }
    if (message) {
      setMessages(message);
      window.setTimeout(() => {
        setMessages("");
      }, 3000);
    }
  }, [data]);
  const handleDelete = (id) => {
    dispatch(deleteTicket(id));
  };
  console.log(data);
  const [show, setShow] = useState(false);
  const [airportName, setAirportName] = useState("");
  const [city, setCity] = useState("");
  const [code, setCityCode] = useState("");
  const datas = {
    airportName: airportName,
    city: city,
    cityCode: code,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(datas);
    // dispatch(updateAirplane(datas, edit.id));
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDataEdit = (Airport) => {
    setAirportName(Airport.airportName);
    setCity(Airport.city);
    setCityCode(Airport.cityCode);
  };
  let i = 1;
  return (
    <div className="data-ticket">
      <Container>
        <Link to="/admin/ticket/new" style={{ textDecoration: "none" }}>
          <Button className="btn-primary mb-3" type="submit" value="Submit">Tambahkan Tiket Perjalanan</Button>
        </Link>
        {messages && (
          <Alert key="primary" variant="primary">
            <>{message}</>
          </Alert>
        )}
        {eror && (
          <Alert key="danger" variant="danger">
            {eror}
          </Alert>
        )}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Nomor Tiket</th>
              <th>Tanggal Keberangkatan</th>
              <th>Tanggal Kedatangan</th>
              <th>Penerbangan dari</th>
              <th>Penerbangan ke</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((tiket) => (
                <tr key={tiket.id}>
                  <td>{i++}</td>
                  <td>{tiket.ticketNumber}</td>
                  <td>{new Date(tiket.departureDate).toISOString().substring(0, 10)}</td>
                  <td>{new Date(tiket.arrivalDate).toISOString().substring(0, 10)}</td>
                  <td>{tiket.from.city}</td>
                  <td>{tiket.to.city}</td>
                  <td>
                    <Button className="right">
                      <MdRemoveRedEye />
                    </Button>
                    <Link style={{ textDecoration: "none" }}>
                      <Button className="delete">
                        <FiEdit />
                      </Button>
                    </Link>
                    <Button className="delete">
                      <MdDelete />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        {loading && (
          <div className="loading-center">
            <Loading />
          </div>
        )}
        <Modal>
          <Modal.Header>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="add-ticket">
            <div className="container-ticket">
              <Form>
                <Container>
                  <Row>
                  <Col>
                    <Form.Group className="form" controlId="validationCustom01">
                      <Form.Label>Nomor Tiket</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="674286"
                      />
                    </Form.Group>
                    <Form.Group className="form" controlId="validationCustom01">
                      <Form.Label>Tanggal Kedatangan</Form.Label>
                      <Form.Control
                        required
                        type="date"
                        placeholder="2022-12-15"
                      />
                    </Form.Group>
                    <Form.Group className="form" controlId="validationCustom01">
                      <Form.Label>Terbang Dari</Form.Label>
                      <Select options={airport} />
                    </Form.Group>
                    <Form.Group className="form" controlId="validationCustom01">
                      <Form.Label>Id Pesawat</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="2"
                      />
                    </Form.Group>
                    <Form.Group className="form" controlId="validationCustom01">
                    <Form.Label>Nama Pesawat</Form.Label>
                      <Select options={airplane} />
                    </Form.Group>
                    <Form.Group className="form" controlId="validationCustom01">
                      <Form.Label>Waktu Kepulangan dari Titik Transit</Form.Label>
                      <Form.Control
                        required
                        type="time"
                        placeholder="10:14"
                      />
                    </Form.Group>
                    <Form.Group className="form" controlId="validationCustom01">
                      <Form.Label>Durasi Transit</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="8 jam 15 menit"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                  <Form.Group className="form" controlId="validationCustom01">
                      <Form.Label>Tipe Tiket</Form.Label>
                      <Select options={typeTicket} />
                    </Form.Group>
                    <Form.Group className="form" controlId="validationCustom01">
                      <Form.Label>Tanggal Kepulangan</Form.Label>
                      <Form.Control
                        required
                        type="date"
                        placeholder="2022-12-15"
                      />
                    </Form.Group>
                    <Form.Group className="form" controlId="validationCustom01">
                      <Form.Label>Terbang Ke</Form.Label>
                      <Select options={airport} />
                    </Form.Group>
                    <Form.Group className="form" controlId="validationCustom01">
                      <Form.Label>Harga</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="8000000"
                      />
                    </Form.Group>
                    <Form.Group className="form" controlId="validationCustom01">
                      <Form.Label>Bandara Transit</Form.Label>
                      <Select options={airport} />
                    </Form.Group>
                    <Form.Group className="form" controlId="validationCustom01">
                      <Form.Label>Waktu Kedatangan dari titik Transit</Form.Label>
                      <Form.Control
                        required
                        type="time"
                        placeholder="10:14"
                      />
                    </Form.Group>
                    <Form.Group className="form" controlId="validationCustom01">
                      <Form.Label>Durasi Penerbangan</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="3 jam 5 menit"
                      />
                    </Form.Group>
                  </Col>
                  </Row>
                  <br/>
                    <Button variant="primary" type="submit">
                      Tambahkan
                    </Button>
                </Container>
              </Form>
            </div>
          </div>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default DataTicket;
