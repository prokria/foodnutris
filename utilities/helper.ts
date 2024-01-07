import { FoodDataType } from "./foods";

export type ColorType =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning";

export function getRandomColor(): ColorType {
  const colors: ColorType[] = [
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

export function isItemExists(arr: FoodDataType[], idToCheck: number): boolean {
  return arr.some((obj) => obj.id === idToCheck);
}

export function formatNumber(inputNumber: number) {
  if (Number.isInteger(inputNumber)) {
    return inputNumber;
  } else {
    return parseFloat(inputNumber.toFixed(2));
  }
}
