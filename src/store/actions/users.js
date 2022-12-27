import usersService from "../../services/userService";
import { GET_USERS, ADD_ADMIN } from "../types/index";

export const getUsers = () =>
  async function (dispatch) {
    dispatch({
      type: GET_USERS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      const response = await usersService.getUsers();
      dispatch({
        type: GET_USERS,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
      console.log(response.data);
    } catch (error) {
      dispatch({
        type: GET_USERS,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
export const addAdmin = (data) =>
  async function (dispatch) {
    dispatch({
      type: ADD_ADMIN,
      payload: {
        loading: false,
        data: false,
        message: false,
        errorMessage: false,
      },
    });
    try {
      const response = await usersService.addAdmin(data);
      const response2 = await usersService.getUsers();
      dispatch({ 
        type: ADD_ADMIN,      
        payload: {
          loading: false,
          message:response.data.message,
          data: response2.data,
          errorMessage: false,
      }, 
    });
    } catch (error) {
      dispatch({
        type: ADD_ADMIN,
        payload: {
          loading: false,
          data: false,
          message: false,
          errorMessage:error.message,
        },
      });
    }
  };

