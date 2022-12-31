import React,{useState} from "react";
import { Row, Col, Badge, Accordion, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {getTicketDetail} from "../../../store/actions/ticket"
import Arrow from "./Vector.svg";
import "./DetailPenerbangan.scss";

export default function DetailPenerbangan({ detail,state,tiketPulang }) {
  console.log(state,tiketPulang)
  const[choosen,setChoosen]=useState({})
  const dispatch = useDispatch();
const {ticketNumber, departureDate, departureTime, arrivalDate,arrivalTime, flightFrom,flightTo, airplaneId, price, totalTransit, transitPoint, transitDuration,ticketType,flightDuration,arrivalTimeAtTransit,departureTimeFromTransit,from,to,transit,Airplane } = detail;
const formatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR'
});

const history = useNavigate();

const handleNavigate = async()=>{
  dispatch(getTicketDetail(detail,state,history))
}
  return (
    <>
      <div className="detail-penerbangan">
        <Row className="row-cols-1 row-cols-md-2">
          <Col>
            <h3>
              <Badge bg="info" className="text-primary w-50">
                {ticketNumber}
              </Badge>
            </h3>
          </Col>
          <Col>
            <h3 className="text-end m-0">{`${formatter.format(price)}/orang`}</h3>
          </Col>
        </Row>
        <Row className="row-cols-2 row-cols-md-4 my-4 border-bottom border-dark pb-3">
          <Col className="position-relative col mb-3 mb-lg-0">
            <h4 className="text-muted">Keberangkatan</h4>
            <h3>{`${departureTime.split(":")[0]}:${departureTime.split(":")[1]}`}</h3>
            <h3>{from.cityCode}</h3>
            <img src={Arrow} alt="arrow" className="position-absolute top-50 end-15" />
          </Col>
          <Col>
            <h4 className="text-muted">Pendaratan</h4>
            <h3>{`${arrivalTime.split(':')[0]}:${arrivalTime.split(':')[1]}`}</h3>
            <h3>{to.cityCode}</h3>
          </Col>
          <Col>
            <h4 className="text-muted">Durasi Perjalanan</h4>
            <h3>{flightDuration}</h3>
          </Col>
          <Col>
            <h4 className="text-muted">Lama Perhentian</h4>
            <h3>{transitDuration}</h3>
          </Col>
        </Row>
        {tiketPulang && <><Row className="row-cols-1 row-cols-md-2">
          <Col>
            <h3>
              <Badge bg="info" className="text-primary w-50">
                {tiketPulang.ticketNumber}
              </Badge>
            </h3>
          </Col>
          <Col>
            <h3 className="text-end m-0">{`${formatter.format(tiketPulang.price)}/orang`}</h3>
          </Col>
        </Row>
        <Row className="row-cols-2 row-cols-md-4 my-4 border-bottom border-dark pb-3">
          <Col className="position-relative col mb-3 mb-lg-0">
            <h4 className="text-muted">Keberangkatan</h4>
            <h3>{`${tiketPulang.departureTime.split(":")[0]}:${tiketPulang.departureTime.split(":")[1]}`}</h3>
            <h3>{tiketPulang.from.cityCode}</h3>
            <img src={Arrow} alt="arrow" className="position-absolute top-50 end-15" />
          </Col>
          <Col>
            <h4 className="text-muted">Pendaratan</h4>
            <h3>{`${tiketPulang.arrivalTime.split(':')[0]}:${tiketPulang.arrivalTime.split(':')[1]}`}</h3>
            <h3>{tiketPulang.to.cityCode}</h3>
          </Col>
          <Col>
            <h4 className="text-muted">Durasi Perjalanan</h4>
            <h3>{tiketPulang.flightDuration}</h3>
          </Col>
          <Col>
            <h4 className="text-muted">Lama Perhentian</h4>
            <h3>{tiketPulang.transitDuration}</h3>
          </Col>
        </Row></>}
        <Row>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0" className="border border-0">
                <Accordion.Header>
                  <Button variant="primary" className="btn btn-primary" onClick={handleNavigate}>
                    <h4 className="m-0">Pesan</h4>
                  </Button>
                  <h4 className="d-inline ms-auto me-3 mb-0">Pratinjau Rincian</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                  <div id="timeline-content" className="border-bottom">
                    <ul className="timeline">
                      <li className="event" data-date={`${departureTime.split(':')[0]}:${departureTime.split(':')[1]}`} data-day="16 Desember">
                        <h2>{from.city.split(',')[0]}</h2>
                        <p>{from.airportName}{`(${from.cityCode})`}</p>
                        <p>
                          Armada : {Airplane.airplaneName}
                        </p>
                      </li>
                     {totalTransit >= 1 && <li className="event" data-date={`${arrivalTimeAtTransit.split(":")[0]}:${arrivalTimeAtTransit.split(":")[1]}`} data-day="16 Desember">
                        <h2>{transit.city.split(',')[0]}</h2>
                        <p>{transit.airportName} {`(${transit.cityCode})`}</p>
                        <p>
                          Armada : {Airplane.airplaneName}
                        </p>
                      </li>}
                      <li className="event" data-date={`${arrivalTime.split(':')[0]}:${arrivalTime.split(':')[1]}`} data-day="16 Desember">
                        <h2>{to.city.split(',')[0]}</h2>
                        <p>{to.airportName} {`(${to.cityCode})`}</p>
                        <p>
                          Armada : {Airplane.airplaneName}
                        
                        </p>
                      </li>
                    </ul>
                  </div>
                  </Col>
                  {tiketPulang&& <Col>
                  <div id="timeline-content" className="border-bottom">
                    <ul className="timeline">
                      <li className="event" data-date={`${tiketPulang.departureTime.split(':')[0]}:${tiketPulang.departureTime.split(':')[1]}`} data-day="16 Desember">
                        <h2>{tiketPulang.from.city.split(',')[0]}</h2>
                        <p>{tiketPulang.from.airportName}{`(${tiketPulang.from.cityCode})`}</p>
                        <p>
                          Armada : {tiketPulang.Airplane.airplaneName}
                        </p>
                      </li>
                     {tiketPulang.totalTransit >= 1 && <li className="event" data-date={`${tiketPulang.arrivalTimeAtTransit.split(":")[0]}:${tiketPulang.arrivalTimeAtTransit.split(":")[1]}`} data-day="16 Desember">
                        <h2>{tiketPulang.transit.city.split(',')[0]}</h2>
                        <p>{tiketPulang.transit.airportName} {`(${tiketPulang.transit.cityCode})`}</p>
                        <p>
                          Armada : {tiketPulang.Airplane.airplaneName}
                        </p>
                      </li>}
                      <li className="event" data-date={`${tiketPulang.arrivalTime.split(':')[0]}:${tiketPulang.arrivalTime.split(':')[1]}`} data-day="16 Desember">
                        <h2>{tiketPulang.to.city.split(',')[0]}</h2>
                        <p>{tiketPulang.to.airportName} {`(${tiketPulang.to.cityCode})`}</p>
                        <p>
                          Armada : {tiketPulang.Airplane.airplaneName}
                        
                        </p>
                      </li>
                    </ul>
                  </div>
                  </Col>}
                  </Row>
                  <Row>
                    <Col>
                      <h5>Komplementer Bagasi</h5>
                      <p>Harga tiket sudah termasuk beban bagasi per-orang dengan rincian beban sebagasi berikut :</p>
                      <h5 style={{ paddingTop: 0 }}>
                        <i className="bi bi-file-zip-fill"></i> Tas/Koper 7 kg x 1
                      </h5>
                      <p className="text-primary">
                        <strong>Tas/Koper yang diperiksa</strong>
                      </p>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </div>
    </>
  );
}