import { useEffect, useMemo } from "react";
import { selectStocks } from "../features/slices/stocksSlice";
import { useAppDispatch } from "../features/store";
import { fetchStocks } from "../features/thunks/stocksThunk";
import { useTypedSelector } from "./useTypedSelector";

export const useStocks = () => {
  const data = useTypedSelector(selectStocks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const load = () => dispatch(fetchStocks(null));

    load();
  }, [dispatch]);

  return useMemo(() => data, [data]);
};
