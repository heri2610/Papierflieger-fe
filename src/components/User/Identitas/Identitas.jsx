import React from "react";
import { Row, Col, Button, Badge, Container, Form, } from "react-bootstrap";
import logocard from '../../../assets/images/Logo-card.svg';
import Arrow from '../../../assets/images/Vector.svg';
import './Identitas.scss';

function Identitas() {
    return <>
        <Container fluid className='bg-info'>
            <Container>
                <Row className='pt-5'>
                    <Col className='bg-white p-3 mt-5 mx-5 mb-5 rounded'>
                        <div className='px-5 pt-3 mx-5'>
                            <h3>Pemberitahuan Identitas</h3>
                            <p>Pastikan nama penumpang sama persis dengan yang tertulis di KTP. <span className='text-danger'>Hindari kesalahan apa pun</span>, karena maskapai penerbangan tidak mengizinkan koreksi nama setelah pemesanan.</p>
                            <p>Pastikan identitas Anda <span className='text-danger'>berlaku setidaknya 2 minggu setelah tanggal keberangkatan</span></p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Row className='px-3'>
                <Col className='bg__bluish p-3 mb-5 rounded'>
                    <Row >
                        {/* Detail Ticket */}
                        <Col className='bg-white p-3 mt-5 mx-5 mb-5 rounded'>
                            <Row className='border-bottom py-3 mx-5'>
                                <Col md={3} ><img src={logocard} alt='logo-card' /></Col>
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
                            {/* Detail itinerary */}
                            <Row className="my-4 border-bottom pb-3 mx-5">
                                <Col className='position-relative'>
                                    <h6 className='m-0'>Keberangkatan</h6>
                                    <h3 className='m-0 p-0'>07.00</h3>
                                    <h4 className='m-0'>CGK</h4>
                                    <img src={Arrow} alt='arrow' className='position-absolute top-0 end-0 pt-1 ' />
                                </Col>
                                <Col>
                                    <h6 className='m-0'>Pendaratan</h6>
                                    <h3 className='m-0 p-0'>15.00</h3>
                                    <h4 className='m-0'>SIN</h4>
                                </Col>
                                <Col>
                                    <h6 className='m-0'>Durasi Perjalanan</h6>
                                    <h3 className='m-0 p-0'>7 Jam</h3>
                                </Col>
                                <Col>
                                    <h6 className='m-0'>Lama Perhentian</h6>
                                    <h3 className='m-0 p-0'>1 Jam</h3>
                                </Col>
                            </Row>
                            {/* Timeline tracker */}
                            <Row className='py-3 mx-5'>
                                <div id="timeline-content" className='border-bottom'>
                                    <ul class="timeline">
                                        <li class="event" data-date="08.00" data-day='16 Desember'>
                                            <h2>Jakarta</h2>
                                            <h4>Soekarno Hatta International Airport (CGK)</h4>
                                            <h4>Armada : PapierFlieger, Boeing 737<br />Durasi Tebang : 3 jam 40 menit</h4>
                                        </li>
                                        <li class="event" data-date="08.00" data-day='16 Desember'>
                                            <h2>Jakarta</h2>
                                            <h4>Soekarno Hatta International Airport (CGK)</h4>
                                            <h4>Armada : PapierFlieger, Boeing 737<br />Durasi Tebang : 3 jam 40 menit</h4>
                                        </li>
                                        <li class="event" data-date="08.00" data-day='16 Desember'>
                                            <h2>Jakarta</h2>
                                            <h4>Soekarno Hatta International Airport (CGK)</h4>
                                            <h4>Armada : PapierFlieger, Boeing 737<br />Durasi Tebang : 3 jam 40 menit</h4>
                                        </li>
                                    </ul>
                                </div>
                            </Row>
                            {/* detail compartment */}
                            <Row className='py-3 mx-5'>
                                <Col>
                                    <h5 className='p-0'>Komplementer Bagasi</h5>
                                    <p>Harga tiket sudah termasuk beban bagasi per-orang dengan rincian beban sebagasi berikut :</p>
                                    <h5 style={{ paddingTop: 0 }}><i class="bi bi-file-zip-fill"></i> Tas/Koper 7 kg x 1</h5>
                                    <p className='text-primary'><strong>Tas/Koper yang diperiksa</strong></p>
                                </Col>
                            </Row>
                        </Col>
                        {/* Detail Passenger */}
                        <Col className='p-3 mt-5 mx-5 mb-5 rounded text-white'>
                            <h2 className='mb-3 p-0'>Pengisian Identitas Penumpang</h2>
                            <Form>
                                <Row>
                                    <Col md={12} className='mb-5'>
                                        <Form.Label className='m-0'><h4>Gelar</h4></Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={12} className='mb-5'>
                                        <Form.Label className='m-0'><h4>Nama Depan</h4></Form.Label>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col md={12} className='mb-5'>
                                        <Form.Label className='m-0'><h4>Nama Belakang</h4></Form.Label>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                    <Col md={12} className='mb-5'>
                                        <Form.Label className='m-0'><h4>Tanggal Lahir</h4></Form.Label>
                                        <input type='date' className='form-control' />
                                    </Col>
                                    <Col md={12} className='mb-5'>
                                        <Form.Label className='m-0'><h4>Nomor Identitas Passport</h4></Form.Label>
                                        <Form.Control placeholder="Nomor Identitas Passport" />
                                    </Col>
                                    <Col md={12} className='mb-5'>
                                        <Form.Label className='m-0'><h4>Kebangsaan</h4></Form.Label>
                                        <Form.Control placeholder="Nomor Identitas Passport" />
                                    </Col>
                                    <Col md={12} className='mb-5'>
                                        <Form.Label className='m-0'><h4>Masa Berlaku Passport</h4></Form.Label>
                                        <input type='date' className='form-control' />
                                    </Col>
                                </Row>
                                <Button className='float-end'><h3 className='mb-0'>Submit</h3></Button>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
}

export default Identitas