import { GET_AIRPLANE, ADD_AIRPLANE, PUT_AIRPLANE, DELETE_AIRPLANE, GET_AIRPLANEBYID } from "../types/index";

const initialState = {
  message: false,
  data: false,
  dataById: false,
};

const airplaneReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_AIRPLANE:
      return {
        ...state,
        message: payload.message,
        data: payload.airports,
      };
    case GET_AIRPLANEBYID:
      return {
        ...state,
        message: payload.message,
        data: payload.airports,
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
        message: "Data berhasil dihapus",
      };
    default: {
      return state;
    }
  }
};

export default airplaneReducer;
