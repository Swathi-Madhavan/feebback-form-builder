import React from "react";
import { Box } from "@mui/material";
import RowStart from "../../StylesComponents/RowStart";
import BackArrowIcon from "../../assets/icons/BackArrowIcon";
import CutsomTypography from "../../StylesComponents/CutsomTypography";
import EditIcon from "../../assets/icons/EditIcon";

export default function FormTitle() {
  return (
    <Box
      sx={{
        width: "auto",
        height: "auto",
        padding: "17px 163px 17px 12px",
        backgroundColor: "#5578f4",
        borderRadius: "10px 10px 0px 0px",
      }}
    >
      <RowStart
        sx={{
          alignItems: "center",
        }}
      >
        <BackArrowIcon
          sx={{
            fontSize: "40px",
          }}
        />
        <CutsomTypography
          sx={{
            fontSize: "24px",
            lineHeight: "38.4px",
            letterSpacing: "1.6",
            color: "#FFF",
          }}
        >
          Generic Website Rating
        </CutsomTypography>
        <EditIcon sx={{ marginLeft: "5px" }} />
      </RowStart>
    </Box>
  );
}
