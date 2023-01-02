import notifService from "../../services/notificationsService";
import { GET_NOTIF, COUNT_NOTIF, } from "../types/index";

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
      const response3 = await notifService.countNotif();
      dispatch({
        type: GET_NOTIF,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
          count: response3.data
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
