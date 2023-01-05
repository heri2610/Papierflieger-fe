import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../UIComponents/Loading";
import {
  Button,
  Container,
  Table,
  Modal,
  Form,
} from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import "../Admin.scss";
import { Link } from "react-router-dom";
import Select from "react-select";
import { getTicket, deleteTicket, updateTicket } from "../../../store/actions/ticket";
import DeleteConfirmation from "../../UIComponents/DeleteConfirmation";

const tipeTicket = [
  { value: "Domestik", label: "Domestik" },
  { value: "Internasional", label: "Internasional" },
];

const DataTicket = () => {
  const { loading, data, datAirport, airportName, datAirPlane } = useSelector(
    (state) => state.ticketReducer
  );
  const [show, setShow] = useState(false);
  const [ticketno, setTicketNumber] = useState("");
  const [depDate, setDepartureDate] = useState();
  const [arrDate, setArrivalDate] = useState();
  const [deptime, setDepartureTime] = useState();
  const [arrtime, setArrivalTime] = useState("");
  const [frcity, setFlightFrom] = useState();
  const [tcity, setFlightTo] = useState("");
  const [airpname, setAirplaneNames] = useState("");
  const [price, setPrice] = useState("");
  const [transittotal, setTotalTransit] = useState("");
  const [PointTransit, setTransitPoint] = useState("");
  const [tranduration, setTransitDuration] = useState("");
  const [typeTicket, setTicketType] = useState("");
  const [flightduration, setFlightDuration] = useState("");
  const [arrtimetransit, setArrivalTimeTransit] = useState("");
  const [deptimetransit, setDepartureTimeFromTransit] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = () => {
    const datas = {
      ticketNumber: ticketno,
      arrivalDate: arrDate,
      departureTime: deptime,
      flightFrom: frcity.value ? frcity.value : frcity,
      airplaneId: airpname.value ? airpname.value : airpname,
      transitPoint: PointTransit.value ? PointTransit.value : PointTransit ? PointTransit : null,
      arrivalTimeAtTransit: arrtimetransit ? arrtimetransit : null,
      flightDuration: flightduration,
      ticketType: typeTicket.value ? typeTicket.value : typeTicket,
      departureDate: depDate,
      arrivalTime: arrtime,
      flightTo: tcity.value ? tcity.value : tcity,
      totalTransit: transittotal ? transittotal : null,
      transitDuration: tranduration ? tranduration : null,
      departureTimeFromTransit: deptimetransit ? deptimetransit : null,
      price
    };

    dispatch(updateTicket(datas, id));
    setShow(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTicket());
  }, [dispatch]);
  const handleDelete = (id) => {
    dispatch(deleteTicket(id));
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDataEdit = (ticket) => {
    setId(ticket.id);
    setTicketNumber(ticket.ticketNumber);
    setDepartureDate(ticket.departureDate.split("T")[0]);
    setArrivalDate(ticket.arrivalDate.split("T")[0]);
    setDepartureTime(ticket.departureTime);
    setArrivalTime(ticket.arrivalTime);
    setFlightFrom({
      value: ticket.from.id,
      label: ticket.from.city,
    });
    setFlightTo({
      value: ticket.to.id,
      label: ticket.to.city,
    });
    setAirplaneNames({
      value: ticket.Airplane.id,
      label: ticket.Airplane.airplaneName,
    });
    setPrice(ticket.price);
    setTicketType({
      value: ticket.ticketType,
      label: ticket.ticketType
    });
    setTotalTransit(ticket.totalTransit);
    setTransitDuration(ticket.transitDuration);
    setFlightDuration(ticket.flightDuration);
    setArrivalTimeTransit(ticket.arrivalTimeAtTransit);
    setDepartureTimeFromTransit(ticket.departureTimeFromTransit);
    setTransitPoint({
      value: ticket.transitPoint,
      label: ticket.transit.airportName
    });
  };
  return (
    <div className="data-ticket">
      <Container>
        <Link to="/admin/ticket/new" style={{ textDecoration: "none" }}>
          <Button className="btn-primary mb-3" type="submit" value="Submit">
            Tambahkan Tiket Perjalanan
          </Button>
        </Link>
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

        {/* ============= Update Data Ticket ============= */}
        <Modal show={show} onHide={handleClose} scrollable={true}>
          <Modal.Header>
            <Modal.Title>
              Mengubah Data Tiket Perjalanan
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
                    options={tipeTicket}
                    onChange={(e) => setTicketType(e.value)}
                    value={typeTicket}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Tanggal Kedatangan</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    onChange={(e) => setArrivalDate(e.target.value)}
                    value={arrDate}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Tanggal Kepulangan</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    onChange={(e) => setDepartureDate(e.target.value)}
                    value={depDate}
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
                    options={datAirport}
                    onChange={(e) => setFlightFrom(e.value)}
                    defaultValue={frcity}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Terbang Ke</Form.Label>
                  <Select
                    options={datAirport}
                    onChange={(e) => setFlightTo(e.value)}
                    defaultValue={tcity}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Nama Pesawat</Form.Label>
                  <Select
                    required
                    options={datAirPlane}
                    onChange={(e) => setAirplaneNames(e.value)}
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
                    options={airportName}
                    onChange={(e) => setTransitPoint(e.value)}
                    defaultValue={PointTransit}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Durasi Transit</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="8 jam 15 menit"
                    onChange={(e) => setTransitDuration(e.target.value)}
                    value={tranduration}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Waktu Kedatangan di Titik Transit</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="10:14"
                    onChange={(e) => setArrivalTimeTransit(e.target.value)}
                    value={arrtimetransit}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Waktu Kepergian dari Titik Transit</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="10:14"
                    onChange={(e) => setDepartureTimeFromTransit(e.target.value)}
                    value={deptimetransit}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Durasi Penerbangan</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    // placeholder="3 jam 5 menit"
                    onChange={(e) => setFlightDuration(e.target.value)}
                    value={flightduration}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Harga</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="8000000"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  />
                </Form.Group>
              </Container>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Simpan Perubahan
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default DataTicket;
