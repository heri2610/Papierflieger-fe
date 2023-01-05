import React from "react";
import NavigationBar from "../../components/Navbar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import Password from "../../components/User/Password/Password";
import "./PasswordChange.scss"

const PasswordChange = () => {
  return (
    <div className="password-change">
      <NavigationBar/>
      <div className="pass">
        <div className="pass-title">
          <h3>Mengubah Kata Sandi</h3>
        </div>
        <div className="password justify-content-center">
          <Password/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default PasswordChange