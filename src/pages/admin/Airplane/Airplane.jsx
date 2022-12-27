import React from "react";
import DataAirplane from "../../../components/Admin/Airplane/DataAirplane";
import NavigationBar from "../../../components/Admin/Navbar/NavigationBar";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import "../Admin.scss";

const Airplane = () => {
  return (
    <div className="airplane">
      <NavigationBar />
      <div className="dashboard-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="home">
          <div className="tittle">
            <h3>Pesawat</h3>
          </div>
          <DataAirplane />
        </div>
      </div>
    </div>
  );
}

export default Airplane