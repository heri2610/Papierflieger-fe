import { combineReducers } from "redux";
import authReducer from "./auth";
import airportReducer from "./airport";
import airplaneReducer from "./airplane";
import { ticketReducer } from "./ticket";

export default combineReducers({
  airplaneReducer,
  authReducer,
  airportReducer,
  ticketReducer,
});
