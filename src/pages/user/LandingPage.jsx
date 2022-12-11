import React from "react";
import ImageSlider from "../../components/User/Slider/Slider";
import Banner from "../../components/User/Banner/Banner";
import SearchTiket from "../../components/User/SearchTicket/SearchTicket";

function LandingPage() {
  return (
    <>
      <Banner />
      <SearchTiket />
      <ImageSlider />
    </>
  );
}

export default LandingPage;
