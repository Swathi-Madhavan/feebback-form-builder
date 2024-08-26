import * as React from "react";
import { Stack, TextField } from "@mui/material";

export default function SingleInput() {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "20px",
        height: "36px",
      }}
    >
      <TextField />
    </Stack>
  );
}
