import React from "react";
import DataTransaction from "../../../components/Admin/Transaction/DataTransaction";
import NavigationBar from "../../../components/Admin/Navbar/NavigationBar"
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import "../Admin.scss"

const Transaction = () => {
  return (
    <div className="dashboard">
        <NavigationBar/>
        <div className="dashboard-container">
          <div className="sidebar">
            <Sidebar/>
          </div>
          <div className="home">
            <div className="tittle">
              <h3>Transaksi</h3>
            </div>
            <DataTransaction />
          </div>
        </div>
    </div>
  )
}

export default Transaction