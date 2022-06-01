import { combineReducers } from "@reduxjs/toolkit";
import customersReducer from "./slices/customerSlice";
import productReducer from "./slices/productSlice";
import serviceReducer from "./slices/serviceSlice";
import orderReducer from "./slices/orderSlice";
import orderLineReducer from "./slices/orderSlice";
import stockReducer from "./slices/stockSlice";
import authReducer from "./slices/authSlice";
import quotesReducer from "./slices/quoteSlice"

const rootReducer = combineReducers({
  customers: customersReducer,
  orders: orderReducer,
  orderLines: orderLineReducer,
  products: productReducer,
  services: serviceReducer,
  stocks: stockReducer,
  quotes:quotesReducer,
  authUser: authReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
