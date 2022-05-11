import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../models/productModel";
import { RootState } from "../rootReducer";
import { createProduct, deleteProduct, fetchProducts } from "../thunks/productSlice";

type productsState = {
  products: Product[];
  loading: "idle" | "pending";
  currentRequestId: string | undefined;
  error: any;
};

const initialState: productsState = {
  products: [],
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.products = payload;
    });
    builder.addCase(fetchProducts.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.products = state.products.filter((product) => product.id !== payload.id);
    });
    builder.addCase(deleteProduct.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(createProduct.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(createProduct.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.products.push(payload);
    });
    builder.addCase(createProduct.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
  },
});

// Selectors
export const selectproducts = createSelector(
  (state: RootState) => state.products,
  (products) => products
);

export default productsSlice.reducer;