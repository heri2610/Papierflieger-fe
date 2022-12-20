import React from "react";
import AddAirplane from "../../../components/Admin/Airplane/AddAirplane";
import NavigationBar from "../../../components/Admin/Navbar/NavigationBar";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import "./Airplane.scss"

const Airplane = () => {
  return (
    <div className="dashboard">
    <NavigationBar />
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="home">
        <div className="airplane-title">
          <h5>Menambahkan data Pesawat</h5>
        </div>
        <AddAirplane />
      </div>
    </div>
</div>
  )
}

export default Airplane