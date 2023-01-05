import React from "react";
import "./Widget.scss";
import { BsPersonPlusFill } from "react-icons/bs";
import {Link} from 'react-router-dom'

const Widget = () => {
  return (
    <div className="widget">
        <div className="left">
            <div className="desc">
                <BsPersonPlusFill/>
                <span className="title-user">Pengguna</span>
            </div>
            <h3><span className="counter">10</span></h3>
            <h6><span className="more">5 pengguna</span></h6>
            <Link to="/admin/users" className="button">
                <span className="other">Selengkapnya</span>
            </Link>
        </div>
    </div>
  )
}

export default Widget