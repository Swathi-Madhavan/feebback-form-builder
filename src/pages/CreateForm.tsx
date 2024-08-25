import React from "react";
import { useLocation } from "react-router-dom";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import Root from "../StylesComponents/Root";
import RootCol from "../StylesComponents/RootCol";
import RootRow from "../StylesComponents/RootRow";
import AddFields from "../components/AppBar/AddFields";
import { Stack } from "@mui/material";
import FormArea from "../components/AppBar/FormArea";

export default function CreateForm() {
  const location = useLocation();

  console.log("location", location);
  return (
    <Root
      sx={{
        height: "100%",
      }}
    >
      <CustomAppBar showActionButtons />
      <RootCol>
        <RootRow
          sx={{
            justifyContent: "center",
          }}
        >
          <Stack
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <FormArea />
          </Stack>
          <AddFields />
        </RootRow>
      </RootCol>
    </Root>
  );
}
