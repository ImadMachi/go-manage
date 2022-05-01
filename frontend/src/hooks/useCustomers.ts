import { useEffect } from "react";
import { fetchCutomers, selectCustomers } from "../features/slices/customerSlice";
import { useAppDispatch } from "../features/store";
import { useTypedSelector } from "./useTypedSelector";

export const useCustomers = () => {
  const { loading, error, customers } = useTypedSelector(selectCustomers);
  const dispatch = useAppDispatch();
  const load = () => dispatch(fetchCutomers(null));
  useEffect(() => {
    load();
  }, []);

  return { loading, error, customers };
};
