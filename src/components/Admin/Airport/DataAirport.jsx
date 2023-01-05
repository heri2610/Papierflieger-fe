import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Table, Form, Modal } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import "../Admin.scss";
import { Link } from "react-router-dom";
import { getAirport, deleteAirport, updateAirport } from "../../../store/actions/airport";
import Loading from "../../UIComponents/Loading";
import DeleteConfirmation from "../../UIComponents/DeleteConfirmation";

const DataAirport = () => {
  const { loading, data } = useSelector(
    (state) => state.airportReducer
  );
  const [idEdit, setIdEdit] = useState("");
  const [show, setShow] = useState(false);
  const [airportName, setAirportName] = useState("");
  const [city, setCity] = useState("");
  const [code, setCityCode] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAirport());
  }, [dispatch]);
  const handleDelete = (id) => {
    dispatch(deleteAirport(id));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDataEdit = (Airport) => {
    setIdEdit(Airport.id);
    setAirportName(Airport.airportName);
    setCity(Airport.city);
    setCityCode(Airport.cityCode);
  };
  const datas = {
    airportName: airportName,
    city: city,
    cityCode: code,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateAirport(datas, idEdit));
    handleClose();
  };

  return (
    <div className="data-airport">
      <Container>
        <Link to="/admin/airport/new" style={{ textDecoration: "none" }}>
          <Button className="btn-primary mb-3" type="submit" value="Submit">
            Tambahkan data bandara
          </Button>
        </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              {/* <th>No</th> */}
              <th>Nama Bandara</th>
              <th>Kota</th>
              <th>Kode Bandara</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((Airport) => (
                <tr key={Airport.id}>
                  {/* <td>1</td> */}
                  <td>{Airport.airportName}</td>
                  <td>{Airport.city}</td>
                  <td>{Airport.cityCode}</td>
                  <td>
                    <div className="edit-delete">
                      <Link onClick={() => handleDataEdit(Airport)}>
                        <Button variant="primary" onClick={handleShow}>
                          <FiEdit />
                        </Button>
                      </Link>
                      <DeleteConfirmation
                        onClick={() => handleDelete(Airport.id)}
                      />
                    </div>
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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Mengubah Data Bandara</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <EditAirplane /> */}
            <div className="add-airplane">
              <div className="container-airplane">
                <Form onSubmit={handleSubmit}>
                  <Container>
                    <Form.Group className="form" controlId="validationCustom01">
                      <Form.Label>Nama Bandara</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Ngurah Rai International Airport"
                        onChange={(e) => setAirportName(e.target.value)}
                        value={airportName}
                      />
                    </Form.Group>
                    <Form.Group className="form" controlId="validationCustom01">
                      <Form.Label>Wilayah</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Denpasar, Bali, Indonesia"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                      />
                    </Form.Group>
                    <Form.Group className="form" controlId="validationCustom01">
                      <Form.Label>Kode Bandara</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="DPS"
                        onChange={(e) => setCityCode(e.target.value)}
                        value={code}
                      />
                    </Form.Group>
                  </Container>
                </Form>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>
              Simpan Perubahan
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default DataAirport;
