import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Container, Alert, Modal, Form } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import "../Admin.scss";
import Select from "react-select";
import { Link } from "react-router-dom";
import Loading from "../../UIComponents/Loading";
import DeleteConfirmation from "../../UIComponents/DeleteConfirmation";
import {
  getDestinasi,
  deleteDestinasi,
} from "../../../store/actions/destinasi";

const DataDestination = () => {
  const { loading, data, errorMessage, message, dataAirport,AirportName } = useSelector(
    (state) => state.destinasiReducer
  );
  const [messages, setMessages] = useState("");
  const [show, setShow] = useState(false);
  const [names, setName] = useState("");
  const [locations, setLocation] = useState("");
  const [airportNames, setAirportNames] = useState("");
  const [desc, setDescription] = useState("");
  const [eror, setEror] = useState("");
  const [defaultValue, setdefaultValue] = useState({});
  const datas = {
    name: names,
    location: locations,
    airportName: airportNames,
    description: desc,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(datas);
    // dispatch(updateAirplane(datas, edit.id));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDestinasi());
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
    dispatch(deleteDestinasi(id));
  };
  console.log(data)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDataEdit = (destinasi) => {
    setName(destinasi.name);
    setLocation(destinasi.location);
    setAirportNames({
      value: destinasi.Airport.id,
      label: destinasi.Airport.airportName,
    });
    setDescription(destinasi.description);
    setdefaultValue({
      value: destinasi.Airport.id,
      label: destinasi.Airport.city,
    });
  };
  return (
    <div className="data-destination">
      <Container className="form-add">
        <Link to="/admin/destination/new" style={{ textDecoration: "none" }}>
          <Button className="btn-primary mb-3" type="submit" value="Submit">
            Tambahkan data destinasi
          </Button>
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
              <th>Nama Destinasi</th>
              <th>Gambar</th>
              <th>Lokasi</th>
              <th>Bandara</th>
              <th>Deskripsi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((destinasi) => (
                <tr key={destinasi.id}>
                  <td>{destinasi.name}</td>
                  <td>
                    <img
                      src={destinasi.image[0]}
                      alt={`gambar${destinasi.name}`}
                      width="30px"
                    />
                  </td>
                  <td>{destinasi.location}</td>
                  <td>{destinasi.Airport.airportName}</td>
                  <td>{destinasi.description}</td>
                  <td>
                    <div className="edit-delete">
                      <Link onClick={() => handleDataEdit(destinasi)}>
                        <Button variant="primary" onClick={handleShow}>
                          <FiEdit />
                        </Button>
                      </Link>
                      {/* <Button className="delete" >
                      <MdDelete />
                    </Button> */}
                      <DeleteConfirmation
                        onClick={() => handleDelete(destinasi.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        {loading && (
          <div className="loading-center">
            {" "}
            <Loading />{" "}
          </div>
        )}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Mengubah Data Destinasi</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="add-destination">
              <Form onSubmit={handleSubmit}>
                <Container>
                  <Form.Group className="form" controlId="validationCustom01">
                    <Form.Label>Nama Destinasi</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Pura Ulun Danu Beratan"
                      onChange={(e) => setName(e.target.value)}
                      value={names}
                    />
                  </Form.Group>
                  <Form.Group
                    className="form mt-2"
                    controlId="validationCustom01"
                  >
                    <Form.Label>Lokasi</Form.Label>
                    <Select
                      options={dataAirport}
                      onChange={(e) => setLocation(e.value)}
                      defaultValue={defaultValue}
                    />
                  </Form.Group>
                  <Form.Group
                    className="form mt-2"
                    controlId="validationCustom01"
                  >
                    <Form.Label>Bandara</Form.Label>
                    <Select
                      options={AirportName}
                      onChange={(e) => setAirportNames(e.value)}
                      defaultValue={airportNames}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control
                      required
                      onChange={(e) => setDescription(e.target.value)}
                      value={desc}
                    />
                  </Form.Group>
                </Container>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Simpan Perubahan
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default DataDestination;
