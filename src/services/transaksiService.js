import API from "./api";

export const transactionsService = {
  getTransactions: async function () {
    try {
      const response = await API.get("/transactions");
      return response;
    } catch (err) {
      return err;
    }
  },
};
