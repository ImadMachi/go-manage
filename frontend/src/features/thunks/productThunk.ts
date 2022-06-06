import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../models/productModel";
import { RootState } from "../rootReducer";

export const fetchProduct = createAsyncThunk<Product, number, { state: RootState }>(" product/fetchProduct", async (id, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
      },
    };
    const { data } = await axios.get(`/products/${id}`, config);
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
  }
});

// interface CreateProduct {
//   price: number;
//   title: string;
//   image: string;
//   rating: number;
//   stock: number;
// }
// export const createProduct = createAsyncThunk<Product, CreateProduct, { state: RootState }>(
//   "products/createProduct",
//   async (product, thunkAPI) => {
//     const { rejectWithValue, getState } = thunkAPI;

//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${getState().authUser?.userInfo?.access_token}`,
//         },
//       };
//       const { data } = await axios.post(`/products`, product, config);
//       return data;
//     } catch (err: any) {
//       return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
//     }
//   }
// );

// export const deleteProduct = createAsyncThunk<Product, number, { state: RootState }>(
//   "products/deleteProduct",
//   async (id: number, thunkAPI) => {
//     const { rejectWithValue, getState } = thunkAPI;

//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
//         },
//       };
//       const { data } = await axios.delete(`/products/${id}`, config);
//       return data;
//     } catch (err: any) {
//       return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
//     }
//   }
// );
