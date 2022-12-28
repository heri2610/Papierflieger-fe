import wishlistService from "../../services/wishlistService";
import { GET_WISHLIST, ADD_WISHLIST, DELETE_WISHLIST, } from "../types/index";

export const getWishlist = () =>
  async function (dispatch) {
    dispatch({
      type: GET_WISHLIST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      const response = await wishlistService.getWishlist();
      dispatch({
        type: GET_WISHLIST,
        payload: {
          loading: false,
          data: response.data,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_WISHLIST,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };

export const addWishlist = (data) =>
  async function (dispatch) {
    try {
      const response = await wishlistService.addWishlist(data);
      dispatch({
        type: ADD_WISHLIST,
        payload: {
          data: response.data,
          message: response.data.message
        },
      });
    } catch (error) {
      dispatch({
        type: ADD_WISHLIST,
        payload: {
          errorMessage: error.response.data.message,
        },
      });
    }
  };

export const deleteWishlist = (destinationId) =>
  async function (dispatch) {
    try {
      const response = await wishlistService.deleteWishlist(destinationId);
      const response2 = await wishlistService.getWishlist();
      dispatch({
        type: DELETE_WISHLIST,
        payload: {
          message: response.data.message,
          data: response2.data
        }
      });
    } catch (error) {
      dispatch({
        type: DELETE_WISHLIST,
        payload: {
          errorMessage: error.message,
        },
      });
    }
  };
