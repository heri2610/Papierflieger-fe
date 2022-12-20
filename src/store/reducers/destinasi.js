import { GET_DESTINASI, ADD_DESTINASI, PUT_DESTINASI, DELETE_DESTINASI, GET_DESTINASIBYID } from "../types/index";

const initialState = {
  message: false,
  dataById: false,
  data: [],
  loading: false,
  errorMessage: false,
};

const DESTINASIReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_DESTINASI:
      return {
        ...state,
        data: payload.data.destinations,
        loading: payload.loading,
        errorMessage: payload.errorMessage,
      };
    case GET_DESTINASIBYID:
      return {
        ...state,
        data: payload.data.destinations,
        loading: payload.loading,
        errorMessage: payload.errorMessage,
      };
    case ADD_DESTINASI:
      return {
        ...state,
        message: "Data berhasil ditambahkan",
      };
    case PUT_DESTINASI:
      return {
        ...state,
        message: "Data berhasil diubah",
      };
    case DELETE_DESTINASI:
      return {
        ...state,
        data: payload.data.destinations,
        message: payload.message,
      };
    default: {
      return state;
    }
  }
};

export default DESTINASIReducer;