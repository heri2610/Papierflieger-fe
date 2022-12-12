import React, { useState } from 'react';
import { Button, Col, Form, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../../store/actions/auth.js';

import './Register.scss';

function Register() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [validated, setValidated] = useState(false);

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    event.preventDefault();

    const data = {
      username,
      fullName,
      email,
      password,
    };

    dispatch(register(data, history));
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
                  <Form.Label>Nama Panggilan</Form.Label>
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
                  <Form.Label>Email address</Form.Label>
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
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button className='btn-primary' type="submit" value="Submit">Submit</Button>
          </Container>
        </Form>
      </div>
    </div>
  );
}

export default Register;