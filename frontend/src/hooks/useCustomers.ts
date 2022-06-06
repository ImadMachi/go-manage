import { useEffect, useMemo } from "react";
import { selectCustomers } from "../features/slices/customersSlice";
import { useAppDispatch } from "../features/store";
import { fetchCustomers } from "../features/thunks/customersThunk";
import { useTypedSelector } from "./useTypedSelector";

export const useCustomers = () => {
  const data = useTypedSelector(selectCustomers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const load = () => dispatch(fetchCustomers(null));

    load();
  }, [dispatch]);

  return useMemo(() => data, [data]);
};
