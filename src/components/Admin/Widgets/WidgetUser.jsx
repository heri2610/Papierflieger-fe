import React from "react";
import "./Widget.scss";
import { BsPersonPlusFill } from "react-icons/bs";
import {Link} from 'react-router-dom'

const Widget = ({countUsers}) => {
  return (
    <div className="widget">
        <div className="left">
            <div className="desc">
                <BsPersonPlusFill/>
                <span className="title-user">Pengguna</span>
            </div>
            <h3><span className="counter">{countUsers}</span></h3>
            <h6><span className="more">{countUsers} pengguna</span></h6>
            <Link to="/admin/users" className="button">
                <span className="other">Selengkapnya</span>
            </Link>
        </div>
    </div>
  )
}

export default Widget