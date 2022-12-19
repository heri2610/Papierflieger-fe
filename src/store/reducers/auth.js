import { LOGIN, REGISTER, LOGOUT, UPDATE_PROFILE, DETAIL_PROFILE } from "../types/index";

const initialState = {
  user: localStorage.getItem("user") || {},
  token: localStorage.getItem("token"),
  isLoggedIn: localStorage.getItem("user") ? true : false,
  message: false,
  isAdmin: localStorage.getItem("accessToken") === "A-*dmin?&&%mlm-plgsnwngbuay-$563iedjnjdxgdj" ? true : false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload.data.username,
        token: payload.data.token,
        isLoggedIn: true,
        message: payload.data.message,
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
    case DETAIL_PROFILE:
      return {
        ...state,
        user: payload,
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
