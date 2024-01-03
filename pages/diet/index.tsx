import { useState } from "react";
import type { NextPage } from "next";
import {
  Grid,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FoodDataType } from "../../utilities/foods";
import { MEALS } from "../../utilities/constants";
import FoodList from "../../components/dietChart/FoodList";

const DietChart: NextPage = () => {
  const [breakfast, setBreakfast] = useState<FoodDataType[]>([]);
  const [msnacks, setMsnacks] = useState<FoodDataType[]>([]);
  const [asnacks, setAsnacks] = useState<FoodDataType[]>([]);
  const [bsnacks, setBsnacks] = useState<FoodDataType[]>([]);
  const [lunch, setLunch] = useState<FoodDataType[]>([]);
  const [dinner, setDinner] = useState<FoodDataType[]>([]);

  const addFood = (meal: string, foodItem: FoodDataType) => {
    switch (meal) {
      case MEALS.breakFast:
        setBreakfast((prevArray) => [...prevArray, foodItem]);
        break;
      case MEALS.morningSnacks:
        setMsnacks((prevArray) => [...prevArray, foodItem]);
      case MEALS.lunch:
        setLunch((prevArray) => [...prevArray, foodItem]);
        break;
      case MEALS.afternoonSnacks:
        setLunch((prevArray) => [...prevArray, foodItem]);
        break;
      case MEALS.bedSnacks:
        setLunch((prevArray) => [...prevArray, foodItem]);
        break;
      default:
        setDinner((prevArray) => [...prevArray, foodItem]);
    }
  };

  const removeFood = (meal: string, foodId: number) => {
    switch (meal) {
      case MEALS.breakFast:
        setBreakfast((prevArray) =>
          prevArray.filter((obj) => obj.id !== foodId)
        );
        break;
      case MEALS.morningSnacks:
        setMsnacks((prevArray) => prevArray.filter((obj) => obj.id !== foodId));
      case MEALS.lunch:
        setLunch((prevArray) => prevArray.filter((obj) => obj.id !== foodId));
        break;
      case MEALS.afternoonSnacks:
        setAsnacks((prevArray) => prevArray.filter((obj) => obj.id !== foodId));
        break;
      case MEALS.bedSnacks:
        setBsnacks((prevArray) => prevArray.filter((obj) => obj.id !== foodId));
        break;
      default:
        setDinner((prevArray) => prevArray.filter((obj) => obj.id !== foodId));
    }
  };

  return (
    <Container sx={{ py: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <FoodList
            addFood={(meal: string, foodItem: FoodDataType) =>
              addFood(meal, foodItem)
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            component="h6"
            sx={{ margin: "0 auto", padding: 2 }}
          >
            Diet Chart
          </Typography>
          <Accordion>
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
                  />
                ))}
            </AccordionDetails>
          </Accordion>
          <Accordion>
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
                  <Typography key={item.id}>{item.name}</Typography>
                ))}
            </AccordionDetails>
          </Accordion>
          <Accordion>
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
                  <Typography key={item.id}>{item.name}</Typography>
                ))}
            </AccordionDetails>
          </Accordion>
          <Accordion>
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
                  <Typography key={item.id}>{item.name}</Typography>
                ))}
            </AccordionDetails>
          </Accordion>
          <Accordion>
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
                  <Typography key={item.id}>{item.name}</Typography>
                ))}
            </AccordionDetails>
          </Accordion>
          <Accordion>
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
                  <Typography key={item.id}>{item.name}</Typography>
                ))}
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Container>
  );
};
export default DietChart;
