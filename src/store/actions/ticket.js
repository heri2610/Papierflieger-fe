import { TicketService } from "../../services/ticketService";
import {
  GET_TICKET,
  FILTER_TICKET,
  ADD_TICKET,
  PUT_TICKET,
  DELETE_TICKET,
  GET_TICKETBYID,
} from "../types/index";

export const filterTickets = (tujuan, history) =>
  async function (dispatch) {
    dispatch({
      type: FILTER_TICKET,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      const response = await TicketService.filterTickets(tujuan);
      dispatch({
        type: FILTER_TICKET,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
      history("/penerbangan");
    } catch (error) {
      dispatch({
        type: FILTER_TICKET,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
