import { useEffect, useMemo } from "react";
import { selectQuotes } from "../features/slices/quoteSlice";
import { useAppDispatch } from "../features/store";
import { fetchQuotes } from "../features/thunks/quotesThunk";
import { useTypedSelector } from "./useTypedSelector";

export const useQuotes = () => {
  const data = useTypedSelector(selectQuotes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const load = () => dispatch(fetchQuotes(null));
    load();
  }, [dispatch]);

  return useMemo(() => data, [data]);
};
