import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Service } from "../../models/serviceModel";
import { RootState } from "../rootReducer";

export const fetchServices = createAsyncThunk<Array<Service>, unknown, { state: RootState }>(
  " services/fetchServices",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
        },
      };
      const { data } = await axios.get("/services", config);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  }
);

interface CreateService {
  price: number;
  title: string;
  image: string;
  rating: number;
  stock: number;
}
export const createService = createAsyncThunk<Service, CreateService, { state: RootState }>(
  "services/createService",
  async ( service, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().authUser?.userInfo?.access_token}`,
        },
      };
      const { data } = await axios.post(`/services`,  service, config);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  }
);

export const deleteService = createAsyncThunk<Service, number, { state: RootState }>(
  "services/deleteService",
  async (id: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
        },
      };
      const { data } = await axios.delete(`/services/${id}`, config);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  }
);


