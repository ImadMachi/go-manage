import { useEffect, useMemo } from "react";
import { fetchCutomers, selectCustomers } from "../features/slices/customerSlice";
import { useAppDispatch } from "../features/store";
import { useTypedSelector } from "./useTypedSelector";

export const useCustomers = () => {
  const data = useTypedSelector(selectCustomers);
  const dispatch = useAppDispatch();
  const load = () => dispatch(fetchCutomers(null));
  useEffect(() => {
    load();
  }, []);

  return useMemo(() => data, [data]);
};
