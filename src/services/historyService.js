import API from "./api";

const historyService = {
  getHistory: async function () {
    try {
      const response = await API.get("/histories");
      return response;
    } catch (err) {
      throw err;
    }
  },
};

export default historyService;
