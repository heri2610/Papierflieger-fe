import API from "./api";

const historyService = {
  getHistory: async function () {
    try {
      const response = await API.get("/notifications");
      return response;
    } catch (err) {
      throw err;
    }
  },
};

export default historyService;
