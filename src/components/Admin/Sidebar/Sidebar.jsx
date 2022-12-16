import React from 'react';
import {
    BsFillHouseFill,
    BsPersonPlusFill,
    BsFillCreditCard2FrontFill,
    BsPaypal
} from "react-icons/bs";
import { 
    BiPaperPlane,
    BiLogOut
 } from "react-icons/bi";
import {
    FaPlane,
    FaTicketAlt,
} from "react-icons/fa";
import { MdAttractions } from "react-icons/md";
import './Sidebar.scss';
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="center">
            <ul>
                <Link to="/" style={{textDecoration:"none"}}>
                    <li>
                        <BsFillHouseFill className='icon'/><span>Dashboard</span>
                    </li>
                </Link>
                <Link to="/users" style={{textDecoration:"none"}}>
                    <li>
                        <BsPersonPlusFill className='icon'/><span>Pengguna</span>
                    </li>
                </Link>
                <Link to="/airplane" style={{textDecoration:"none"}}>
                    <li>
                        <FaPlane className='icon'/><span>Pesawat</span>
                    </li>
                </Link>
                <Link to="/airport" style={{textDecoration:"none"}}>
                    <li>
                        <BiPaperPlane className='icon'/><span>Bandara</span>
                    </li>
                </Link>
                <Link to="/payment" style={{textDecoration:"none"}}>
                    <li>
                        <BsFillCreditCard2FrontFill className='icon'/><span>Pembayaran</span>
                    </li>
                </Link>
                <Link to="/destination" style={{textDecoration:"none"}}>
                    <li>
                        <MdAttractions className='icon'/><span>Destinasi</span>
                    </li>
                </Link>
                <Link to="/ticket" style={{textDecoration:"none"}}>
                    <li>
                        <FaTicketAlt className='icon'/><span>Tiket</span>
                    </li>
                </Link>
                <Link to="/transaction" style={{textDecoration:"none"}}>
                    <li>
                        <BsPaypal className='icon'/><span>Transaksi</span>
                    </li>
                </Link>
                <Link to="/logout" style={{textDecoration:"none"}}>
                    <li>
                        <BiLogOut className='icon'/><span>Keluar</span>
                    </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar