import React from "react";
import { Box } from "@mui/material";
import FormTitle from "./FormTitle";

export default function FormArea() {
  return (
    <Box
      sx={{
        minWidth: "500px",
        minHeight: "752px",
        borderRadius: "10px",
        boxShadow: "0px 4px 4px 0 rgba(0, 0, 0, 0.25)",
        bgcolor: "#FFF",
      }}
    >
      <FormTitle />
    </Box>
  );
}
