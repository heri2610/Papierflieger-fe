import { PROCEED_PAYMENT, PROCEED_TRANSACTION, GET_ORDERS } from "../types/index";

const initialState = {
  loading: false,
  data: false,
  errorMessage: false,
  message: false,
};

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PROCEED_PAYMENT:
      return {
        ...state,
        loading: payload.loading,
        data: payload.data,
        errorMessage: payload.errorMessage,
      };
    case PROCEED_TRANSACTION:
      return {
        ...state,
        loading: payload.loading,
        message: payload.data,
        errorMessage: payload.errorMessage,
      };
    case GET_ORDERS:
      return {
        ...state,
        loading: payload.loading,
        data: payload.data.orderList,
        errorMessage: payload.errorMessage,
      };
    default:
      return state;
  }
};

export default orderReducer;
