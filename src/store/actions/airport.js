import airportService from "../../services/airportService";
import { GET_AIRPORT, ADD_AIRPORT, PUT_AIRPORT, DELETE_AIRPORT, GET_AIRPORTBYID } from "../types/index";
import SweatAlert from '../../components/UIComponents/sweatAlert';

export const getAirport = () =>
  async function (dispatch) {
    dispatch({
      type: GET_AIRPORT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      const response = await airportService.getAirport();
      dispatch({
        type: GET_AIRPORT,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_AIRPORT,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
      SweatAlert(String(error.response.data.message), 'error');
    }
  };
export const getAirportById = (id) =>
  async function (dispatch) {
    dispatch({
      type: GET_AIRPORTBYID,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      const response = await airportService.getAirportById(id);
      dispatch({
        type: GET_AIRPORTBYID,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_AIRPORT,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
      SweatAlert(String(error.response.data.message), 'error');
    }
  };
;
export const addAirport = (data, history) =>
  async function (dispatch) {
    try {
      const response = await airportService.addAirport(data);
      dispatch({ type: ADD_AIRPORT, payload: response.data });
      history("/admin/airport");
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
  };

export const deleteAirport = (id) =>
  async function (dispatch) {
    try {
      const response = await airportService.deleteAirport(id);
      const response2 = await airportService.getAirport();
      dispatch({ type: DELETE_AIRPORT, payload: { message: response.data.message, data: response2.data } });
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
  };

export const updateAirport = (data, id) =>
  async function (dispatch) {
    try {
      const response = await airportService.updateAirport(data, id);
      const response2 = await airportService.getAirport();
      dispatch({ type: PUT_AIRPORT, payload: { message: response.data.message, data: response2.data } });
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
  };
