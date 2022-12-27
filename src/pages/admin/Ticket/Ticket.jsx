import React from "react";
import DataTicket from "../../../components/Admin/Ticket/DataTicket";
import NavigationBar from "../../../components/Admin/Navbar/NavigationBar";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import "../Admin.scss"

function Ticket() {
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
            <DataTicket />
          </div>
        </div>
    </div>
  )
}

export default Ticket