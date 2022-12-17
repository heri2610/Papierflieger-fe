import React from "react";
import { Row, Col, Badge, Accordion, Button, Container } from "react-bootstrap";
import logocard from '../../../assets/images/Logo-card.svg';
import Arrow from '../../../assets/images/Vector.svg';
import './DetailTicket.scss'

function ItineraryTicket() {
    return <>
        <Row className='border-bottom py-3 mx-5'>
            <Col md={1} ><img src={logocard} alt='logo-card' /></Col>
            <Col><h3>Penerbangan</h3>
                <div className='hstack'><h3><strong>Banda Aceh</strong></h3><img src={Arrow} alt='arrow' className='mx-3' /><h3><strong>Jakarta</strong></h3></div>
                <h3>Selasa 10 Januari 2022</h3>
            </Col>
        </Row>
        {/* Badges  */}
        <Row className='py-3 mx-5'>
            <Col md={2}><h3>
                <Badge className='bg-info text-primary '>Ekonomi</Badge>
            </h3></Col>
            <Col md={2}><h3>
                <Badge className='bg-info text-primary '>Kode Pemesanan:NOV15R</Badge>
            </h3></Col>
        </Row>
        <Row className="my-4 border-bottom pb-3 mx-5">
            <Col className='position-relative'>
                <h4 className='m-0'>Keberangkatan</h4>
                <h1 className='m-0 p-0'>07.00</h1>
                <h4 className='m-0'>CGK</h4>
                <img src={Arrow} alt='arrow' className='position-absolute top-0 end-0 pt-1 pe-4' />
            </Col>
            <Col>
                <h4 className='m-0'>Pendaratan</h4>
                <h1 className='m-0 p-0'>15.00</h1>
                <h4 className='m-0'>SIN</h4>
            </Col>
            <Col>
                <h4 className='m-0'>Durasi Perjalanan</h4>
                <h1 className='m-0 p-0'>7 Jam</h1>
            </Col>
            <Col>
                <h4 className='m-0'>Lama Perhentian</h4>
                <h1 className='m-0 p-0'>1 Jam</h1>
            </Col>
        </Row>
        <Row className='py-3 mx-5'>
            <div id="timeline-content" className='border-bottom'>
                <ul class="timeline">
                    <li class="event" data-date="08.00" data-day='16 Desember'>
                        <h1>Jakarta</h1>
                        <h3>Soekarno Hatta International Airport (CGK)</h3>
                        <h3>Armada : PapierFlieger, Boeing 737<br />Durasi Tebang : 3 jam 40 menit</h3>
                    </li>
                    <li class="event" data-date="08.00" data-day='16 Desember'>
                        <h1>Jakarta</h1>
                        <h3>Soekarno Hatta International Airport (CGK)</h3>
                        <h3>Armada : PapierFlieger, Boeing 737<br />Durasi Tebang : 3 jam 40 menit</h3>
                    </li>
                    <li class="event" data-date="08.00" data-day='16 Desember'>
                        <h1>Jakarta</h1>
                        <h3>Soekarno Hatta International Airport (CGK)</h3>
                        <h3>Armada : PapierFlieger, Boeing 737<br />Durasi Tebang : 3 jam 40 menit</h3>
                    </li>
                </ul>
            </div>
        </Row>
        <Row className='py-3 mx-5'>
            <Col>
                <h5 className='p-0'>Komplementer Bagasi</h5>
                <p>Harga tiket sudah termasuk beban bagasi per-orang dengan rincian beban sebagasi berikut :</p>
                <h5 style={{ paddingTop: 0 }}><i class="bi bi-file-zip-fill"></i> Tas/Koper 7 kg x 1</h5>
                <p className='text-primary'><strong>Tas/Koper yang diperiksa</strong></p>
            </Col>
        </Row>
    </>
}

export default ItineraryTicket