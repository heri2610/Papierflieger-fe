import React from "react";
// import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
// import Login from "../User/Login/Login";
import brand from "../../../assets/images/logo.svg";
import "./NavigationBar.scss";
import {Link} from 'react-router-dom'

const NavigationBar = () => {
  return (
    <Navbar className="bg-white fixed-top">
      <Container>
        <div className="nav-top">
          <Link to="/" style={{ textDecoration: "none" }}></Link>
          <Navbar.Brand href="/">
            <img width={60} height={60} src={brand} alt="logo" />
          </Navbar.Brand>
        </div>
        <Nav>
          <Nav.Link href="/user/profile" className="nav-profile">
            <div className="nav-admin">
              <FaUserCircle className="icon-admin" />
              <h6 className="admin">Admin 1</h6>
            </div>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;