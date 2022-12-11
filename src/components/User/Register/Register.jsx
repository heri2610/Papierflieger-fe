import React, {useState} from 'react';
import { Button, Col, Form, Container, Row } from 'react-bootstrap';
import './Register.scss'

function Register() {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
    }

    setValidated(true);
    };

  return (
    <div className='mt-5'>
        <div>
            <Form validated={validated} onSubmit={handleSubmit}>
                <Container>
                    <Row>
                        <div>
                            <h3>Registrasi</h3>
                        </div>
                        <br />
                        <br />
                        <Col>
                            <Form.Group className="mb-3" controlId="validationCustom01">
                                <Form.Label>NAMA PANGGILAN</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    defaultValue=""
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="validationCustom02">
                                <Form.Label>NAMA LENGKAP</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    defaultValue=""
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" placeholder="Password" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button className='button' type="submit" value="Submit">Submit</Button>
                </Container>
            </Form>
        </div>
    </div>
  )
}

export default Register