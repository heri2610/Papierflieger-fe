import { GET_HISTORY  } from "../types/index";

const initialState = {
  message: false,
  data: [],
  loading: false,
  errorMessage: false,
};

const historyReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_HISTORY:
      return {
        ...state,
        data: payload.data.airports,
        loading: payload.loading,
        errorMessage: payload.errorMessage,
      };
    default: {
      return state;
    }
  }
};

export default historyReducer;
