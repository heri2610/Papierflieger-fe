import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./login.scss";

function Login() {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3 w-75 mx-7"
      >
        <Form.Control type="username" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        className="w-75 mx-7"
        controlId="floatingPassword"
        label="Password"
      >
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </>
  );
}

export default Login;
