import airplaneService from "../../services/airplaneService";
import { GET_AIRPLANE, ADD_AIRPLANE, PUT_AIRPLANE, DELETE_AIRPLANE, GET_AIRPLANEBYID } from "../types/index";
import SweatAlert from '../../components/UIComponents/sweatAlert';

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
      const response = await airplaneService.getAirplane();
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
      SweatAlert(String(error.response.data.message), 'error');
    }
  };
export const getAirplaneById = (id) =>
  async function (dispatch) {
    dispatch({
      type: GET_AIRPLANEBYID,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      const response = await airplaneService.getAirplaneById(id);
      dispatch({
        type: GET_AIRPLANEBYID,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_AIRPLANEBYID,
        payload: {
          loading: true,
          data: false,
          errorMessage: false,
        },
      });
      SweatAlert(String(error.response.data.message), 'error');
    }
  };
export const addAirplane = (data, history) =>
  async function (dispatch) {
    try {
      const response = await airplaneService.addAirplane(data);
      dispatch({ type: ADD_AIRPLANE, payload: response.data });
      history("/admin/airplane");
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
  };

export const deleteAirplane = (id) =>
  async function (dispatch) {
    try {
      const response = await airplaneService.deleteAirplane(id);
      const response2 = await airplaneService.getAirplane();
      dispatch({ type: DELETE_AIRPLANE, payload: { message: response.data.message, data: response2.data } });
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
  };

export const updateAirplane = (data, id) =>
  async function (dispatch) {
    try {
      const response = await airplaneService.updateAirplane(data, id);
      dispatch({ type: PUT_AIRPLANE, payload: response.data });
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
  };
