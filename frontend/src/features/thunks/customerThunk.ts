import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Customer } from "../../models/customerModel";
import { RootState } from "../rootReducer";

export const fetchCustomers = createAsyncThunk<Array<Customer>, unknown, { state: RootState }>(
  "customers/fetchCustomers",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
        },
      };
      const { data } = await axios.get("/customers", config);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  }
);

interface CreateCustomer {
  name: string;
  email: string;
  address: string;
  phone: string;
}
export const createCustomer = createAsyncThunk<Customer, CreateCustomer, { state: RootState }>(
  "customers/createCustomer",
  async (customer, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().authUser?.userInfo?.access_token}`,
        },
      };
      const { data } = await axios.post(`/customers`, customer, config);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  }
);

export const deleteCustomer = createAsyncThunk<Customer, number, { state: RootState }>(
  "customers/deleteCustomer",
  async (id: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
        },
      };
      const { data } = await axios.delete(`/customers/${id}`, config);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  }
);
