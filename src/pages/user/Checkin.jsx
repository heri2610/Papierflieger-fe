import React from "react";
import NavigationBar from "../../components/Navbar/NavigationBar";
import CheckIn from "../../components/User/CheckIn/CheckIn";
import Footer from "../../components/Footer/Footer";
import CardCheckin from "../../components/User/CheckIn/CardCheckin";

const Checkin = () => {
  return (
    <div>
        <NavigationBar/>
        <CardCheckin/>
        <CheckIn/>
        <Footer/>
    </div>
  )
}

export default Checkin