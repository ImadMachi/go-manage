import { useEffect, useMemo } from "react";
import { selectOrders } from "../features/slices/orderSlice";
import { useAppDispatch } from "../features/store";
import { fetchOrders } from "../features/thunks/orderThunk";
import { useTypedSelector } from "./useTypedSelector";

export const useOrders = () => {
  const data = useTypedSelector(selectOrders);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const load = () => dispatch(fetchOrders(null));

    load();
  }, [dispatch]);

  return useMemo(() => data, [data]);
};
