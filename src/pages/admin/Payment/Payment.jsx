import React from 'react';
import DataPayment from '../../../components/Admin/Payment/DataPayment';
import NavigationBar from '../../../components/Admin/Navbar/NavigationBar';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import './Payment.scss'

function Payment() {
  return (
    <div className="payment">
      <div className='dashboard'>
        <NavigationBar/>
        <div className="dashboard-container">
          <div className="sidebar">
            <Sidebar/>
          </div>
          <div className="home">
            <div className="title-payment">
              <h3>Pembayaran</h3>
            </div>
            <DataPayment/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment