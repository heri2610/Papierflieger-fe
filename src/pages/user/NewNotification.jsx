import React, { useEffect } from "react";
import NavigationBar from "../../components/Navbar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import Notification from "../../components/UIComponents/Notification";
import "./NewNotification.scss";
import { useSelector, useDispatch } from "react-redux";
import { getNotif } from "../../store/actions/notifications";
import Airplane404 from "../../components/UIComponents/img/Airplane404.svg";

const NewNotification = () => {
  const { data } = useSelector(state => state.notifReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotif());
  }, [dispatch]);
  console.log(data)
  return (
    <div className="new-notification">
      <NavigationBar />
      <div className="notif">
        <div className="notif-title">
          <h3>Notifikasi</h3>
        </div>
        {data && data.notifikasi?.map(item => <Notification data={item} />)}
        {(!data || data.notifikasi?.length === 0) && (
          <div className="d-flex flex-column align-items-center my-5">
            <img src={Airplane404} width={"180px"} alt="" />
            <h3 className="mt-4">Belum ada notifikasi</h3>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default NewNotification;