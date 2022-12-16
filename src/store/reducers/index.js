import { combineReducers } from "redux";
import authReducer from "./auth";
import airportReducer from "./airport";

export default combineReducers({
  authReducer,
  airportReducer,
});
