import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Customer } from "../../models/customerModel";
import { RootState } from "../rootReducer";
import { createCustomer, deleteCustomer, editCustomer, fetchCustomers } from "../thunks/customerThunk";

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
    builder.addCase(fetchCustomers.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchCustomers.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.customers = payload;
    });
    builder.addCase(fetchCustomers.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(deleteCustomer.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteCustomer.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.customers = state.customers.filter((customer) => customer.id !== payload.id);
    });
    builder.addCase(deleteCustomer.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(createCustomer.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(createCustomer.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.customers.push(payload);
    });
    builder.addCase(createCustomer.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(editCustomer.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(editCustomer.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.customers = state.customers.map((customer) => (customer.id === payload.id ? payload : customer));

      // state.customers = state.customers.filter((customer) => customer.id !== payload.id);
      // state.customers.push(payload);
    });
    builder.addCase(editCustomer.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
  },
});

// Selectors;
export const selectCustomers = createSelector(
  (state: RootState) => state.customers,
  (customers) => customers
);

// export const selectCustomers = createSelector(
//   [
//     state:RootState=>state.customers,
//     (state, searchCriteria)=>searchCriteria
//   ],
//   (customers, searchCriteria) => customers
// );

export default customersSlice.reducer;
