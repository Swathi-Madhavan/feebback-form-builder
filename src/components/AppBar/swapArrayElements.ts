import { cloneDeep } from "lodash";
import { FormFieldsType } from "../../pages/type";

export default function swapArrayElements(
  data: Array<FormFieldsType>,
  index1: number,
  index2: number
) {
  const arr: Array<FormFieldsType> = cloneDeep(data);
  if (
    index1 < 0 ||
    index1 >= arr.length ||
    index2 < 0 ||
    index2 >= arr.length
  ) {
    console.error("Index out of bounds");
    return;
  }

  // Swap elements
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

  return arr;
}
