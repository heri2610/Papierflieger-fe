import { GET_TICKET, FILTER_TICKET, ADD_TICKET, PUT_TICKET, DELETE_TICKET, GET_TICKETBYID } from "../types/index";

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
        filteredticket: payload.data,
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
        data: payload.airports,
      };
    case PUT_TICKET:
      return {
        ...state,
        message: "Data berhasil diubah",
      };
    case DELETE_TICKET:
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

export default tiketsReducer;
