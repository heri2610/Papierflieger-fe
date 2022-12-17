import React, { useState } from "react";
import { Row, Col, Button, Badge, Container, Form, Collapse } from "react-bootstrap";
import logocard from '../../../assets/images/Logo-card.svg';
import Arrow from '../../../assets/images/Vector.svg';

function Payment() {
    const [open, setOpen] = useState(false);
    return <>
        <Container fluid className='bg-info'>
            <Container>
                <Row className='pt-5'>
                    <h2 className='mt-5 mb-0 '><strong>Pembayaran</strong></h2>
                    <Col className='bg-white p-3 mt-2 mb-5 rounded'>
                        <Row className=' py-3 mx-5'>
                            <Col md={2} ><img src={logocard} alt='logo-card' /></Col>
                            <Col className="align-self-center"><h4>Penerbangan</h4>
                                <div className='hstack'><h4><strong>Banda Aceh</strong></h4><img src={Arrow} alt='arrow' className='mx-3' /><h4><strong>Jakarta</strong></h4></div>
                                <h4>Selasa 10 Januari 2022</h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <h2 className='mt-1 mb-0 '><strong>Detail Pembayaran</strong></h2>
                    <Col className='bg-white p-3 mt-2 mb-5 rounded'>
                        <Row className=' py-3 mx-5'>
                            <Col><h3>Harga Tiket</h3><h3><strong>Total Harga</strong></h3></Col>
                            <Col><h3 className='text-end'>Rp. 2.876.000</h3><h3 className='text-end'><strong>Rp. 2.876.000</strong></h3></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <h2 className='mt-1 mb-0 '><strong>Metode Pembayaran</strong></h2>
                    <Col md={12} className='bg-white p-3 mt-2 mb-5 rounded'>
                        <Row className=''>
                            <Col md={12}><Button variant="light" className='w-100 d-flex justify-content-between' onClick={() => setOpen(!open)}><h3>Bank BCA</h3><h3><i class="bi bi-caret-down-fill"></i></h3></Button>
                                <Collapse in={open}>
                                    <div id="example-collapse-text">
                                        <Form className='px-3'>
                                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                                <Form.Label column sm={2}>
                                                    <h4>Nama</h4>
                                                </Form.Label>
                                                <Col sm={10}>
                                                    <Form.Control type="text" placeholder="Atas Nama" />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                                <Form.Label column sm={2}>
                                                    <h4>No. Rekening</h4>
                                                </Form.Label>
                                                <Col sm={10}>
                                                    <Form.Control type="text" placeholder="Atas Nama" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                                <Form.Label column sm={2}>
                                                    <h4>Jumlah</h4>
                                                </Form.Label>
                                                <Col sm={10}>
                                                    <Form.Control type="text" placeholder="Atas Nama" />
                                                </Col>
                                            </Form.Group>
                                            <Button className='float-end' style={{ width: '10rem' }}><h4 className='m-0'>Bayar</h4></Button>
                                        </Form>
                                    </div>
                                </Collapse></Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </Container>
    </>
}

export default Payment