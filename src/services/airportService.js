import API from "./api";

const airportService = {
  getAirport: async function () {
    try {
      const response = await API.get("/airports");
      return response;
    } catch (err) {
      throw err;
    }
  },
  getAirportById: async function (id) {
    try {
      const response = await API.get(`/airports/${id}`);
      return response;
    } catch (err) {
      console.log("Auth service error", err);
      throw err;
    }
  },
  addAirport: async function (data) {
    try {
      const response = await API.post("/airports", data);
      return response;
    } catch (err) {
      throw err;
    }
  },
  deleteAirport: async function (id) {
    try {
      const response = await API.delete(`/airports/${id}`);
      return response;
    } catch (err) {
      console.log("Auth service error", err);
      throw err;
    }
  },
  updateAirport: async function (data, id) {
    try {
      const response = await API.put(`/airports/${id}`, data);
      return response;
    } catch (err) {
      console.log("Auth service error", err);
      throw err;
    }
  },
};


export default airportService;
