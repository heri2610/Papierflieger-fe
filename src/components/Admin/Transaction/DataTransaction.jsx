import React from 'react';
import DataTransaction from '../../components/Transaction/DataTransaction';
import NavigationBar from '../../components/Navbar/NavigationBar'
import Sidebar from '../../components/Sidebar/Sidebar';
import './Transaction.scss'

const Transaction = () => {
  return (
    <div className='dashboard'>
        <NavigationBar/>
        <div className="dashboard-container">
          <div className="sidebar">
            <Sidebar/>
          </div>
          <div className="home">
            <div className="title-transaction">
              <h3>Transaksi</h3>
            </div>
            <DataTransaction />
          </div>
        </div>
    </div>
  )
}

export default Transaction