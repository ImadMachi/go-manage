import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { RootState } from '../rootReducer'


const API_URL = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole'


export type Customer = {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    isActive: boolean;
    totalSpent: number;
    orders: number;
    creationDate: number;
}

export const fetchCutomers = createAsyncThunk(
  'users/fetchUsers',
  async (_arg, { getState, requestId }) => {
    // @ts-ignore
    const {data} = await axios.get('/customers')

    const response = await fetch(API_URL)
    const json = await response.json()
    json.splice(10)
    return json
  }
)

type CustomersState = {
  entities: Customer[]
  loading: 'idle' | 'pending'
  currentRequestId: string | undefined
  error: any
}

const initialState: CustomersState = {
  entities: [],
  loading: 'idle',
  currentRequestId: undefined,
  error: null,
}

export const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCutomers.pending.type]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
    },
    [fetchCutomers.fulfilled.type]: (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.entities = action.payload
        state.currentRequestId = undefined
      }
    },
    [fetchCutomers.rejected.type]: (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.error = action.error
        state.currentRequestId = undefined
      }
    },
  },
})

// Selectors
export const selectCustomers = (state: RootState) => state.customers

export default customersSlice.reducer
