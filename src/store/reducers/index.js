import { combineReducers } from "redux";
import authReducer from "./auth";
import airportReducer from "./airport";
import airplaneReducer from "./airplane";
import { ticketReducer } from "./ticket";
import aboutUsReducer from "./additionals";
import destinasiReducer from "./destinasi";

export default combineReducers({
  aboutUsReducer,
  destinasiReducer,
  airplaneReducer,
  authReducer,
  airportReducer,
  ticketReducer,
});
