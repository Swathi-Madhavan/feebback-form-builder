import { DynamicFormStruct } from "../pages/type";

export interface NavBarSliceType {
  saveFormData: boolean;
  publishFormData: boolean;
}

export interface CreateFormSliceType {
  formName: string;
  formId: string;
}

export interface ListofFormsSliceType {
  forms: Array<DynamicFormStruct>;
}
