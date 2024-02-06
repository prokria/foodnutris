import foodData, { FoodDataType } from "../../utilities/foods";
import { MEALS } from "../../utilities/constants";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type FoodListPropsType = {
  addFood: (meal: string, foodItem: FoodDataType) => void;
};
export default function FoodList({ addFood }: FoodListPropsType) {
  return (
    <>
      <Typography
        variant="h6"
        component="h6"
        sx={{ textAlign: "center", padding: 2 }}
      >
        Food List
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={MEALS.breakFast + "-content"}
          id={MEALS.breakFast}
        >
          <Typography>{MEALS.breakFast}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {foodData.map(
            (item: FoodDataType) =>
              item.meals.includes(MEALS.breakFast) && (
                <Chip
                  key={item.id}
                  label={`${item.name} | ${item.calorie}`}
                  variant="outlined"
                  sx={{ margin: 0.5 }}
                  onClick={() => addFood(MEALS.breakFast, item)}
                  color={item.color}
                />
              )
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={MEALS.morningSnacks + "-content"}
          id={MEALS.morningSnacks}
        >
          <Typography>{MEALS.morningSnacks}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {foodData.map(
            (item: FoodDataType) =>
              item.meals.includes(MEALS.morningSnacks) && (
                <Chip
                  key={item.id}
                  label={`${item.name} | ${item.calorie}`}
                  variant="outlined"
                  sx={{ margin: 0.5 }}
                  onClick={() => addFood(MEALS.morningSnacks, item)}
                  color={item.color}
                />
              )
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={MEALS.lunch + "-content"}
          id={MEALS.lunch}
        >
          <Typography>{MEALS.lunch}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {foodData.map(
            (item: FoodDataType) =>
              item.meals.includes(MEALS.lunch) && (
                <Chip
                  key={item.id}
                  label={`${item.name} | ${item.calorie}`}
                  variant="outlined"
                  sx={{ margin: 0.5 }}
                  onClick={() => addFood(MEALS.lunch, item)}
                  color={item.color}
                />
              )
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={MEALS.afternoonSnacks + "-content"}
          id={MEALS.afternoonSnacks}
        >
          <Typography>{MEALS.afternoonSnacks}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {foodData.map(
            (item: FoodDataType) =>
              item.meals.includes(MEALS.afternoonSnacks) && (
                <Chip
                  key={item.id}
                  label={`${item.name} | ${item.calorie}`}
                  variant="outlined"
                  sx={{ margin: 0.5 }}
                  onClick={() => addFood(MEALS.afternoonSnacks, item)}
                  color={item.color}
                />
              )
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={MEALS.dinner + "-content"}
          id={MEALS.dinner}
        >
          <Typography>{MEALS.dinner}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {foodData.map(
            (item: FoodDataType) =>
              item.meals.includes(MEALS.dinner) && (
                <Chip
                  key={item.id}
                  label={`${item.name} | ${item.calorie}`}
                  variant="outlined"
                  sx={{ margin: 0.5 }}
                  onClick={() => addFood(MEALS.dinner, item)}
                  color={item.color}
                />
              )
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={MEALS.bedSnacks + "-content"}
          id={MEALS.bedSnacks}
        >
          <Typography>{MEALS.bedSnacks}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {foodData.map(
            (item: FoodDataType) =>
              item.meals.includes(MEALS.bedSnacks) && (
                <Chip
                  key={item.id}
                  label={`${item.name} | ${item.calorie}`}
                  variant="outlined"
                  sx={{ margin: 0.5 }}
                  onClick={() => addFood(MEALS.bedSnacks, item)}
                  color={item.color}
                />
              )
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={MEALS.fastFood + "-content"}
          id="Others"
        >
          <Typography>{MEALS.fastFood}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {foodData.map(
            (item: FoodDataType) =>
              item.meals.includes(MEALS.fastFood) && (
                <Chip
                  key={item.id}
                  label={`${item.name} | ${item.calorie}`}
                  variant="outlined"
                  sx={{ margin: 0.5 }}
                  onClick={() => addFood(MEALS.fastFood, item)}
                  color={item.color}
                />
              )
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
}
