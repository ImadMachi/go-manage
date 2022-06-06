import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Service } from "../../models/serviceModel";
import { RootState } from "../rootReducer";
import { createService, deleteService, fetchServices } from "../thunks/servicesThunk";

type servicesState = {
  services: Service[];
  loading: "idle" | "pending";
  currentRequestId: string | undefined;
  error: any;
};

const initialState: servicesState = {
  services: [],
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchServices.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchServices.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.services = payload;
    });
    builder.addCase(fetchServices.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(deleteService.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteService.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.services = state.services.filter((service) => service.id !== payload.id);
    });
    builder.addCase(deleteService.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(createService.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(createService.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.services.push(payload);
    });
    builder.addCase(createService.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
  },
});

// Selectors
export const selectservices = createSelector(
  (state: RootState) => state.services,
  (services) => services
);

export default servicesSlice.reducer;
