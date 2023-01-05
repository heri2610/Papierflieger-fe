import React from "react";
import "./Widget.scss";
import { BsCartPlusFill } from "react-icons/bs";

const Widget = ({countOrders}) => {
  return (
    <div className="widget">
        <div className="left">
            <div className="desc">
                <BsCartPlusFill/>
                <span className="title-user">Pesanan</span>
            </div>
            <h3><span className="counter">{countOrders}</span></h3>
            <h6><span className="more">{countOrders} pesanan</span></h6>
            <div className="button">
                <span className="other">Selengkapnya</span>
            </div>
        </div>
    </div>
  )
}

export default Widget