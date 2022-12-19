import API from "./api";

const destinasiService = {
  getDestinasi: async function () {
    try {
      const response = await API.get("/airplanes");
      return response;
    } catch (err) {
      throw err;
    }
  },
  getDestinasiById: async function (id) {
    try {
      const response = await API.get(`/airplanes/${id}`);
      return response;
    } catch (err) {
      throw err;
    }
  },
  addDestinasi: async function (data) {
    try {
      const response = await API.post("/airplanes", data);
      return response;
    } catch (err) {
      throw err;
    }
  },
  deleteDestinasi: async function (id) {
    try {
      const response = await API.delete(`/airplanes/${id}`);
      return response;
    } catch (err) {
      throw err;
    }
  },
  updateDestinasi: async function (data, id) {
    try {
      const response = await API.put(`/airplanes/${id}`, data);
      return response;
    } catch (err) {
      throw err;
    }
  },
};

export default destinasiService;
