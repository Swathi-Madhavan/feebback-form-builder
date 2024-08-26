import * as React from "react";
import { Button, ButtonGroup, Stack } from "@mui/material";

export default function Cate() {
  return (
    <ButtonGroup>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {["Bug", "Content", "Other"].map((btn) => (
          <Button
            key={String(btn)}
            sx={{
              boxSizing: "border-box",
              padding: "8px",
              fontSize: "14px",
              fontweight: "500",
              lineHeight: "1.48",
              letterSpacing: "0.15px",
              color: "#645757",
              flex: 1,
              display: "flex",
              height: 35,
              width: "100%",
              border: "1px solid #dbd6d6",
              bgcolor: "#ffffff",
            }}
          >
            {btn}
          </Button>
        ))}
      </Stack>
    </ButtonGroup>
  );
}
