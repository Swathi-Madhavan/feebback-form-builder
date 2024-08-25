import { Stack, Typography } from "@mui/material";
import React from "react";
import PlusIcon from "../assets/icons/PlusIcon";
import StyledCard from "../StylesComponents/CardStyle";

export default function NewForm() {
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
      </Stack>
    </StyledCard>
  );
}
