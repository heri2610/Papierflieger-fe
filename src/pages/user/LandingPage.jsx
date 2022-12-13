import React from "react";
// import ImageSlider from "../../components/User/Slider/Slider";
import Banner from "../../components/User/Banner/Banner";
import SearchTiket from "../../components/User/SearchTicket/SearchTicket";
import Testimonial from "../../components/User/Testimonial/Testimonial";

function LandingPage() {
  return (
    <>
      <Banner />
      <SearchTiket />
      {/* <ImageSlider /> */}
      <Testimonial />
    </>
  );
}

export default LandingPage;
