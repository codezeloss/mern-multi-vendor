import axios from "axios";
import { base_url } from "../../utils/base_url.ts";
import { config } from "../../utils/axios_config.ts";

const createShop = async (userData: any) => {
  const response = await axios.post(`${base_url}seller/create-shop`, userData);
  return response.data;
};

const activateShop = async (token: string) => {
  const response = await axios.post(`${base_url}seller/activate-shop`, {
    activationToken: token,
  });
  return response.data;
};

const loginShop = async (userData: any) => {
  const response = await axios.post(
    `${base_url}seller/login-shop`,
    {
      email: userData.email,
      password: userData.password,
    },
    config
  );
  return response.data;
};

const seller = async () => {
  const response = await axios.get(`${base_url}seller/seller`, config);
  return response.data;
};

const logout = async () => {
  const response = await axios.get(`${base_url}seller/logout`, config);
  return response.data;
};

const sellerService = {
  createShop,
  activateShop,
  loginShop,
  seller,
  logout,
};

export default sellerService;
