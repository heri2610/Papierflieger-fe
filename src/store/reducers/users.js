import { GET_USERS, ADD_ADMIN } from "../types/index";

const initialState = {
  message: false,
  data: [],
  loading: false,
  errorMessage: false,
};

const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        data: payload.data.users,
        loading: payload.loading,
        errorMessage: payload.errorMessage,
      };
    case ADD_ADMIN:
      return {
        ...state,
        message: payload.message,
        data: payload.data.users,
        loading: payload.loading,
        errorMessage: payload.errorMessage,
      };
    default: {
      return state;
    }
  }
};
      
export default usersReducer;
