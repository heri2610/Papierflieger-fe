import React from "react";
import bannerPesawat from "../../assets/images/bannerPesawat.svg";
import Register from "../../components/User/Register/Register";

function RegisterPage() {
  return (
    <div>
      <img
        className="img-fluid img-banner"
        src={bannerPesawat}
        alt="banner pesawat"
      />
      <Register />
    </div>
  );
}

export default RegisterPage;
