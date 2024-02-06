import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MEALS } from "../../utilities/constants";
import { FoodDataType } from "../../utilities/foods";
import ChartFoodItem from "./ChartFoodItem";

type SelectedFoodPropsType = {
  breakfast: FoodDataType[];
  msnacks: FoodDataType[];
  lunch: FoodDataType[];
  asnacks: FoodDataType[];
  bsnacks: FoodDataType[];
  dinner: FoodDataType[];
  fast: FoodDataType[];
  removeFood: (meal: string, foodId: number) => void;
  updateFoodServe: (meal: string, foodId: number, serve: number) => void;
};
export default function SelectedFood({
  removeFood,
  updateFoodServe,
  breakfast,
  msnacks,
  lunch,
  asnacks,
  dinner,
  bsnacks,
  fast,
}: SelectedFoodPropsType) {
  return (
    <>
      <Typography
        variant="h6"
        component="h6"
        sx={{ marginTop: 5, textAlign: "center", padding: 2 }}
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
              <ChartFoodItem
                key={item.id}
                food={item}
                removeFood={(foodId: number) =>
                  removeFood(MEALS.breakFast, foodId)
                }
                updateFoodServe={(foodId: number, serve: number) =>
                  updateFoodServe(MEALS.breakFast, foodId, serve)
                }
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
              <ChartFoodItem
                key={item.id}
                food={item}
                removeFood={(foodId: number) =>
                  removeFood(MEALS.morningSnacks, foodId)
                }
                updateFoodServe={(foodId: number, serve: number) =>
                  updateFoodServe(MEALS.morningSnacks, foodId, serve)
                }
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
              <ChartFoodItem
                key={item.id}
                food={item}
                removeFood={(foodId: number) => removeFood(MEALS.lunch, foodId)}
                updateFoodServe={(foodId: number, serve: number) =>
                  updateFoodServe(MEALS.lunch, foodId, serve)
                }
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
              <ChartFoodItem
                key={item.id}
                food={item}
                removeFood={(foodId: number) =>
                  removeFood(MEALS.afternoonSnacks, foodId)
                }
                updateFoodServe={(foodId: number, serve: number) =>
                  updateFoodServe(MEALS.afternoonSnacks, foodId, serve)
                }
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
              <ChartFoodItem
                key={item.id}
                food={item}
                removeFood={(foodId: number) =>
                  removeFood(MEALS.dinner, foodId)
                }
                updateFoodServe={(foodId: number, serve: number) =>
                  updateFoodServe(MEALS.dinner, foodId, serve)
                }
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
              <ChartFoodItem
                key={item.id}
                food={item}
                removeFood={(foodId: number) =>
                  removeFood(MEALS.bedSnacks, foodId)
                }
                updateFoodServe={(foodId: number, serve: number) =>
                  updateFoodServe(MEALS.bedSnacks, foodId, serve)
                }
              />
            ))}
        </AccordionDetails>
      </Accordion>
      <Accordion disabled={!fast || !fast.length}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={MEALS.fastFood + "-diet"}
          id={MEALS.fastFood}
        >
          <Typography>{MEALS.fastFood}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {fast &&
            fast.map((item: FoodDataType) => (
              <ChartFoodItem
                key={item.id}
                food={item}
                removeFood={(foodId: number) =>
                  removeFood(MEALS.fastFood, foodId)
                }
                updateFoodServe={(foodId: number, serve: number) =>
                  updateFoodServe(MEALS.fastFood, foodId, serve)
                }
              />
            ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
}
