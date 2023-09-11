import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import couponService from "./couponService.ts";

export interface CouponState {
  coupon: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | any;
}

// ** Initial States
const initialState: CouponState = {
  // @ts-ignore
  coupon: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// !! Create new Coupon
export const createNewCoupon = createAsyncThunk(
  "coupon/new-coupon",
  async (couponData: any, thunkAPI) => {
    try {
      return await couponService.createCoupon(couponData);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// !! Get all Coupons
export const getAllCoupons = createAsyncThunk(
  "coupon/all-coupons",
  async (id: string, thunkAPI) => {
    try {
      return await couponService.getCoupons(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// !! Delete Coupon
export const deleteCoupon = createAsyncThunk(
  "coupon/delete-coupon",
  async (id: string, thunkAPI) => {
    try {
      return await couponService.deleteSingleCoupon(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ** Create New Coupon
      .addCase(createNewCoupon.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createNewCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.coupon = action.payload;
        state.message = "success";
      })
      .addCase(createNewCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      // ** Get all Coupons
      .addCase(getAllCoupons.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getAllCoupons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.coupons = action.payload;
        state.message = "success";
      })
      .addCase(getAllCoupons.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      // ** Delete Coupon
      .addCase(deleteCoupon.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteCoupon.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        // @ts-ignore
        state.deletedCoupon = action.payload;
        state.message = "success";
      })
      .addCase(deleteCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      });
  },
});

export const {} = couponSlice.actions;

export default couponSlice.reducer;
