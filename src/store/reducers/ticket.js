import {
  GET_TICKET,
  FILTER_TICKET,
  ADD_TICKET,
  PUT_TICKET,
  DELETE_TICKET,
  GET_TICKETBYID,
  GET_TICKETDETAIL,
} from "../types/index";

const initialState = {
  message: false,
  tickets: [],
  ticket: {},
  data: [],
  loading: false,
  errorMessage: false,
  datAirport: false,
};

const tiketsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TICKET:
      return {
        ...state,
        data: payload.data.dataTicket,
        loading: payload.loading,
        errorMessage: payload.errorMessage,
        datAirport: payload.datAirport,
      };
    case FILTER_TICKET:
      return {
        ...state,
        tiketBerangkat: payload.data.tiketBerangkat,
        tiketPulang: payload.data.tiketPulang,
        loading: false,
      };
    case GET_TICKETBYID:
      return {
        ...state,
        data: payload.data,
        loading: payload.loading,
        errorMessage: payload.errorMessage,
      };
    case ADD_TICKET:
      return {
        ...state,
        message: "Data berhasil ditambahkan",
      };
    case PUT_TICKET:
      return {
        ...state,
        message: "Data berhasil diubah",
      };
    case DELETE_TICKET:
      return {
        ...state,
        message: payload.message,
      };
    case GET_TICKETDETAIL:
      return { ticket: payload.ticket, penumpang: payload.penumpang };
    default: {
      return state;
    }
  }
};

export default tiketsReducer;
