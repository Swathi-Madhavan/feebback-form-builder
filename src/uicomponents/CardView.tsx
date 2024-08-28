import { Button, Stack } from "@mui/material";
import React, { useCallback, useState } from "react";
import StyledCard from "../StylesComponents/CardStyle";
import FormIcon from "../assets/icons/FormIcon";
import RowSpaceBetween from "../StylesComponents/RowSpaceBetween";
import CutsomTypography from "../StylesComponents/CutsomTypography";
import BlueButton from "../StylesComponents/BlueButton";
import GreenButton from "../StylesComponents/GreenButton";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Store/store";
import { DynamicFormStruct } from "../pages/type";
import { setListOfAvailableForms } from "../Store/slice/listofForms";
import CustomModal from "../components/AppBar/CustomModal";

export default function CardView(props: Readonly<DynamicFormStruct>) {
  const { formName, formId } = props;
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { forms } = useAppSelector((state) => state.listOfForms);

  const handleHandleEdit = useCallback(() => {
    navigate("/createForm", { state: props });
  }, [navigate, props]);

  const handleHandleDelete = useCallback(
    (yes: boolean = false) => {
      if (yes) {
        const prevForms = [...forms];
        const updatedForms = prevForms?.filter((row) => row.formId !== formId);
        dispatch(setListOfAvailableForms(updatedForms));
      }

      setShowDeleteModal(false);
    },
    [dispatch, formId, forms]
  );

  const handleDeleteCallBack = useCallback(() => {
    setShowDeleteModal(true);
  }, []);

  return (
    <StyledCard
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "306px",
        height: "379px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        backgroundColor: "#FFF",
      }}
    >
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "calc(100% - 18px)",
          height: "68px",
          padding: "10px",
          backgroundColor: "#f5d563",
          borderRadius: "8px 8px 0px 0px",
          "& .MuiSvgIcon-root": {
            fontSize: "48px",
          },
        }}
      >
        <FormIcon />
      </Stack>
      <Stack
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          width: "calc(100% - 29px)",
          height: "100%",
          padding: "0px 14.5px",
          backgroundColor: "#fff",
          gap: "39px",
          borderRadius: "0px 0px 8px 8px ",
        }}
      >
        <Stack
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            gap: "13px",
            width: "100%",
          }}
        >
          <RowSpaceBetween sx={{ width: "100%" }}>
            <CutsomTypography
              sx={{
                fontSize: "20px",
                fontweight: "500",
                lineHeight: "1.6",
                letterSpacing: "0.15px",
                color: "#000",
                textAlign: "left",
              }}
            >
              {formName}
            </CutsomTypography>
          </RowSpaceBetween>
          <RowSpaceBetween sx={{ width: "100%" }}>
            <CutsomTypography
              sx={{
                fontSize: "13px",
                fontweight: "500",
                lineHeight: "20.8px",
                letterSpacing: "0.15px",
                color: "#8e8e8e",
                width: "100%",
              }}
            >
              Submitted
            </CutsomTypography>
            <CutsomTypography
              sx={{
                fontSize: "13px",
                fontweight: "500",
                lineHeight: "20.8px",
                letterSpacing: "0.15px",
                color: "#000",
              }}
            >
              10
            </CutsomTypography>
          </RowSpaceBetween>
          <RowSpaceBetween sx={{ width: "100%" }}>
            <CutsomTypography
              sx={{
                fontSize: "13px",
                fontweight: "500",
                lineHeight: "20.8px",
                letterSpacing: "0.15px",
                color: "#8e8e8e",
              }}
            >
              Viewed
            </CutsomTypography>
            <CutsomTypography
              sx={{
                fontSize: "13px",
                fontweight: "500",
                lineHeight: "20.8px",
                letterSpacing: "0.15px",
                color: "#000",
              }}
            >
              55
            </CutsomTypography>
          </RowSpaceBetween>
          <RowSpaceBetween sx={{ width: "100%" }}>
            <CutsomTypography
              sx={{
                fontSize: "13px",
                fontweight: "500",
                lineHeight: "20.8px",
                letterSpacing: "0.15px",
                color: "#8e8e8e",
              }}
            >
              Date Published
            </CutsomTypography>
            <CutsomTypography
              sx={{
                fontSize: "13px",
                fontweight: "500",
                lineHeight: "20.8px",
                letterSpacing: "0.15px",
                color: "#000",
              }}
            >
              8/8/2024
            </CutsomTypography>
          </RowSpaceBetween>
        </Stack>

        <Stack
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            gap: "21px",
            width: "100%",
          }}
        >
          <Stack
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "100%",
            }}
          >
            <Button
              sx={{
                width: "179px",
                padding: "8px 22px",
                borderRadius: "4px",
                fontFamily: "Roboto",
                fontSize: "15px",
                lineHeight: "1.73",
                letterSpacing: "0.46px",
                color: "#FFF",
                boxShadow:
                  "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                backgroundColor: "#9c27b0",
                whiteSpace: "nowrap",
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: "#9c27b0",
                  color: "#FFF",
                },
              }}
            >
              View Submission
            </Button>
          </Stack>
          <Stack
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "100%",
              gap: "8px",
            }}
          >
            <GreenButton onClick={handleHandleEdit}>Edit</GreenButton>
            <BlueButton onClick={handleDeleteCallBack}>DELETE</BlueButton>
          </Stack>
        </Stack>
      </Stack>
      <CustomModal
        open={showDeleteModal}
        handleCloseCallBack={handleHandleDelete}
      >
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
          Do you want to delete form {formName}?
        </CutsomTypography>

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
            onClick={() => handleHandleDelete(true)}
          >
            Delete
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
            onClick={() => handleHandleDelete(false)}
          >
            Cancel
          </Button>
        </Stack>
      </CustomModal>
    </StyledCard>
  );
}
