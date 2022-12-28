import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../UIComponents/Loading";
import {
  Button,
  Container,
  Table,
  Alert,
  Modal,
  Form,
} from "react-bootstrap";
import { MdRemoveRedEye } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import "../Admin.scss";
import { Link } from "react-router-dom";
import Select from "react-select";
import { getTicket, deleteTicket } from "../../../store/actions/ticket.js";
import DeleteConfirmation from "../../UIComponents/DeleteConfirmation";

const typeTicket = [
  { value: "Domestik", label: "Domestik" },
  { value: "Internasional", label: "Internasional" },
];

const DataTicket = () => {
  const { loading, data, errorMessage, message, dataAirport, AirportName, AirplaneName } = useSelector(
    (state) => state.ticketReducer
  );
  const [messages, setMessages] = useState("");
  const [show, setShow] = useState(false);
  const [ticketno, setTicketNumber] = useState("");
  const [depdate, setDepartureDate] = useState("");
  const [arrdate, setArrivalDate] = useState("");
  const [frcity, setFromCity] = useState("");
  const [TCity, setToCity] = useState("");
  const [airpname, setAirplaneNames] = useState("");
  const [Prices, setPrice] = useState("");
  const [TransitTotal, setTotalTransit] = useState("");
  const [PointTransit, setTransitPoint] = useState("");
  const [TranDuration, setTransitDuration] = useState("");
  const [TypeTicket, setTicketType] = useState("");
  const [DurationFlight, setFlightDuration] = useState("");
  const [ArrTimeTransit, setArrivalTimeTransit] = useState("");
  const [DepTimeFrTransit, setDepartureTimeFromTransit] = useState("");
  const [location, setLocation] = useState("{}");
  const [eror, setEror] = useState("");
  const datas = {
    TicketNumber: ticketno,
    DepartureDate: depdate,
    ArrivalDate: arrdate,
    FromCity: frcity,
    ToCity: TCity,
    AirplaneNames: airpname,
    Price: Prices,
    TotalTransit: TransitTotal,
    TransitPoint: PointTransit,
    TransitDuration: TranDuration,
    TicketType: TypeTicket,
    FlightDuration: DurationFlight,
    ArrivelTimeTransit: ArrTimeTransit,
    DepartureTimeFromTransit: DepTimeFrTransit,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(datas);
    // dispatch(updateAirplane(datas, edit.id));
  };
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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDataEdit = (ticket) => {
    setTicketNumber(ticket.ticketNumber);
    setDepartureDate(ticket.DepartureDate);
    setArrivalDate(ticket.ArrivalDate);
    setLocation({
      value: ticket.Airport.id,
      label: ticket.Airport.City
    });
    setFromCity(ticket.FromCity);
    setToCity(ticket.ToCity);
    setAirplaneNames({
      value: ticket.Airplane.id,
      label: ticket.Airplane.airplaneName
    });
    setPrice(ticket.Price);
    setTotalTransit(ticket.TotalTransit);
    setTransitPoint({
      value: ticket.Airport.id,
      label: ticket.Airport.airportName
    });
    setTransitDuration(ticket.TransitDuration);
    setTicketType(ticket.TicketType);
    setFlightDuration(ticket.FlightDuration);
    setArrivalTimeTransit(ticket.ArrivalTimeTransit);
    setDepartureTimeFromTransit(ticket.DepartureTimeFromTransit);
  };
  return (
    <div className="data-ticket">
      <Container>
        <Link to="/admin/ticket/new" style={{ textDecoration: "none" }}>
          <Button className="btn-primary mb-3" type="submit" value="Submit">
            Tambahkan Tiket Perjalanan
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
              data?.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.ticketNumber}</td>
                  <td>
                    {new Date(ticket.departureDate)
                      .toISOString()
                      .substring(0, 10)}
                  </td>
                  <td>
                    {new Date(ticket.arrivalDate).toISOString().substring(0, 10)}
                  </td>
                  <td>{ticket.from.city}</td>
                  <td>{ticket.to.city}</td>
                  <td>
                    <div className="edit-delete">
                      <Button>
                        <MdRemoveRedEye />
                      </Button>
                      <Link onClick={() => handleDataEdit(ticket)}>
                        <Button variant="primary" onClick={handleShow}>
                          <FiEdit />
                        </Button>
                      </Link>
                      <DeleteConfirmation 
                        onClick={() => handleDelete(ticket.id)}
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
        <Modal show={show} onHide={handleClose} scrollable={true} >
          <Modal.Header closeButton>
            <Modal.Title>
              Mengubah Data Tiket
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="add-ticket">
              <Form onSubmit={handleSubmit}>
                <Container>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Nomor Tiket</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="674286"
                    onChange={(e) => setTicketNumber(e.target.value)}
                    value={ticketno}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Tanggal Keberangkatan</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    placeholder="2022-12-15"
                    onChange={(e) => setDepartureDate(e.target.value)}
                    value={depdate}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Terbang Dari</Form.Label>
                  <Select
                    options={AirportName}
                    onChange={(e) => setFromCity(e.target.value)}
                    defaultValue={frcity}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Nama Pesawat</Form.Label>
                  <Select
                    options={AirplaneName}
                    onChange={(e) => setAirplaneNames(e.target.value)}
                    defaultValue={airpname}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Nama Pesawat</Form.Label>
                  <Select options={airpname} />
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
                  <Select options={location} />
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
                  <Select options={airpname} />
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

export default DataTicket;
