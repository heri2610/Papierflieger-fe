import notifService from "../../services/notificationsService";
import { GET_NOTIF, SEE_NOTIF,  } from "../types/index";

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
      console.log(response.data);
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
export const seeNotif = (id) =>
  async function (dispatch) {
    try {
      const response = await notifService.seeNotif(id);
      dispatch({ type: SEE_NOTIF, payload: response.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
