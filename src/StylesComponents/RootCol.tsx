import { styled } from "@mui/system";
import { Stack } from "@mui/material";

const RootCol = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",

  width: "100%",
  height: "100%",
  flex: 1,
  padding: "24px",
});

export default RootCol;
