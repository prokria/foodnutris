export type ColorType =
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning";

export function getRandomColor(): ColorType {
  const colors: ColorType[] = [
    "default",
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
