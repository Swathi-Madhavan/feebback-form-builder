import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CreateFormSliceType } from "../../model";

const initialState: CreateFormSliceType = {
  formName: "",
};

const createFormSlice = createSlice({
  name: "assignedToMe",
  initialState,
  reducers: {
    setActiveFormName: (state, action: PayloadAction<string>) => {
      state.formName = action.payload;
    },
  },
});

export const { setActiveFormName } = createFormSlice.actions;

const createFormSliceReducer = createFormSlice.reducer;
export default createFormSliceReducer;
