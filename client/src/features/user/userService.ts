import axios from "axios";
import { base_url } from "../../utils/base_url.ts";
import { config } from "../../utils/axios_config.ts";

const register = async (userData: any) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  return response.data;
};

const activateUser = async (token: string) => {
  const response = await axios.post(`${base_url}user/activation`, {
    activationToken: token,
  });
  return response.data;
};

const login = async (userData: any) => {
  const response = await axios.post(
    `${base_url}user/login`,
    {
      email: userData.email,
      password: userData.password,
    },
    config
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const user = async () => {
  const response = await axios.get(`${base_url}user/user`, config);
  return response.data;
};

const logout = async () => {
  const response = await axios.get(`${base_url}user/logout`, config);
  return response.data;
};

const userService = {
  register,
  activateUser,
  login,
  user,
  logout,
};

export default userService;
