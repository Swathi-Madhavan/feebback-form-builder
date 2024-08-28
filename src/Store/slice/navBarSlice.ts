import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NavBarSliceType } from "../../model";

const initialState: NavBarSliceType = {
  saveFormData: false,
  publishFormData: false,
};

const navBarSlice = createSlice({
  name: "assignedToMe",
  initialState,
  reducers: {
    changeNavBarSaveBtnState: (state, action: PayloadAction<boolean>) => {
      state.saveFormData = action.payload;
    },
    changeNavBarPublishBtnState: (state, action: PayloadAction<boolean>) => {
      state.publishFormData = action.payload;
    },
  },
});

export const { changeNavBarSaveBtnState, changeNavBarPublishBtnState } =
  navBarSlice.actions;

const navBarSliceReducer = navBarSlice.reducer;
export default navBarSliceReducer;
