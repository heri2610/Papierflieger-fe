import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/user/LandingPage";
import ProtectedRoute from "./pages/user/ProtectedRoute";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/Navbar/NavigationBar";
import RegisterPage from "./pages/user/Register";
import Penerbangan from "./components/User/Penerbangan/Penerbangan";
import DestinationPage from "./pages/user/DestinationPage";
import Wishlist from "./components/User/Wishlist/Wishlist";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import EditProfile from "./pages/user/EditProfile";
import Profile from "./pages/user/Profile";
import Airplane from "./pages/admin/Airplane/Airplane";
import NewAirplane from "./pages/admin/Airplane/NewAirplane";
import Airport from "./pages/admin/Airport/Airport";
import NewAirport from "./pages/admin/Airport/NewAirport";
import Destination from "./pages/admin/Destination/Destination";
import NewDestination from "./pages/admin/Destination/NewDestination";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/profile/edit" element={<EditProfile />} />
            <Route path="/user/wishlist" element={<Wishlist />} />
          </Route>
          {/* klo mau nambahin router d sini yak */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/penerbangan" element={<Penerbangan />} />
          <Route path="/destinasi" element={<DestinationPage />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/airplane" element={<Airplane />} />
          <Route path="/admin/airplane/new" element={<NewAirplane />} />
          <Route path="/admin/airport" element={<Airport />} />
          <Route path="/admin/airport/new" element={<NewAirport />} />
          <Route path="/admin/destination" element={<Destination />} />
          <Route path="/admin/destination/new" element={<NewDestination />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
