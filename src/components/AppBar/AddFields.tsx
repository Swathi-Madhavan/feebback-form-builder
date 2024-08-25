import React from "react";
import { Box } from "@mui/material";
import ColStart from "../../StylesComponents/ColStart";
import FieldCard from "../../uicomponents/FieldCard";
import ShowOn from "./ShowOn";

const fields = [
  { id: "textArea", label: "Textarea" },
  { id: "numericRating", label: "Numeric rating" },
  { id: "starRating", label: "Star rating" },
  { id: "smileyRating", label: "Smiley rating" },
  { id: "singleLineInput", label: "Single line input" },
  { id: "radioButton", label: "Radio button" },
  { id: "categories", label: "Categories" },
];

export default function AddFields() {
  return (
    <Box
      sx={{
        width: "317px",
        minWidth: "317px",
        padding: "21px 22px 21px 29px",
        boxShadow: "5px 4px 4px 0 rgba(0, 0, 0, 0.25)",
        backgroundColor: "#fff",
        position: "absolute",
        right: 0,
        height: "auto",
        marginTop: "-24px",
      }}
    >
      <ColStart
        sx={{
          gap: "14px",
          marginTop: "22px",
        }}
      >
        {fields.map((item) => (
          <FieldCard key={item?.id} {...item} />
        ))}
      </ColStart>
      <ColStart
        sx={{
          gap: "34px",
          marginTop: "50px",
        }}
      >
        <ShowOn uniqueId="url" />
        <ShowOn uniqueId="date" />
        <ShowOn uniqueId="time" />
      </ColStart>
    </Box>
  );
}
