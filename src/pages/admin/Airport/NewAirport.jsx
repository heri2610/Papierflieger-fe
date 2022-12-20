import React from "react"
import AddAirport from "../../../components/Admin/Airport/AddAirport";
import NavigationBar from "../../../components/Admin/Navbar/NavigationBar";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import "./Airport.scss"

function Airport() {
  return (
    <div className="dashboard">
    <NavigationBar />
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="home">
        <div className="title-airport">
          <h3>Menambahkan Data Bandara</h3>
        </div>
        <AddAirport />
      </div>
    </div>
</div>
  )
}

export default Airport