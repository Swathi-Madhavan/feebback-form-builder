import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NavBarSliceType } from "../../model";

const initialState: NavBarSliceType = {
  showButton: false,
};

const navBarSlice = createSlice({
  name: "assignedToMe",
  initialState,
  reducers: {
    changeNavBarState: (state, action: PayloadAction<NavBarSliceType>) => {
      state.showButton = action.payload.showButton;
    },
  },
});

export const { changeNavBarState } = navBarSlice.actions;

const navBarSliceReducer = navBarSlice.reducer;
export default navBarSliceReducer;
