import API from './api';

const AuthService = {
  login: async function (data) {
    try {
      const response = await API.post('/auth/login', data);
      API.defaults.headers['Authorization'] = `${response.token}`;
      setHeadersAndStorage(response.data);
      return response;
    } catch (err) {
      throw err;
    }
  },
  changePassword: async function (data) {
    try {
      const response = await API.put('/auth/reset-password', data);
      return response;
    } catch (err) {
      throw err;
    }
  },

  register: async function (data) {
    try {
      const response = await API.post('/auth/register', data);
      return response;
    } catch (err) {
      throw err;
    }
  },

  logout: () => {
    API.defaults.headers['Authorization'] = '';
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('avatar');
    localStorage.removeItem("accessToken");
  },

  updateProfile: async function (data) {
    try {
      const headers = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      };
      const response = await API.put('/auth/update-profile', data, headers);
      return response;
    } catch (err) {
      throw err;
    }
  },

  getProfile: async function () {
    try {
      const response = await API.get('/auth/profile');
      return response;
    } catch (err) {
      throw err;
    }
  },
};

const setHeadersAndStorage = ({ username, token, avatar, role }) => {
  API.defaults.headers["Authorization"] = `${token}`;
  localStorage.setItem("user", username);
  localStorage.setItem("token", token);
  localStorage.setItem("avatar", avatar);
  if (role === "Admin") {
    localStorage.setItem("accessToken", "A-*dmin?&&%mlm-plgsnwngbuay-$563iedjnjdxgdj");
  } else {
    localStorage.setItem("accessToken", "C-jaijsswem;iia*$-ustum-%4231999kkksjiwi-er");
  }
};

export default AuthService;