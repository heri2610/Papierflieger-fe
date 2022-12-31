import React,{useEffect,useState} from "react";
import NavigationBar from "../../components/Navbar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import Notification from "../../components/UIComponents/Notification";
import "./NewNotification.scss"
import {useSelector, useDispatch} from "react-redux";
import { getNotif } from "../../store/actions/notifications";

const NewNotification = () => {
  const {data} = useSelector(state=>state.notifReducer)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getNotif())
  },[dispatch])
  console.log(data)
  return (
    <div className="new-notification">
        <NavigationBar/>
        <div className="notif">
            <div className="notif-title">
                <h3>Notifikasi</h3>
            </div>
            {data&&data.notifikasi.map(item=><Notification data={item}/>)}
            
        </div>
        <Footer/>
    </div>
  )
}

export default NewNotification