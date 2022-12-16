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
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import EditProfile from "./pages/user/EditProfile";
import Profile from "./pages/user/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/profile/edit" element={<EditProfile />} />
          </Route>
          {/* klo mau nambahin router d sini yak */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/penerbangan" element={<Penerbangan />} />
          <Route path="/destinasi" element={<DestinationPage />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
