import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {FiMoreVertical} from 'react-icons/fi'
import './Featured.scss';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h6 className="title-feature">Total Pendapatan</h6>
        <FiMoreVertical/>
      </div>
      <div className="bottom">
        <div className="featured-chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="sales-title">Total penjualan hari ini</p>
        <p className="sales-amount">Rp. 34.000.000</p>
        <p className="desc">Pembayaran terakhir masih berlangsung</p>
        <div className="summary">
          <div className="item">
            <div className="item-title">Target</div>
              <div className="item-result">
                <div className="result-amount">Rp. 1.500.000.000</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured