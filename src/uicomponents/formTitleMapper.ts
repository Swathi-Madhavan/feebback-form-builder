import { FormItemType } from "../pages/type";

export default function formTitleMapper(type: FormItemType) {
  if (type === "textArea") {
    return "Would you like to add a comment?";
  }

  if (type === "numericRating") {
    return "How likely is it that you will recommend us to your family and friends?";
  }

  if (type === "starRating") {
    return "Give a star rating for the website.";
  }
  if (type === "smileyRating") {
    return "What is your opinion of this page?";
  }
  if (type === "singleLineInput") {
    return "Do you have any suggestions to improve our website?";
  }
  if (type === "radioButton") {
    return "Multiple choice - 1 answer";
  }
  if (type === "categories") {
    return "Pick a subject and provide your feedback:";
  }
  return "";
}
