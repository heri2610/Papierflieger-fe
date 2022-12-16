import React from 'react';
import Chart from '../../../components/Admin/Chart/Chart';
import Featured from '../../../components/Admin/Featured/Featured';
import NavigationBar from '../../../components/Admin/Navbar/NavigationBar';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
// import DataTransaction from '../../../components/Admin/Transaction/DataTransaction';
import Widget from '../../../components/Admin/Widgets/Widget';
import './Dashboard.scss'

function Dashboard() {
  return (
    <div className='dashboard'>
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
              <Widget type='user'/>
              <Widget type='balance'/>
              <Widget type='order'/>
            </div>
            <div className="charts">
              <Featured/>
              <Chart/>
            </div>
            <div className="list-container">
              <div className="list-title">Transaksi terakhir</div>
              {/* <DataTransaction /> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard