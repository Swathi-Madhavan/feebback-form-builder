import { styled } from "@mui/system";
import { Stack } from "@mui/material";

const RootRow = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",

  width: "100%",
  height: "auto",
  flex: 1,
  flexWrap: "wrap",
  gap: "30px",
});

export default RootRow;
