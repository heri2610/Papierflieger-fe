import React from "react";
import "./Widget.scss";
import { BsPaypal } from "react-icons/bs";
import { Link } from "react-router-dom";

const Widget = () => {
  return (
    <div className="widget">
        <div className="left">
            <div className="desc">
                <BsPaypal/>
                <span className="title-user">Transaksi</span>
            </div>
            <h3><span className="counter">8</span></h3>
            <h6><span className="more">2 transaksi</span></h6>
            <Link to='/admin/transaction' className="button">
                <span className="other">Selengkapnya</span>
            </Link>
        </div>
    </div>
  )
}

export default Widget