import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Button,
} from "react-bootstrap";
import Login from "../User/Login/Login";
import brand from "../../assets/images/logo.svg";
import "./navbar.scss";
import DropdownNav from "./DropdownNav.jsx";
import { countNotif, seeNotif, } from "../../store/actions/notifications";
import { useSelector, useDispatch } from "react-redux";

const NavigationBar = () => {
  const regis = window.location.pathname === "/register";
  const token = window.localStorage.getItem("token");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const { count } = useSelector(state => state.notifReducer);
  useEffect(() => {
    if (token) {
      dispatch(countNotif());
    }
  }, [token, dispatch]);
  // console.log(count);
  const handleKlik = () => {
    dispatch(seeNotif());
  };
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <div className="container-fluid mb-3 fixed-top">
      <Navbar expand="lg" className="justify-content-center bg-white rounded shadow-sm">
        {matches && (
          <Container fluid className="navbar-content">
            <Link to={"/"}>
              <img src={brand} alt="Logo" width="70" className="d-inline-block align-text-top" />
            </Link>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
            <Navbar.Offcanvas id="offcanvasNavbar-expand-lg" aria-labelledby="offcanvasNavbarLabel-expand-lg" placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="fw-bold" id="offcanvasNavbarLabel-expand-lg">
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1">
                  <div className="navbar-nav ms-0">
                    <Nav.Link className="me-4" href="/#destinasi">
                      Destinasi
                    </Nav.Link>
                    <Nav.Link className="me-4" href="/#testimonial">
                      Testimonial
                    </Nav.Link>
                    <Nav.Link className="me-4" href="/#aboutus">
                      Tentang Kami
                    </Nav.Link>
                  </div>
                </Nav>
                {token ? (
                  <div className="d-flex align-items-center">
                    <Nav.Link href="/user/notification" className="me-3" onClick={handleKlik}>
                      <i className="bi bi-bell-fill" style={{ fontSize: '24px' }}></i>{count !== 0 && <span class="position-absolute top-50 translate-middle badge rounded-pill bg-danger" >{count}</span>}
                    </Nav.Link>
                    <Nav.Link href="/user/profile" className="me-3">
                      <img src={window.localStorage.getItem("avatar")} alt="foto profil" width={"40px"} height={"40px"} className="rounded-circle" />
                    </Nav.Link>
                    <DropdownNav />
                  </div>
                ) : regis ? (
                  <Button variant="primary" onClick={handleShow}>
                    Masuk
                  </Button>
                ) : (
                  <Button variant="primary" onClick={handleShow}>
                    Daftar/Masuk
                  </Button>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        )}
        {!matches && (
          <Container fluid className="navbar-content">
            <Link to={"/"}>
              <img src={brand} alt="Logo" width="70" className="d-inline-block align-text-top" />
            </Link>
            <div className="d-flex">
              <Nav.Link href="/user/notification" className="me-3">
                <i className="bi bi-bell-fill" style={{ fontSize: '24px' }}></i>{count !== 0 && <span className="position-absolute top-50 translate-middle badge rounded-pill bg-danger" >{count}</span>}
              </Nav.Link>
              <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
            </div>
            <Navbar.Offcanvas id="offcanvasNavbar-expand-lg" aria-labelledby="offcanvasNavbarLabel-expand-lg" placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="fw-bold" id="offcanvasNavbarLabel-expand-lg">
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1">
                  <div className="navbar-nav ms-0">
                    <Nav.Link className="me-4" href="/#destinasi">
                      Destinasi
                    </Nav.Link>
                    <Nav.Link className="me-4" href="/#testimonial">
                      Testimonial
                    </Nav.Link>
                    <Nav.Link className="me-4" href="/#aboutus">
                      Tentang Kami
                    </Nav.Link>
                  </div>
                </Nav>
                <hr />
                {token ? (
                  <div className="d-flex align-items-center">
                    <DropdownNav />
                  </div>
                ) : regis ? (
                  <Button variant="primary" onClick={handleShow}>
                    Masuk
                  </Button>
                ) : (
                  <Button variant="primary" onClick={handleShow}>
                    Daftar/Masuk
                  </Button>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        )}
      </Navbar>
      <Login show={show} onHide={handleClose} />
    </div>
  );
};

export default NavigationBar;
