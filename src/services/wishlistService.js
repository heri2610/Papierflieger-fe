import API from "./api";

const wishlistService = {
  getWishlist: async function () {
    try {
      const response = await API.get("/wishlist");
      return response;
    } catch (err) {
      throw err;
    }
  },
  addWishlist: async function (data) {
    try {
      const response = await API.post("/wishlist", data);
      return response;
    } catch (err) {
      throw err;
    }
  },
  deleteWishlist: async function (destinationId) {
    try {
      const response = await API.delete(`/wishlist/${destinationId}`);
      return response;
    } catch (err) {
      throw err;
    }
  },
};

export default wishlistService;
