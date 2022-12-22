import React from "react"
import DataAirport from "../../../components/Admin/Airport/DataAirport"
import NavigationBar from "../../../components/Admin/Navbar/NavigationBar"
import Sidebar from "../../../components/Admin/Sidebar/Sidebar"
import "../Admin.scss"

function Airport() {
  return (
    <div className="dashboard">
    <NavigationBar />
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="home">
        <div className="tittle">
          <h3>Bandara</h3>
        </div>
        <DataAirport />
      </div>
    </div>
</div>
  )
}

export default Airport