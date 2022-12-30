import React,{useEffect} from "react";
import NavigationBar from "../../components/Navbar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import Notification from "../../components/UIComponents/Notification";
import { getNotif } from "../../store/actions/notifications";
import { useDispatch,useSelector } from "react-redux";
import "./NewNotification.scss"

const NewNotification = () => {
  const {data} = useSelector((state) => state.notifReducer
  );
  const dispatch = useDispatch();
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
            <Notification/>
            <Notification/>
        </div>
        <Footer/>
    </div>
  )
}

export default NewNotification