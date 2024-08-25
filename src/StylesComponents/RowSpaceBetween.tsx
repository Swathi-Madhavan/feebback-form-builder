import { styled } from "@mui/system";
import { Stack } from "@mui/material";

const RowSpaceBetween = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export default RowSpaceBetween;
