export type FormItemType =
  | "textArea"
  | "numericRating"
  | "starRating"
  | "smileyRating"
  | "singleLineInput"
  | "radioButton"
  | "categories";

export interface FormFieldsType {
  id: FormItemType;
  label: string;
  key: string;
}
