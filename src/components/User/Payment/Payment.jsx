import React, { useState } from "react";
import { Row, Col, Button, Container, Form, Collapse } from "react-bootstrap";
import logocard from "../../../assets/images/Logo-card.svg";
import Arrow from "../../../assets/images/Vector.svg";
import Footer from "../../Footer/Footer";
import NavigationBar from "../../Navbar/NavigationBar";

import "./payment.scss";

function Payment() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavigationBar />
      <Container fluid className="bg-info pb-5">
        <Container>
          <Row className="pt-5">
            <h3 className="mt-5 fw-bold">Tiket</h3>
            <Col className="bg-white p-3 mt-2 mb-4 rounded-4">
              <div className="d-flex align-items-center">
                <div className="w-25 me-2 d-flex justify-content-center">
                  <img src={logocard} className="img-fluid" alt="logo-card" />
                </div>
                <div className="ms-3 ms-md-0 tiket-bayar">
                  <h4>Penerbangan</h4>
                  <div className="hstack">
                    <h4><strong>Banda Aceh</strong></h4>
                    <img src={Arrow} alt="arrow" className="mx-3" />
                    <h4><strong>Jakarta</strong></h4>
                  </div>
                  <h4>Selasa 10 Januari 2022</h4>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-2">
            <h3 className="fw-bold">Detail Pembayaran</h3>
            <Col className="bg-white p-3 px-5 mt-2 mb-4 rounded-4">
              <div className="d-flex justify-content-between bayar">
                <div>
                  <p className="mb-2">Harga Tiket x5</p>
                  <p className="fw-semibold mb-0">Total Harga</p>
                </div>
                <div>
                  <p className="mb-2">IDR 1.000.000</p>
                  <p className="fw-semibold mb-0">IDR 5.000.000</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-2">
            <h3 className="fw-bold">Metode Pembayaran</h3>
            <Col className="bg-white p-3 mt-2 mb-4 rounded-4">
              <Button variant="light" className="w-100 d-flex justify-content-between" onClick={() => setOpen(!open)}>
                <h4>Bank BCA</h4>
                <h3><i className="bi bi-caret-down-fill"></i></h3>
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  <Form className="px-3">
                    <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        <h5>Nama</h5>
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Masukkan nama pemilik rekening" />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        <h5>No. Rekening</h5>
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Masukkan nomor rekening" />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        <h5>Jumlah</h5>
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Masukkan nominal" />
                      </Col>
                    </Form.Group>
                    <Button className="float-end mt-3" style={{ width: "10rem" }}>
                      <h5 className="m-0">Bayar</h5>
                    </Button>
                  </Form>
                </div>
              </Collapse>
            </Col>
          </Row>
        </Container>
      </Container >
      <Footer />
    </>
  );
}

export default Payment;
