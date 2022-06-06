import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Stock } from "../../models/stockModel";
import { RootState } from "../rootReducer";
import { createStock, deleteStock, editStock, fetchStocks } from "../thunks/stocksThunk";

type StocksState = {
  stocks: Stock[];
  loading: "idle" | "pending";
  currentRequestId: string | undefined;
  error: any;
};

const initialState: StocksState = {
  stocks: [],
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

export const stocksSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStocks.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchStocks.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.stocks = payload;
    });
    builder.addCase(fetchStocks.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(deleteStock.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteStock.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.stocks = state.stocks.filter((stock) => stock.id !== payload.id);
    });
    builder.addCase(deleteStock.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(createStock.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(createStock.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.stocks.push(payload);
    });
    builder.addCase(createStock.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(editStock.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(editStock.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.stocks = state.stocks.map((stock) => (stock.id === payload.id ? payload : stock));

      // state.stocks = state.stocks.filter((stock) => stock.id !== payload.id);
      // state.stocks.push(payload);
    });
    builder.addCase(editStock.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
  },
});

// Selectors;
export const selectStocks = createSelector(
  (state: RootState) => state.stocks,
  (stocks) => stocks
);

// export const selectStocks = createSelector(
//   [
//     state:RootState=>state.stocks,
//     (state, searchCriteria)=>searchCriteria
//   ],
//   (stocks, searchCriteria) => stocks
// );

export default stocksSlice.reducer;
