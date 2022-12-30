import { transactionsService } from "../../services/transaksiService";
import { GET_TRANSACTIONS } from "../types/index";

export const getTransactions = () =>
  async function (dispatch) {
    dispatch({
      type: GET_TRANSACTIONS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      const response = await transactionsService.getTransactions();
      dispatch({
        type: GET_TRANSACTIONS,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_TRANSACTIONS,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
