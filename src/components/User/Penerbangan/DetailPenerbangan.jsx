import React from "react";
import { Row, Col, Badge, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import Arrow from "./Vector.svg";
import "./DetailPenerbangan.scss";

export default function DetailPenerbangan({ kelas, kode, harga, keberangkatan, pendaratan, durasi, istransit, transit }) {
  return <>
    <div className="detail-penerbangan">
      <Row className="row-cols-1 row-cols-md-3">
        <Col md="2">
          <h3>
            <Badge className="bg-info text-primary w-100">Ekonomi</Badge>
          </h3>
        </Col>
        <Col>
          <h3>
            <Badge bg="info" className="text-primary w-100">Kode Pemesanan:APR22L</Badge>
          </h3>
        </Col>
        <Col>
          <h3 className="text-end m-0">
            Rp. 2.678.000
          </h3><span className="text-end d-block">/orang</span>
        </Col>
      </Row>
      <Row className="my-4 border-bottom border-dark pb-3">
        <Col className="position-relative col mb-3 mb-lg-0">
          <h4 className="text-muted">Keberangkatan</h4>
          <h1>07.00</h1>
          <h4>CGK</h4>
          <img src={Arrow} alt="arrow" className="position-absolute top-50 end-15" />
        </Col>
        <Col>
          <h4 className="text-muted">Pendaratan</h4>
          <h1>15.00</h1>
          <h4>SIN</h4>
        </Col>
        <Col>
          <h4 className="text-muted">Durasi Perjalanan</h4>
          <h1>7 Jam</h1>
        </Col>
        <Col>
          <h4 className="text-muted">Lama Perhentian</h4>
          <h1>1 Jam</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Accordion>
            <Accordion.Item eventKey="0" className="border border-0">
              <Accordion.Header>
                <Link to="/detail" className="btn btn-primary">
                  <h4 className="m-0">Pesan</h4>
                </Link>
                <h4 className="d-inline ms-auto me-3 mb-0">Pratinjau Rincian</h4>
              </Accordion.Header>
              <Accordion.Body>
                <div id="timeline-content" className="border-bottom">
                  <ul className="timeline">
                    <li className="event" data-date="08.00" data-day="16 Desember">
                      <h2>Jakarta</h2>
                      <p>Soekarno Hatta International Airport (CGK)</p>
                      <p>Armada : PapierFlieger, Boeing 737<br />Durasi Tebang : 3 jam 40 menit</p>
                    </li>
                    <li className="event" data-date="08.00" data-day="16 Desember">
                      <h2>Jakarta</h2>
                      <p>Soekarno Hatta International Airport (CGK)</p>
                      <p>Armada : PapierFlieger, Boeing 737<br />Durasi Tebang : 3 jam 40 menit</p>
                    </li>
                    <li className="event" data-date="08.00" data-day="16 Desember">
                      <h2>Jakarta</h2>
                      <p>Soekarno Hatta International Airport (CGK)</p>
                      <p>Armada : PapierFlieger, Boeing 737<br />Durasi Tebang : 3 jam 40 menit</p>
                    </li>
                  </ul>
                </div>
                <Row>
                  <Col>
                    <h5>Komplementer Bagasi</h5>
                    <p>Harga tiket sudah termasuk beban bagasi per-orang dengan rincian beban sebagasi berikut :</p>
                    <h5 style={{ paddingTop: 0 }}><i className="bi bi-file-zip-fill"></i> Tas/Koper 7 kg x 1</h5>
                    <p className="text-primary"><strong>Tas/Koper yang diperiksa</strong></p>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </div>
  </>;
}