import * as React from "react";
import Rating from "@mui/material/Rating";

export default function CustomRating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
}
