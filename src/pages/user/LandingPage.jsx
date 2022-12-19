import React from "react";
import Banner from "../../components/User/Banner/Banner";
import SearchTiket from "../../components/User/SearchTicket/SearchTicket";
import Slider from "../../components/User/Slider/Slider";
import Testimonial from "../../components/User/Testimonial/Testimonial";
import AboutUs from "../../components/User/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import NavigationBar from "../../components/Navbar/NavigationBar";
import "./LandingPage.scss";

function LandingPage() {
  return (
    <>
      <NavigationBar />
      <div className="banner">
        <Banner />
      </div>
      <div className="search-ticket">
        <SearchTiket />
      </div>
      <div className="slider">
        <Slider />
      </div>
      <div className="testimonial">
        <Testimonial />
      </div>
      <div className="about-us">
        <AboutUs />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
