<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Container, Alert } from "react-bootstrap";
import { MdDelete, MdRemoveRedEye } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
// import './DataTicket.scss';
import { Link } from "react-router-dom";
import { getTicket, deleteTicket } from "../../../store/actions/ticket";
import Loading from "../../UIComponents/Loading";
=======
import React from "react";
import {
  Button,
  Table,
  Container
} from "react-bootstrap";
import {
  MdDelete,
  MdRemoveRedEye
} from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import "../Admin.scss";
import { Link } from "react-router-dom"
>>>>>>> 99ca72baa337fb21cf7e69b0023aa98dee77a575

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
    let i = 1 
  return (
    <div className="data-ticket">
      <Container>
<<<<<<< HEAD
        <Link to="/admin/ticket/new" style={{ textDecoration: "none" }}>
          <Button className="btn-primary mb-3" type="submit" value="Submit">
            Tambahkan Tiket Perjalanan
          </Button>
=======
        <Link to="/admin/ticket/new" style={{textDecoration:"none"}}>
          <Button className="btn-primary mb-3" type="submit" value="Submit">Tambahkan Tiket Perjalanan</Button>
>>>>>>> 99ca72baa337fb21cf7e69b0023aa98dee77a575
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
<<<<<<< HEAD
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
=======
            <tr>
              <td>1</td>
              <td>67428601</td>
              <td>2022-12-14</td>
              <td>2022-12-14</td>
              <td>Jakarta</td>
              <td>Aceh</td>
              <td>
                <div className="edit-delete">
                <Button className="right"><MdRemoveRedEye/></Button>
                <Link to="/admin/ticket/new" style={{textDecoration:"none"}}>
                  <Button className="delete"><FiEdit/></Button>
                </Link>
                <Button className="delete"><MdDelete/></Button>
                </div>
              </td>
            </tr>
>>>>>>> 99ca72baa337fb21cf7e69b0023aa98dee77a575
          </tbody>
        </Table>
        {loading && (
          <div className="loading-center">
            <Loading />
          </div>
        )}
      </Container>
    </div>
  );
};

export default DataTicket;
