import React from "react";
import Banner from "../../components/User/Banner/Banner";
import SearchTiket from "../../components/User/SearchTicket/SearchTicket";
import Slider from "../../components/User/Slider/Slider";
import Testimonial from "../../components/User/Testimonial/Testimonial";
import AboutUs from "../../components/User/AboutUs/AboutUs";
import "./LandingPage.scss";

function LandingPage() {
  return (
    <>
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
    </>
  );
}

export default LandingPage;
