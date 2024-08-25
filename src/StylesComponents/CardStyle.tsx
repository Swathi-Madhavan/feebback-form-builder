import { styled } from "@mui/system";
import { Stack } from "@mui/material";

const StyledCard = styled(Stack)({
  position: "relative",
  width: "306px",
  height: "379px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  backgroundColor: "#FFF",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
});

export default StyledCard;
