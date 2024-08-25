import React from "react";
import "./App.css";
import { Box, Stack } from "@mui/material";
import CustomAppBar from "./components/AppBar/CustomAppBar";
import NewForm from "./uicomponents/NewForm";
import CardView from "./uicomponents/CardView";

function App() {
  return (
    <Box
      sx={{
        position: "relative !important",
        height: "100vh",
        backgroundColor: "#00000021",
        boxSizing: "content-box",
      }}
    >
      <CustomAppBar />
      <Stack
        display="flex"
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          width: "100%",
          height: "100%",
          flex: 1,
          padding: "24px",
        }}
      >
        <Stack
          display="flex"
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            width: "100%",
            height: "auto",
            flex: 1,
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          <NewForm />
          <CardView />
          <CardView />
        </Stack>
      </Stack>
    </Box>
  );
}

export default App;
