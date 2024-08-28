import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ListofFormsSliceType } from "../../model";
import { DynamicFormStruct } from "../../pages/type";

const initialState: ListofFormsSliceType = {
  forms: [],
};

const listOfFormSlice = createSlice({
  name: "assignedToMe",
  initialState,
  reducers: {
    setListOfAvailableForms: (
      state,
      action: PayloadAction<Array<DynamicFormStruct>>
    ) => {
      state.forms = action.payload;
    },
  },
});

export const { setListOfAvailableForms } = listOfFormSlice.actions;

const listOfFormSliceReducer = listOfFormSlice.reducer;
export default listOfFormSliceReducer;
