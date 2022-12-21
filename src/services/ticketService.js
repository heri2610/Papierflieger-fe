import API from "./api";

const TicketService = {
  filterTickets: async function (payload) {
    try {
      const response = await API.get(`/search-tickets?flightFrom=${payload.flightFrom}&flightTo=${payload.flightTo}&departureDate=${payload.departureDate}&returnDate=${payload.returnDate}`, payload);
      return response;
    } catch (err) {
      return Error(err);
    }
  },
  getTicket: async function () {
    try {
      const response = await API.get("/tickets");
      return response;
    } catch (err) {
      throw err;
    }
  },
  getTicketById: async function (id) {
    try {
      const response = await API.get(`/tickets/${id}`);
      return response;
    } catch (err) {
      throw err;
    }
  },
  addTicket: async function (data) {
    try {
      const response = await API.post("/tickets", data);
      return response;
    } catch (err) {
      throw err;
    }
  },
  deleteTicket: async function (id) {
    try {
      const response = await API.delete(`/tickets/${id}`);
      return response;
    } catch (err) {
      throw err;
    }
  },
  updateTicket: async function (data, id) {
    try {
      const response = await API.put(`/tickets/${id}`, data);
      return response;
    } catch (err) {
      throw err;
    }
  },
};

export default TicketService;