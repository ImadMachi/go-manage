import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../models/productModel";
import { RootState } from "../rootReducer";
import { fetchProduct } from "../thunks/productThunk";

type productsState = {
  product: Product | undefined;
  loading: "idle" | "pending";
  currentRequestId: string | undefined;
  error: any;
};

const initialState: productsState = {
  product: undefined,
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchProduct.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.product = payload;
    });
    builder.addCase(fetchProduct.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    // builder.addCase(deleteProduct.pending, (state) => {
    //   state.loading = "pending";
    // });
    // builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {
    //   state.loading = "idle";
    //   state.error = undefined;
    //   state.products = state.products.filter((product) => product.id !== payload.id);
    // });
    // builder.addCase(deleteProduct.rejected, (state, { payload }) => {
    //   state.loading = "idle";
    //   state.error = payload;
    // });
    // builder.addCase(createProduct.pending, (state) => {
    //   state.loading = "pending";
    // });
    // builder.addCase(createProduct.fulfilled, (state, { payload }) => {
    //   state.loading = "idle";
    //   state.error = undefined;
    //   state.products.push(payload);
    // });
    // builder.addCase(createProduct.rejected, (state, { payload }) => {
    //   state.loading = "idle";
    //   state.error = payload;
    // });
  },
});

// Selectors
export const selectproduct = (state: RootState) => state.product.product;

// export const selectSingleProduct = createSelector(
//   (state: RootState) => state.products,
//   (_: any, id: number) => id,
//   (products: productsState, id: number) => products.products.find((product) => product.id === id)
// );

export default productSlice.reducer;
