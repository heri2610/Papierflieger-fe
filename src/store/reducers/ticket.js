import {
  GET_TICKET,
  FILTER_TICKET,
  ADD_TICKET,
  PUT_TICKET,
  DELETE_TICKET,
  GET_TICKETBYID,
} from "../types/index";

const initialState = {
  tickets: [],
  ticket: {},
  loading: false,
  filteredticket: [],
  error: false,
};

export const ticketReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TICKET:
      return {
        ...state,
        tickets: payload.data,
        loading: false,
      };
    case FILTER_TICKET:
      return {
        ...state,
        filteredticket: payload.data,
        loading: false,
      };
    case ADD_TICKET:
      return {
        ...state,
        tickets: [...state.tickets, payload.data],
        loading: false,
      };
    case PUT_TICKET:
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === payload.data.id ? (ticket = payload.data) : ticket
        ),
        loading: false,
      };
    case DELETE_TICKET:
      return {
        ...state,
        tickets: state.tickets.filter((ticket) => ticket.id !== payload.data),
        loading: false,
      };
    case GET_TICKETBYID:
      return {
        ...state,
        ticket: payload.data,
        loading: false,
      };
    default:
      return state;
  }
};
