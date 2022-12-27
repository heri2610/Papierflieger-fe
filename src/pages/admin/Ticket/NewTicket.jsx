import React from "react";
import AddTicket from "../../../components/Admin/Ticket/AddTicket";
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
              <h3>Menambahkan Data Ticket</h3>
            </div>
            <AddTicket />
          </div>
        </div>
    </div>
  )
}

export default Ticket