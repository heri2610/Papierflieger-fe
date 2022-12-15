import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions/auth.js';

function DropdownNav() {
  const dispatch = useDispatch();
  return (
    <DropdownButton
      title={window.localStorage.getItem("user")}
      align="end"
      id="dropdown-menu-align-end"
    >
      <Dropdown.Item href="#/action-1">Profil</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Wishlist</Dropdown.Item>
      <Dropdown.Item onClick={() => { dispatch(logout()); window.location.reload(); }}>Logout</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownNav;