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
};
