import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import logocard from "../../../assets/images/Logo-card.svg";
import Arrow from "../../../assets/images/Vector.svg";
import "./DetailTicket.scss";

function ItineraryTicket(props) {
  const {ticket} = props
  const dateString = ticket.departureDate
const date = new Date(dateString)
const options = { year: 'numeric', month: 'long', day: 'numeric',weekday:'long' }
const humanReadableDate = date.toLocaleDateString('id-ID', options)
const formatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR'
});
  return <>
    <div className='bg-white p-4 rounded mx-md-5 my-md-2'>
      <Row className="border-bottom py-3">
        <Col md={3} lg={2} >
          <img src={logocard} className="img-fluid logo-card" alt="logo-card" />
        </Col>
        <Col className=" mt-3 mt-md-0">
          <h3>Penerbangan</h3>
          <div className="hstack">
            <h3><strong>{ticket.from.city.split(',')[0]}</strong></h3>
            <img src={Arrow} alt="arrow" className="mx-3" />
            <h3><strong>{ticket.to.city.split(',')[0]}</strong></h3></div>
          <h3>{humanReadableDate}</h3>
        </Col>
      </Row>
      {/* Badges  */}
      <Row className="py-3">
        <Col md={2}><h3>
          <Badge className="bg-info text-primary ">{ticket.ticketNumber}</Badge>
        </h3></Col>
        <Col md={10}><h3>
          <Badge className="bg-info text-primary float-end">{formatter.format(ticket.price)}/orang</Badge>
        </h3></Col>
      </Row>
      <Row className="mb-4 border-bottom pb-3">
        <Col className="position-relative col mb-3 mb-lg-0">
          <h4 className="text-muted">Keberangkatan</h4>
          <h1>{`${ticket.departureTime.split(":")[0]}:${ticket.departureTime.split(":")[1]}`}</h1>
          <h4>{ticket.from.cityCode}</h4>
          <img src={Arrow} alt="arrow" className="position-absolute top-50 end-15" />
        </Col>
        <Col>
          <h4 className="text-muted">Pendaratan</h4>
          <h1>{`${ticket.arrivalTime.split(':')[0]}:${ticket.arrivalTime.split(':')[1]}`}</h1>
          <h4>{ticket.to.cityCode}</h4>
        </Col>
        <Col>
          <h4 className="text-muted">Durasi Perjalanan</h4>
          <h1>{ticket.flightDuration}</h1>
        </Col>
        <Col>
          <h4 className="text-muted">Lama Perhentian</h4>
          <h1>{ticket.transitDuration}</h1>
        </Col>
      </Row>
      <Row className="">
        <div id="timeline-content" className="border-bottom ps-3">
          <ul className="timeline">
            <li className="event" data-date={`${ticket.departureTime.split(':')[0]}:${ticket.departureTime.split(':')[1]}`} data-day="16 Desember">
              <h2>{ticket.from.city.split(',')[0]}</h2>
              <h4>{ticket.from.airportName}{`(${ticket.from.cityCode})`}</h4>
              <h4>Armada : {ticket.Airplane.airplaneName}</h4>
            </li>
            {ticket.totalTransit >= 1 && <li className="event" data-date={`${ticket.arrivalTimeAtTransit.split(":")[0]}:${ticket.arrivalTimeAtTransit.split(":")[1]}`} data-day="16 Desember">
                        <h2>{ticket.transit.city.split(',')[0]}</h2>
                        <p>{ticket.transit.airportName} {`(${ticket.transit.cityCode})`}</p>
                        <p>
                          Armada : {ticket.Airplane.airplaneName}
                        </p>
                      </li>}
            <li className="event" data-date={`${ticket.arrivalTime.split(':')[0]}:${ticket.arrivalTime.split(':')[1]}`} data-day="16 Desember">
              <h2>{ticket.to.city.split(',')[0]}</h2>
              <h4>{ticket.to.airportName} {`(${ticket.to.cityCode})`}</h4>
              <h4>Armada : {ticket.Airplane.airplaneName}</h4>
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