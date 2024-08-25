import React from "react";
import RowSpaceBetween from "../StylesComponents/RowSpaceBetween";
import RowStart from "../StylesComponents/RowStart";
import AddIcon from "../assets/icons/AddIcon";
import CutsomTypography from "../StylesComponents/CutsomTypography";
import iconMapping from "./iconMap";

interface FieldCardProp {
  id: string;
  label: string;
}

export default function FieldCard({ id, label }: Readonly<FieldCardProp>) {
  return (
    <RowSpaceBetween sx={{ width: "100%" }}>
      <RowStart
        sx={{
          gap: "12px",
        }}
      >
        {iconMapping[label]}
        <CutsomTypography
          sx={{
            fontSize: "16px",
            lineHeight: "25.6px",
            letterSpacing: "0.15px",
            color: "#2b2b2b",
          }}
        >
          {label}
        </CutsomTypography>
      </RowStart>
      <AddIcon
        sx={{
          fontSize: "16px",
        }}
      />
    </RowSpaceBetween>
  );
}
