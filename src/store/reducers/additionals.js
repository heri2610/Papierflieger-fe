import { ABOUT_US, DASHBOARD_ADMIN } from "../types/index";

const initialState = {
  message: false,
  data: [],
  loading: false,
  errorMessage: false,
  count: false,
  transactionsLates: false,
};

const aboutUsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ABOUT_US:
      return {
        ...state,
        data: payload.data.dataTim,
        loading: payload.loading,
        errorMessage: payload.errorMessage,
      };
    case DASHBOARD_ADMIN:
      return {
        ...state,
        count: payload.count,
        transactionsLates: payload.transactionsLates,
      };
    default: {
      return state;
    }
  }
};

export default aboutUsReducer;
