import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavigationBar from "../../../components/Admin/Navbar/NavigationBar";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import DataTransaction from "../../../components/Admin/Transaction/DataTransaction";
import WidgetUser from "../../../components/Admin/Widgets/WidgetUser";
import WidgetTransaction from "../../../components/Admin/Widgets/WidgetTransaction";
import WidgetOrder from "../../../components/Admin/Widgets/WidgetOrder";
import "./Dashboard.scss"
import {
  dashboard,
} from "../../../store/actions/additionals";

function Dashboard() {
  const {  count, transactionsLates  } = useSelector(
    (state) => state.aboutUsReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dashboard());
  }, [dispatch]);
  return (
    <div className="dashboard">
        <NavigationBar/>
        <div className="dashboard-container">
          <div className="sidebar">
            <Sidebar/>
          </div>
          <div className="home">
            <div className="title-dashboard">
              <h4>Dashboard</h4>
            </div>
            <div className="widgets">
              <WidgetUser type="user" countUsers={count.countUsers}/>
              <WidgetTransaction type="balance" countTransactions={count.countTransactions}/>
              <WidgetOrder type="order" countOrders={count.countOrders}/>
            </div>
            <div className="list-container">
              <div className="list-title">Transaksi terakhir</div>
              <DataTransaction transaksi={transactionsLates} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard