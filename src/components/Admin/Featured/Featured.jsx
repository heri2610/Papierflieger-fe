import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import './Featured.scss';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h6 className="title-feature">Total Pendapatan</h6>
      </div>
      <div className="bottom">
        <div className="featured-chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
      </div>
    </div>
  )
}

export default Featured