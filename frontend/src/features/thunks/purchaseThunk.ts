import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Purchase } from "../../models/purchaseModel";
import { RootState } from "../store";

export const fetchPurchases = createAsyncThunk<Array<Purchase>, unknown, { state: RootState }>("purchases/fetchPurchases", async (_, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
      },
    };
    const { data } = await axios.get("/purchases", config);
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
  }
});

interface CreatePurchase {
  creationDate: string;
 
  supplierId: number;
  products: Array<{ id: number; qty: number }>;
}
export const createPurchase = createAsyncThunk<Purchase, CreatePurchase, { state: RootState }>("purchases/createPurchase", async (purchase, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().authUser?.userInfo?.access_token}`,
      },
    };
    const { data } = await axios.post(`/purchases`, purchase, config);

    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
  }
});

export const editPurchase = createAsyncThunk<Purchase, Partial<Purchase>, { state: RootState }>("purchases/editPurchase", async (purchase, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().authUser?.userInfo?.access_token}`,
      },
    };
    const { data } = await axios.patch(`/purchases/${purchase.id}`, purchase, config);
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
  }
});

export const deletePurchase = createAsyncThunk<Purchase, number, { state: RootState }>("purchases/deletePurchase", async (id: number, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
      },
    };
    const { data } = await axios.delete(`/purchases/${id}`, config);

    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
  }
});