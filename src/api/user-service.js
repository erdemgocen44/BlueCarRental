import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
const login = (email, password) => {
  return axios.post(`${API_URL}login`, {
    email,
    password,
  });
};

const register = (user) => {
  return axios.post(`${API_URL}register`, user);
};

export { login, register };
