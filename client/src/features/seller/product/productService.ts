import axios from "axios";
import { base_url } from "../../../utils/base_url.ts";

const createProduct = async (productData: any) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const response = await axios.post(
    `${base_url}seller/product/create-product`,
    productData,
    config
  );
  return response.data;
};

const productService = {
  createProduct,
};

export default productService;
