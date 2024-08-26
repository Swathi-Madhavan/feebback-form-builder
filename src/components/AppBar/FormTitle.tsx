import React, { useCallback } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import RowStart from "../../StylesComponents/RowStart";
import BackArrowIcon from "../../assets/icons/BackArrowIcon";
import CutsomTypography from "../../StylesComponents/CutsomTypography";
import EditIcon from "../../assets/icons/EditIcon";
import useTitleChangeHook from "../../hook/useTitleChangeHook";
import CustomModal from "./CustomModal";
import { useNavigate } from "react-router-dom";
import { RootState, useAppSelector } from "../../Store/store";

export default function FormTitle() {
  const { handleBtnClick, handleValueChange, open , formName} = useTitleChangeHook(false);

  const { formName: reduxFormName } = useAppSelector(
    (state: RootState) => state.form
  );
  const navigate = useNavigate();

  const handleBackBtn = useCallback(() => {
    navigate("/");
  }, [navigate]);

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
        <Button sx={{ color: "#FFF" }} onClick={handleBackBtn}>
          <BackArrowIcon
            sx={{
              fontSize: "40px",
            }}
          />
        </Button>
        <CutsomTypography
          sx={{
            fontSize: "24px",
            lineHeight: "38.4px",
            letterSpacing: "1.6",
            color: "#FFF",
          }}
        >
          {reduxFormName}
        </CutsomTypography>
        <Button sx={{ color: "#FFF" }} onClick={() => handleBtnClick(true)}>
          <EditIcon sx={{ marginLeft: "5px" }} />
        </Button>
      </RowStart>
      <CustomModal open={open} handleCloseCallBack={handleBtnClick}>
        <CutsomTypography
          sx={{
            fontSize: "20px",
            fontweight: "500",
            lineHeight: "1.6",
            letterSpacing: "0.15px",
            color: "#000000de",
            width: "100%",
          }}
        >
          Edit
        </CutsomTypography>
        <TextField
          id="standard-basic"
          label=""
          variant="standard"
          value={formName}
          onChange={handleValueChange}
        />
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Button
            sx={{
              fontFamily: "Roboto",
              fontSize: "14px",
              fontweight: "500",
              lineHeight: "1.7",
              letterSpacing: "0.4px",
              color: "#189657 !important",
              padding: "6px 8px",
              borderRadius: "4px",
              backgroundColor: "#fff !important",
            }}
            onClick={() => handleBtnClick(false, true)}
          >
            Save
          </Button>
          <Button
            sx={{
              fontFamily: "Roboto",
              fontSize: "14px",
              fontweight: "500",
              lineHeight: "1.7",
              letterSpacing: "0.4px",
              color: "#19191957 !important",
              padding: "6px 8px",
              borderRadius: "4px",
              backgroundColor: "#fff !important",
            }}
            onClick={() => handleBtnClick(false)}
          >
            Cancel
          </Button>
        </Stack>
      </CustomModal>
    </Box>
  );
}
