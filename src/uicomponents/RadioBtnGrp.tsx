import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { FormGeneratorProps } from "../pages/type";

export default function RadioBtnGrp(props: Readonly<FormGeneratorProps>) {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        {props.state?.radioGrpOptions?.map((row, index) => (
          <FormControlLabel
            key={`index-${index}-${row.value}`}
            value={row?.value}
            control={<Radio />}
            label={row?.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
