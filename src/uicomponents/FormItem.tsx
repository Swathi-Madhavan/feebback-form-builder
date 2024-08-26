import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { FormFieldsType, FormItemType } from "../pages/type";
import formTitleMapper from "./formTitleMapper";
import PenEditIcon from "../assets/icons/PenEditIcon";
import DeleteGrayIcon from "../assets/icons/DeleteGrayIcon";
import FormGenerator from "../components/AppBar/FormGenerator";

interface FormItemProps extends FormFieldsType {
  onEdit: (ikey: FormItemType) => void;
  onDelete: (ikey: FormItemType) => void;
}

export default function FormItem({
  id,
  key,
  label,
  onDelete,
  onEdit,
}: Readonly<FormItemProps>) {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: "100%",
        height: "189px",
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
        {formTitleMapper(id)}
      </Typography>
      <FormGenerator key={key} id={id} />
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
        >
          <PenEditIcon />
        </Button>
        <Button
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: "24px",
            },
          }}
        >
          <DeleteGrayIcon />
        </Button>
      </Stack>
    </Box>
  );
}
