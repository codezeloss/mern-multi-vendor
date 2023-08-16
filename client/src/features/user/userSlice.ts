import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService.ts";

export interface UserState {
  user: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  isAuthenticated: boolean;
  message: string | any;
}

// ** Get user from LocalStorage
// @ts-ignore
const getCustomerFromLocalStorage = localStorage.getItem("user") || null;

// ** Initial States
const initialState: UserState = {
  // @ts-ignore
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isAuthenticated: false,
  message: "",
};

// !! Register User
export const registerUser = createAsyncThunk(
  "user/register-user",
  async (userData: any, thunkAPI) => {
    try {
      return await userService.register(userData);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// !! Activate user account
export const activateUserAccount = createAsyncThunk(
  "user/activate-user",
  async (token: string, thunkAPI) => {
    try {
      return await userService.activateUser(token);
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// !! Login user
export const loginUser = createAsyncThunk(
  "user/login-user",
  async (userData: any, thunkAPI) => {
    try {
      return await userService.login(userData);
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// !! Get user
export const getUser = createAsyncThunk("user/get-user", async (thunkAPI) => {
  try {
    return await userService.user();
  } catch (e) {
    // @ts-ignore
    return thunkAPI.rejectWithValue(e);
  }
});

// !! Logout user
export const logoutUser = createAsyncThunk(
  "user/logout-user",
  async (thunkAPI) => {
    try {
      return await userService.logout();
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ** Register user
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      // ** Activate user Account
      .addCase(activateUserAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(activateUserAccount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.user = action.payload.user;
        // @ts-ignore
        state.token = action.payload.token;
        state.message = "success";
      })
      .addCase(activateUserAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      // ** Login in user
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.user = action.payload.user;
        // @ts-ignore
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.message = "success";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      // ** Get User
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.message = "success";
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      // ** Logout User
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = null;
        state.isAuthenticated = false;
        state.message = action.payload.message;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
