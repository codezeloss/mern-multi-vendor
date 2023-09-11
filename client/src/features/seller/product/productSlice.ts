import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService.ts";

export interface ProductState {
  product: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | any;
}

// ** Initial States
const initialState: ProductState = {
  // @ts-ignore
  product: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// !! Create new Product
export const createNewProduct = createAsyncThunk(
  "product/new-product",
  async (productData: any, thunkAPI) => {
    try {
      return await productService.createProduct(productData);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// !! Get all Products
export const getAllProducts = createAsyncThunk(
  "product/all-products",
  async (id: string, thunkAPI) => {
    try {
      return await productService.getProducts(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// !! Delete Product
export const deleteProduct = createAsyncThunk(
  "product/delete-product",
  async (id: string, thunkAPI) => {
    try {
      return await productService.deleteSingleProduct(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ** Create New Product
      .addCase(createNewProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createNewProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload;
        state.message = "success";
      })
      .addCase(createNewProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      // ** Get all Products
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.products = action.payload;
        state.message = "success";
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      // ** Delete Product
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        // @ts-ignore
        state.deletedProduct = action.payload;
        state.message = "success";
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
