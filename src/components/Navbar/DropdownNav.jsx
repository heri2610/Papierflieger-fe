import { DropdownButton, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/auth.js";
import { useSelector } from "react-redux";

function DropdownNav() {
  const a = localStorage.getItem("accessToken") === "A-*dmin?&&%mlm-plgsnwngbuay-$563iedjnjdxgdj" ? true : false;
  const { isAdmin } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  console.log(isAdmin);
  return (
    <DropdownButton title={window.localStorage.getItem("user")} align="end" id="dropdown-menu-align-end">
      <Dropdown.Item href="/user/profile">Profil</Dropdown.Item>
      {isAdmin && <Dropdown.Item href="/admin">Dashboard Admin</Dropdown.Item>}
      <Dropdown.Item href="/user/wishlist">Wishlist</Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          dispatch(logout());
          window.location.reload();
        }}
      >
        Logout
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownNav;
