import React from "react";
import "./Widget.scss";
import { BsPaypal } from "react-icons/bs";

const Widget = () => {
  return (
    <div className="widget">
        <div className="left">
            <div className="desc">
                <BsPaypal/>
                <span className="title-user">Transaksi</span>
            </div>
            <h3><span className="counter">150</span></h3>
            <h6><span className="more">5 transaksi</span></h6>
            <div className="button">
                <span className="other">Selengkapnya</span>
            </div>
        </div>
    </div>
  )
}

export default Widget