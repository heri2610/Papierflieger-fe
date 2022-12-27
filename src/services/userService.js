import API from "./api";
const usersService =  {
    getUsers: async function () {
      try {
        const response = await API.get("/users");
        return response;
      } catch (err) {
        throw err;
      }
    },
    addAdmin: async function (id) {
      try {
        const response = await API.put(`/add-admin/${id}`);
        return response;
      } catch (err) {
        throw err;
      }
    },
  }
  
  export default usersService;