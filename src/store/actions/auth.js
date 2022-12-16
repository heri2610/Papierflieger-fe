import AuthService from "../../services/authService";
import { LOGIN, REGISTER, LOGOUT, UPDATE_PROFILE } from "../types/index";

export const login = (params, history) =>
  async function (dispatch) {
    try {
      const response = await AuthService.login(params);
      dispatch({ type: LOGIN, payload: response.data });
      history("/");
    } catch (error) {
      // console.log(error);
      throw error;
    }
  };

export const register = (params) =>
  async function (dispatch) {
    try {
      const response = await AuthService.register(params);
      dispatch({ type: REGISTER, payload: response.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const logout = (params, history) =>
  async function (dispatch) {
    try {
      AuthService.logout(params);
      dispatch({ type: LOGOUT });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const updateProfile = (params) =>
  async function (dispatch) {
    try {
      const response = await AuthService.updateProfile(params);
      dispatch({ type: UPDATE_PROFILE, payload: response.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
