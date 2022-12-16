import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import {
  // BrowserRouter,
  // Routes,
  Route
} from 'react-router-dom'
import Airplane from './Airplane/Airplane';
import NewAirplane from './Airplane/NewAirplane';
// import Payment from './pages/Payment/Payment';
// import NewPayment from './pages/Payment/NewPayment';
// import Ticket from './pages/Ticket/Ticket';
// import NewTicket from './pages/Ticket/NewTicket';
// import Airport from './pages/Airport/Airport';
// import NewAirport from './pages/Airport/NewAirport';
// import Transaction from './pages/Transaction/Transaction';
// import Order from './pages/Order/Oder';
// import Users from './pages/Users/User';
// import Destination from './pages/Destination/Destination';
// import NewDestination from './pages/Destination/NewDestination';

const Admin = () => {
  return (
    <div className="admin">
        <Route path='/admin'>
          <Route index element={<Dashboard/>}/>
          {/* <Route path='transaction'>
            <Route index element={<Transaction/>}/>
          </Route> */}
          {/* <Route path='airplane'>
            <Route index element={<Airplane />}/>
            <Route path='new' element={<NewAirplane />}/>
          </Route> */}
          {/* <Route path='airport'>
            <Route index element={<Airport/>}/>
            <Route path='new' element={<NewAirport/>}/>
          </Route> */}
          {/* <Route path='payment'>
            <Route index element={<Payment/>}/>
            <Route path='new' element={<NewPayment/>}/>
          </Route> */}
          {/* <Route path='destination'>
            <Route index element={<Destination/>}/>
            <Route path='new' element={<NewDestination/>}/>
          </Route> */}
          {/* <Route path='ticket'>
            <Route index element={<Ticket/>}/>
            <Route path='new' element={<NewTicket/>}/>
          </Route> */}
          {/* <Route path='order'>
            <Route index element={<Order />}/>
          </Route> */}
          {/* <Route path='users'>
            <Route index element={<Users/>}/>
          </Route> */}
        </Route>
    </div>
  );
}

export default Admin;
