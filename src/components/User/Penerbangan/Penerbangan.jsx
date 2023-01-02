import React, { useReducer } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import NavigationBar from "../../Navbar/NavigationBar";
import FormSearch from "../SearchTicket/FormSearch";
import DetailPenerbangan from "./DetailPenerbangan";
import { useSelector } from "react-redux";
import { initialState, penumpangReducer } from "../../../store/reducers/penumpang";
import "./Penerbangan.scss";

function Penerbangan() {
  const { tiketBerangkat, tiketPulang, penumpang } = useSelector((state) => state.ticketReducer);
  const [dispatch] = useReducer(penumpangReducer, initialState);
  // console.log(tiketBerangkat, tiketPulang, penumpang);
  return (
    <>
      <NavigationBar />
      <Container fluid className="section--form pt-5">
        <div className="pt-5 pb-3">
          <FormSearch dispatchs={dispatch} />
        </div>
      </Container>
      <Container fluid className="section--body pt-4 pb-4 penerbangan">
        <Row>
          <Col md="12">
            <h3>Pilihan Penerbangan</h3>
            {tiketBerangkat &&
              tiketBerangkat?.map((item, i) => (
                <div key={i} className="bg-white p-3 mb-3 rounded">
                  <DetailPenerbangan detail={item} state={penumpang.penumpang} tiketPulang={tiketPulang ? tiketPulang[i] : null} />
                </div>
              ))}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Penerbangan;