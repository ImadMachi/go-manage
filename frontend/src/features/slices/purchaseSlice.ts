import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Purchase } from "../../models/purchaseModel";
import { RootState } from "../store";
import { createPurchase, deletePurchase, editPurchase, fetchPurchases } from "../thunks/purchaseThunk";

type PurchasesState = {
  purchases: Purchase[];
  loading: "idle" | "pending";
  currentRequestId: string | undefined;
  error: any;
};

const initialState: PurchasesState = {
  purchases: [],
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

export const purchasesSlice = createSlice({
  name: "purchases",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPurchases.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchPurchases.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.purchases = payload;
    });
    builder.addCase(fetchPurchases.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(deletePurchase.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deletePurchase.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.purchases = state.purchases.filter((purchase) => purchase.id !== payload.id);
    });
    builder.addCase(deletePurchase.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(createPurchase.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(createPurchase.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.purchases.push(payload);
    });
    builder.addCase(createPurchase.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(editPurchase.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(editPurchase.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.purchases = state.purchases.map((purchase) => {
        if (purchase.id === payload.id) {
          return { ...purchase, ...payload };
        } else {
          return purchase;
        }
      });
    });
    builder.addCase(editPurchase.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
  },
});

// Selectors;
export const selectPurchases = createSelector(
  (state: RootState) => state.purchases,
  (purchases) => purchases
);

// export const selectPurchases = createSelector(
//   [
//     state:RootState=>state.purchases,
//     (state, searchCriteria)=>searchCriteria
//   ],
//   (purchases, searchCriteria) => purchases
// );

export default purchasesSlice.reducer;
