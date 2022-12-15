import airportService from "../../services/airportService";
import { GET_AIRPORT, ADD_AIRPORT, PUT_AIRPORT, DELETE_AIRPORT } from "../types/index";

export const getAirport = (params) =>
  async function (dispatch) {
    try {
      const response = await airportService.login(params);
      dispatch({ type: GET_AIRPORT, payload: response.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const addAirport = (params, history) =>
  async function (dispatch) {
    try {
      const response = await airportService.register(params);
      dispatch({ type: ADD_AIRPORT, payload: response.data });
      history("/");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const deleteAirport = (params, history) =>
  async function (dispatch) {
    try {
      airportService.logout(params);
      dispatch({ type: PUT_AIRPORT });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const updateAirport = (params) =>
  async function (dispatch) {
    try {
      const response = await airportService.updateProfile(params);
      dispatch({ type: DELETE_AIRPORT, payload: response.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
