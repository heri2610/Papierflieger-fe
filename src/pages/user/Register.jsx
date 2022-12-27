import React from "react";
import Footer from "../../components/Footer/Footer";
import NavigationBar from "../../components/Navbar/NavigationBar";
import bannerPesawat from "../../assets/images/bannerPesawat.svg";
import Register from "../../components/User/Register/Register";

function RegisterPage() {
  return (
    <div>
      <NavigationBar />
      <img className="img-fluid img-banner" src={bannerPesawat} alt="banner pesawat" />
      <Register />
      <Footer />
    </div>
  );
}

export default RegisterPage;
