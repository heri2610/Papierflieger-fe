import { combineReducers } from "redux";
import authReducer from "./auth";
import airportReducer from "./airport";
import airplaneReducer from "./airplane";
import { ticketReducer } from "./ticket";
import aboutUsReducer from "./additionals";
import destinasiReducer from "./destinasi";
import tiketsReducer from "./ticket";

export default combineReducers({
  aboutUsReducer,
  tiketsReducer,
  destinasiReducer,
  airplaneReducer,
  authReducer,
  airportReducer,
  ticketReducer,
});
