import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import customersReducer from "./slices/customerSlice";

const rootReducer = combineReducers({
  customers: customersReducer,
  userInfo: authReducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
