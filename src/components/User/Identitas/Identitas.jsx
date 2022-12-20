import React from "react";
import { Row, Col, Button, Badge, Container, Form, Accordion, } from "react-bootstrap";
import logocard from "../../../assets/images/Logo-card.svg";
import Arrow from "../../../assets/images/Vector.svg";
import Footer from "../../Footer/Footer";
import NavigationBar from "../../Navbar/NavigationBar";
import "./Identitas.scss";

function Identitas() {
  return (
    <>
      <NavigationBar />
      <Container fluid className="bg-info">
        <Container>
          <Row className="pt-5 justify-content-center">
            <Col className="bg-white p-3 mt-5 mb-5 rounded col-9">
              <div>
                <h3>Pemberitahuan Identitas</h3>
                <p>Pastikan nama penumpang sama persis dengan yang tertulis di KTP. <span className="text-danger">Hindari kesalahan apa pun</span>, karena maskapai penerbangan tidak mengizinkan koreksi nama setelah pemesanan.</p>
                <p>Pastikan identitas Anda <span className="text-danger">berlaku setidaknya 2 minggu setelah tanggal keberangkatan</span></p>
              </div>
            </Col>
          </Row>
        </Container>
        <Row className="px-3">
          <Col className="bg__bluish p-3 mb-5 rounded">
            <Row >
              <Col md={7}>
                <div className="bg-white p-4 rounded mx-md-5 my-md-2">
                  <Row className="border-bottom py-3">
                    <Col md={3} lg={2} >
                      <img src={logocard} className="img-fluid logo-card" alt="logo-card" />
                    </Col>
                    <Col className=" mt-3 mt-md-0">
                      <h5>Penerbangan</h5>
                      <div className="hstack">
                        <h5><strong>Tokyo</strong></h5>
                        <img src={Arrow} alt="arrow" className="mx-3" />
                        <h5><strong>Jakarta</strong></h5></div>
                      <h5>Selasa, 10 Januari 2022</h5>
                    </Col>
                  </Row>
                  {/* Badges  */}
                  <Row className="py-3">
                    <Col>
                      <h4>
                        <Badge className="bg-info text-primary ">Ekonomi</Badge>
                      </h4>
                    </Col>
                    <Col>
                      <h4>
                        <Badge className="bg-info text-primary ">Kode Pemesanan: NOV15R</Badge>
                      </h4>
                    </Col>
                  </Row>
                  <Row className="mb-4 border-bottom pb-3">
                    <Col className="position-relative col mb-3 mb-lg-0">
                      <h5 className="text-muted">Keberangkatan</h5>
                      <h2>11.00</h2>
                      <h5>NRT</h5>
                      <img src={Arrow} alt="arrow" className="position-absolute top-50 end-15" />
                    </Col>
                    <Col>
                      <h5 className="text-muted">Pendaratan</h5>
                      <h2>19.00</h2>
                      <h5>CGK</h5>
                    </Col>
                    <Col>
                      <h5 className="text-muted">Durasi Perjalanan</h5>
                      <h2>8 Jam</h2>
                    </Col>
                    <Col>
                      <h5 className="text-muted">Lama Perhentian</h5>
                      <h2>-</h2>
                    </Col>
                  </Row>
                  <Row className="">
                    <div id="timeline-content" className="border-bottom ps-3">
                      <ul className="timeline">
                        <li className="event" data-date="11:00" data-day="16 Desember">
                          <h3>Tokyo</h3>
                          <p>Narita International Airport (NRT)</p>
                          <p>Armada: PapierFlieger, Boeing 737<br />Durasi Terbang: 8 jam</p>
                        </li>
                        <li className="event" data-date="19:00" data-day="16 Desember">
                          <h3>Jakarta</h3>
                          <p>Soekarno Hatta International Airport (CGK)</p>
                        </li>
                      </ul>
                    </div>
                  </Row>
                  <Row className="">
                    <Col>
                      <h5 className="p-0">Komplementer Bagasi</h5>
                      <p>Harga tiket sudah termasuk beban bagasi per-orang dengan rincian beban sebagasi berikut :</p>
                      <h5 style={{ paddingTop: 0 }}><i className="bi bi-file-zip-fill"></i> Tas/Koper 7 kg x 1</h5>
                      <p className="text-primary"><strong>Tas/Koper yang diperiksa</strong></p>
                    </Col>
                  </Row>
                </div>
              </Col>
              {/* Detail Passenger */}
              <Col className="mt-5 mx-3 mb-5 rounded text-white">
                <h2 className="mb-3 fw-bold">Pengisian Identitas Penumpang</h2>
                <Form>
                  <Accordion>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Penumpang 1</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Sapaan</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option value="1">Bapak</option>
                              <option value="2">Ibu</option>
                            </Form.Select>
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Nama Depan</Form.Label>
                            <Form.Control placeholder="First name" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Nama Belakang</Form.Label>
                            <Form.Control placeholder="Last name" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Tanggal Lahir</Form.Label>
                            <input type="date" className="form-control" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Nomor Identitas Passport</Form.Label>
                            <Form.Control placeholder="Nomor Identitas Passport" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Kebangsaan</Form.Label>
                            <Form.Control placeholder="Nomor Identitas Passport" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Masa Berlaku Passport</Form.Label>
                            <input type="date" className="form-control" />
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Penumpang 2</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Sapaan</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option value="1">Bapak</option>
                              <option value="2">Ibu</option>
                            </Form.Select>
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Nama Depan</Form.Label>
                            <Form.Control placeholder="First name" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Nama Belakang</Form.Label>
                            <Form.Control placeholder="Last name" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Tanggal Lahir</Form.Label>
                            <input type="date" className="form-control" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Nomor Identitas Passport</Form.Label>
                            <Form.Control placeholder="Nomor Identitas Passport" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Kebangsaan</Form.Label>
                            <Form.Control placeholder="Nomor Identitas Passport" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Masa Berlaku Passport</Form.Label>
                            <input type="date" className="form-control" />
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Penumpang 3</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Sapaan</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option value="1">Bapak</option>
                              <option value="2">Ibu</option>
                            </Form.Select>
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Nama Depan</Form.Label>
                            <Form.Control placeholder="First name" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Nama Belakang</Form.Label>
                            <Form.Control placeholder="Last name" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Tanggal Lahir</Form.Label>
                            <input type="date" className="form-control" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Nomor Identitas Passport</Form.Label>
                            <Form.Control placeholder="Nomor Identitas Passport" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Kebangsaan</Form.Label>
                            <Form.Control placeholder="Nomor Identitas Passport" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Masa Berlaku Passport</Form.Label>
                            <input type="date" className="form-control" />
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Penumpang 4</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Sapaan</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option value="1">Bapak</option>
                              <option value="2">Ibu</option>
                            </Form.Select>
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Nama Depan</Form.Label>
                            <Form.Control placeholder="First name" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Nama Belakang</Form.Label>
                            <Form.Control placeholder="Last name" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Tanggal Lahir</Form.Label>
                            <input type="date" className="form-control" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Nomor Identitas Passport</Form.Label>
                            <Form.Control placeholder="Nomor Identitas Passport" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Kebangsaan</Form.Label>
                            <Form.Control placeholder="Nomor Identitas Passport" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Masa Berlaku Passport</Form.Label>
                            <input type="date" className="form-control" />
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>Penumpang 5</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Sapaan</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option value="1">Bapak</option>
                              <option value="2">Ibu</option>
                            </Form.Select>
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Nama Depan</Form.Label>
                            <Form.Control placeholder="First name" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Nama Belakang</Form.Label>
                            <Form.Control placeholder="Last name" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Tanggal Lahir</Form.Label>
                            <input type="date" className="form-control" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Nomor Identitas Passport</Form.Label>
                            <Form.Control placeholder="Nomor Identitas Passport" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Kebangsaan</Form.Label>
                            <Form.Control placeholder="Nomor Identitas Passport" />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Masa Berlaku Passport</Form.Label>
                            <input type="date" className="form-control" />
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Button className="float-end mt-3" type="submit">
                    <p className="mb-0 fs-5">Submit</p>
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Identitas;