import { cloneDeep } from "lodash";
import { BuilderFormType } from "../../pages/type";

export default function swapArrayElements(
  data: Array<BuilderFormType>,
  index1: number,
  index2: number
) {
  const arr: Array<BuilderFormType> = cloneDeep(data);
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
