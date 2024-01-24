import { useState } from "react";
import type { NextPage } from "next";
import { Grid, Container, Divider } from "@mui/material";
import { FoodDataType } from "../../utilities/foods";
import { MEALS } from "../../utilities/constants";
import { isItemExists } from "../../utilities/helper";
import FoodList from "../../components/dietChart/FoodList";
import SelectedFood from "../../components/dietChart/SelectedFood";
import DietCalculation from "../../components/dietChart/Calculation";
import Prescription from "../../components/dietChart/Prescription";
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";

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
        if (!isItemExists(breakfast, foodItem.id)) {
          setBreakfast((prevArray) => [...prevArray, foodItem]);
        }
        break;
      case MEALS.morningSnacks:
        if (!isItemExists(msnacks, foodItem.id)) {
          setMsnacks((prevArray) => [...prevArray, foodItem]);
        }
        break;
      case MEALS.lunch:
        if (!isItemExists(lunch, foodItem.id)) {
          setLunch((prevArray) => [...prevArray, foodItem]);
        }
        break;
      case MEALS.afternoonSnacks:
        if (!isItemExists(asnacks, foodItem.id)) {
          setAsnacks((prevArray) => [...prevArray, foodItem]);
        }
        break;
      case MEALS.bedSnacks:
        if (!isItemExists(bsnacks, foodItem.id)) {
          setBsnacks((prevArray) => [...prevArray, foodItem]);
        }
        break;
      default:
        if (!isItemExists(dinner, foodItem.id)) {
          setDinner((prevArray) => [...prevArray, foodItem]);
        }
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

  const updateFoodServe = (meal: string, foodId: number, serve: number) => {
    switch (meal) {
      case MEALS.breakFast:
        let breakfastUpdate = [...breakfast];
        breakfastUpdate = breakfastUpdate.map((item) => {
          if (item.id === foodId) {
            return { ...item, serve: serve };
          }
          return item;
        });
        setBreakfast(breakfastUpdate);
        break;
      case MEALS.morningSnacks:
        let msnacksUpdate = [...msnacks];
        msnacksUpdate = msnacksUpdate.map((item) => {
          if (item.id === foodId) {
            return { ...item, serve: serve };
          }
          return item;
        });
        setMsnacks(msnacksUpdate);
      case MEALS.lunch:
        let lunchUpdate = [...lunch];
        lunchUpdate = lunchUpdate.map((item) => {
          if (item.id === foodId) {
            return { ...item, serve: serve };
          }
          return item;
        });
        setLunch(lunchUpdate);
        break;
      case MEALS.afternoonSnacks:
        let asnacksUpdate = [...asnacks];
        asnacksUpdate = asnacksUpdate.map((item) => {
          if (item.id === foodId) {
            return { ...item, serve: serve };
          }
          return item;
        });
        setAsnacks(asnacksUpdate);
        break;
      case MEALS.bedSnacks:
        let bsnacksUpdate = [...bsnacks];
        bsnacksUpdate = bsnacksUpdate.map((item) => {
          if (item.id === foodId) {
            return { ...item, serve: serve };
          }
          return item;
        });
        setBsnacks(bsnacksUpdate);
        break;
      default:
        let dinnerUpdate = [...dinner];
        dinnerUpdate = dinnerUpdate.map((item) => {
          if (item.id === foodId) {
            return { ...item, serve: serve };
          }
          return item;
        });
        setDinner(dinnerUpdate);
    }
  };

  return (
    <Container sx={{ py: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <FoodList
            addFood={(meal: string, foodItem: FoodDataType) =>
              addFood(meal, foodItem)
            }
          />
          <Divider light />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
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
            updateFoodServe={(meal: string, foodId: number, serve: number) =>
              updateFoodServe(meal, foodId, serve)
            }
          />
          <PDFDownloadLink document={<Prescription />} fileName="somename.pdf">
            {({ loading }) =>
              loading ? "Loading document..." : "Download now!"
            }
          </PDFDownloadLink>
        </Grid>
        <Grid item xs={12} md={8}>
          <DietCalculation
            breakfast={breakfast}
            asnacks={asnacks}
            lunch={lunch}
            msnacks={msnacks}
            dinner={dinner}
            bsnacks={bsnacks}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default DietChart;
function isExists() {
  throw new Error("Function not implemented.");
}
