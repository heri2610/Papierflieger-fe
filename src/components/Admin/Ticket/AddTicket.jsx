import React from "react";
import {
  Form, Container, Button, Col, Row } from "react-bootstrap";
import Select from "react-select";
import "../Admin.scss"

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

const AddAirport = () => {
  return (
      <div className="add-ticket">
      <div className="container-ticket">
        <Form className="add">
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
  )
}

export default AddAirport