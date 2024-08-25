import { styled } from "@mui/system";
import { Button } from "@mui/material";

const BlueButton = styled(Button)({
  padding: "8px 22px",
  borderRadius: "4px",
  fontFamily: "Roboto",
  fontSize: "15px",
  lineHeight: "1.73",
  letterSpacing: "0.46px",
  color: "#FFF !important",
  boxShadow:
    "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
  backgroundColor: "#2196f3 !important",
  whiteSpace: "nowrap",
  textTransform: "uppercase",
  "&:hover": {
    backgroundColor: "#2196f3",
    color: "#FFF",
  },
});

export default BlueButton;
