import React from "react";
import Footer from "../../components/Footer/Footer";
import NavigationBar from "../../components/Navbar/NavigationBar";
import DestinationImg from "../../components/User/DestinationImg/DestinationImg";
import DestinationDescription from "../../components/User/DestinationDescription/DestinationDescription";

function DestinationPage() {
  return (
    <>
      <NavigationBar />
      <DestinationImg />
      <DestinationDescription />
      <Footer/>
    </>
  );
}

export default DestinationPage;
