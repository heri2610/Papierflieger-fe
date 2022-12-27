import React from "react";
import { Form, Container, Row, Col, Button} from "react-bootstrap";
import "./Checkin.scss";

const CheckIn = () => {
  return (
    <div className="check-in">
        <div className="title-checkin">
            <h3>Check In</h3>
        </div>
        
        {/* check in internasional ticket*/}
        <Form>
            <fieldset disabled>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group className="form mb-3" controlId="validationCustom01">
                                <Form.Label>GELAR</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Mr"
                                />
                            </Form.Group>
                            <Form.Group className="form mb-3" controlId="validationCustom01">
                                <Form.Label>NAMA DEPAN</Form.Label>
                                <Form.Control
                                type="text"
                                placeholder="Suhaeri"
                                />
                            </Form.Group>
                            <Form.Group className="form mb-3" controlId="validationCustom01">
                                <Form.Label>NAMA BELAKANG</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Suhaeri"
                                />
                            </Form.Group>
                            <Form.Group className="form mb-3" controlId="validationCustom01">
                                <Form.Label>TANGGAL LAHIR</Form.Label>
                                <Form.Control
                                    type="date"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="form mb-3" controlId="validationCustom01">
                                <Form.Label>NOMOR IDENTITAS PASPORT</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="123456789"
                                />
                            </Form.Group>
                            <Form.Group className="form mb-3" controlId="validationCustom01">
                                <Form.Label>TANGGAL AKHIR BERLAKU</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="12/12/2023"
                                />
                            </Form.Group>
                            <Form.Group className="form mb-3" controlId="validationCustom01">
                                <Form.Label>KEBANGSAAN</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Indonesia"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </fieldset>
            <div className="checkin-button">
                <Button>Check In</Button>
            </div>
        </Form>

        {/* check in domestik ticket */}
        {/* <Form>
            <fieldset disabled>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group className="form mb-3" controlId="validationCustom01">
                                <Form.Label>GELAR</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Mr"
                                />
                            </Form.Group>
                            <Form.Group className="form mb-3" controlId="validationCustom01">
                                <Form.Label>NAMA DEPAN</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Suhaeri"
                                />
                            </Form.Group>
                            <Form.Group className="form mb-3" controlId="validationCustom01">
                                <Form.Label>NAMA BELAKANG</Form.Label>
                                <Form.Control
                                    id="disabledTextInput"
                                    type="text"
                                    placeholder="Suhaeri"
                                />
                            </Form.Group>
                            <Form.Group className="form mb-3" controlId="validationCustom01">
                                <Form.Label>NOMOR IDENTITAS KEPENDUDUKAN</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="123456789"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </fieldset>
            <div className="checkin-button">
                <Button>Check In</Button>
            </div>
        </Form> */}
    </div>
  )
}

export default CheckIn