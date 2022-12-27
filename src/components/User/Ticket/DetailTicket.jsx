import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import NavigationBar from "../../Navbar/NavigationBar";
import "./DetailTicket.scss";
import ItineraryTicket from "./ItineraryTicket";
import { useSelector } from "react-redux";

function DetailTicket() {
  const { ticket,penumpang } = useSelector((state) => state.ticketReducer);
  const navigate = useNavigate();
  // console.log(ticket,penumpang)
  return (
    <>
      <NavigationBar />
      <Container fluid className="p-3">
        <div className="pt-5 pb-5">
          <h3 className="mt-5 mb-3 ms-md-5"><strong>Rincian Tiket</strong></h3>
          <div>
            <ItineraryTicket ticket={ticket} penumpang={penumpang.penumpang} />
          </div>
          <div className="px-md-5 mt-4 d-flex flex-column align-items-end">
            <p className="mb-4 fs-4">Anda harus mengisi dokumen perjalanan terlebih dahulu sebelum melakukan transaksi</p>
              <Button onClick={()=>navigate(-1)}>Kembali</Button> 
            <Link to="/identitas">
              <Button >Selanjutnya</Button>
            </Link>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default DetailTicket;;