import axios from "axios";
import { base_url } from "../../../utils/base_url.ts";
import { config } from "../../../utils/axios_config.ts";

const createCoupon = async (couponData: any) => {
  const response = await axios.post(
    `${base_url}seller/coupon/create-coupon`,
    couponData,
    config
  );
  return response.data;
};

const getCoupons = async (id: string) => {
  const response = await axios.get(
    `${base_url}seller/coupon/all-coupons/${id}`
  );
  return response.data;
};

const deleteSingleCoupon = async (id: string) => {
  const response = await axios.delete(
    `${base_url}seller/coupon/delete-coupon/${id}`,
    config
  );
  return response.data;
};

const couponService = {
  createCoupon,
  getCoupons,
  deleteSingleCoupon,
};

export default couponService;
