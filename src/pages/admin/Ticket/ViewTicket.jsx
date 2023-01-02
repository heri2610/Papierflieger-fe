import React from "react";
import SingleTicket from "../../../components/Admin/Ticket/SingleTicket";
import NavigationBar from "../../../components/Admin/Navbar/NavigationBar";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import "../Admin.scss"

const ViewTicket = () => {
  return (
    <div className="ticket">
        <NavigationBar />
        <div className="dashboard-container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="home">
            <div className="tittle">
              <h3>Tiket Perjalanan</h3>
            </div>
            <SingleTicket />
          </div>
        </div>
    </div>
  )
}

export default ViewTicket