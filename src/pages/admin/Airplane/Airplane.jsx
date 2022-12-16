import React from 'react';
import DataAirplane from '../../../components/Admin/Airplane/DataAirplane';
import NavigationBar from '../../../components/Admin/Navbar/NavigationBar';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import './Airplane.scss';

const Airplane = () => {
  return (
    <div className='dashboard'>
    <NavigationBar />
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="home">
        <div className="airplane-title">
          <h3>Pesawat</h3>
        </div>
        <DataAirplane />
      </div>
    </div>
</div>
  )
}

export default Airplane