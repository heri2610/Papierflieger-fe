import API from "./api";

const airportService = {
  getAirport: async function (data) {
    try {
      const response = await API.post("/auth/login", data);
      return response;
    } catch (err) {
      throw err;
    }
  },

  addAirport: async function (data) {
    try {
      const response = await API.post("/auth/register", data);
      return response;
    } catch (err) {
      throw err;
    }
  },
  deleteAirport: async function (data) {
    try {
      const response = await API.put("/auth/update-profile", data);
      localStorage.setItem("user", JSON.stringify(data));
      return response;
    } catch (err) {
      console.log("Auth service error", err);
      throw err;
    }
  },
  updateAirport: async function (data) {
    try {
      const response = await API.put("/auth/update-profile", data);
      localStorage.setItem("user", JSON.stringify(data));
      return response;
    } catch (err) {
      console.log("Auth service error", err);
      throw err;
    }
  },
};


export default airportService;
