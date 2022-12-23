import { TicketService } from "../../services/ticketService";
import airportService from "../../services/airportService";
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
        datAirport: false,
      },
    });
    try {
      const datAirport = []
      const response = await TicketService.filterTickets(tujuan);
      const response2 = await airportService.getAirport();
      const airport = response2.data.airports
      airport?.forEach((bandara)=>{
        datAirport.push({label:bandara.city, value:bandara.id})
      })
      dispatch({
        type: FILTER_TICKET,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
          datAirport: datAirport,
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
          datAirport: false,
        },
      });
    }
  };
export const getTicket = () =>
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
      const response = await TicketService.getTicket();
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
        type: FILTER_TICKET,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
export const getTicketById = (id) =>
  async function (dispatch) {
    dispatch({
      type: GET_TICKETBYID,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      const response = await TicketService.getTicketById(id);
      dispatch({
        type: GET_TICKETBYID,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_TICKETBYID,
        payload: {
          loading: true,
          data: false,
          errorMessage: false,
        },
      });
    }
  };
export const addTicket = (data, history) =>
  async function (dispatch) {
    try {
      const response = await TicketService.addTicket(data);
      dispatch({ type: ADD_TICKET, payload: response.data });
      history("/admin/Ticket");
      // , { state: { message: response.data.message } }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const deleteTicket = (id) =>
  async function (dispatch) {
    try {
      const response = await TicketService.deleteTicket(id);
      const response2 = await TicketService.getTicket();
      dispatch({ type: DELETE_TICKET, payload: { message: response.data.message, data: response2.data } });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const updateTicket = (data, id) =>
  async function (dispatch) {
    try {
      const response = await TicketService.updateTicket(data, id);
      dispatch({ type: PUT_TICKET, payload: response.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };