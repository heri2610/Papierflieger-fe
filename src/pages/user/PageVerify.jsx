import React, { useState } from "react";
import NavigationBar from "../../components/Navbar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import { Alert, Button } from "react-bootstrap";
import "./PageVerify.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { verifyEmail } from "../../store/actions/auth";

const Page = () => {
  const { message, loading } = useSelector((state) => state.authReducer);
  const [isVerify, setIsVerify] = useState(false);
  const history = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = { token: params.get("token") };

  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const onShowAlert = () => {
    setShowAlertSuccess(true);
    window.setTimeout(() => {
      setShowAlertSuccess(false);
    }, 2000);
  };


  const verifyAccount = () => {
    dispatch(verifyEmail(token, history));
    setIsVerify(true);
    onShowAlert();
  };

  return (
    <>
      <div className="page-verify">
        <NavigationBar />
        {isVerify ? (
          <div className="box">
            <h5>{message}</h5>
            <Link to={"/"}>
              <Button>Kembali ke website</Button>
            </Link>
          </div>
        ) : (
          <div className="box">
            <h5>Klik tombol di bawah ini untuk melanjutkan proses verifikasi</h5>
            {loading && <Button>Loading...</Button>}
            <Link to={""}>
              <Button onClick={verifyAccount}>Verifikasi Email</Button>
            </Link>
          </div>
        )}
        < div className="fixed-bottom">
          <Footer />
        </div >
      </div>
      {showAlertSuccess && (
        <div className="d-flex justify-content-center mt-2" style={{ transition: "0.5s" }}>
          <Alert key="warning" variant="warning" className="text-center w-25">
            {message}
          </Alert>
        </div>
      )}
    </>
  );
};

export default Page;