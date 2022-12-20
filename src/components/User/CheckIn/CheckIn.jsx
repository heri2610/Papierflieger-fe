import React from "react";
import {Form, Container, Row, Col} from "react-bootstrap";

const CheckIn = () => {
  return (
    <div className="check-in">
        <Form>
            <fieldset disable>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group className="form" controlId="validationCustom01">
                                <Form.Label>Durasi Penerbangan</Form.Label>
                                <Form.Control
                                required
                                type="text"
                                placeholder="3 jam 5 menit"
                                />
                            </Form.Group>
                            <Form.Group className="form" controlId="validationCustom01">
                                <Form.Label>NAMA DEPAN</Form.Label>
                                <Form.Control
                                required
                                type="text"
                                placeholder="Suhaeri"
                                />
                            </Form.Group>
                            <Form.Group className="form" controlId="validationCustom01">
                                <Form.Label>NAMA BELAKANG</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Suhaeri"
                                />
                            </Form.Group>
                            <Form.Group className="form" controlId="validationCustom01">
                                <Form.Label>TANGGAL LAHIR</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="form" controlId="validationCustom01">
                                <Form.Label>NOMOR IDENTITAS PASPORT</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Suhaeri"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </fieldset>
        </Form>
    </div>
  )
}

export default CheckIn