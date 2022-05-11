import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Order } from "../../models/orderModel";
import { RootState } from "../rootReducer";

export const fetchOrders = createAsyncThunk<Array<Order>, unknown, { state: RootState }>(
  "orders/fetchOrders",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
        },
      };
      const { data } = await axios.get("/orders", config);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  }
);

interface CreateOrder {
  name: string;
  email: string;
  address: string;
  phone: string;
}
export const createOrder = createAsyncThunk<Order, CreateOrder, { state: RootState }>(
  "orders/createOrder",
  async (order, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().authUser?.userInfo?.access_token}`,
        },
      };
      const { data } = await axios.post(`/orders`, order, config);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  }
);

export const deleteOrder = createAsyncThunk<Order,number, { state: RootState }>(
  "orders/deleteOrder",
  async (id: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
        },
      };
      const { data } = await axios.delete(`/orders/${id}`, config);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  }
);