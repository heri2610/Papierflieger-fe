import API from "./api";

const historyService = {
  getHistory: async function () {
    console.log("berhasil");
    try {
      const response = await API.get("/histories");
      return response;
    } catch (err) {
      throw err;
    }
  },
};

export default historyService;
