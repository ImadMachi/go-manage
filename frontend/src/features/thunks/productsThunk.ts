import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../models/productModel";
import { RootState } from "../rootReducer";

export const fetchProducts = createAsyncThunk<Array<Product>, unknown, { state: RootState }>(
  " products/fetchProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
        },
      };
      const { data } = await axios.get("/products", config);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  }
);

interface CreateProduct {
  price: number;
  category: string;
  title: string;
  rating: number;
  stock: number;
  description: string;
  image: string;
}
export const createProduct = createAsyncThunk<Product, CreateProduct, { state: RootState }>(
  "products/createProduct",
  async (product, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().authUser?.userInfo?.access_token}`,
        },
      };
      const { data } = await axios.post(`/products`, product, config);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  }
);

export const deleteProduct = createAsyncThunk<Product, number, { state: RootState }>(
  "products/deleteProduct",
  async (id: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
        },
      };
      const { data } = await axios.delete(`/products/${id}`, config);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  }
);
