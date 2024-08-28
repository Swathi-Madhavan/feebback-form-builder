import { Dayjs } from "dayjs";

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
  uniqueKey: string;
}

export interface LabelValuePair {
  label: string;
  value: string;
}

export interface FormFieldsItem {
  label: string;
  placeHolder: string;
  isRequired: boolean;
  errorMessage?: string;
  isRadioGrp: boolean;
  radioGrpOptions?: Array<LabelValuePair>;
  isCategories: boolean;
  categoriesOptions?: Array<LabelValuePair>;
  userEnteredValue: string;
}

export interface BuilderFormType extends FormFieldsType {
  state: FormFieldsItem;
}

export interface DynamicFormStruct {
  showBasedonUrl: boolean;
  showOnDate: boolean;
  showOnTime: boolean;
  url?: string;
  time?: Dayjs | null;
  date?: Dayjs | null;
  formElements: Array<BuilderFormType>;
  formName: string;
  formId: string;
}

export interface FormGeneratorProps extends BuilderFormType {
  uniqueKey: string;
  id: FormItemType;
}

export interface EditFormOptionDataTypes {
  [formIndex: number]: string;
}
