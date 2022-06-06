import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Supplier } from "../../models/supplierModel";
import { RootState } from "../rootReducer";

export const fetchSuppliers = createAsyncThunk<Array<Supplier>, unknown, { state: RootState }>(
  "suppliers/fetchSuppliers",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
        },
      };
      const { data } = await axios.get("/suppliers", config);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  }
);

interface CreateSupplier {
  name: string;
  email: string;
  address: string;
  phone: string;
}
export const createSupplier = createAsyncThunk<Supplier, CreateSupplier, { state: RootState }>(
  "suppliers/createSupplier",
  async (supplier, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().authUser?.userInfo?.access_token}`,
        },
      };
      const { data } = await axios.post(`/suppliers`, supplier, config);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  }
);

interface EditSupplier {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  isActive: boolean;
}
export const editSupplier = createAsyncThunk<Supplier, EditSupplier, { state: RootState }>(
  "suppliers/editSupplier",
  async (supplier, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().authUser?.userInfo?.access_token}`,
        },
      };
      const { data } = await axios.patch(`/suppliers/${supplier.id}`, supplier, config);

      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  }
);

export const deleteSupplier = createAsyncThunk<Supplier, number, { state: RootState }>(
  "suppliers/deleteSupplier",
  async (id: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
        },
      };
      const { data } = await axios.delete(`/suppliers/${id}`, config);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  }
);
