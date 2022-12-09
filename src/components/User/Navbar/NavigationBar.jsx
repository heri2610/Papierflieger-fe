import React from 'react';
// import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import brand from "../../../assets/images/logo.svg";
import "./navbar.scss";

const NavigationBar = () => {
  return (
    <div className="container-fluid mb-3 fixed-top" id="flight">
      <Navbar expand="lg" className="justify-content-center bg-white rounded shadow-sm">
        <Container fluid className="navbar-content">
          {/* <Link to={"/"}> */}
            <img
              src={brand}
              alt="Logo"
              width="70"
              className="d-inline-block align-text-top"
            />
          {/* </Link> */}
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="fw-bold" id="offcanvasNavbarLabel-expand-lg">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1">
                <div className="navbar-nav ms-0">
                  <Nav.Link className="me-4" href="#root">Penerbangan</Nav.Link>
                  <Nav.Link className="me-4" href="#destinasi">Destinasi</Nav.Link>
                  <Nav.Link className="me-4" href="#testi">Testimonial</Nav.Link>
                  <Nav.Link className="me-4" href="#about">Tentang Kami</Nav.Link>
                </div>
              </Nav>
              <Button variant="primary">Daftar/Masuk</Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;