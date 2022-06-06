import { useEffect, useMemo } from "react";
import { selectPurchases } from "../features/slices/purchaseSlice";
import { useAppDispatch } from "../features/store";
import { fetchPurchases } from "../features/thunks/purchaseThunk";
import { useTypedSelector } from "./useTypedSelector";

export const usePurchases = () => {
  const data = useTypedSelector(selectPurchases);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const load = () => dispatch(fetchPurchases(null));
    load();
  }, [dispatch]);

  return useMemo(() => data, [data]);
};
