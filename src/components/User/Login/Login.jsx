import React, { useState } from 'react';
import { FloatingLabel, Button } from "react-bootstrap";
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

  // const handleClose = () => props.onHide;

  const handleSubmit = (event) => {
    event.preventDefault();
    // handleClose();
    const data = {
      email,
      password,
    };

    dispatch(login(data, history));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel
        controlId="floatingInput"
        label="Email"
        className="mb-3 w-75 mx-7"
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
        className="w-75 mx-7"
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

      <Button className="mt-3 w-75 mb-3" variant="primary" type="submit" value="Submit">
        Masuk
      </Button>
    </Form>
  );
}

export default Login;
