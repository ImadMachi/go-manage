import { useEffect, useMemo } from "react";
import { selectStocks } from "../features/slices/stockSlice";
import { useAppDispatch } from "../features/store";
import { fetchStocks } from "../features/thunks/stockThunk";
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
