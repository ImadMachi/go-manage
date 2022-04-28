import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../features/rootReducer";
import { useSelector as _useSelector } from "react-redux";

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
