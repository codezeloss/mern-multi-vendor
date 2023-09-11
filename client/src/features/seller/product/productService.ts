import axios from "axios";
import { base_url } from "../../../utils/base_url.ts";
import { config } from "../../../utils/axios_config.ts";

const createProduct = async (productData: any) => {
  const configP = { headers: { "Content-Type": "multipart/form-data" } };
  const response = await axios.post(
    `${base_url}seller/product/create-product`,
    productData,
    configP
  );
  return response.data;
};

const getProducts = async (id: string) => {
  const response = await axios.get(
    `${base_url}seller/product/get-products/${id}`
  );
  return response.data;
};

const deleteSingleProduct = async (id: string) => {
  const response = await axios.delete(
    `${base_url}seller/product/delete-product/${id}`,
    config
  );
  return response.data;
};

const productService = {
  createProduct,
  getProducts,
  deleteSingleProduct,
};

export default productService;
