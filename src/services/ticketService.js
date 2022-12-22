import API from "./api";

export const TicketService = {
  filterTickets: async function (payload) {
    try {
      const response = await API.get(`/search-tickets`, {
        params: { ...payload },
      });
      console.log(response);
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