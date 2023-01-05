import React from "react";
import "./Widget.scss";
import { BsCartPlusFill } from "react-icons/bs";
import {Link} from 'react-router-dom'

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
            <Link to='/admin/order' className="button">
                <span className="other">Selengkapnya</span>
            </Link>
        </div>
    </div>
  )
}

export default Widget