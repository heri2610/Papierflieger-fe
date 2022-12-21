import TicketService from "../../services/ticketService";
import {
  GET_TICKET,
  FILTER_TICKET,
  ADD_TICKET,
  PUT_TICKET,
  DELETE_TICKET,
  GET_TICKETBYID,
} from "../types/index";

export const filterTickets = () =>
  async function (dispatch) {
    dispatch({
      type: GET_TICKET,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      const response = await TicketService.filterTickets();
      dispatch({
        type: GET_TICKET,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_TICKET,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
