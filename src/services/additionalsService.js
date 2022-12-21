import API from "./api";

const additionasService = {
  getAboutUs: async function () {
    try {
      const response = await API.get("/about-us");
      return response;
    } catch (err) {
      throw err;
    }
  },
}

export default additionasService;