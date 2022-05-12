import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import customersReducer from "./slices/customerSlice";
import ordersReducer from "./slices/orderSlice";

const rootReducer = combineReducers({
  customers: customersReducer,
  orders: ordersReducer,
  authUser: authReducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
