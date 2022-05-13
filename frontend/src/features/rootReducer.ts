import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import customersReducer from "./slices/customerSlice";
import productReducer from './slices/productSlice';
import serviceReducer from './slices/serviceSlice';


const rootReducer = combineReducers({
  customers: customersReducer,
  products:productReducer,
  services:serviceReducer,
  authUser: authReducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
