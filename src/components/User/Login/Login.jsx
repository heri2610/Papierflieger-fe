import React, { useState } from 'react';
import { FloatingLabel, Button, Modal, Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { login } from '../../../store/actions/auth.js';

import "./login.scss";

function Login(props) {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    const res = await dispatch(login(data, history))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    // console.log(res.error);

    if (res.error) {
      setError(true);
      setErrorMessage(res.error.response.data.message);
    } else {
      props.onHide();
    }
  };

  return (
    <Modal {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="softblue text-center">
        <Modal.Title className="mb-4 fw-semibold">Masuk</Modal.Title>
        {
          error &&
          <Alert key="danger" variant="danger" className="mb-3">
            {errorMessage}
          </Alert>
        }
        <Form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={e => setEmail(e.target.value)}
              value={email}
              required
            />
          </FloatingLabel>
          <FloatingLabel
            className=""
            controlId="floatingPassword"
            label="Password"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              required
            />
          </FloatingLabel>
          <Button className="mt-3 mb-3 w-100" variant="primary" type="submit" value="Submit">
            Masuk
          </Button>
        </Form>
        <p className="pt-3">Belum punya akun? Silakan <a href="/register">Daftar</a></p>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
