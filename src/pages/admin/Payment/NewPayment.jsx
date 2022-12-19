import React from 'react';
import AddPayment from '../../../components/Admin/Payment/AddPayment';
import NavigationBar from '../../../components/Admin/Navbar/NavigationBar';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';

function Airport() {
  return (
    <div className='dashboard'>
    <NavigationBar />
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="home">
        <div className="title">
          <h3>Menambahkan Data Pembayaran</h3>
        </div>
        <AddPayment />
      </div>
    </div>
  </div>
  )
}

export default Airport