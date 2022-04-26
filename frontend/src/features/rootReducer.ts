import { combineReducers } from '@reduxjs/toolkit'
import customersReducer from './slices/customerSlice'

const rootReducer = combineReducers({
    customers:customersReducer
})
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>