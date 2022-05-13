import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Order } from "../../models/orderModel";
import { RootState } from "../rootReducer";
import { createOrder, deleteOrder, editOrder, fetchOrders } from "../thunks/orderThunk";

type OrdersState = {
  orders: Order[];
  loading: "idle" | "pending";
  currentRequestId: string | undefined;
  error: any;
};

const initialState: OrdersState = {
  orders: [],
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchOrders.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.orders = payload;
    });
    builder.addCase(fetchOrders.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(deleteOrder.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteOrder.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.orders = state.orders.filter((order) => order.id !== payload.id);
    });
    builder.addCase(deleteOrder.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(createOrder.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(createOrder.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.orders.push(payload);
    });
    builder.addCase(createOrder.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(editOrder.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(editOrder.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.orders = state.orders.map((order) => {
        if (order.id === payload.id) {
          return { ...order, ...payload };
        } else {
          return order;
        }
      });
    });
    builder.addCase(editOrder.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
  },
});

// Selectors;
export const selectOrders = createSelector(
  (state: RootState) => state.orders,
  (orders) => orders
);

// export const selectOrders = createSelector(
//   [
//     state:RootState=>state.orders,
//     (state, searchCriteria)=>searchCriteria
//   ],
//   (orders, searchCriteria) => orders
// );

export default ordersSlice.reducer;
