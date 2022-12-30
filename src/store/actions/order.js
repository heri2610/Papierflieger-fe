import { OrderService } from "../../services/orderService";
import { PROCEED_PAYMENT, PROCEED_TRANSACTION, GET_ORDERS } from "../types/index";

export const proceedPayment = (payload, navigate) =>
  async function (dispatch) {
    dispatch({
      type: PROCEED_PAYMENT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      const response = await OrderService.proceedPayment(payload);
      dispatch({
        type: PROCEED_PAYMENT,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
      navigate("/payment");
    } catch (error) {
      dispatch({
        type: PROCEED_PAYMENT,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
export const  getOrders = () =>
  async function (dispatch) {
    dispatch({
      type: GET_ORDERS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      const response = await OrderService.getOrders();
      dispatch({
        type: GET_ORDERS,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_ORDERS,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };

export const proceedTransaction = (payload) =>
  async function (dispatch) {
    dispatch({
      type: PROCEED_TRANSACTION,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      const response = await OrderService.proceedTransaction(payload);
      dispatch({
        type: PROCEED_TRANSACTION,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: PROCEED_TRANSACTION,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
