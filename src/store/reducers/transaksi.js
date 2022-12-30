import { GET_TRANSACTIONS } from "../types/index";

const initialState = {
  loading: false,
  data: false,
  errorMessage: false,
  message: false,
};

const transactionsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        loading: payload.loading,
        data: payload.data.transaksi,
        errorMessage: payload.errorMessage,
      };
    default:
      return state;
  }
};

export default transactionsReducer;
