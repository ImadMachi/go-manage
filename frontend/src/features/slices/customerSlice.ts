import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Customer } from "../../models/customerModel";
import { RootState } from "../rootReducer";

export const fetchCutomers = createAsyncThunk<Array<Customer>, unknown, { state: RootState }>(
  "customers/fetchCustomers",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().authUser.userInfo.access_token}`,
        },
      };
      const { data } = await axios.get("/customers", config);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data.message ? err.response.data.message : err.message);
    }
  }
);

type CustomersState = {
  customers: Customer[];
  loading: "idle" | "pending";
  currentRequestId: string | undefined;
  error: any;
};

const initialState: CustomersState = {
  customers: [],
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCutomers.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchCutomers.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.customers = payload;
    });
    builder.addCase(fetchCutomers.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
  },
});

// Selectors
export const selectCustomers = (state: RootState) => state.customers;

export default customersSlice.reducer;

// export const fetchCutomers = createAsyncThunk("customers/fetchCustomers", async (_arg, { getState, requestId }) => {
//   // @ts-ignore
//   const { currentRequestId, loading } = getState().customers;
//   if (loading !== "pending" || requestId !== currentRequestId) {
//     return;
//   }
//   const { data } = await axios.get("/customers");
//   return data;
// });
