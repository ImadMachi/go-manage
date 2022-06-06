import { useEffect, useMemo } from "react";
import { selectservices } from "../features/slices/servicesSlice";
import { useAppDispatch } from "../features/store";
import { fetchServices } from "../features/thunks/servicesThunk";
import { useTypedSelector } from "./useTypedSelector";

export const useServices = () => {
  const data = useTypedSelector(selectservices);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const load = () => dispatch(fetchServices(null));

    load();
  }, [dispatch]);

  return useMemo(() => data, [data]);
};
