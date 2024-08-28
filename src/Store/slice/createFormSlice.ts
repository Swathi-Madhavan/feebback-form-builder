import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CreateFormSliceType } from "../../model";
import { uniqueId } from "lodash";

const initialState: CreateFormSliceType = {
  formName: "",
  formId: "",
};

const createFormSlice = createSlice({
  name: "assignedToMe",
  initialState,
  reducers: {
    setActiveFormName: (state, action: PayloadAction<string>) => {
      state.formName = action.payload;
      state.formId = uniqueId();
    },
  },
});

export const { setActiveFormName } = createFormSlice.actions;

const createFormSliceReducer = createFormSlice.reducer;
export default createFormSliceReducer;
