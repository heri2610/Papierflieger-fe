import API from "./api";

const notifService = {
  getNotif: async function () {
    try {
      const response = await API.get("/notifications");
      return response;
    } catch (err) {
      throw err;
    }
  },
  countNotif: async function () {
    try {
      const response = await API.get("/notif-count");
      return response;
    } catch (err) {
      throw err;
    }
  },
  seeNotif: async function (id) {
    try {
      const response = await API.put(`/notifications`);
      return response;
    } catch (err) {
      throw err;
    }
  },
};

export default notifService;
