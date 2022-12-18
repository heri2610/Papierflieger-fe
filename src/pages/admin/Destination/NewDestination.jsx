import React from 'react'
import AddDestination from '../../../components/Admin/Destination/AddDestination'
import NavigationBar from '../../../components/Admin/Navbar/NavigationBar'
import Sidebar from '../../../components/Admin/Sidebar/Sidebar'
import './Destination.scss'

function Airport() {
  return (
    <div className='dashboard'>
    <NavigationBar />
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="home">
        <div className="title-destination">
          <h3>Menambahkan Data Destinasi</h3>
        </div>
        <AddDestination />
      </div>
    </div>
</div>
  )
}

export default Airport