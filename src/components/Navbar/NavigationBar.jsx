import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions/auth.js';

import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Button,
  Modal,
} from "react-bootstrap";
import Login from "../User/Login/Login";
import brand from "../../assets/images/logo.svg";
import "./navbar.scss";

const NavigationBar = () => {
  const token = window.localStorage.getItem("token");
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container-fluid mb-3 fixed-top">
      <Navbar
        expand="lg"
        className="justify-content-center bg-white rounded shadow-sm"
      >
        <Container fluid className="navbar-content">
          <Link to={"/"}>
            <img
              src={brand}
              alt="Logo"
              width="70"
              className="d-inline-block align-text-top"
            />
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                className="fw-bold"
                id="offcanvasNavbarLabel-expand-lg"
              >
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1">
                <div className="navbar-nav ms-0">
                  <Nav.Link className="me-4" href="/penerbangan">
                    Penerbangan
                  </Nav.Link>
                  <Nav.Link className="me-4" href="#destinasi">
                    Destinasi
                  </Nav.Link>
                  <Nav.Link className="me-4" href="#testi">
                    Testimonial
                  </Nav.Link>
                  <Nav.Link className="me-4" href="#about">
                    Tentang Kami
                  </Nav.Link>
                </div>
              </Nav>
              {token ?
                <Button className="bg-danger" onClick={() => { dispatch(logout()); window.location.reload(); }}>Logout</Button>
                : <Button variant="primary" onClick={handleShow}> Datar/masuk </Button>}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="softblue text-center">
          <Modal.Title className="mb-3">Masuk</Modal.Title>
          <Login />
          <p>Belum punya akun? Silakan <a href="/register">Daftar</a></p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NavigationBar;
