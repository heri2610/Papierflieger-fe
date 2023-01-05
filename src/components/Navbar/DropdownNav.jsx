import { DropdownButton, Dropdown, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/auth.js";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.scss";

function DropdownNav() {
  const { isAdmin } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const history = useNavigate()
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <>
      {matches && (
        <DropdownButton title={window.localStorage.getItem("user")} align="end" id="dropdown-menu-align-end">
          <Dropdown.Item href="/user/profile">Profil</Dropdown.Item>
          {isAdmin && <Dropdown.Item href="/admin">Dashboard Admin</Dropdown.Item>}
          <Dropdown.Item href="/user/wishlist">Wishlist</Dropdown.Item>
          <Dropdown.Item href="/user/transaction/history">Riwayat</Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logout
          </Dropdown.Item>
        </DropdownButton>
      )}
      {!matches && (
        <Nav>
          <Nav.Link className="me-4" href="/user/profile">Profil</Nav.Link>
          {isAdmin && <Nav.Link className="me-4" href="/admin">Dashboard Admin</Nav.Link>}
          <Nav.Link className="me-4" href="/user/wishlist">Wishlist</Nav.Link>
          <Nav.Link className="me-4" href="/user/transaction/history">Riwayat Pemesanan</Nav.Link>
          <Nav.Link className="me-4 text-danger" onClick={() => {
            dispatch(logout(history));
          }}>Logout
          </Nav.Link>
        </Nav>
      )}
    </>
  );
}

export default DropdownNav;
