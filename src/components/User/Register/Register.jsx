import React, { useState } from "react";
import { Button, Col, Form, Container, Row, Alert, Modal } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../../store/actions/auth.js";

import "./Register.scss";

function Register() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error");

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    history("/");
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleFullName = (event) => {
    setFullName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      username,
      fullName,
      email,
      password,
    };

    const res = await dispatch(register(data, history))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res);

    if (res.error) {
      setError(true);
      setErrorMessage(res.error.response.data.message);
    } else {
      handleShow();
    }
  };

  return (
    <>
      <div className="mt-5">
        <div>
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row>
                <div>
                  <h3 className="me-3">Registrasi</h3>
                  {
                    error &&
                    <Alert variant="danger">
                      {errorMessage}
                    </Alert>
                  }
                </div>
                <br />
                <br />
                <Col>
                  <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Username"
                      onChange={handleUsername}
                      value={username}
                    />
                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="validationCustom02">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Full name"
                      onChange={handleFullName}
                      value={fullName}
                    />
                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Alamat Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Enter email"
                      onChange={handleEmail}
                      value={email}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Password"
                      onChange={handlePassword}
                      value={password}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label={<p>Saya menyetujui segala <span className="text-danger">syarat dan ketentuan</span> maskapai Papierflieger</p>}
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button className="btn-primary mb-5" type="submit" value="Submit">
                Submit
              </Button>
            </Container>
          </Form>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <p><strong>Registrasi berhasil.</strong></p>
          <p className="mb-0">
            Silakan cek email dan verifikasi akun untuk melanjutkan.
          </p>
          <div className="d-flex justify-content-end">
            <Button variant="primary" onClick={handleClose}>OK</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register;
