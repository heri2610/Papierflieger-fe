import notifService from "../../services/notificationsService";
import { GET_NOTIF, SEE_NOTIF, COUNT_NOTIF, } from "../types/index";

export const getNotif = () =>
  async function (dispatch) {
    dispatch({
      type: GET_NOTIF,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      const response = await notifService.getNotif();
      dispatch({
        type: GET_NOTIF,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_NOTIF,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
export const countNotif = () =>
  async function (dispatch) {
    try {
      const response = await notifService.countNotif();
      dispatch({ type: COUNT_NOTIF, payload: response.data });
    } catch (error) {
      throw error;
    }
  };
export const seeNotif = () =>
  async function (dispatch) {
    try {
       await notifService.seeNotif();
      const response = await notifService.countNotif();
      console.log(response.data);
      dispatch({ type: SEE_NOTIF, payload: response.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
