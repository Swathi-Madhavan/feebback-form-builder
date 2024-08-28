import React from "react";
import Textarea from "../../StylesComponents/Textarea";
import { FormGeneratorProps } from "../../pages/type";
import Numberrating from "../../uicomponents/Numberrating";
import Cate from "../../uicomponents/Cate";
import SingleInput from "../../uicomponents/SingleInput";
import RadioBtnGrp from "../../uicomponents/RadioBtnGrp";
import CustomRating from "../../uicomponents/Rating";
import SmileyRating from "../../StylesComponents/SmileyRating";

export default function FormGenerator(props: Readonly<FormGeneratorProps>) {
  const { id } = props;

  if (id === "textArea") {
    return (
      <Textarea
        aria-label="minimum height"
        minRows={3}
        placeholder="Minimum 3 rows"
      />
    );
  }

  if (id === "numericRating") {
    return <Numberrating />;
  }

  if (id === "categories") {
    return <Cate {...props}/>;
  }

  if (id === "singleLineInput") {
    return <SingleInput />;
  }

  if (id === "radioButton") {
    return <RadioBtnGrp {...props}/>;
  }

  if (id === "starRating") {
    return <CustomRating />;
  }

  if (id === "smileyRating") {
    return <SmileyRating />;
  }

  return null;
}
