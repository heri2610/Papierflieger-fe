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
  // const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  });

  useEffect(() => {
    dispatch(getHistory());
  }, [dispatch]);
  // console.log(data);
  return (
    <div className="img-banner">
      <div className="container">
        <h4 className="my-2 mx-3 mb-3 fw-bold">Riwayat Transaksi</h4>
        {data.transaction && data.transaction.map((item, index) =>
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
                                  <strong>{item.trip}</strong>
                                </h3>
                                <img src={Arrow} alt="arrow" className="mx-3" />
                                <h3>
                                  <strong>{formatter.format(item.totalPrice)}</strong>
                                </h3>
                              </div>
                              <h5>Pembayaran: {new Date(item.createdAt).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}</h5>
                            </Col>
                            <h5 className="d-inline mt-3 mt-md-0 ms-auto me-3 mb-0">
                              Pratinjau Rincian
                            </h5>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div id="timeline-content" className="border-bottom">
                              <ul className="timeline">
                                {item.orderId.map((penumpang, index) =>
                                  <li key={index} className="event">
                                    <h4>
                                      Data Penumpang (id): {penumpang}
                                    </h4>
                                  </li>
                                )}
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
