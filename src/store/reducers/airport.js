import { GET_AIRPORT, ADD_AIRPORT, PUT_AIRPORT, DELETE_AIRPORT, GET_AIRPORTBYID } from "../types/index";

const initialState = {
  message: false,
  dataById: false,
  data: [],
  loading: false,
  errorMessage: false,
};

const airportReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_AIRPORT:
      return {
        ...state,
        data: payload.data.airports,
        loading: payload.loading,
        errorMessage: payload.errorMessage,
      };
    case GET_AIRPORTBYID:
      return {
        ...state,
        message: payload.message,
        data: payload.airports,
      };
    case ADD_AIRPORT:
      return {
        ...state,
        message: "Data berhasil ditambahkan",
        data: payload.airports,
      };
    case PUT_AIRPORT:
      return {
        ...state,
        message: "Data berhasil diubah",
      };
    case DELETE_AIRPORT:
      return {
        ...state,
        data: payload.data.airports,
        message: payload.message,
      };
    default: {
      return state;
    }
  }
};

export default airportReducer;
