import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Supplier } from "../../models/supplierModel";
import { RootState } from "../rootReducer";
import { createSupplier, deleteSupplier, editSupplier, fetchSuppliers } from "../thunks/supplierThunk";

type SuppliersState = {
  suppliers: Supplier[];
  loading: "idle" | "pending";
  currentRequestId: string | undefined;
  error: any;
};

const initialState: SuppliersState = {
  suppliers: [],
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

export const suppliersSlice = createSlice({
  name: "suppliers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSuppliers.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchSuppliers.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.suppliers = payload;
    });
    builder.addCase(fetchSuppliers.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(deleteSupplier.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteSupplier.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.suppliers = state.suppliers.filter((supplier) => supplier.id !== payload.id);
    });
    builder.addCase(deleteSupplier.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(createSupplier.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(createSupplier.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.suppliers.push(payload);
    });
    builder.addCase(createSupplier.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(editSupplier.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(editSupplier.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.suppliers = state.suppliers.map((supplier) => (supplier.id === payload.id ? payload : supplier));

      // state.suppliers = state.suppliers.filter((supplier) => supplier.id !== payload.id);
      // state.suppliers.push(payload);
    });
    builder.addCase(editSupplier.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
  },
});

// Selectors;
export const selectSuppliers = createSelector(
  (state: RootState) => state.suppliers,
  (suppliers) => suppliers
);

// export const selectSuppliers = createSelector(
//   [
//     state:RootState=>state.suppliers,
//     (state, searchCriteria)=>searchCriteria
//   ],
//   (suppliers, searchCriteria) => suppliers
// );

export default suppliersSlice.reducer;