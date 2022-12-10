import React from "react";
import "./App.scss";
import Banner from "./components/User/Banner/Banner";
import { Footer } from "./components/User/Footer/Footer";
import NavigationBar from "./components/User/Navbar/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      {/* <SearchTicket /> */}
      {/* <Slider /> */}
      {/* <ImageSlider /> */}
      <Footer />
    </div>
  );
}

export default App;
