import { useEffect, useMemo } from "react";
import { selectSuppliers } from "../features/slices/supplierSlice";
import { useAppDispatch } from "../features/store";
import { fetchSuppliers } from "../features/thunks/supplierThunk";
import { useTypedSelector } from "./useTypedSelector";

export const useSuppliers = () => {
  const data = useTypedSelector(selectSuppliers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const load = () => dispatch(fetchSuppliers(null));

    load();
  }, [dispatch]);

  return useMemo(() => data, [data]);
};
