import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './DetailTicket.scss'
import ItineraryTicket from "./ItineraryTicket";
function DetailTicket() {

    return <Container fluid className='section--body'>
        <Row className='pt-5 pb-5'>
            <h2 className='mt-5'><strong>Rincian Tiket</strong></h2>
            <Col>
                <div className='bg-white p-3 rounded'>
                    <ItineraryTicket />
                </div>
            </Col>
            <h4 className='mt-3 ps-5'><strong>Anda harus mengisi dokumen perjalanan terlebih dahulu sebelum melakukan transaksi</strong></h4>
            <Link to='/identitas' className='btn btn-primary ms-auto me-3 d-block' style={{ width: '20rem' }}><h3>Selanjutnya</h3></Link>
        </Row>
    </Container>
}

export default DetailTicket;