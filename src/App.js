import React from "react";
import "./App.scss";
import Banner from "./components/User/Banner/Banner";
import { Footer } from "./components/User/Footer/Footer";
import NavigationBar from "./components/User/Navbar/NavigationBar";
import SearchTicket from "./components/User/SearchTicket/SearchTicket";
import Slider from "./components/User/Slider/Slider";
import Login from "./components/User/Login/Login";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <SearchTicket />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
