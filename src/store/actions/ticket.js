import { TicketService } from "../../services/ticketService";
import airportService from "../../services/airportService";
import airplaneService from "../../services/airplaneService";
import SweatAlert from '../../components/UIComponents/sweatAlert';

import {
  GET_TICKET,
  FILTER_TICKET,
  ADD_TICKET,
  PUT_TICKET,
  DELETE_TICKET,
  GET_TICKETBYID,
  GET_TICKETDETAIL,
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
          penumpang: tujuan,
        },
      });
      history("/penerbangan");
    } catch (error) {
      dispatch({
        type: FILTER_TICKET,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.response.data.message,
        },
      });
      SweatAlert(String(error.response.data.message), 'error');
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
        datAirport: false,
      },
    });
    try {
      const datAirport = [];
      const datAirPlane = [];
      const airportName = [];
      const response = await TicketService.getTicket();
      const response2 = await airportService.getAirport();
      const response3 = await airplaneService.getAirplane();
      const airport = response2.data.airports;
      const airplane = response3.data.dataAirplane;
      airport?.forEach((bandara) => {
        datAirport.push({ label: bandara.city, value: bandara.id });
      });
      airport?.forEach((bandara) => {
        airportName.push({ label: bandara.airportName, value: bandara.id });
      });
      airplane?.forEach((pesawat) => {
        datAirPlane.push({ label: pesawat.airplaneName, value: pesawat.id });
      });

      dispatch({
        type: GET_TICKET,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
          datAirport: datAirport,
          datAirPlane,
          airportName,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_TICKET,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
          datAirport: false,
        },
      });
      SweatAlert(String(error.response.data.message), 'error');
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
      SweatAlert(String(error.response.data.message), 'error');
    }
  };
export const getTicketDetail = (state, penumpang, history) =>
  async function (dispatch) {
    dispatch({
      type: GET_TICKETDETAIL,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      dispatch({
        type: GET_TICKETDETAIL,
        payload: {
          loading: false,
          ticket: state,
          penumpang: penumpang,
          errorMessage: false,
        },
      });
      history("/detail");
    } catch (error) {
      dispatch({
        type: GET_TICKETBYID,
        payload: {
          loading: true,
          ticket: false,
          errorMessage: false,
        },
      });
      SweatAlert(String(error.response.data.message), 'error');
    }
  };
export const addTicket = (data, history) =>
  async function (dispatch) {
    try {
      const response = await TicketService.addTicket(data);
      dispatch({ type: ADD_TICKET, payload: response.data });
      history("/admin/Ticket");
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
  };

export const deleteTicket = (id) =>
  async function (dispatch) {
    try {
      const response = await TicketService.deleteTicket(id);
      const response2 = await TicketService.getTicket();
      dispatch({
        type: DELETE_TICKET,
        payload: { message: response.data.message, data: response2.data },
      });
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
  };

export const updateTicket = (data, id) =>
  async function (dispatch) {
    try {
      const response = await TicketService.updateTicket(data, id);
      dispatch({ type: PUT_TICKET, payload: response.data });
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
  };
