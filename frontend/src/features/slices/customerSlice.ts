import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Customer } from "../../models/customerModel";
import { RootState } from "../rootReducer";

export const fetchCutomers = createAsyncThunk("customers/fetchCustomers", async (_arg, { getState, requestId }) => {
  // @ts-ignore
  const { currentRequestId, loading } = getState().customers;
  if (loading !== "pending" || requestId !== currentRequestId) {
    return;
  }
  const { data } = await axios.get("/customers");
  return data;
});

type CustomersState = {
  entities: Customer[];
  loading: "idle" | "pending";
  currentRequestId: string | undefined;
  error: any;
};

const initialState: CustomersState = {
  entities: [],
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCutomers.pending.type]: (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.currentRequestId = action.meta.requestId;
      }
    },
    [fetchCutomers.fulfilled.type]: (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.entities = action.payload;
        state.currentRequestId = undefined;
      }
    },
    [fetchCutomers.rejected.type]: (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    },
  },
});

// Selectors
export const selectCustomers = (state: RootState) => state.customers;

export default customersSlice.reducer;
