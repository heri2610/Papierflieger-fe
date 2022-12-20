import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import logocard from "../../../assets/images/Logo-card.svg";
import Arrow from "../../../assets/images/Vector.svg";
import "./DetailTicket.scss";

function ItineraryTicket() {
  return <>
    <div className='bg-white p-4 rounded mx-md-5 my-md-2'>
      <Row className="border-bottom py-3">
        <Col md={3} lg={2} >
          <img src={logocard} className="img-fluid logo-card" alt="logo-card" />
        </Col>
        <Col className=" mt-3 mt-md-0">
          <h3>Penerbangan</h3>
          <div className="hstack">
            <h3><strong>Banda Aceh</strong></h3>
            <img src={Arrow} alt="arrow" className="mx-3" />
            <h3><strong>Jakarta</strong></h3></div>
          <h3>Selasa, 10 Januari 2022</h3>
        </Col>
      </Row>
      {/* Badges  */}
      <Row className="py-3">
        <Col md={2}><h3>
          <Badge className="bg-info text-primary ">Ekonomi</Badge>
        </h3></Col>
        <Col md={2}><h3>
          <Badge className="bg-info text-primary ">Kode Pemesanan:NOV15R</Badge>
        </h3></Col>
      </Row>
      <Row className="mb-4 border-bottom pb-3">
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
      <Row className="">
        <div id="timeline-content" className="border-bottom ps-3">
          <ul className="timeline">
            <li className="event" data-date="08.00" data-day="16 Desember">
              <h2>Jakarta</h2>
              <h4>Soekarno Hatta International Airport (CGK)</h4>
              <h4>Armada : PapierFlieger, Boeing 737<br />Durasi Tebang : 3 jam 40 menit</h4>
            </li>
            <li className="event" data-date="08.00" data-day="16 Desember">
              <h2>Jakarta</h2>
              <h4>Soekarno Hatta International Airport (CGK)</h4>
              <h4>Armada : PapierFlieger, Boeing 737<br />Durasi Tebang : 3 jam 40 menit</h4>
            </li>
            <li className="event" data-date="08.00" data-day="16 Desember">
              <h2>Jakarta</h2>
              <h4>Soekarno Hatta International Airport (CGK)</h4>
              <h4>Armada : PapierFlieger, Boeing 737<br />Durasi Tebang : 3 jam 40 menit</h4>
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
  </>;
}

export default ItineraryTicket;