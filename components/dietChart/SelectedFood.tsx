import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MEALS } from "../../utilities/constants";
import { FoodDataType } from "../../utilities/foods";
type SelectedFoodPropsType = {
  breakfast: FoodDataType[];
  msnacks: FoodDataType[];
  lunch: FoodDataType[];
  asnacks: FoodDataType[];
  bsnacks: FoodDataType[];
  dinner: FoodDataType[];
  removeFood: (meal: string, foodId: number) => void;
};
export default function SelectedFood({
  removeFood,
  breakfast,
  msnacks,
  lunch,
  asnacks,
  dinner,
  bsnacks,
}: SelectedFoodPropsType) {
  return (
    <>
      <Typography
        variant="h6"
        component="h6"
        sx={{ margin: "0 auto", padding: 2 }}
      >
        Diet Chart
      </Typography>
      <Accordion disabled={!breakfast || !breakfast.length}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={MEALS.breakFast + "-diet"}
          id={MEALS.breakFast}
        >
          <Typography>{MEALS.breakFast}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {breakfast &&
            breakfast.map((item: FoodDataType) => (
              <Chip
                key={item.id}
                label={item.name}
                variant="outlined"
                // onClick={() => removeFood(MEALS.breakFast, item.id)}
                onDelete={() => removeFood(MEALS.breakFast, item.id)}
                sx={{ margin: 0.5 }}
                color={item.color}
              />
            ))}
        </AccordionDetails>
      </Accordion>
      <Accordion disabled={!msnacks || !msnacks.length}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={MEALS.morningSnacks + "-diet"}
          id={MEALS.morningSnacks}
        >
          <Typography>{MEALS.morningSnacks}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {msnacks &&
            msnacks.map((item: FoodDataType) => (
              <Chip
                key={item.id}
                label={item.name}
                variant="outlined"
                onDelete={() => removeFood(MEALS.morningSnacks, item.id)}
                sx={{ margin: 0.5 }}
                color={item.color}
              />
            ))}
        </AccordionDetails>
      </Accordion>
      <Accordion disabled={!lunch || !lunch.length}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={MEALS.lunch + "-diet"}
          id={MEALS.lunch}
        >
          <Typography>{MEALS.lunch}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {lunch &&
            lunch.map((item: FoodDataType) => (
              <Chip
                key={item.id}
                label={item.name}
                variant="outlined"
                onDelete={() => removeFood(MEALS.lunch, item.id)}
                sx={{ margin: 0.5 }}
                color={item.color}
              />
            ))}
        </AccordionDetails>
      </Accordion>
      <Accordion disabled={!asnacks || !asnacks.length}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={MEALS.afternoonSnacks + "-diet"}
          id={MEALS.afternoonSnacks}
        >
          <Typography>{MEALS.afternoonSnacks}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {asnacks &&
            asnacks.map((item: FoodDataType) => (
              <Chip
                key={item.id}
                label={item.name}
                variant="outlined"
                onDelete={() => removeFood(MEALS.afternoonSnacks, item.id)}
                sx={{ margin: 0.5 }}
                color={item.color}
              />
            ))}
        </AccordionDetails>
      </Accordion>
      <Accordion disabled={!dinner || !dinner.length}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={MEALS.dinner + "-diet"}
          id={MEALS.dinner}
        >
          <Typography>{MEALS.dinner}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {dinner &&
            dinner.map((item: FoodDataType) => (
              <Chip
                key={item.id}
                label={item.name}
                variant="outlined"
                onDelete={() => removeFood(MEALS.dinner, item.id)}
                sx={{ margin: 0.5 }}
                color={item.color}
              />
            ))}
        </AccordionDetails>
      </Accordion>
      <Accordion disabled={!bsnacks || !bsnacks.length}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={MEALS.bedSnacks + "-diet"}
          id={MEALS.bedSnacks}
        >
          <Typography>{MEALS.bedSnacks}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {bsnacks &&
            bsnacks.map((item: FoodDataType) => (
              <Chip
                key={item.id}
                label={item.name}
                variant="outlined"
                onDelete={() => removeFood(MEALS.bedSnacks, item.id)}
                sx={{ margin: 0.5 }}
                color={item.color}
              />
            ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
}
