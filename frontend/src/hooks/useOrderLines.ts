import { useEffect, useMemo } from "react";
import { selectOrders } from "../features/slices/orderSlice";
import { useAppDispatch } from "../features/store";
import { fetchOrderLines } from "../features/thunks/orderLineThunk";
import { useTypedSelector } from "./useTypedSelector";

export const useOrderLines = () => {
  const data = useTypedSelector(selectOrders);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const load = () => dispatch(fetchOrderLines(null));
    load();
  }, [dispatch]);

  return useMemo(() => data, [data]);
};