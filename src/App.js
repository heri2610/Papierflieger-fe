import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/user/LandingPage";
import ProtectedRoute from "./pages/user/ProtectedRoute";
import RegisterPage from "./pages/user/Register";
import Penerbangan from "./components/User/Penerbangan/Penerbangan";
import DestinationPage from "./pages/user/DestinationPage";
import WishlistPage from "./pages/user/WishlistPage";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import EditProfile from "./pages/user/EditProfile";
import Profile from "./pages/user/Profile";
import Airplane from "./pages/admin/Airplane/Airplane";
import NewAirplane from "./pages/admin/Airplane/NewAirplane";
import Airport from "./pages/admin/Airport/Airport";
import NewAirport from "./pages/admin/Airport/NewAirport";
import Destination from "./pages/admin/Destination/Destination";
import NewDestination from "./pages/admin/Destination/NewDestination";
import Order from "./pages/admin/Order/Order";
import ProtectedRouteAdmin from "./pages/admin/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/profile/edit" element={<EditProfile />} />
            <Route path="/user/wishlist" element={<WishlistPage />} />
            <Route element={<ProtectedRouteAdmin />}>
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/airplane" element={<Airplane />} />
              <Route path="/admin/airplane/new" element={<NewAirplane />} />
              <Route path="/admin/airport" element={<Airport />} />
              <Route path="/admin/airport/new" element={<NewAirport />} />
              <Route path="/admin/destination" element={<Destination />} />
              <Route path="/admin/destination/new" element={<NewDestination />} />
              <Route path="/admin/order" element={<Order />} />
            </Route>
          </Route>
          {/* klo mau nambahin router d sini yak */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/penerbangan" element={<Penerbangan />} />
          <Route path="/destinasi" element={<DestinationPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
