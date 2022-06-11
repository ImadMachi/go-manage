import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../models/userModel";
import { RootState } from "../rootReducer";

export type UserCredentials = {
  email: string;
  password: string;
};

export type NewUser = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  businessSector?: string;
  website?: string;
  size?: number;
  companyName?: string;
  address?: string;
  zip?: number;
  city?: string;
  country?: string;
  fix?: string;
};

export const signupThunk = createAsyncThunk<{ user: User; access_token: string }, NewUser, { rejectValue: any }>(
  "auth/signup",
  async (newUser, thunkAPI) => {
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
  }
);

export const loginThunk = createAsyncThunk<{ user: User; access_token: string }, UserCredentials, { rejectValue: any }>(
  "/auth/login",
  async (userCredentials, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post("/auth/login", userCredentials, config);
      localStorage.setItem("goManage:userInfo", JSON.stringify(data));
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  }
);

interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}
export const changePasswordThunk = createAsyncThunk<
  { user: User; access_token: string },
  IChangePassword,
  { state: RootState; rejectValue: any }
>("/auth/change-password", async (userCredentials, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().authUser?.userInfo?.access_token}`,
      },
    };

    const { data } = await axios.patch("/auth/change-password", userCredentials, config);
    localStorage.setItem("goManage:userInfo", JSON.stringify(data));
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
  }
});

export const updateUserThunk = createAsyncThunk<{ user: User; access_token: string }, Partial<NewUser>, { state: RootState }>(
  "auth/updateUser",
  async (user, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().authUser?.userInfo?.access_token}`,
        },
      };

      const { data } = await axios.patch("/users/profile", user, config);
      const userInfo = JSON.parse(localStorage.getItem("goManage:userInfo") || "") as { user: User; access_token: string };

      userInfo.user = data;
      localStorage.setItem("goManage:userInfo", JSON.stringify(userInfo));
      return userInfo;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  }
);
