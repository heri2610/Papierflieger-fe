import React,{useEffect, useState} from "react";
import { Container, Row, Col, Accordion, Badge } from "react-bootstrap";
import Arrow from "../../../assets/images/Vector.svg";
import logocard from "../../../assets/images/Logo-card.svg";
import {getHistory} from "../../../store/actions/history";
import {useSelector,useDispatch} from "react-redux";
import "./ListBooking.scss";

const ListBooking = () => {
  const {data} = useSelector(state=>state.historyReducer)
  const dispatch = useDispatch()
  const [history,setHistory] = useState([])
  useEffect(()=>{
    dispatch(getHistory())
  },[dispatch])
 console.log(data)
  return (
    <div className="img-banner">
      <div className="container">
        <h4 className="my-2 mx-3 mb-3 fw-bold">Riwayat Transaksi</h4>
        {data.ticket && data.ticket.map((item,index)=><Container fluid className="pb-4 list-booking mb-2">
          <Row>
            <Col md="12">
              <div className="bg-white p-3 rounded">
                <Row className="position-relative">
                  <Col>
                    <Accordion>
                      <Accordion.Item eventKey={index} className="border border-0">
                        <Accordion.Header>
                          <Col md={3} lg={2}>
                            <img
                              src={logocard}
                              className="img-fluid logo-card"
                              alt="logo-card"
                            />
                          </Col>
                          <Col className=" mt-3 mt-md-0">
                            <h5>Penerbangan</h5>
                            <div className="hstack">
                              <h3>
                                <strong>Banda Aceh</strong>
                              </h3>
                              <img src={Arrow} alt="arrow" className="mx-3" />
                              <h3>
                                <strong>Jakarta</strong>
                              </h3>
                            </div>
                            <h5>Selasa, 10 Januari 2022</h5>
                          </Col>
                          <h5 className="d-inline mt-3 mt-md-0 ms-auto me-3 mb-0">
                            Pratinjau Rincian
                          </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div id="timeline-content" className="border-bottom">
                            <ul className="timeline">
                              <li
                                className="event"
                                data-date="08.00"
                                data-day="16 Desember"
                              >
                                <h2>Jakarta</h2>
                                <p>
                                  Soekarno Hatta International Airport (CGK)
                                </p>
                                <p>
                                  Armada : PapierFlieger, Boeing 737
                                  <br />
                                  Durasi Tebang : 3 jam 40 menit
                                </p>
                              </li>
                              <li
                                className="event"
                                data-date="08.00"
                                data-day="16 Desember"
                              >
                                <h2>Jakarta</h2>
                                <p>
                                  Soekarno Hatta International Airport (CGK)
                                </p>
                                <p>
                                  Armada : PapierFlieger, Boeing 737
                                  <br />
                                  Durasi Tebang : 3 jam 40 menit
                                </p>
                              </li>
                              <li
                                className="event"
                                data-date="08.00"
                                data-day="16 Desember"
                              >
                                <h2>Jakarta</h2>
                                <p>
                                  Soekarno Hatta International Airport (CGK)
                                </p>
                                <p>
                                  Armada : PapierFlieger, Boeing 737
                                  <br />
                                  Durasi Tebang : 3 jam 40 menit
                                </p>
                              </li>
                            </ul>
                          </div>
                          <Row>
                            <Col>
                              <h5>Komplementer Bagasi</h5>
                              <p>
                                Harga tiket sudah termasuk beban bagasi
                                per-orang dengan rincian beban sebagasi berikut
                                :
                              </p>
                              <h5 style={{ paddingTop: 0 }}>
                                <i className="bi bi-file-zip-fill"></i>{" "}
                                Tas/Koper 7 kg x 1
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
            </Col>
          </Row>
        </Container>)}
      </div>
    </div>
  );
};
export default ListBooking;
