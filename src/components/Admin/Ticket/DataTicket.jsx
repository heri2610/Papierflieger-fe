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
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [deptime, setDepartureTime] = useState("");
  const [arrtime, setArrivalTime] = useState("");
  const [frcity, setFromCity] = useState("");
  const [tcity, setToCity] = useState("");
  const [airpname, setAirplaneNames] = useState("");
  const [price, setPrice] = useState("");
  const [transittotal, setTotalTransit] = useState("");
  const [airportNames, setAirportNames] = useState("");
  const [PointTransit, setTransitPoint] = useState("");
  const [tranduration, setTransitDuration] = useState("");
  const [TypeTicket, setTicketType] = useState("");
  const [flightduration, setFlightDuration] = useState("");
  const [arrtimetransit, setArrivalTimeTransit] = useState("");
  const [deptimetransit, setDepartureTimeFromTransit] = useState("");
  const [eror, setEror] = useState("");
  const datas = {
    TicketNumber: ticketno,
    DepartureDate: departureDate,
    ArrivalDate: arrivalDate,
    DepartureTime: deptime,
    ArrivalTime: arrtime,
    FromCity: frcity,
    ToCity: tcity,
    AirplaneNames: airpname,
    Price: price,
    TotalTransit: transittotal,
    airportName: airportNames,
    TransitPoint: PointTransit,
    TransitDuration: tranduration,
    TicketType: TypeTicket,
    FlightDuration: flightduration,
    ArrivelTimeTransit: arrtimetransit,
    DepartureTimeFromTransit: deptimetransit,
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
  
  // view ticket
  const handleViewClose = () => setShow(false);
  const handleViewShow = () => setShow(true);
  const handleDataView = (ticket) => {
    setTicketNumber(ticket.ticketNumber);
    setDepartureDate(ticket.DepartureDate);
    setArrivalDate(ticket.ArrivalDate);
    setDepartureTime(ticket.DepartureTime);
    setArrivalTime(ticket.ArrivalTime);
    setFromCity(ticket.from.city);
    setToCity(ticket.to.City);
    setAirplaneNames({
      value: ticket.Airplane.id,
      label: ticket.Airplane.airplaneName
    });
    setPrice(ticket.Price);
    setTotalTransit(ticket.TotalTransit);setAirportNames({
      value: ticket.Airport.id,
      label: ticket.Airport.airportName,
    });
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

  // update ticket
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDataEdit = (ticket) => {
    setTicketNumber(ticket.ticketNumber);
    setDepartureDate(ticket.DepartureDate);
    setArrivalDate(ticket.ArrivalDate);
    setDepartureTime(ticket.DepartureTime);
    setArrivalTime(ticket.ArrivalTime);
    setFromCity(ticket.from.city);
    setToCity(ticket.to.City);
    setAirplaneNames({
      value: ticket.Airplane.id,
      label: ticket.Airplane.airplaneName
    });
    setPrice(ticket.Price);
    setTotalTransit(ticket.TotalTransit);setAirportNames({
      value: ticket.Airport.id,
      label: ticket.Airport.airportName,
    });
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
                      <div onClick={() => handleDataView(ticket)}>
                        <Button variant="primary" onClick={handleViewShow}>
                          <MdRemoveRedEye />
                        </Button>
                      </div>
                      <div onClick={() => handleDataEdit(ticket)}>
                        <Button variant="primary" onClick={handleShow}>
                          <FiEdit />
                        </Button>
                      </div>
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

        <Modal show={show} onHide={handleViewClose} scrollable={true}>
          <Modal.Header>
            <Modal.Title>
              Tiket Perjalanan
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Container>
                <Form.Group>
                  <Form.Label>Nomor Tiket</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={(e) => setTicketNumber(e.target.value)}
                    value={ticketno}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Tipe Tiket</Form.Label>
                  <Select
                    options={typeTicket}
                    onChange={(e) => setTicketType(e.target.value)} 
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Tanggal Kedatangan</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    onChange={(e) => setArrivalDate(e.target.value)}
                    value={arrivalDate}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Tanggal Kepulangan</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    onChange={(e) => setDepartureDate(e.target.value)}
                    value={departureDate}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Waktu Kedatangan</Form.Label>
                  <Form.Control
                    required
                    type="time"
                    onChange={(e) => setDepartureTime(e.target.value)}
                    value={deptime}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Waktu Kepulangan</Form.Label>
                  <Form.Control
                    required
                    type="time"
                    onChange={(e) => setArrivalTime(e.target.value)}
                    value={arrtime}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Terbang Dari</Form.Label>
                <Select
                  option={dataAirport}
                  onChange={(e) => setFromCity(e.target.value)}
                  defaultValue={frcity}
                />
              </Form.Group>
              <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Terbang Ke</Form.Label>
                <Select
                  option={dataAirport}
                  onChange={(e) => setToCity(e.target.value)}
                  defaultValue={tcity}
                />
              </Form.Group>
              <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Nama Pesawat</Form.Label>
                <Select
                  required
                  option={AirplaneName}
                  onChange={(e) => setAirplaneNames(e.target.value)}
                  value={airpname}
                />
              </Form.Group>
              <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Total Transit</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setTotalTransit(e.target.value)}
                  value={transittotal}
                />
              </Form.Group>
              <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Bandara Transit</Form.Label>
                <Select
                  options={AirportName}
                  onChange={(e) => setAirportNames(e.value)}
                  defaultValue={airportNames}
                />
              </Form.Group>
              <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Durasi Transit</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="8 jam 15 menit"
                  onChange={(e) => setTransitDuration(e.value)}
                  Value={tranduration}
                />
              </Form.Group>
              <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Waktu Kedatangan di Titik Transit</Form.Label>
                <Form.Control
                  type="time"
                  placeholder="10:14"
                  onChange={(e) => setArrivalTimeTransit(e.value)}
                  value={arrtimetransit}
                />
              </Form.Group>
              <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Waktu Kepergian dari Titik Transit</Form.Label>
                <Form.Control
                  type="time"
                  placeholder="10:14"
                  onChange={(e) => setDepartureTimeFromTransit(e.value)}
                  value={deptimetransit}
                />
              </Form.Group>
              <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Durasi Penerbangan</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="3 jam 5 menit"
                  onChange={(e) => setFlightDuration(e.value)}
                  value={flightduration}
                />
              </Form.Group>
              <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Harga</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="8000000"
                  onChange={(e) => setPrice(e.value)}
                  value={price}
                />
              </Form.Group>
              </Container>
            </Form>
          </Modal.Body>
        </Modal>

        {/* ============= Update Data Ticket ============= */}
        <Modal show={show} onHide={handleClose} scrollable={true}>
          <Modal.Header>
            <Modal.Title>
              Mengubah Data Tiket Perjalanan
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Container>
                <Form.Group>
                  <Form.Label>Nomor Tiket</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={(e) => setTicketNumber(e.target.value)}
                    value={ticketno}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Tipe Tiket</Form.Label>
                  <Select
                    options={typeTicket}
                    onChange={(e) => setTicketType(e.target.value)} 
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Tanggal Kedatangan</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    onChange={(e) => setArrivalDate(e.target.value)}
                    value={arrivalDate}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Tanggal Kepulangan</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    onChange={(e) => setDepartureDate(e.target.value)}
                    value={departureDate}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Waktu Kedatangan</Form.Label>
                  <Form.Control
                    required
                    type="time"
                    onChange={(e) => setDepartureTime(e.target.value)}
                    value={deptime}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Waktu Kepulangan</Form.Label>
                  <Form.Control
                    required
                    type="time"
                    onChange={(e) => setArrivalTime(e.target.value)}
                    value={arrtime}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Terbang Dari</Form.Label>
                <Select
                  option={dataAirport}
                  onChange={(e) => setFromCity(e.target.value)}
                  defaultValue={frcity}
                />
              </Form.Group>
              <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Terbang Ke</Form.Label>
                <Select
                  option={dataAirport}
                  onChange={(e) => setToCity(e.target.value)}
                  defaultValue={tcity}
                />
              </Form.Group>
              <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Nama Pesawat</Form.Label>
                <Select
                  required
                  option={AirplaneName}
                  onChange={(e) => setAirplaneNames(e.target.value)}
                  value={airpname}
                />
              </Form.Group>
              <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Total Transit</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setTotalTransit(e.target.value)}
                  value={transittotal}
                />
              </Form.Group>
              <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Bandara Transit</Form.Label>
                <Select
                  options={AirportName}
                  onChange={(e) => setAirportNames(e.value)}
                  defaultValue={airportNames}
                />
              </Form.Group>
              <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Durasi Transit</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="8 jam 15 menit"
                  onChange={(e) => setTransitDuration(e.value)}
                  Value={tranduration}
                />
              </Form.Group>
              <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Waktu Kedatangan di Titik Transit</Form.Label>
                <Form.Control
                  type="time"
                  placeholder="10:14"
                  onChange={(e) => setArrivalTimeTransit(e.value)}
                  value={arrtimetransit}
                />
              </Form.Group>
              <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Waktu Kepergian dari Titik Transit</Form.Label>
                <Form.Control
                  type="time"
                  placeholder="10:14"
                  onChange={(e) => setDepartureTimeFromTransit(e.value)}
                  value={deptimetransit}
                />
              </Form.Group>
              <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Durasi Penerbangan</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="3 jam 5 menit"
                  onChange={(e) => setFlightDuration(e.value)}
                  value={flightduration}
                />
              </Form.Group>
              <Form.Group className="form" controlId="validationCustom01">
                <Form.Label>Harga</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="8000000"
                  onChange={(e) => setPrice(e.value)}
                  value={price}
                />
              </Form.Group>
              </Container>
            </Form>
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
