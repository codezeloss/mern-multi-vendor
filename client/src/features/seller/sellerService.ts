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

const sellerService = {
  createShop,
  activateShop,
  loginShop,
};

export default sellerService;
