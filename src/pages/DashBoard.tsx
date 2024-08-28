import React from "react";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import NewForm from "../uicomponents/NewForm";
import CardView from "../uicomponents/CardView";
import Root from "../StylesComponents/Root";
import RootRow from "../StylesComponents/RootRow";
import RootCol from "../StylesComponents/RootCol";
import { useAppSelector } from "../Store/store";

export default function DashBoard() {
  const { forms } = useAppSelector((state) => state.listOfForms);

  return (
    <Root>
      <CustomAppBar showActionButtons={false} />
      <RootCol>
        <RootRow>
          <NewForm />

          {forms.map((row) => (
            <CardView key={row.formId} {...row} />
          ))}
        </RootRow>
      </RootCol>
    </Root>
  );
}
