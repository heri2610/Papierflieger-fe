import API from "./api";

const destinasiService = {
  getDestinasi: async function () {
    try {
      const response = await API.get("/destinations");
      return response;
    } catch (err) {
      throw err;
    }
  },
  getDestinasiById: async function (id) {
    try {
      const response = await API.get(`/destinations/${id}`);
      return response;
    } catch (err) {
      throw err;
    }
  },
  addDestinasi: async function (data) {
    try {
      const response = await API.post("/destinations", data);
      return response;
    } catch (err) {
      throw err;
    }
  },
  deleteDestinasi: async function (id) {
    try {
      const response = await API.delete(`/destinations/${id}`);
      return response;
    } catch (err) {
      throw err;
    }
  },
  updateDestinasi: async function (data, id) {
    try {
      const response = await API.put(`/destinations/${id}`, data);
      return response;
    } catch (err) {
      throw err;
    }
  },
};

export default destinasiService;
