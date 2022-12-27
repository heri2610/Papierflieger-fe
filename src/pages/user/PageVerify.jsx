import React from "react";
import NavigationBar from "../../components/Navbar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import { Button } from "react-bootstrap";
import "./PageVerify.scss";
import { Link, useLocation } from "react-router-dom";

const Page = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const messages = params.get("message");

  return (
    <>
      <div className="page-verify">
        <NavigationBar />
        <div className="box">
          <h4 className="mb-4">{messages}</h4>
          <Link to={"/"}>
            <Button>Kembali ke website</Button>
          </Link>
        </div>
        < div className="fixed-bottom">
          <Footer />
        </div >
      </div>
    </>
  );
};

export default Page;