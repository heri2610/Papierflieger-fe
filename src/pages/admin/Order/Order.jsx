import React from "react";
import DataOrder from "../../../components/Admin/Order/DataOrder";
import NavigationBar from "../../../components/Admin/Navbar/NavigationBar";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
// import "./Order.scss"

function Order() {
  return (
    <div className="order">
      <div className="dashboard">
        <NavigationBar/>
        <div className="dashboard-container">
          <div className="sidebar">
            <Sidebar/>
          </div>
          <div className="home">
            <div className="title-order">
              <h3>Pesanan</h3>
            </div>
            <DataOrder/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order