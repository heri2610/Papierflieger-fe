import { LOGIN, REGISTER, LOGOUT, UPDATE_PROFILE } from "../types/index";

const initialState = {
  user: localStorage.getItem("user") || {},
  token: localStorage.getItem("token"),
  isLoggedIn: localStorage.getItem("user") ? true : false,
  message: false,
  isAdmin : localStorage.getItem("Admin") ? true : false
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload.username,
        token: payload.token,
        isLoggedIn: true,
        message: payload.message,
        isAdmin: payload.isAdmin,
      };
    case REGISTER:
      return {
        ...state,
        message: payload.message,
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
        token: "",
        isLoggedIn: false,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        user: payload,
      };
    default: {
      return state;
    }
  }
};

export default authReducer;
