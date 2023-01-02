import React from "react";
import NavigationBar from "../../../components/Admin/Navbar/NavigationBar";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import DataTransaction from "../../../components/Admin/Transaction/DataTransaction";
import WidgetUser from "../../../components/Admin/Widgets/WidgetUser";
import WidgetTransaction from "../../../components/Admin/Widgets/WidgetTransaction";
import WidgetOrder from "../../../components/Admin/Widgets/WidgetOrder";
import "./Dashboard.scss"

function Dashboard() {
  return (
    <div className="dashboard">
        <NavigationBar/>
        <div className="dashboard-container">
          <div className="sidebar">
            <Sidebar/>
          </div>
          <div className="home">
            <div className="title-dashboard">
              <h4>Dashboard</h4>
            </div>
            <div className="widgets">
              <WidgetUser type="user"/>
              <WidgetTransaction type="balance"/>
              <WidgetOrder type="order"/>
            </div>
            <div className="list-container">
              <div className="list-title">Transaksi terakhir</div>
              <DataTransaction />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard