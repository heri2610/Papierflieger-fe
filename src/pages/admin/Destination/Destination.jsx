import React from "react";
import DataDestination from "../../../components/Admin/Destination/DataDestination";
import NavigationBar from "../../../components/Admin/Navbar/NavigationBar";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
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
          <h3>Destination</h3>
        </div>
        <DataDestination />
      </div>
    </div>
</div>
  )
}

export default Airport