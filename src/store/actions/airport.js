import airportService from "../../services/airportService";
import { GET_AIRPORT, ADD_AIRPORT, PUT_AIRPORT, DELETE_AIRPORT, GET_AIRPORTBYID } from "../types/index";

export const getAirport = () =>
  async function (dispatch) {
    try {
      const response = await airportService.getAirport();
      dispatch({ type: GET_AIRPORT, payload: response.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
export const getAirportById = (id) =>
  async function (dispatch) {
    try {
      const response = await airportService.getAirportById(id);
      dispatch({ type: GET_AIRPORTBYID, payload: response.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
;
export const addAirport = (data) =>
  async function (dispatch) {
    try {
      const response = await airportService.addAirport(data);
      dispatch({ type: ADD_AIRPORT, payload: response.data });
      // history("/");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const deleteAirport = (id) =>
  async function (dispatch) {
    try {
      airportService.deleteAirport(id);
      dispatch({ type: PUT_AIRPORT });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const updateAirport = (data, id) =>
  async function (dispatch) {
    try {
      const response = await airportService.updateAirport(data, id);
      dispatch({ type: DELETE_AIRPORT, payload: response.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
