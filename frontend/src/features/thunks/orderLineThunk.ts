import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { OrderLine } from "../../models/orderLineModel";
import { RootState } from "../store";

export const fetchOrderLines = createAsyncThunk<Array<OrderLine>, unknown, { state: RootState }>("orderLines/fetchOrderLineLines", async (_, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
      },
    };
    const { data } = await axios.get("/orderLines", config);
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
  }
});

