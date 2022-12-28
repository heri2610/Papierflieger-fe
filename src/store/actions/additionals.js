import additionasService from "../../services/additionalsService";
import { ABOUT_US } from "../types/index";

export const getAboutUs = () =>
  async function (dispatch) {
    dispatch({
      type: ABOUT_US,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      const response = await additionasService.getAboutUs();
      dispatch({
        type: ABOUT_US,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: ABOUT_US,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
