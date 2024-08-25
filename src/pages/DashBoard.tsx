import React from "react";
import { useLocation } from "react-router-dom";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import NewForm from "../uicomponents/NewForm";
import CardView from "../uicomponents/CardView";
import Root from "../StylesComponents/Root";
import RootRow from "../StylesComponents/RootRow";
import RootCol from "../StylesComponents/RootCol";

export default function DashBoard() {
  const location = useLocation();

  console.log("location", location);
  return (
    <Root>
      <CustomAppBar showActionButtons={false} />
      <RootCol>
        <RootRow>
          <NewForm />
          <CardView />
          <CardView />
        </RootRow>
      </RootCol>
    </Root>
  );
}
