import { combineReducers } from "redux";
import authReducer from "./auth";
import airportReducer from "./airport";
import airplaneReducer from "./airplane";

export default combineReducers({
  airplaneReducer,
  authReducer,
  airportReducer,
});
