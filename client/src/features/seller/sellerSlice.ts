import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import sellerService from "./sellerService.ts";

export interface SellerState {
  seller: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  isAuthenticated: boolean;
  message: string | any;
}

// ** Get seller from LocalStorage
// @ts-ignore
const getCustomerFromLocalStorage = localStorage.getItem("seller") || null;

// ** Initial States
const initialState: SellerState = {
  // @ts-ignore
  seller: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isAuthenticated: false,
  message: "",
};

// !! Create new seller Shop
export const createNewShop = createAsyncThunk(
  "seller/new-shop",
  async (sellerData: any, thunkAPI) => {
    try {
      return await sellerService.createShop(sellerData);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// !! Activate seller Shop
export const activateSellerShop = createAsyncThunk(
  "seller/activate-shop",
  async (token: string, thunkAPI) => {
    try {
      return await sellerService.activateShop(token);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// !! Login seller Shop
export const loginSellerShop = createAsyncThunk(
  "seller/login-shop",
  async (userData: any, thunkAPI) => {
    try {
      return await sellerService.loginShop(userData);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// !! Get seller Shop
export const getSeller = createAsyncThunk(
  "seller/get-seller",
  async (thunkAPI) => {
    try {
      return await sellerService.seller();
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// !! Logout Seller - Shop
export const logoutSeller = createAsyncThunk(
  "seller/logout-seller",
  async (thunkAPI) => {
    try {
      return await sellerService.logout();
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ** Register seller
      .addCase(createNewShop.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createNewShop.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(createNewShop.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      // ** Activate seller shop
      .addCase(activateSellerShop.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(activateSellerShop.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.seller = action.payload.seller;
        // @ts-ignore
        state.token = action.payload.token;
        state.message = "success";
      })
      .addCase(activateSellerShop.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      // ** Login seller shop
      .addCase(loginSellerShop.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(loginSellerShop.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.seller = action.payload.seller;
        // @ts-ignore
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.message = "success";
      })
      .addCase(loginSellerShop.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      // ** Get seller Shop
      .addCase(getSeller.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSeller.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.seller = action.payload.seller;
        state.isAuthenticated = true;
        state.message = "success";
      })
      .addCase(getSeller.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      }) // ** Logout User
      .addCase(logoutSeller.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutSeller.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.seller = null;
        state.isAuthenticated = false;
        state.message = action.payload.message;
      })
      .addCase(logoutSeller.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      });
  },
});

export const {} = sellerSlice.actions;

export default sellerSlice.reducer;
