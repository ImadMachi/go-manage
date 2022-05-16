import { createSelector, createSlice } from "@reduxjs/toolkit";
import { OrderLine } from "../../models/orderLineModel";
import { RootState } from "../store";
import { fetchOrderLines } from "../thunks/orderLineThunk";

type OrderLineState = {
  orderLines: OrderLine[];
  loading: "idle" | "pending";
  currentRequestId: string | undefined;
  error: any;
};

const initialState: OrderLineState = {
  orderLines: [],
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

export const orderLinesSlice = createSlice({
  name: "orderLines",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrderLines.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchOrderLines.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.orderLines = payload;
    });
    builder.addCase(fetchOrderLines.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
   
  
  },
});

// Selectors;
export const selectOrderLines = createSelector(
  (state: RootState) => state.orderLines,
  (orderLines) => orderLines
);

// export const selectOrderLineLiness = createSelector(
//   [
//     state:RootState=>state.orderLines,
//     (state, searchCriteria)=>searchCriteria
//   ],
//   (orderLines, searchCriteria) => orderLines
// );

export default orderLinesSlice.reducer;