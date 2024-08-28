import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { BuilderFormType } from "../pages/type";
import PenEditIcon from "../assets/icons/PenEditIcon";
import DeleteGrayIcon from "../assets/icons/DeleteGrayIcon";
import FormGenerator from "../components/AppBar/FormGenerator";

interface FormItemProps extends BuilderFormType {
  onEdit: (ikey: string) => void;
  onDelete: (ikey: string) => void;
}

export default function FormItem(props: Readonly<FormItemProps>) {
  const { uniqueKey, onDelete, onEdit, state } = props;
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: "100%",
        minHeight: "189px",
        padding: "9px",
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.25)",
        bgcolor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flex: 1,
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          fontFamily: "Roboto",
          lineHeight: "1.6",
          letterSpacing: "0.15px",
          color: "#232323",
        }}
      >
        {state.label}
      </Typography>
      <FormGenerator {...props} />
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={{
          width: "100%",
        }}
      >
        <Button
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: "24px",
            },
          }}
          onClick={() => onEdit(uniqueKey)}
        >
          <PenEditIcon />
        </Button>
        <Button
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: "24px",
            },
          }}
          onClick={() => onDelete(uniqueKey)}
        >
          <DeleteGrayIcon />
        </Button>
      </Stack>
    </Box>
  );
}
