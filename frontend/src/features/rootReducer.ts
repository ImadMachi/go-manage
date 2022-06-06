import { combineReducers } from "@reduxjs/toolkit";
import customersReducer from "./slices/customersSlice";
import productReducer from "./slices/productSlice";
import productsReducer from "./slices/productsSlice";
import servicesReducer from "./slices/servicesSlice";
import ordersReducer from "./slices/ordersSlice";
import orderLinesReducer from "./slices/ordersSlice";
import stockReducer from "./slices/stocksSlice";
import authReducer from "./slices/authSlice";
import taskReducer from "./slices/tasksSlice";
import quotesReducer from "./slices/quoteSlice";

const rootReducer = combineReducers({
  customers: customersReducer,
  orders: ordersReducer,
  orderLines: orderLinesReducer,
  product: productReducer,
  products: productsReducer,
  services: servicesReducer,
  stocks: stockReducer,
  tasks: taskReducer,
  quotes: quotesReducer,
  authUser: authReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
