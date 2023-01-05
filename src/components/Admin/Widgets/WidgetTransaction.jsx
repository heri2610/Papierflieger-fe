import React from "react";
import "./Widget.scss";
import { BsPaypal } from "react-icons/bs";
import { Link } from "react-router-dom";

const Widget = ({countTransactions}) => {
  return (
    <div className="widget">
        <div className="left">
            <div className="desc">
                <BsPaypal/>
                <span className="title-user">Transaksi</span>
            </div>
            <h3><span className="counter">{countTransactions}</span></h3>
            <h6><span className="more">{countTransactions} transaksi</span></h6>
            <Link to='/admin/transaction' className="button">
                <span className="other">Selengkapnya</span>
            </Link>
        </div>
    </div>
  )
}

export default Widget