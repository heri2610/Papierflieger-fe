import historyService from "../../services/historyService";
import { GET_HISTORY } from "../types/index";

export const getHistory = () =>
  async function (dispatch) {
    dispatch({
      type: GET_HISTORY,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      const response = await historyService.getHistory();
      dispatch({
        type: GET_HISTORY,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
      console.log(response);
    } catch (error) {
      dispatch({
        type: GET_HISTORY,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
