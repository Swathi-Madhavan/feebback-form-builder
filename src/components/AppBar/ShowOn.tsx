import React, { ChangeEvent } from "react";
import { Switch, TextField } from "@mui/material";
import ColStart from "../../StylesComponents/ColStart";
import RowSpaceBetween from "../../StylesComponents/RowSpaceBetween";
import CutsomTypography from "../../StylesComponents/CutsomTypography";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useFormContext, useWatch } from "react-hook-form";
import { DynamicFormStruct } from "../../pages/type";

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

interface ShowOnProps {
  uniqueId: keyof DataMappingType;
  switchHandlerName: keyof DynamicFormStruct;
  label: string;
}

export default function ShowOn({
  uniqueId,
  switchHandlerName,
  label,
}: Readonly<ShowOnProps>) {
  const form = useFormContext<DynamicFormStruct>();

  const [checked] = useWatch<DynamicFormStruct>({
    control: form.control,
    name: [switchHandlerName],
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue(switchHandlerName, event.target.checked);
  };

  const handleonURLChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    form.setValue("url", event?.target?.value);
  };

  const renderInput = () => {
    if (uniqueId === "url") {
      const urlValue = form.getValues("url");

      return (
        <TextField
          id="standard-basic"
          label=""
          variant="standard"
          placeholder={"http://"}
          sx={{ width: "100%" }}
          value={urlValue}
          onChange={handleonURLChange}
        />
      );
    }

    if (uniqueId === "date") {
      const dateValue = form.getValues("date");
      return (
        <DatePicker
          value={dateValue}
          onChange={(newValue) => form.setValue("date", newValue)}
          sx={{ width: "100%" }}
        />
      );
    }

    if (uniqueId === "time") {
      const timeValue = form.getValues("date");

      return (
        <TimePicker
          value={timeValue}
          onChange={(newValue) => form.setValue("time", newValue)}
          referenceDate={dayjs("2022-04-17")}
          sx={{ width: "100%" }}
        />
      );
    }

    return <></>;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
            {label}
          </CutsomTypography>
          <Switch
            checked={Boolean(checked) ?? false}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </RowSpaceBetween>

        {renderInput()}
      </ColStart>
    </LocalizationProvider>
  );
}
