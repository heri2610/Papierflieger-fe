import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/user/LandingPage";
// import ProtectedRoute from "./pages/user/ProtectedRoute";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/Navbar/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Router>
        <div className="App">
          <Routes>
            {/* <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Chat />} />
            </Route> */}
            <Route path="/" element={<LandingPage />} />
            {/* klo mau nambahin router d sibi yak */}
            {/* <Route path="/register" element={<Register />} /> */}
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
