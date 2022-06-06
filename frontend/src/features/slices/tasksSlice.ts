import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Task } from "../../models/taskModel";
import { RootState } from "../rootReducer";
import { createTask, deleteTask, editTask, fetchTasks } from "../thunks/tasksThunk";

type TasksState = {
  tasks: Task[];
  loading: "idle" | "pending";
  currentRequestId: string | undefined;
  error: any;
};

const initialState: TasksState = {
  tasks: [],
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchTasks.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.tasks = payload;
    });
    builder.addCase(fetchTasks.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(deleteTask.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteTask.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.tasks = state.tasks.filter((task) => task.id !== payload.id);
    });
    builder.addCase(deleteTask.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(createTask.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(createTask.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.tasks.push(payload);
    });
    builder.addCase(createTask.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(editTask.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(editTask.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.error = undefined;
      state.tasks = state.tasks.map((task) => (task.id === payload.id ? payload : task));

      // state.tasks = state.tasks.filter((task) => task.id !== payload.id);
      // state.tasks.push(payload);
    });
    builder.addCase(editTask.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
  },
});

// Selectors;
export const selectTasks = createSelector(
  (state: RootState) => state.tasks,
  (tasks) => tasks
);

// export const selectTasks = createSelector(
//   [
//     state:RootState=>state.tasks,
//     (state, searchCriteria)=>searchCriteria
//   ],
//   (tasks, searchCriteria) => tasks
// );

export default tasksSlice.reducer;
