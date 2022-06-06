import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Stock } from "../../models/stockModel";
import { RootState } from "../rootReducer";

export const fetchStocks = createAsyncThunk<Array<Stock>, unknown, { state: RootState }>("stocks/fetchStocks", async (_, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
      },
    };
    const { data } = await axios.get("/stocks", config);
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
  }
});

interface CreateStock {
  qty: number;
  creationDate: string;
  productId: number;
}
export const createStock = createAsyncThunk<Stock, CreateStock, { state: RootState }>("stocks/createStock", async (stock, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().authUser?.userInfo?.access_token}`,
      },
    };
    const { data } = await axios.post(`/stocks?productId=${stock.productId}`, stock, config);
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
  }
});

export const editStock = createAsyncThunk<Stock, Partial<Stock>, { state: RootState }>("stocks/editStock", async (stock, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().authUser?.userInfo?.access_token}`,
      },
    };
    const { data } = await axios.patch(`/stocks/${stock.id}`, stock, config);
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
  }
});

export const deleteStock = createAsyncThunk<Stock, number, { state: RootState }>("stocks/deleteStock", async (id: number, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
      },
    };
    const { data } = await axios.delete(`/stocks/${id}`, config);
    console.log(data);

    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
  }
});
