import { GET_AIRPLANE, ADD_AIRPLANE, PUT_AIRPLANE, DELETE_AIRPLANE, GET_AIRPLANEBYID } from "../types/index";

const initialState = {
  message: false,
  dataById: false,
  data: [],
  loading: false,
  errorMessage: false,
};

const airplaneReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_AIRPLANE:
      return {
        ...state,
        data: payload.data.dataAirplane,
        loading: payload.loading,
        errorMessage: payload.errorMessage,
      };
    case GET_AIRPLANEBYID:
      return {
        ...state,
        data: payload.data.dataAirplane,
        loading: payload.loading,
        errorMessage: payload.errorMessage,
      };
    case ADD_AIRPLANE:
      return {
        ...state,
        message: "Data berhasil ditambahkan",
        data: payload.airports,
      };
    case PUT_AIRPLANE:
      return {
        ...state,
        message: "Data berhasil diubah",
      };
    case DELETE_AIRPLANE:
      return {
        ...state,
        data: payload.data.dataAirplane,
        message: payload.message,
      };
    default: {
      return state;
    }
  }
};
      
export default airplaneReducer;
