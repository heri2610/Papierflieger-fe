import React from "react";
import NavigationBar from "../../components/Navbar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import Notification from "../../components/UIComponents/Notification";
import "./NewNotification.scss"

const NewNotification = () => {
  return (
    <div className="new-notification">
        <NavigationBar/>
        <div className="notif">
            <div className="notif-title">
                <h3>Notifikasi</h3>
            </div>
            <Notification/>
            <Notification/>
        </div>
        <Footer/>
    </div>
  )
}

export default NewNotification