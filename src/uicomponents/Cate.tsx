import * as React from "react";
import { Button, ButtonGroup, Stack } from "@mui/material";
import { FormGeneratorProps } from "../pages/type";

export default function Cate(props: Readonly<FormGeneratorProps>) {
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
        {props.state?.categoriesOptions?.map((btn) => (
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
            {btn?.label}
          </Button>
        ))}
      </Stack>
    </ButtonGroup>
  );
}
