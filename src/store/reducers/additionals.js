import { ABOUT_US } from "../types/index";

const initialState = {
  message: false,
  data: [],
  loading: false,
  errorMessage: false,
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
    default: {
      return state;
    }
  }
};

export default aboutUsReducer;
