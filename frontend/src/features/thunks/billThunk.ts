import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Bill } from "../../models/billModel";
import { RootState } from "../rootReducer";

interface CreateBill {
 id:number;
 orderId:number;
    products: Array<{ id: number; qty: number }>;
  }
  export const createBill = createAsyncThunk<Bill, CreateBill, { state: RootState }>("orders/createBill", async (order, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
  
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().authUser?.userInfo?.access_token}`,
        },
      };
      const { data } = await axios.post('/bills', { orderId: order.id }, config);
  
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  });
  