import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/userModel";
import { changePasswordThunk, loginThunk, signupThunk, updateUserThunk } from "../thunks/authThunk";

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
  reducers: {
    resetUser: () => {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    // Signup
    builder.addCase(signupThunk.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(signupThunk.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.userInfo = payload;
    });
    builder.addCase(signupThunk.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    // Login
    builder.addCase(loginThunk.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.userInfo = payload;
    });
    builder.addCase(loginThunk.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    // Update
    builder.addCase(updateUserThunk.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(updateUserThunk.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.userInfo = payload;
    });
    builder.addCase(updateUserThunk.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    // ChnagePassword
    builder.addCase(changePasswordThunk.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(changePasswordThunk.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.userInfo = payload;
    });
    builder.addCase(changePasswordThunk.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
  },
});

export default authSlice.reducer;
const { resetUser } = authSlice.actions;
export { resetUser };
