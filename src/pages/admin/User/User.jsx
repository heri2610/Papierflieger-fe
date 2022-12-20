import React from "react";
import DataUser from "../../../components/Admin/User/DataUser";
import NavigationBar from "../../../components/Admin/Navbar/NavigationBar"
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
// import "./User.scss"

const Users = () => {
  return (
    <div className="dashboard">
        <NavigationBar/>
        <div className="dashboard-container">
          <div className="sidebar">
            <Sidebar/>
          </div>
          <div className="home">
            <div className="title">
              <h3>Pengguna</h3>
            </div>
            <DataUser />
          </div>
        </div>
    </div>
  )
}

export default Users