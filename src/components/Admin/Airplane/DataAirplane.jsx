/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Container, Table, Alert, Form } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import "./DataAirplane.scss";
import { Link } from "react-router-dom";
import { getAirplane, deleteAirplane, updateAirplane } from "../../../store/actions/airplane";
import Select from "react-select";
// import EditAirplane from "./EditAirplane"
const classAirplane = [
  { value: "Business", label: "Business" },
  { value: "Ekonomy", label: "Ekonomy" },
];
const DataAirplane = () => {
  const [show, setShow] = useState(false);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [klass, setklass] = useState("");
  const [label, setLabel] = useState({ value: "Ekonomi", label: "Ekonomi" });
  const datas = {
    airplaneCode: code,
    airplaneName: name,
    class: klass,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(datas);
    // dispatch(updateAirplane(datas, edit.id));
  };
  const { loading, data, errorMessage, message } = useSelector((state) => state.airplaneReducer);
  const [messages, setMessages] = useState("");
  const [eror, setEror] = useState("");
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAirplane());
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
 console.log(message)
  console.log(data);
  const handleDelete = (id) => {
    if(window.confirm("yakin mau dihapus?")){
      dispatch(deleteAirplane(id));
    }

  };
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
  const handleDataEdit = (airplane)=>{
    setCode(airplane.airplaneCode);
    setName(airplane.airplaneName);
    setklass(airplane.class);
    setLabel({ value: airplane.class, label: airplane.class });
  }
  
  console.log(label)
  return (
    <div className="data-airplane">
      <Container>
        <Link to="/admin/airplane/new" style={{ textDecoration: "none" }}>
          <Button className="btn-primary mb-3" type="submit" value="Submit">
            Tambahkan data pesawat
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
              <th>Nama Pesawat</th>
              <th>Kode Pesawat</th>
              <th>Kelas</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((airplane) => (
              <tr key={airplane.id}>
                <td>{airplane.airplaneName}</td>
                <td>{airplane.airplaneCode}</td>
                <td>{airplane.class}</td>
                <td>
                  <Link onClick={() => handleDataEdit(airplane)}>
                    <Button variant="primary" onClick={handleShow}>
                      <FiEdit />
                    </Button>
                  </Link>
                  <Button className="delete" onClick={() => handleDelete(airplane.id)}>
                    <MdDelete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {loading && <h1>loadiiiiiing.......</h1>}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Menambahkan Data Pesawat</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <EditAirplane /> */}
            <div className="add-airplane">
              <div className="container-airplane">
                <Form onSubmit={handleSubmit}>
                  <Container>
                    <Form.Group className="form mb-3" controlId="validationCustom01">
                      <Form.Label>Nama Pesawat</Form.Label>
                      <Form.Control required type="text" placeholder="Boeing 737-800" onChange={(e) => setName(e.target.value)} value={name} />
                    </Form.Group>
                    <Form.Group className="form mb-3" controlId="validationCustom01">
                      <Form.Label>Kode Pesawat</Form.Label>
                      <Form.Control required type="text" placeholder="AF12345" onChange={(e) => setCode(e.target.value)} value={code} />
                    </Form.Group>
                    <Form.Group className="form mb-3" controlId="validationCustom01">
                      <Form.Label>Kelas</Form.Label>
                      <Select options={classAirplane} onChange={(e) => setklass(e.value)} defaultValue={label} />
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default DataAirplane;
