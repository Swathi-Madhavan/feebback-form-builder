import CateIcon from "../assets/icons/CateIcon";
import InputIcon from "../assets/icons/InputIcon";
import NumberRatingIcon from "../assets/icons/NumberRatingIcon";
import RadioIcon from "../assets/icons/RadioIcon";
import SmileIcon from "../assets/icons/SmileIcon";
import StarIcon from "../assets/icons/StarIcon";
import TextAreaIcon from "../assets/icons/TextAreaIcon";
import React, { ReactNode } from "react";

const iconMapping: Record<string, ReactNode> = {
  Textarea: <TextAreaIcon sx={{ fontSize: "22.5px" }} />,
  "Numeric rating": <NumberRatingIcon sx={{ fontSize: "22.5px" }} />,
  "Star rating": <StarIcon sx={{ fontSize: "22.5px" }} />,
  "Smiley rating": <SmileIcon sx={{ fontSize: "22.5px" }} />,
  "Single line input": <InputIcon sx={{ fontSize: "22.5px" }} />,
  "Radio button": <RadioIcon sx={{ fontSize: "22.5px" }} />,
  Categories: <CateIcon sx={{ fontSize: "22.5px" }} />,
};

export default iconMapping;
