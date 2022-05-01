import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../models/userModel";

export type UserCredentials = {
  email: string;
  password: string;
};

export type NewUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  field: string;
  size: number;
  socialReason: string;
  address: string;
  city: string;
  country: string;
  fix: string;
  phone: string;
};

// export type AuthError = {
//   code: string;
//   message: string;
//   id: string;
// };

export const signup = createAsyncThunk<any, NewUser, { rejectValue: any }>("auth/signup", async (newUser, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("auth/signup", newUser, config);
    localStorage.setItem("goManage:userInfo", JSON.stringify(data));
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
  }
});

export const login = createAsyncThunk<any, UserCredentials, { rejectValue: any }>("auth/login", async (userCredentials, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("auth/login", userCredentials, config);
    localStorage.setItem("goManage:userInfo", JSON.stringify(data));
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
  }
});

export type AuthState = {
  userInfo: { user?: User; access_token?: string };
  loading: "idle" | "pending";
  currentRequestId: undefined;
  error: any;
};

const initialState: AuthState = {
  userInfo: localStorage.getItem("goManage:userInfo") ? JSON.parse(localStorage.getItem("goManage:userInfo") || "") : {},
  loading: "idle",
  currentRequestId: undefined,
  error: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Signup
    builder.addCase(signup.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.userInfo = payload;
    });
    builder.addCase(signup.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    // Login
    builder.addCase(login.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.userInfo = payload;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
  },
});

export default authSlice.reducer;
