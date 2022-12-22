import React from "react";
import NavigationBar from "../../components/Navbar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import {Button} from "react-bootstrap";
import "./PageVerify.scss"

const Page = () => {
  return (
    <div className="page-verify">
        <NavigationBar/>
            <div className="box">
                <h5>Email anda berhasil terverifikasi</h5>
                <Button>Kembali ke website</Button>
            </div>
        <Footer/>
    </div>
  )
}

export default Page