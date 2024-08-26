import React from "react";
import Textarea from "../../StylesComponents/Textarea";
import { FormItemType } from "../../pages/type";
import Numberrating from "../../uicomponents/Numberrating";
import Cate from "../../uicomponents/Cate";
import SingleInput from "../../uicomponents/SingleInput";
import RadioBtnGrp from "../../uicomponents/RadioBtnGrp";
import CustomRating from "../../uicomponents/Rating";
import SmileyRating from "../../StylesComponents/SmileyRating";

interface FormGeneratorProps {
  key: string;
  id: FormItemType;
}

export default function FormGenerator({ id }: Readonly<FormGeneratorProps>) {
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
    return <Cate />;
  }

  if (id === "singleLineInput") {
    return <SingleInput />;
  }

  if (id === "radioButton") {
    return <RadioBtnGrp />;
  }

  if (id === "starRating") {
    return <CustomRating />;
  }

  if (id === "smileyRating") {
    return <SmileyRating />;
  }

  return null;
}
