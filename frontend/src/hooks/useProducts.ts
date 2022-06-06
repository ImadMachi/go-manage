import { useEffect, useMemo } from "react";
import { selectproducts } from "../features/slices/productsSlice";
import { useAppDispatch } from "../features/store";
import { fetchProducts } from "../features/thunks/productsThunk";
import { useTypedSelector } from "./useTypedSelector";

export const useProducts = () => {
  const data = useTypedSelector(selectproducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const load = () => dispatch(fetchProducts(null));
    load();
  }, [dispatch]);

  return useMemo(() => data, [data]);
};
