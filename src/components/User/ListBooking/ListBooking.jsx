import React, { useEffect } from "react";
import { Container, Row, Col, Accordion, Badge } from "react-bootstrap";
import Arrow from "../../../assets/images/Vector.svg";
import logocard from "../../../assets/images/Logo-card.svg";
import { getHistory } from "../../../store/actions/history";
import { useSelector, useDispatch } from "react-redux";
import "./ListBooking.scss";

const ListBooking = () => {
  const { data } = useSelector(state => state.historyReducer);
  const dispatch = useDispatch();
  const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };

  useEffect(() => {
    dispatch(getHistory());
  }, [dispatch]);
  // console.log(data);
  return (
    <div className="img-banner">
      <div className="container">
        <h4 className="my-2 mx-3 mb-3 fw-bold">Riwayat Transaksi</h4>
        {data.ticket && data.ticket.map((item, index) =>
          <Container key={index} fluid className="pb-4 list-booking mb-2">
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
                                  <strong>{item.from.cityCode}</strong>
                                </h3>
                                <img src={Arrow} alt="arrow" className="mx-3" />
                                <h3>
                                  <strong>{item.to.cityCode}</strong>
                                </h3>
                              </div>
                              <h5>{new Date(item.departureDate).toLocaleDateString('id-ID', options)}</h5>
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
                                  data-date={`${item.departureTime.split(':')[0]}:${item.departureTime.split(':')[1]}`}
                                  data-day="16 Desember"
                                >
                                  <h2>{item.from.city.split(',')[0]}</h2>
                                  <p>
                                    {item.from.airportName} {`(${item.from.cityCode})`}
                                  </p>
                                </li>
                                <li
                                  className="event"
                                  data-date={`${item.arrivalTime.split(':')[0]}:${item.arrivalTime.split(':')[1]}`}
                                  data-day="16 Desember"
                                >
                                  <h2>{item.to.city.split(',')[0]}</h2>
                                  <p>
                                    {item.to.airportName} {`(${item.to.cityCode})`}
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Col>
                    <h3
                      className="position-absolute w-auto"
                      style={{ right: 0, "zIndex": 10 }}
                    >
                      <Badge bg="info text-primary">Sukses</Badge>
                    </h3>
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
