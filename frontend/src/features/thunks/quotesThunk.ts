import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Quote } from "../../models/quoteModel";
import { RootState } from "../store";

export const fetchQuotes = createAsyncThunk<Array<Quote>, unknown, { state: RootState }>("quotes/fetchQuotes", async (_, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
      },
    };
    const { data } = await axios.get("/quotes", config);
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
  }
});

interface CreateQuote {
  creationDate: string;
  vat: number;
  customerId: number;
  products: Array<{ id: number; qty: number }>;
}
export const createQuote = createAsyncThunk<Quote, CreateQuote, { state: RootState }>("quotes/createQuote", async (quote, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().authUser?.userInfo?.access_token}`,
      },
    };
    const { data } = await axios.post(`/quotes`, quote, config);

    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
  }
});

export const editQuote = createAsyncThunk<Quote, Partial<Quote>, { state: RootState }>("quotes/editQuote", async (quote, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().authUser?.userInfo?.access_token}`,
      },
    };
    const { data } = await axios.patch(`/quotes/${quote.id}`, quote, config);
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
  }
});

export const deleteQuote = createAsyncThunk<Quote, number, { state: RootState }>("quotes/deleteQuote", async (id: number, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
      },
    };
    const { data } = await axios.delete(`/quotes/${id}`, config);

    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
  }
});

export const printQuote = createAsyncThunk<Quote, number, { state: RootState }>("quotes/printQuote", async (id: number, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
      },
    };
    const { data } = await axios.get(`/quotes/print/${id}`, config);

    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
  }
});
