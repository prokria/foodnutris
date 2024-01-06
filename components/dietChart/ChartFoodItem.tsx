import { useMemo, useState } from "react";
import { ButtonGroup, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { FoodDataType } from "../../utilities/foods";

type ChartFoodItemType = {
  food: FoodDataType;
  removeFood: (foodId: number) => void;
  updateFoodServe: (foodId: number, serve: number) => void;
};
export default function ChartFoodItem({
  food,
  removeFood,
  updateFoodServe,
}: ChartFoodItemType) {
  return (
    <ButtonGroup
      key={food.id}
      color={food.color || "secondary"}
      variant="outlined"
      aria-label={food.nameEn}
      sx={{ margin: 0.5 }}
    >
      <Button
        onClick={() => {
          updateFoodServe(food.id, food.serve + 1);
        }}
      >
        <AddCircleOutlineIcon />
      </Button>
      <Button>
        {food.size * food.serve} {food.unit}
      </Button>
      <Button
        onClick={() => {
          const updatedCounter: number = food.serve > 1 ? food.serve - 1 : 1;
          updateFoodServe(food.id, updatedCounter);
        }}
      >
        <RemoveCircleIcon />
      </Button>
      <Button>{food.name}</Button>
      <Button onClick={() => removeFood(food.id)}>
        <HighlightOffIcon />
      </Button>
    </ButtonGroup>
  );
}
