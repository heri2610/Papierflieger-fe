import API from "./api";

const TicketService = {
  filterTickets: async function (payload) {
    try {
      const response = await API.get(
        `/search-tickets?flightFrom=${payload.flightFrom}&flightTo=${payload.flightTo}&departureDate=${payload.departureDate}&returnDate=${payload.returnDate}`,
        payload
      );
      return response;
    } catch (err) {
      return Error(err);
    }
  },
};
