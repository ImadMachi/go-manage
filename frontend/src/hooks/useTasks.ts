import { useEffect, useMemo } from "react";
import { selectTasks } from "../features/slices/tasksSlice";
import { useAppDispatch } from "../features/store";
import { fetchTasks } from "../features/thunks/tasksThunk";
import { useTypedSelector } from "./useTypedSelector";

export const useTasks = () => {
  const data = useTypedSelector(selectTasks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const load = () => dispatch(fetchTasks(null));
    load();
  }, [dispatch]);

  return useMemo(() => data, [data]);
};
