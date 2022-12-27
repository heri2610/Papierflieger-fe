import React from "react";
import ListBooking from "../../components/User/ListBooking/ListBooking";
import NavigationBar from "../../components/Navbar/NavigationBar";
import Footer from "../../components/Footer/Footer";

const TransactionHistory = () => {
  return (
    <div>
      <NavigationBar />
      <ListBooking />
      <Footer />
    </div>
  );
};

export default TransactionHistory;
