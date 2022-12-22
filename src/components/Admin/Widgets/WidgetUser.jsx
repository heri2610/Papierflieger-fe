import React from "react";
import "./Widget.scss";
import { BsPersonPlusFill } from "react-icons/bs";

const Widget = () => {
  return (
    <div className="widget">
        <div className="left">
            <div className="desc">
                <BsPersonPlusFill/>
                <span className="title-user">Pengguna</span>
            </div>
            <h3><span className="counter">12345</span></h3>
            <h6><span className="more">5 pengguna</span></h6>
            <div className="button">
                <span className="other">Selengkapnya</span>
            </div>
        </div>
    </div>
  )
}

export default Widget