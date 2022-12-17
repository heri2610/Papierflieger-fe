import airportService from "../../services/airplaneService";
import { GET_AIRPLANE, ADD_AIRPLANE, PUT_AIRPLANE, DELETE_AIRPLANE, GET_AIRPLANEBYID } from "../types/index";

export const getAirplane = () =>
  async function (dispatch) {
    dispatch({
      type: GET_AIRPLANE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      const response = await airportService.getAirplane();
      dispatch({
        type: GET_AIRPLANE,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_AIRPLANE,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
export const getAirplaneById = (id) =>
  async function (dispatch) {
    try {
      const response = await airportService.getAirplaneById(id);
      dispatch({ type: GET_AIRPLANEBYID, payload: response.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
export const addAirplane = (data, history) =>
  async function (dispatch) {
    try {
      const response = await airportService.addAirplane(data);
      dispatch({ type: ADD_AIRPLANE, payload: response.data });
      history("/admin/airplane", { state: { message: response.data.message } });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const deleteAirplane = (id) =>
  async function (dispatch) {
    try {
      airportService.deleteAirplane(id);
      dispatch({ type: PUT_AIRPLANE });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const updateAirplane = (data, id) =>
  async function (dispatch) {
    try {
      const response = await airportService.updateAirplane(data, id);
      dispatch({ type: DELETE_AIRPLANE, payload: response.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
