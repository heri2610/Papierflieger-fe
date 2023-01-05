import AuthService from "../../services/authService";
import { LOGIN, REGISTER, LOGOUT, UPDATE_PROFILE, DETAIL_PROFILE,CHANGE_PASSWORD } from "../types/index";

export const login = (params, history) =>
  async function (dispatch) {
    try {
      const response = await AuthService.login(params);
      const admin = response.data.role === "Admin" ? true : false;
      dispatch({ type: LOGIN, payload: { data: response.data, isAdmin: admin } });
      history("/");
    } catch (error) {
      throw error;
    }
  };

export const register = (params) =>
  async function (dispatch) {
    try {
      const response = await AuthService.register(params);
      dispatch({ type: REGISTER, payload: response.data });
    } catch (error) {
      throw error;
    }
  };
export const changePassword = (params) =>
  async function (dispatch) {
    try {
      const response = await AuthService.changePassword(params);
      dispatch({ type: CHANGE_PASSWORD, payload: {mess: response.data.message , err: false} });
    } catch (error) {
      dispatch({ type: CHANGE_PASSWORD, payload:{mess: false , err:error.data.message}  });
    }
  };

export const logout = (history) =>
  async function (dispatch) {
    try {
      AuthService.logout();
      dispatch({ type: LOGOUT });
      history("/")
    } catch (error) {
      throw error;
    }
  };

export const getProfile = () =>
  async function (dispatch) {
    dispatch({
      type: DETAIL_PROFILE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      const response = await AuthService.getProfile();
      dispatch({
        type: DETAIL_PROFILE,
        payload: {
          profile: response.data.profile,
          loading: false,
          errorMessage: false,
        },
      });

    } catch (error) {
      dispatch({
        type: DETAIL_PROFILE,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };

export const updateProfile = (params) =>
  async function (dispatch) {
    dispatch({
      type: UPDATE_PROFILE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
        message: false
      },
    });
    try {
      const response = await AuthService.updateProfile(params);
      const response2 = await AuthService.getProfile();
      dispatch({
        type: UPDATE_PROFILE, payload: {
          message: response.data.message, profile: response2.data.profile,
          loading: false, errorMessage: false
        }
      });
    } catch (error) {
      dispatch({
        type: UPDATE_PROFILE,
        payload: {
          loading: false,
          data: false,
          errorMessage: false,
          message: error.message
        },
      });
    }
  };