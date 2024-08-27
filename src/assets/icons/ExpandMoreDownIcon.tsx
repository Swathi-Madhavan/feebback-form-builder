import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";

const ExpandMoreDownIcon = createSvgIcon(
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m12 15.705 6-6-1.41-1.41-4.59 4.58-4.59-4.58L6 9.705l6 6z"
      fill="#000"
      fillOpacity=".56"
    />
  </svg>,
  "ExpandMoreDownIcon"
);

export default ExpandMoreDownIcon;
