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
import foodData, { FoodDataType } from "../../utilities/foods";
import { MEALS } from "../../utilities/constants";
import FoodList from "../../components/dietChart/FoodList";
import SelectedFood from "../../components/dietChart/SelectedFood";

const DietChart: NextPage = () => {
  console.log(foodData);
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
          <SelectedFood
            breakfast={breakfast}
            asnacks={asnacks}
            lunch={lunch}
            msnacks={msnacks}
            dinner={dinner}
            bsnacks={bsnacks}
            removeFood={(meal: string, foodId: number) =>
              removeFood(meal, foodId)
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default DietChart;
