import { combineReducers } from "redux";
import authReducer from "./auth";
import airportReducer from "./airport";
import airplaneReducer from "./airplane";
import ticketReducer from "./ticket";
import aboutUsReducer from "./additionals";
import destinasiReducer from "./destinasi";
import tiketsReducer from "./ticket";
import usersReducer from "./users";
import wishlistReducer from "./wishlist";
import orderReducer from "./order";
import notifReducer from "./notification";
import historyReducer from "./history";
import transactionsReducer from "./transaksi";

export default combineReducers({
  aboutUsReducer,
  historyReducer,
  notifReducer,
  tiketsReducer,
  destinasiReducer,
  airplaneReducer,
  authReducer,
  airportReducer,
  usersReducer,
  ticketReducer,
  wishlistReducer,
  orderReducer,
  transactionsReducer,
});
