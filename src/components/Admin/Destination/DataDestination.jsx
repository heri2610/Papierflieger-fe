import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Container, Modal, Form } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import "../Admin.scss";
import { Link } from "react-router-dom";
import Loading from "../../UIComponents/Loading";
import DeleteConfirmation from "../../UIComponents/DeleteConfirmation";
import {
  getDestinasi,
  deleteDestinasi,
  updateDestinasi,
} from "../../../store/actions/destinasi";
import { SelectBandara, SelectLokasi } from "../../UIComponents/Select";
import { getAirport } from "../../../store/actions/airport";

const DataDestination = () => {
  const { loading, data, } = useSelector(
    (state) => state.destinasiReducer
  );
  const bandara = useSelector((state) => state.airportReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAirport());
  }, [dispatch]);

  const [show, setShow] = useState(false);
  const [idEdit, setIdEdit] = useState("");
  const [names, setName] = useState("");
  const [location, setLocation] = useState("");
  const [airportId, setAirportId] = useState("");
  const [desc, setDescription] = useState("");

  useEffect(() => {
    dispatch(getDestinasi());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteDestinasi(id));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDataEdit = (destinasi) => {
    setIdEdit(destinasi.id);
    setName(destinasi.name);
    setLocation(destinasi.location);
    setAirportId(destinasi.airportId);
    setDescription(destinasi.description);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const datas = {
      name: names,
      location,
      airportId,
      description: desc,
    };
    dispatch(updateDestinasi(datas, idEdit));
    handleClose();
  };

  return (
    <div className="data-destination">
      <Container className="form-add">
        <Link to="/admin/destination/new" style={{ textDecoration: "none" }}>
          <Button className="btn-primary mb-3" type="submit" value="Submit">
            Tambahkan data destinasi
          </Button>
        </Link>
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
                    <SelectLokasi
                      options={bandara}
                      onChange={(e) => setLocation(e.value)}
                      defaultValue={location}
                    />
                  </Form.Group>
                  <Form.Group
                    className="form mt-2"
                    controlId="validationCustom01"
                  >
                    <Form.Label>Bandara</Form.Label>
                    <SelectBandara
                      options={bandara}
                      onChange={(e) => setAirportId(e.value)}
                      defaultValue={airportId}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 mt-2"
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
            <Button variant="primary" onClick={handleSubmit}>
              Simpan Perubahan
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default DataDestination;
