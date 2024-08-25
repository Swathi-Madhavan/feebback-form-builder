import React from "react";
import { Switch, TextField } from "@mui/material";
import ColStart from "../../StylesComponents/ColStart";
import RowSpaceBetween from "../../StylesComponents/RowSpaceBetween";
import CutsomTypography from "../../StylesComponents/CutsomTypography";

interface DataType {
  id: string;
  switchState: boolean;
  type: string;
  label: string;
  placeHolder: string;
}

interface DataMappingType {
  url: DataType;
  date: DataType;
  time: DataType;
}

const dataMapping = {
  url: {
    id: "showonURLCondition",
    switchState: true,
    type: "text",
    label: "Show based on URL conditions",
    placeHolder: "http://",
  },
  date: {
    id: "showonDateCondition",
    switchState: true,
    type: "date",
    label: "Show on a specific date",
    placeHolder: "MM/DD/YYYY",
  },
  time: {
    id: "showonTimeondition",
    switchState: true,
    type: "time",
    label: "Show on a specific time",
    placeHolder: "hh:mm aa",
  },
};

interface ShowOnProps {
  uniqueId: keyof DataMappingType;
}

export default function ShowOn({ uniqueId }: Readonly<ShowOnProps>) {
  const data = dataMapping[uniqueId];

  const [checked, setChecked] = React.useState(data?.switchState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <ColStart
      sx={{
        width: "100%",
      }}
    >
      <RowSpaceBetween
        sx={{
          width: "100%",
        }}
      >
        <CutsomTypography
          sx={{
            fontSize: "14px",
            fontweight: "500",
            lineHeight: "22.4px",
            letterSpacing: "0.15px",
            color: "#4c4545",
          }}
        >
          {data.label}
        </CutsomTypography>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </RowSpaceBetween>
      <TextField
        id="standard-basic"
        label=""
        variant="standard"
        placeholder={data?.placeHolder}
        sx={{ width: "100%" }}
      />
    </ColStart>
  );
}
