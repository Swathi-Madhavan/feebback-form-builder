import { Button, Stack } from "@mui/material";
import React from "react";
import StyledCard from "../StylesComponents/CardStyle";
import FormIcon from "../assets/icons/FormIcon";
import RowSpaceBetween from "../StylesComponents/RowSpaceBetween";
import CutsomTypography from "../StylesComponents/CutsomTypography";

export default function CardView() {
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
              Delivery
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
            <Button
              sx={{
                padding: "8px 22px",
                borderRadius: "4px",
                fontFamily: "Roboto",
                fontSize: "15px",
                lineHeight: "1.73",
                letterSpacing: "0.46px",
                color: "#FFF",
                boxShadow:
                  "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                backgroundColor: "#2e7d32",
                whiteSpace: "nowrap",
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: "#2e7d32",
                  color: "#FFF",
                },
              }}
            >
              Edit
            </Button>
            <Button
              sx={{
                padding: "8px 22px",
                borderRadius: "4px",
                fontFamily: "Roboto",
                fontSize: "15px",
                lineHeight: "1.73",
                letterSpacing: "0.46px",
                color: "#FFF",
                boxShadow:
                  "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                backgroundColor: "#2196f3",
                whiteSpace: "nowrap",
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: "#2196f3",
                  color: "#FFF",
                },
              }}
            >
              DELETE
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </StyledCard>
  );
}
