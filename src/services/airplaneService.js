import API from "./api";

const airplaneservice = {
  getAirplane: async function () {
    try {
      const response = await API.get("/airplanes");
      return response;
    } catch (err) {
      throw err;
    }
  },
  getAirplaneById: async function (id) {
    try {
      const response = await API.get(`/airplanes/${id}`);
      return response;
    } catch (err) {
      throw err;
    }
  },
  addAirplane: async function (data) {
    try {
      const response = await API.post("/airplanes", data);
      return response;
    } catch (err) {
      throw err;
    }
  },
  deleteAirplane: async function (id) {
    try {
      const response = await API.delete(`/airplanes/${id}`);
      return response;
    } catch (err) {
      throw err;
    }
  },
  updateAirplane: async function (data, id) {
    try {
      const response = await API.put(`/airplanes/${id}`, data);
      return response;
    } catch (err) {
      throw err;
    }
  },
};

export default airplaneservice;
