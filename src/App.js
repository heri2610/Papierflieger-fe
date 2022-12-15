import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/user/LandingPage";
// import ProtectedRoute from "./pages/user/ProtectedRoute";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/Navbar/NavigationBar";
import RegisterPage from "./pages/user/Register";
import DestinationPage from "./pages/user/DestinationPage";
import Dashboard from "./pages/admin/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          {/* <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Chat />} />
            </Route> */}
          {/* klo mau nambahin router d sini yak */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/destinasi" element={<DestinationPage />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
