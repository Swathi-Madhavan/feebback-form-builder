import * as React from "react";
import { Button, ButtonGroup, Stack } from "@mui/material";

export default function Numberrating() {
  return (
    <ButtonGroup>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((btn) => (
          <Button
            key={String(btn)}
            sx={{
              padding: "8px",
              fontSize: "14px",
              fontweight: "500",
              lineHeight: "1.48",
              letterSpacing: "0.15px",
              color: "#645757",
              flex: 1,
              display: "flex",
              height: 35,
              width: "47px",
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
