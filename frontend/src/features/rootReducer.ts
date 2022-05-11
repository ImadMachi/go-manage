import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import customersReducer from "./slices/customerSlice";
import productReducer from './slices/productSlice';
import serviceReducer from './slices/serviceSlice';
import ordersReducer from './slices/orderSlice';


const rootReducer = combineReducers({
  customers: customersReducer,
  orders:ordersReducer,
  products:productReducer,
  services:serviceReducer,
  authUser: authReducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
