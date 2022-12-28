import API from "./api";

export const OrderService = {
  proceedPayment: async function (payload) {
    try {
      const response = await API.post("/orders", payload);
      return response;
    } catch (err) {
      return err;
    }
  },
  proceedTransaction: async function (payload) {
    try {
      const response = await API.put("/transactions", payload);
      return response;
    } catch (err) {
      return err;
    }
  },
};
