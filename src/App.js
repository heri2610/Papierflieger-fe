import React from 'react';
import './App.scss';
import ImageSlider from './components/User/slider/Slider';
import Banner from './components/User/Banner/Banner';
import { Footer } from './components/User/Footer/Footer';
import NavigationBar from './components/User/Navbar/NavigationBar';
// import SearchTicket from './components/User/SearchTicket/SearchTicket';
// import Slider from './components/User/Slider/Slider';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      {/* <SearchTicket /> */}
      {/* <Slider /> */}
      <ImageSlider/>
      <Footer />
    </div>
  );
}

export default App;
