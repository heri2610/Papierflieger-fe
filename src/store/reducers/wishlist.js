import { GET_WISHLIST, ADD_WISHLIST, DELETE_WISHLIST, } from "../types/index";

const initialState = {
  message: false,
  data: [],
  loading: false,
  errorMessage: false,
};

const wishlistReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_WISHLIST:
      return {
        ...state,
        data: payload.data.wishlist,
        loading: payload.loading,
        errorMessage: payload.errorMessage,
      };
    case ADD_WISHLIST:
      return {
        ...state,
        message: payload.message,
        errorMessage: payload.errorMessage,
      };
    case DELETE_WISHLIST:
      return {
        ...state,
        data: payload.data.wishlist,
        message: payload.message,
        errorMessage: payload.errorMessage,
      };
    default: {
      return state;
    }
  }
};

export default wishlistReducer;
