import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice.ts";
import sellerReducer from "../features/seller/sellerSlice.ts";
import productReducer from "../features/seller/product/productSlice.ts";

export const store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
