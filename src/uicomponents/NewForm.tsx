import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import PlusIcon from "../assets/icons/PlusIcon";
import StyledCard from "../StylesComponents/CardStyle";
import CustomModal from "../components/AppBar/CustomModal";
import CutsomTypography from "../StylesComponents/CutsomTypography";
import { useAppDispatch } from "../Store/store";
import { setActiveFormName } from "../Store/slice/createFormSlice";
import { useNavigate } from "react-router-dom";

export default function NewForm() {
  const [open, setOpen] = useState<boolean>(false);

  const [formName, setFormName] = useState<string>("");

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleBtnClick = useCallback(
    (isOpen: boolean = false, isCreate = false) => {
      setOpen(isOpen);

      if (isCreate) {
        dispatch(setActiveFormName(formName));
        setFormName("");
        navigate("/createForm");
      }
    },
    [dispatch, formName, navigate]
  );

  const handleValueChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormName(event?.target?.value);
    },
    []
  );

  return (
    <StyledCard
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "306px",
        height: "379px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        backgroundColor: "#FFF",
        borderRadius: "8px",
      }}
    >
      <Stack display="flex" direction="column" flex={1} />
      <Stack
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
        flex={2}
        sx={{
          gap: "14px",
        }}
      >
        <Button
          sx={{
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "14px",
          }}
          onClick={() => handleBtnClick(true)}
        >
          <Stack
            display="flex"
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: "60px",
              },
            }}
          >
            <PlusIcon />
          </Stack>
          <Stack
            display="flex"
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: "60px",
              },
            }}
          >
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Roboto",
                fontWeight: "500",
                fontSize: "32px",
                lineHeight: "51px",
                letterSpacing: "0.15px",
                textAlign: "left",
                color: "#262626",
                textDecoration: "none",
              }}
            >
              New form
            </Typography>
          </Stack>
        </Button>
      </Stack>
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
          Create Feedback Form
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
            Create
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
    </StyledCard>
  );
}
