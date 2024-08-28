import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import navBarSliceReducer from "./slice/navBarSlice";
import createFormSliceReducer from "./slice/createFormSlice";
import listOfFormSliceReducer from "./slice/listofForms";

const store = configureStore({
  reducer: {
    navBar: navBarSliceReducer,
    form: createFormSliceReducer,
    listOfForms: listOfFormSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
