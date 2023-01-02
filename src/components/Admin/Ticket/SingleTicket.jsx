import React from "react";
import {Card, Form, Container, Row, Col} from "react-bootstrap";
import Select from "react-select";

const SingleTicket = () => {
  return (
    <div>
        <Card>
            <Card.Body>
                <Form>
                    <Container>
                        <Row>
                            <Col>
                            <Form.Group>
                                <Form.Label>Nomor Tiket</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="19250101"
                                    // onChange={(e) => setTicketNumber(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Tanggal Kedatangan</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    placeholder="10/01/2022"
                    // onChange={(e) => setArrivalDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Waktu Kedatangan</Form.Label>
                  <Form.Control
                    required
                    type="time"
                    placeholder="15:20"
                    // onChange={(e) => setDepartureTime(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Terbang Dari</Form.Label>
                  <Select
                    // options={datAirport}
                    placeholder="Bandung"
                    // onChange={(e) => setFlightFrom(e.value)} 
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Nama Pesawat</Form.Label>
                  <Select
                    required
                    placeholder="Boeing AF-3865"
                    // options={datAirPlane}
                    // onChange={(e) => setAirplaneNames(e.value)} 
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Bandara Transit</Form.Label>
                  <Select
                    // options={airportName}
                    placeholder="Soekarno Hatta International Airport"
                    // onChange={(e) => setTransitPoint(e.value)} 
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Waktu Kedatangan di Titik Transit</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="10:14"
                    // onChange={(e) => setArrivalTimeTransit(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Durasi Penerbangan</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="3 jam 5 menit"
                    // onChange={(e) => setFlightDuration(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Tipe Tiket</Form.Label>
                  <Select
                    // options={typeTicket}
                    placeholder="Internasional"
                    // onChange={(e) => setTicketType(e.value)} 
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Tanggal Kepulangan</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    placeholder="12/01/2022"
                    // onChange={(e) => setDepartureDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Waktu Kepulangan</Form.Label>
                  <Form.Control
                    required
                    type="time"
                    placeholder="16:05"
                    // onChange={(e) => setArrivalTime(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Terbang Ke</Form.Label>
                  <Select
                    // options={datAirport}
                    placeholder="Brisbane, Australia"
                    // onChange={(e) => setFlightTo(e.value)} 
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Total Transit</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="1"
                    // onChange={(e) => setTotalTransit(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Durasi Transit</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="8 jam 15 menit"
                    // onChange={(e) => setTransitDuration(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Waktu Kepergian dari Titik Transit</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="10:14"
                    // onChange={(e) => setDepartureTimeFromTransit(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>Harga</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="8000000"
                    // onChange={(e) => setPrice(e.target.value)}
                  />
                </Form.Group>
                </Col>
                        </Row>
                    </Container>
                </Form>
            </Card.Body>
        </Card>
    </div>
  )
}

export default SingleTicket