import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/user/LandingPage";
import ProtectedRoute from "./pages/user/ProtectedRoute";
import RegisterPage from "./pages/user/Register";
import Penerbangan from "./components/User/Penerbangan/Penerbangan";
import DestinationPage from "./pages/user/DestinationPage";
import Payment from "./components/User/Payment/Payment";
import WishlistPage from "./pages/user/WishlistPage";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import Profile from "./pages/user/Profile";
import Airplane from "./pages/admin/Airplane/Airplane";
import NewAirplane from "./pages/admin/Airplane/NewAirplane";
import Airport from "./pages/admin/Airport/Airport";
import NewAirport from "./pages/admin/Airport/NewAirport";
import Destination from "./pages/admin/Destination/Destination";
import NewDestination from "./pages/admin/Destination/NewDestination";
import Order from "./pages/admin/Order/Order";
import ProtectedRouteAdmin from "./pages/admin/ProtectedRoute";
import NotFoundPage from "./pages/user/NotFoundPage";
import Ticket from "./pages/admin/Ticket/Ticket";
import NewTicket from "./pages/admin/Ticket/NewTicket";
import DetailTicket from "./components/User/Ticket/DetailTicket";
import Identitas from "./components/User/Identitas/Identitas";
import Transaction from "./pages/admin/Transaction/Transaction";
import TransactionHistory from "./pages/user/TransactionHistory";
import Users from "./pages/admin/User/User";
import CheckIn from "./pages/user/Checkin";
import PageVerify from "./pages/user/PageVerify";
import NewNotification from "./pages/user/NewNotification";

function App() {
  window.onunload = () => {
    window.Storage.clear();
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/wishlist" element={<WishlistPage />} />
            <Route path="/user/notification" element={<NewNotification />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/detail" element={<DetailTicket />} />
            <Route path="/identitas" element={<Identitas />} />
            <Route
              path="/user/transaction/history"
              element={<TransactionHistory />}
            />
            <Route path="/checkin" element={<CheckIn />} />
            <Route element={<ProtectedRouteAdmin />}>
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/airplane" element={<Airplane />} />
              <Route path="/admin/airplane/new" element={<NewAirplane />} />
              <Route path="/admin/airport" element={<Airport />} />
              <Route path="/admin/airport/new" element={<NewAirport />} />
              <Route path="/admin/destination" element={<Destination />} />
              <Route
                path="/admin/destination/new"
                element={<NewDestination />}
              />
              <Route path="/admin/order" element={<Order />} />
              <Route path="/admin/ticket" element={<Ticket />} />
              <Route path="/admin/ticket/new" element={<NewTicket />} />
              <Route path="/admin/transaction" element={<Transaction />} />
              <Route path="/admin/users" element={<Users />} />
            </Route>
          </Route>
          {/* klo mau nambahin router d sini yak */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/penerbangan" element={<Penerbangan />} />
          <Route path="/destinasi" element={<DestinationPage />} />
          <Route path="/verify" element={<PageVerify />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
