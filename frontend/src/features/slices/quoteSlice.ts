import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Quote } from "../../models/quoteModel";
import { RootState } from "../store";
import { createQuote, deleteQuote, editQuote, fetchQuotes } from "../thunks/quoteThunk";

type QuotesState = {
  quotes: Quote[];
  loading: "idle" | "pending";
  currentRequestId: string | undefined;
  error: any;
};

const initialState: QuotesState = {
  quotes: [],
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

export const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuotes.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchQuotes.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.quotes = payload;
    });
    builder.addCase(fetchQuotes.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(deleteQuote.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteQuote.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.quotes = state.quotes.filter((quote) => quote.id !== payload.id);
    });
    builder.addCase(deleteQuote.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(createQuote.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(createQuote.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.quotes.push(payload);
    });
    builder.addCase(createQuote.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(editQuote.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(editQuote.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.quotes = state.quotes.map((quote) => {
        if (quote.id === payload.id) {
          return { ...quote, ...payload };
        } else {
          return quote;
        }
      });
    });
    builder.addCase(editQuote.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
  },
});

// Selectors;
export const selectQuotes = createSelector(
  (state: RootState) => state.quotes,
  (quotes) => quotes
);

// export const selectQuotes = createSelector(
//   [
//     state:RootState=>state.quotes,
//     (state, searchCriteria)=>searchCriteria
//   ],
//   (quotes, searchCriteria) => quotes
// );

export default quotesSlice.reducer;
